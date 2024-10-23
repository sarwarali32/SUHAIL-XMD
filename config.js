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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_09_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDkzLFxuICAgICAgICA5MCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyLFxuICAgICAgICA3MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3LFxuICAgICAgICA0LFxuICAgICAgICA0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDgzLFxuICAgICAgICA2MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMixcbiAgICAgICAgNCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NixcbiAgICAgICAgNTIsXG4gICAgICAgIDY0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM0LFxuICAgICAgICA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwLFxuICAgICAgICAzNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzksXG4gICAgICAgIDkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICA5OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDM2LFxuICAgICAgICAzMixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDk1LFxuICAgICAgICA1OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODYsXG4gICAgICAgIDcwLFxuICAgICAgICA4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWVJRL1JiNEZNUURyL0RwcTBzWk9Rbm1LZTZHZWNLTmVIWTF0bGRPWFY1UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibXZ4R19FUnBSSS0xRDVMUU0yS29xZ1wiLFxuICBcInBob25lSWRcIjogXCIxZmIyZTEwMC05OTAyLTQ0MGUtYmI5ZS1iMzE5NGU4MmU1YjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgMTI3LFxuICAgICAgMTM3LFxuICAgICAgMTgxLFxuICAgICAgMjE1LFxuICAgICAgMzQsXG4gICAgICAyNTIsXG4gICAgICAyNDUsXG4gICAgICAxMjAsXG4gICAgICAyNDcsXG4gICAgICAyMjIsXG4gICAgICAxMjQsXG4gICAgICAyNDQsXG4gICAgICA5NyxcbiAgICAgIDgzLFxuICAgICAgMTMxLFxuICAgICAgMTU4LFxuICAgICAgMjMwLFxuICAgICAgNjMsXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgMTMyLFxuICAgICAgNTksXG4gICAgICAxNzcsXG4gICAgICAyMTEsXG4gICAgICA0NixcbiAgICAgIDE4LFxuICAgICAgMTc3LFxuICAgICAgNTUsXG4gICAgICAyMTAsXG4gICAgICA2OCxcbiAgICAgIDQsXG4gICAgICAyMDcsXG4gICAgICA0NyxcbiAgICAgIDk2LFxuICAgICAgODAsXG4gICAgICAxNTcsXG4gICAgICAzNixcbiAgICAgIDExOCxcbiAgICAgIDE4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzRzFNV1lIOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzAwNzk1MDg5Ojc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NTIyNjgyMjAwNDk2Mzo3N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLaTUvZGtHRU1HLzVMZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZNbXFxd0RxWWpnMGtnbTJhODgyWDQ2MFM0cml1bUNESFlud1dsWmhFU0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYzNOOC8ya1BkalI4UHVVaS82NHVUN0dzK2pQTFQzbi9Wa202OS9WQ1hQTWdCc2FOTzZKekgxMjFlNEdyVUpkNkZ3SWlvTEo1YWF6a1daUUkvZXpyQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwielEvaDVqTmxyUkwwOUJVQnlFajF5aExoaW4zWkFkZWg3b3VmMENIaTVnV0QzWjZiL3dLNTlndEtnZW9vcnRuSjlqOEhwMjNxaVVqd3UzV2dlOXJsanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzAwNzk1MDg5Ojc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTY5OTc4MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
