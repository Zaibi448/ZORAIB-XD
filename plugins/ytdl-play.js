const ytdl = require('ytdl-core');
const { cmd } = require('../command'); // Adjust path if needed

cmd({
  pattern: 'play',
  alias: ['song', 'play2', 'mp2'],
  react: '🎵',
  desc: 'Download audio from YouTube',
  category: 'download',
  use: '.play <text or YouTube URL>',
  filename: __filename
}, async (conn, m, msg, { from, q, reply }) => {
  try {
    if (!q) return await reply('❌ Please provide a song name or YouTube URL.');

    let videoUrl = '';

    if (ytdl.validateURL(q)) {
      videoUrl = q;
    } else {
      // Search on YouTube using a public search API or library
      // Using simple fetch workaround (optional improvement)
      const ytSearch = require('yt-search');
      const search = await ytSearch(q);
      if (!search.videos.length) return await reply('❌ No results found!');
      videoUrl = search.videos[0].url;
    }

    const info = await ytdl.getInfo(videoUrl);
    const format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });

    if (!format?.url) return await reply('❌ Download link not found!');

    await reply('⏳ Downloading your song...');

    await conn.sendMessage(from, {
      audio: { url: format.url },
      mimetype: 'audio/mpeg',
      fileName: `${info.videoDetails.title}.mp3`
    }, { quoted: msg });

  } catch (err) {
    console.error(err);
    await reply('❌ Error: ' + (err.message || 'Something went wrong!'));
  }
});
