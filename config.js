const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://klwlprcs:<Precious123>@cluster0.ztqtr8l.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348138902126";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_37_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDg3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNixcbiAgICAgICAgODgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxLFxuICAgICAgICAzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjU0LFxuICAgICAgICA1NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU3LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODQsXG4gICAgICAgIDg3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY1LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYzLFxuICAgICAgICA5MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc5LFxuICAgICAgICAzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NixcbiAgICAgICAgODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYxLFxuICAgICAgICA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZWxJUlJNY211NloxSjMyMkF5dWJYWW95bnVycUo2UlhQaUFiZlFvNlAvMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicEVtTzJYdXNTVzZHaFI2MklwUnNlQVwiLFxuICBcInBob25lSWRcIjogXCIxOWM5YzAyYy04NWU5LTQzNWUtOWUwZC1lNzkxNjgxZDQ0MThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODYsXG4gICAgICAxNjksXG4gICAgICAyNTUsXG4gICAgICA1OCxcbiAgICAgIDEwNyxcbiAgICAgIDkyLFxuICAgICAgNTMsXG4gICAgICAyNyxcbiAgICAgIDQ4LFxuICAgICAgMjQ2LFxuICAgICAgMTczLFxuICAgICAgODksXG4gICAgICA1MixcbiAgICAgIDY1LFxuICAgICAgNTcsXG4gICAgICAxNjcsXG4gICAgICAxNDQsXG4gICAgICA1OCxcbiAgICAgIDEzNCxcbiAgICAgIDE5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTksXG4gICAgICA3OCxcbiAgICAgIDEsXG4gICAgICAyMTgsXG4gICAgICAyMTIsXG4gICAgICA5NSxcbiAgICAgIDI0MyxcbiAgICAgIDEwMCxcbiAgICAgIDEyMCxcbiAgICAgIDExNSxcbiAgICAgIDExMCxcbiAgICAgIDEwMCxcbiAgICAgIDQzLFxuICAgICAgMTgsXG4gICAgICA2MyxcbiAgICAgIDE3MCxcbiAgICAgIDQsXG4gICAgICAxMzUsXG4gICAgICAxMzksXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFQUQ5UVlXR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzODkwMjEyNjo2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY0OTczNzEyNDEyNzg3OjY0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lUeXI1VURFTXZ3bzdrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYjV1MnJwK293RTV2aTVqL1lqdnFoRDNUQlpOdUI2Z0ZHN2ZnQUV5MGJRTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxQ0doRGl3QlN3M0c1QVZUdGIzalRpYXdvL2Z1OGYyOFhBZWgzdzFZM1JHdktSNnFuUTA4aVRHU1lJZHd2TXJqV2JsUGlaYnR5bnZwVUl4TFRGcUtEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0UmQrS1p4cWdkWUFRRG0xL012TDJPQ2JVbXpqWkdsYTF1b1JSUm1IRmIybm1hU0FlUXVjdjZ3QUhseEpIbVV2NWU2VTZEU2Y5L2wvUkNYVDB1eXlqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM4OTAyMTI2OjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA3MzgyNTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCT3RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJPdC5qc29uIjogIntcImtleURhdGFcIjpcIkZwZkFGSWxQbVQxcVdkUHhMRFBJWWg3V2lHVzZFd3BFdHhDdEltdUlPWGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODUwMTMxMjAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMwNzE5MTA0NDY2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Presh",
  packname: process.env.PACK_NAME || "Presh",
  botname : process.env.BOT_NAME  || "Huntxr",
  ownername:process.env.OWNER_NAME|| "Presh",


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
