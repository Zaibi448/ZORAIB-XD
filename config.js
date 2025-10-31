const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ZORAIB-XD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUppUmtqWDliYmN1Ym5aQUxGeDUwUlVNZUFzcVVrKzNKREZuR2MvUXhuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZkJMU1A2YnZXbTNYR0JkSE9SZ1JDRldxRWE2NHpEM0Fra1pNRm5BYlVubz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1R3ZBZmZhRmQ1NENORVQyNVNXRmhJdWtwODN2Q1BtMEFwRmNETVJQdEZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkcHhuVGduY2NHODdUV1RLZnA0YnBpODNPdVBabXJPSkxoMFBqK2pmVmxnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlHUC9LNVB2RFZMWUpwdnJrM0pqSUluK1JHWTFWeGxVaU9nRDFwdFJsVjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imxwb3BoL0NPQWJuTVcrQVoxL0RaQWVmaGg3TkdLb085QTh2YTFDckR6QVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUZPd0NKaGJxVXR0d2o0RnI4Yy9sdEw0blltRC8vSzJQYnBSZkU4RnVucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3JlTlRoNlE4ZjdsVG13VlVkcFdNb2RLelhhUEFLZWtmQUNCUUpGNE9nYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikg5S0gzWnpNRStlU01XL0szaDNQdzJNWEF0VndsMGxaemlFU0xkU3N3a0pCaEVDeUVKTHFzY3V5dHBwSm1xQ01ncTd4cWJQN0M3UTR5eWp4d3VsaENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc2LCJhZHZTZWNyZXRLZXkiOiJxeDBwVzFvREJySmZqQjBxZE1PdFBMbWFvZzlxb3Evd1NyQ3RySzFLeEgwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ3OTk4ODI4N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUY1NTdGMjQ1NDlENUZGNjQwOTk2QkZCMkI4MTYwMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxOTMxNjU0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpZDVRc1FlX1J2LXZhTUxKdGlkVEVRIiwicGhvbmVJZCI6IjNmM2U1NWY0LTI3ZWYtNGU5ZS1hNGUzLTNmMjliNjBjZmM5ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4K0FyQzFvZWN6TUN4OVYvSnRoSmlvZlpTemM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVngydjB5b1cwUVZnSDdiZ3dpczRCNjZub2hJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRFVlNQQUNFIiwibWUiOnsiaWQiOiI5MjM0Nzk5ODgyODc6MjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiemtoYXNzYW40NDgiLCJsaWQiOiIyNzMzMDY2MDMyNDU4MDE6MjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMemowK1VFRVAvaWs4Z0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBT1ZuOFdnb0N1dVd4TXE3bStycHdFczlpZGRQOUhXQS9vcUF1SDJta0ZzPSIsImFjY291bnRTaWduYXR1cmUiOiIwQnVnTkxEZ3ArMTNHRVpTM0QxeWRLWndNeHRld0Z0ZEx4SFp0UE8rRUhQT3RaRWxUWXo5VERrS0tKVmtzaEdDcnk4RmxwOVQwMVQxenlEUGE0WTlEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiakZwY1M2QW02M296a1RKSFd2SE5rd3RUaXFrNmVuNjZvOGRuY05aaDZFOHordHN4cEEvOVFpV0NiNzdlUklLN3h3Rm9XdllZVWNHNVphTXltU0wwQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0Nzk5ODgyODc6MjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUURsWi9Gb0tBcnJsc1RLdTV2cTZjQkxQWW5YVC9SMWdQNktnTGg5cHBCYiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYxOTMxNjQ5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJLTiJ9",
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
