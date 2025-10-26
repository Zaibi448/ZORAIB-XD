const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ZORAIB-XD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUhHc3pqcms3cEhDVUl3YlFqNmpKVEpsbHhtdjBSTDZ6QURsZ1cyWFZWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHRURGt1NWRPM0svWVhkNTJLVlhwSW9WeXU4YmE4dkpSSVNFSytMZ1ZSYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDR252ZzRBZXZ3ZG91dVUyQ3Zmc0RQZTk4VWFEblpXNEUxV0U2ejhHUlZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwK1c4ZnI4amZPWEtZTnFLaSs4dVNwZk5rZUxEbUVNQzNHUWIzUVp1SlQ0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNQaGdwZ1pqblBhL1VtTDZpdVgxRkExdFZHNWN2NDdNcDBDRGVnOURLV1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlVT2xVSTMxYkNoK2dvTXRCR3V6QjF4SkNZaUFzeFQzVVFXcDZ6ZjVOa1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUVWbm5IWkJmekpXUmo5eEE3SXBEajAwTlV3T2ZPNHBrNzRPeWY3bHEwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFp0ZTNaVlZHWSthUERSV003dllncURpVmVhRDFzWHkvQldLUHBjT05oUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImMxTHlYV1o1QmtHWVM2QmdEMW81STFOQS9kUUhuNitUWTREenorTEdnNW9tZ2FKN255ZGIzem84ejhqVEs1dEtpd1pzenRmNmxQR0cxR3Q0VWNoMEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI3LCJhZHZTZWNyZXRLZXkiOiJIZHZ6b3RoSHk3NHppNUlNRlFNRXBXMTFBQWhsblI3TUtDUGVpL2xmbTZZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJySTdUQ2V5NlFNYXNFdzNNeFNLM0VnIiwicGhvbmVJZCI6ImM0Yzc0MDZmLWE1MTUtNDA1Zi1hYzdlLTdmMGQyMTQzN2JhZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqL09QTVZHdFFFSG1oOVV6Z202RVY1d3dCOVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmtVMHBmN3J3emNiNUsvUUw1YjhRcm9iUHBjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRFVlNQQUNFIiwibWUiOnsiaWQiOiI5MjM0Nzk5ODgyODc6MTZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiemtoYXNzYW40NDgiLCJsaWQiOiIyNzMzMDY2MDMyNDU4MDE6MTZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMVGowK1VFRU9udDljY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBT1ZuOFdnb0N1dVd4TXE3bStycHdFczlpZGRQOUhXQS9vcUF1SDJta0ZzPSIsImFjY291bnRTaWduYXR1cmUiOiJxdjdMaGl1RFJKeTgrUHZJWGhubzFJS1VoU1FieHFvSjM5U3RNQVZqbmhMNWNJa3AwcEVRVnMvNE9oOGUwdVhKRG1MenQ0cVd5emMzV2JJZ2NpakdCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoickVPQ1hmNUlXdG5sV3VlZW1xMFhxUWxsQWE0V0p5MTR1d0p1Z0g3YlAydytTcGxieVNiT2wrSnQvUlI4SHpvUkc3UXh2RmZrbXQ1WmtCc3dhUEp6Q3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0Nzk5ODgyODc6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUURsWi9Gb0tBcnJsc1RLdTV2cTZjQkxQWW5YVC9SMWdQNktnTGg5cHBCYiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYxNDQxNTE1fQ==",
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
