const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ZORAIB-XD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK09qT3JlMHY3RlNENHhsbU5jQXkya24xdFV0Qi9oVnZZN2tsVENGOEkxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWlLRmVEc3JCajNxZW5DY1lVcUVxZW4rTnJobW5qb3VhdG1xazVRQnp5TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SWZ3VVlOSTVDbU1iOEwzRldKSzRTa3hzaDQ4OGdvc1czTUxmUzBlOVhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnd0hXTDh6VEZmK2hIOFZXWnUyRllYVWRPWml1Vmg5MjNESFFmRlhDOUIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFEenRueHhXMVhXU05OcUEwUUM5WnZ1cXYyanQ1SnN5VE9XOUpPdzI3RVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZ4S0lzdW5acFJobXBqamZLWDJuNE05YnNiSW5ON1RQRGlOSVRVK3BYWFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJzSHNYQmFXWUEyWDVYRW5OZW5nclk3VmMvUVNjTk5DY0ZDS3Q0ZzBFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmhoYzJ0MmNGeDBxMkNaZUdkTm04ZVdlR1NBSWZERjlBMnJWQ3pwSkZHbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd1b3RuUVhwOVptVlZwMmUyR1hyTHBoWlFDdTk2QWRNbzNKUGRiYkJmRXMwQXdFR1JyTXlkMU12QjJzVXNCeE5RYXRWQ2lFNzlWZC9hdEF3VDRMWEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEzLCJhZHZTZWNyZXRLZXkiOiJvalNTV2hCN0t2Q2VLVGtSN3ltOXprNHMzWkQ2MlFUbHkxSlAzVmh3U3ZBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqdHpzakpiX1NLV2xMZFhnQkNsdzNBIiwicGhvbmVJZCI6IjkzZDk3NGQwLTg4YWMtNGNkMS04Y2RiLTU4MTk5NDU1MjBiMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTGsrTXA1UlIxTUdmMHdYTEtTKzN3Q2NzcVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjkrak9waDVKUnQvTEtlT2lUcjIrN0dwMDhjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRFVlNQQUNFIiwibWUiOnsiaWQiOiI5MjM0Nzk5ODgyODc6NThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoixpjJkdWP1bDKjcOtyb7DrSIsImxpZCI6IjI3MzMwNjYwMzI0NTgwMTo1OEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05iajArVUVFUFR4MnNnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkFPVm44V2dvQ3V1V3hNcTdtK3Jwd0VzOWlkZFA5SFdBL29xQXVIMm1rRnM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjYrTUp5QkxtMDg3ZUcxYkxPelROeW9RcklTR2kvNlFPbXNLcjF3bHJ2S2FqeTlEdUpKNnp5R1ErZUtXUnpPVzhVWkVsakxpUFc0bW9KclFweDkrMUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTRXhPNHdFZHFSQ0FiLzd5WEFacmUwcTlIekdBNWtFQjJTSU5GdGNLMVdpYmdFZUM5eU1ma2FLY2VDa216dFZjRDBuRitYckJWbUQrUUpTYVZIRUJCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ3OTk4ODI4Nzo1OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRRGxaL0ZvS0FycmxzVEt1NXZxNmNCTFBZblhUL1IxZ1A2S2dMaDlwcEJiIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0FnUyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjMwOTY4MjR9",
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
