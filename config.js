const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ZORAIB-XD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUpGcW1yRmw0Zi96MFBORTZXSTFKMFlBOWZnb2t3MjJmYzIwODU2M00wRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3JIbDJTSE9veTlkVFJtTjFidXppQ05obnU1ejNjQnpXK0tvcE4xd1BDcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNR2NhQVF4SDYrL1dTR2ZqRnBKVmRWaFhuZzBPck02M3VVOVFzK3BJSms0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUDhkbU03WDR5czhBUktMUzR3bDJDNVZRa3NCeVJPcFdjZStBQVplOUJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCN2x5akdYYk4vWExXOWM2Ykg1OVJ0aTFaVGppYjRyZ1BvZmtLalpabk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1JMGpjdVJ4NWNJaG9UM2Q2SGVEaGdPekwwaEVXTDdsZzI3QVZla2prbDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUkveHc1YytmUnhOd0pvZW9ZK2l6eHR1MEJvQysrZkZhY1UrN2g2VHJGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3dXc0RzNmlTT3RkN01hOU5PU2JwckIySUNEbnhKMGdxVlpGdjlScXptYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks1Zm56YTNSVUE4TDMzdWkxVHNuejhuYklFOWJ0MEs3b0R4RTM4SGlMNTNzOTEyV1E2NlZ6dlI4QUpEdmRHcE51dzJibWJHblhUZkg3NnBVOGVVK2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6IituR2h5c0U1M0U2YXZHVG4yUTFWbTVxMWs1bG9veC9rVkQ5dDR5RVZweGs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDc5OTg4Mjg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1QzU0NUNGODBDMUEyNjY0QTVERTI2MDAzN0Y3MDkwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjE0NDMzMjd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ3OTk4ODI4N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUVCM0IzMjcxRUQyNjREOTkyMDJFN0Q5QThBRERGRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxNDQzMzI4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKMDB4R0NxV1J3aVpZVlJrNXFsVW1RIiwicGhvbmVJZCI6IjEwZmFmYjg2LTQ0MDUtNDQ1MC05MTc0LThjNzIyYzA3NTAzOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSzNBU012WkdnNG52NGtlNm93SkY3dEFCV2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1pWcmh3R0s2ZVFkRjJpV0o5NmI2TjZ1TVhBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRFVlNQQUNFIiwibWUiOnsiaWQiOiI5MjM0Nzk5ODgyODc6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiemtoYXNzYW40NDgiLCJsaWQiOiIyNzMzMDY2MDMyNDU4MDE6MTlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMZmowK1VFRVBuNzljY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBT1ZuOFdnb0N1dVd4TXE3bStycHdFczlpZGRQOUhXQS9vcUF1SDJta0ZzPSIsImFjY291bnRTaWduYXR1cmUiOiJ0ZkVhanhZNlR0L0FURmNLd0JaaVZ2U2Y0b1h2aFVMRTBDZFh1amE1L0Y3MVMxcmR5MXFGbzlZeldIUzZueU5tWkhzV296OUpKNnpZaG15SDFHbVJEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMWxpaWpjMnEvY2FPOHEvc3VEYjhBUVM2ejIwZFRlSDZBMTE2RXNLRjgwbEFiMzJKaThwdlp0NXozQ29yRGhXQkpEMHh4WVZ0NDlxQVU2WGJ0OXFSamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0Nzk5ODgyODc6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUURsWi9Gb0tBcnJsc1RLdTV2cTZjQkxQWW5YVC9SMWdQNktnTGg5cHBCYiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYxNDQzMzI1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdERSJ9",
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
