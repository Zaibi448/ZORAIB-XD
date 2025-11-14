const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVBseEMvSy9VYmRmZDNUTWMvMWhqOEl3azEzenAybmMxenA0L3NPTnkybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWRXMElrczYzb2RXaWF3Y0JUaWFITTkzNnlVZ0hQa3BWYi9vcklUZVdFMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySmF2NEJsVTduTkhWaitjd25lVklqb1RoQmFWSEo1MXRXVjhuNWQzQ0YwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTjRpQUNPU00vVEoveWxBTTl3ems4bWVhZnpmYzVYelFhbW0yQkxQWDJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldNeWV2Zk53emxBUW1yalV4dkg3UWZ6R2VKYU9Wc20rTE5sN2o0VTFQWDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks2WXNHTEUrZWxNU3JSaCtqc2JBdk12WVR4Z1UyZFBBRGZyVHdpbStpeGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia09RYmpJMklhNmwydmNaVzdORlNlMkRYNGFQZlkrZkJtdFIwYXZjU0wxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVdwdGc0a2diVXljQkdoVjBkVHRwZWl6N1VRN0p0ckkwazhyYTB6eUtXUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ild3aE1EdTcwVitUc0w0TEx5MGlac3ZlNVJ3VjR0RDI3NERrS2V4YkY4dndFQXY5U2FCem9NUnZQN3MzU3Q4NDZtaEkrMTA5T2RUb2hjaUlLZUNNM2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODQsImFkdlNlY3JldEtleSI6ImhQeE5uVnVEYTgxdVNteGl3eithUTBhd2NwTkRDMWkrMUV5SUlpZlZ6a2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlAteUEtZmJRVEVtOUpHVHVWRURuYWciLCJwaG9uZUlkIjoiNDNhYmE3MjktYjYzYS00N2NjLWFjODEtNTZlNTVmYWVkYTljIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InIzMFgwbXAvNDh4QUZHUVFRbzJtUU9BcXI4QT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGTlFBcCtQMk5vMS9LRkN5WGhxVUdRQWVLenc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTEJRQTNTTUsiLCJtZSI6eyJpZCI6IjkyMzQ3OTk4ODI4Nzo2NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLGmMmR1Y/VsMqNw63JvsOtIiwibGlkIjoiMjczMzA2NjAzMjQ1ODAxOjY2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnpqMCtVRUVJS08zTWdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQU9WbjhXZ29DdXVXeE1xN20rcnB3RXM5aWRkUDlIV0Evb3FBdUgybWtGcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVVcrbXdZdWhENFBvWlRSTmZqQmRLK0k0T0tXMW9xTlllL1kxOFI5UWtPVll0dWthZnFjQ20yM3lwbHpobm9PbVR1U0tlakxEdkpJSXpvWUFqeU54RHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImVmb3AwY1JWUExtK0Y2UC9LTDExVWdrS0JrR0VYdW5leEExK0luWHJSRDB1b0NzS090cUhuc2doUGdhMW8vUHZiQi92YkQyOUdTWjR4bzFXSEFpMGhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDc5OTg4Mjg3OjY2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFEbFovRm9LQXJybHNUS3U1dnE2Y0JMUFluWFQvUjFnUDZLZ0xoOXBwQmIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQWdTIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MzExNjgxNiwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBZ0UifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ZORAIB-XD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/yrpxq6.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ZORAIB-XD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "ZORAIB-XD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ZORAIB-XD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 ZORAIB-XD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yrpxq6.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive *ZORAIB-XD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923357304126",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
