const config = require('../config') const { cmd } = require('../command'); const path = require('path'); const fs = require('fs');

cmd({ pattern: "menu2", alias: ["menu"], use: '.menu', desc: "Show simple menu", category: "menu", react: "📜", filename: __filename }, async (conn, mek, m, { from, reply }) => { try { let dec = ╭━━〔 🚀 *${config.BOT_NAME}* 〕━━┈⊷ ┃◈╭─────────────────·๏ ┃◈┃• 📜 menu ┃◈┃• 🏓 ping ┃◈╰─────────────────┈⊷ ╰━━━━━━━━━━━━━━━━━━━┈⊷;

await conn.sendMessage(
        from,
        {
            image: { url: config.MENU_IMAGE_URL || 'https://bumpy-coral-egnhazoogd.edgeone.app/20251024_200812.jpg' },
            caption: dec
        },
        { quoted: mek }
    );

    const audioPath = path.join(__dirname, '../assets/menu.m4a');
    await conn.sendMessage(from, {
        audio: fs.readFileSync(audioPath),
        mimetype: 'audio/mp4',
        ptt: true,
    }, { quoted: mek });

} catch (e) {
    console.log(e);
    reply(`❌ Error: ${e}`);
}

});
