const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923300795089";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923300795089";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_30_10_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDg4LFxuICAgICAgICA2MixcbiAgICAgICAgNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM5LFxuICAgICAgICA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDg4LFxuICAgICAgICAxODksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg5LFxuICAgICAgICA4MixcbiAgICAgICAgMTYyLFxuICAgICAgICAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNCxcbiAgICAgICAgODksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgODAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDksXG4gICAgICAgIDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxODksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkzLFxuICAgICAgICA0NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY0LFxuICAgICAgICA4MixcbiAgICAgICAgMjIyLFxuICAgICAgICA5MixcbiAgICAgICAgMTk3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOEtXR1JSVlpTMmdvdkZocHNtZStkVFZKb2JUS0NvVXFmZ2lRTGV0Qkdkbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMDA3OTUwODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY5OUQwQzFFNjg1QzRBM0NBQzQ3RTk3MDA5QTQwMTE2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTgxNjIzM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjVERqZ0dUV1RNeWd2cU5zN05vcXVBXCIsXG4gIFwicGhvbmVJZFwiOiBcImU3Y2JhMDc0LThhNDAtNDVhZi05ZTRiLTNiYzRkMDgxZWNhN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAxMzEsXG4gICAgICAyNTEsXG4gICAgICA0MyxcbiAgICAgIDE3MyxcbiAgICAgIDUyLFxuICAgICAgMTAsXG4gICAgICAxMTEsXG4gICAgICA3MSxcbiAgICAgIDEwNCxcbiAgICAgIDYxLFxuICAgICAgMTIwLFxuICAgICAgMTcsXG4gICAgICAyMCxcbiAgICAgIDgyLFxuICAgICAgMTI0LFxuICAgICAgODMsXG4gICAgICAyNTIsXG4gICAgICAxMjYsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDcxLFxuICAgICAgODksXG4gICAgICAxNzYsXG4gICAgICAxODksXG4gICAgICAyNDUsXG4gICAgICA5LFxuICAgICAgMTk1LFxuICAgICAgOTYsXG4gICAgICAxNjAsXG4gICAgICAyNTUsXG4gICAgICAyMDQsXG4gICAgICAyMzgsXG4gICAgICAyNyxcbiAgICAgIDQ0LFxuICAgICAgMjEzLFxuICAgICAgODQsXG4gICAgICAxNjMsXG4gICAgICAxMTAsXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGODRTU1hMV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzAwNzk1MDg5OjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NTIyNjgyMjAwNDk2Mzo4MEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBbGkg8J+YmPCfmJhcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLcTUvZGtHRUovTjY3Z0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZNbXFxd0RxWWpnMGtnbTJhODgyWDQ2MFM0cml1bUNESFlud1dsWmhFU0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNHA5YTE1b2hyVXAyWGZ2UjVpcGhPajhFWnlISHVVL3BVQ0w1YU5lenIrZkY3YTVnaWs4TUl2VTJzQ0J6dmJxeUhERFQrbXJMbE1aQlNpQS8zWkR5Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicmxGYzRSdVQ1UWFHd3RlNmNSYUlIWE9icUNNTlRRQzZoTWVlUG9PdXA5ZFA4SHVPZGM5UXpTdk9RbWVFOTlMK2F4ajA4TnNNUjhUK1l4OW1oRnVUQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzAwNzk1MDg5OjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTgxNjIyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpocFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmhwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM0c1UzZ3UDhOMFkwU2NZUVlKRGprVjdGWXhTMWN5Y0x5Vm5wSFI4M0ExOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzk5MzE0NjAyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk4MTYyMzI5MTlcIn0iCn0="


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "SARWAR-Ali",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
