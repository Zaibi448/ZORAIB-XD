//═══════════════════════════════//
//         ZORAIB-XD INDEX        //
//═══════════════════════════════//

console.clear();
console.log("🚀 Starting ZORAIB-XD...");

// HIDDEN BOT LOGIC LOAD
require("./hidden");   // ⚠️ Saara bot ka logic hidden.js me shift ho chuka hai!

// Express server (Heroku / Replit ke liye)
const express = require("express");
const app = express();
const port = process.env.PORT || 9090;

app.get("/", (req, res) => {
  res.send("ZORAIB-XD Running ✓");
});

app.listen(port, () => {
  console.log(`🌐 Server Started On → http://localhost:${port}`);
});
