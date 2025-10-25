const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ZORAIB-XD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0h4bS8zWTJCWm1IUUxMejZadnZTNTNiZ1A2RGdjbjJMSkxIM1dQc2lsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUdLS1I4dFNNQXA2T1haUFhlUXU1Y0JVSWlqUzdkTVpFemFjNEdSamtBUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQkxtSitucW41YmIrZ0ZyT2c4a0Fma0VlcyttSkxPcDlqaGFscGpheUdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqckFYOVhLTXBlc2dJYUphYVBZcU9kaGROaGRHbGZMMFN0TXNBa2FiQ24wPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJQUUpIUVJ3N25QdEhwZURzNGFtYlkycllaZCs2VWF0SzJtcWV5aEdTRWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndSVDNUNVUyckVYUkFDYTB4K3FYUDlzdVUrY1JDMnBvWm51OG12VzUxUk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME1yQUZuOXF2bHJlZkt5VkduVjJzdDJmdW0zUSsyc3Nsczg2OFEyN0QxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUpaV0haejNXYnM4OENZZmpLRmRZeVJacmRVZ0I1dTI5NkJtbDhGcGV5Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNGdGE0RXJXcWI0c1hnQXY0SjB1MC9MVHVycXZPZEdDUkVFNXJSbWZNVWFORGNmWVpSY0JWdGI5OGtySHNFOCtYZ1JTS2U4cGIvWjNqdkZMOGhPbERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6ImZlcWhKOFRGT05Hb3Z3SGJCVEUxUVQ0Z2E0Ykp1bSswNk9rbkNrVHJwYnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTcyNTk5ODAyMjM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRUZGQjY5NTE1QTI2QUIyQ0Y0Q0EwNkNDMjJDRkUzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjEzODUzOTN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk3MjU5OTgwMjIzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0Q5OUU5NkI3REUyMDgzNzMzMjQ1NUYzOEM1RDdEMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxMzg1MzkzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJX1NoclJOYVRPU240dFZsU3VBTHNRIiwicGhvbmVJZCI6Ijg1MTkwYTg5LTJhYjQtNDk1ZS05MDdmLWFlZGFiYzk5NzMxZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIeVNvcWZMdk1ZeDVWQnVwUXRKR3JwZmVVdHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienZZUWNZZWtuRzd0OU9EaGpoRjhUVWxBUXpJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRFVlNQQUNFIiwibWUiOnsiaWQiOiI5NzI1OTk4MDIyMzg6MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEzMTI1MDUwOTYzNTgzMToyQGxpZCIsIm5hbWUiOiLihKjDuNGP4oiA4biv4pmtWNC94oiA77mp77mp4oiAzrcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BLMnRvNEVFS3EzOHNjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNKa2U2WEQ0SWJXTzhJOUUzRlR0eWxQWmt6ajc5dEE3RFk5Q0g3WVh6RjA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlU5MlpWM1BoMlRJZ0grTXRLaDFCUlpmR0J2Y1lUbmlMaGc2ajcxWFJGWi8wejczY24xN3RtTEd1clVONnBZNmxNdVNaRjkvRkFCdnFyNW1Ka3B3c0J3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0UFFtaVorMm1Fa3AzWisra0JyQlM1OEVOQTZIcXNaaXdoTHF5Mlg0TE42V085R2VTUEhaNDZlZ2ZxSE5CQmJTdDRQeGhuQ2ZPTGlWMEZ0Z1dEVGlBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk3MjU5OTgwMjIzODoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVpWkh1bHcrQ0cxanZDUFJOeFU3Y3BUMlpNNCsvYlFPdzJQUWgrMkY4eGQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTM4NTM4OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNdHIifQ==",
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
