/**
 * ✅ WhatsApp Bot Command: .play
 * Function: Download & send YouTube audio (MP3)
 * Updated: 2025 | Compatible with @distube/ytdl-core & yt-dlp
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const ytdl = require('@distube/ytdl-core');
const ytSearch = require('yt-search');
const { cmd } = require('../command'); // Adjust the path if needed

cmd({
  pattern: 'play',
  alias: ['song', 'music', 'ytmp3'],
  react: '🎵',
  desc: 'Download & play audio from YouTube (updated 2025)',
  category: 'download',
  use: '.play <song name or YouTube URL>',
  filename: __filename
}, async (conn, m, msg, { from, q, reply }) => {
  try {
    if (!q) return await reply('❌ Please provide a song name or YouTube URL.');

    await reply('🔍 Searching on YouTube...');

    let videoUrl;

    // 🔹 Step 1: Get YouTube URL (search or direct)
    if (ytdl.validateURL(q)) {
      videoUrl = q;
    } else {
      const search = await ytSearch(q);
      if (!search.videos.length) return await reply('❌ No results found!');
      videoUrl = search.videos[0].url;
    }

    // 🔹 Step 2: Download info
    const info = await ytdl.getInfo(videoUrl);
    const title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
    const filePath = path.join(__dirname, `${title}.mp3`);

    await reply(`🎧 *${info.videoDetails.title}*\n⏳ Downloading your song...`);

    // 🔹 Step 3: Try downloading audio via @distube/ytdl-core
    const stream = ytdl(videoUrl, { filter: 'audioonly', quality: 'highestaudio' });
    const writeStream = fs.createWriteStream(filePath);
    stream.pipe(writeStream);

    await new Promise((resolve, reject) => {
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
      stream.on('error', reject);
    });

    // 🔹 Step 4: Send the audio to WhatsApp
    await conn.sendMessage(from, {
      audio: fs.readFileSync(filePath),
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`
    }, { quoted: msg });

    fs.unlinkSync(filePath);

  } catch (err) {
    console.error('⚠️ ytdl-core failed, trying yt-dlp fallback...', err.message);

    // 🔹 Step 5: yt-dlp fallback (if available)
    try {
      const tempFile = path.join(__dirname, `yt_${Date.now()}.mp3`);
      const command = `yt-dlp -x --audio-format mp3 -o "${tempFile}" "${q}"`;

      await reply('⚙️ Trying fallback method (yt-dlp)...');

      await new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
          if (error) reject(error);
          else resolve(stdout);
        });
      });

      await conn.sendMessage(from, {
        audio: fs.readFileSync(tempFile),
        mimetype: 'audio/mpeg',
        fileName: 'song.mp3'
      }, { quoted: msg });

      fs.unlinkSync(tempFile);

    } catch (fallbackErr) {
      console.error('yt-dlp fallback failed:', fallbackErr);
      await reply('❌ Error: Unable to download audio. Please try another song.');
    }
  }
});
