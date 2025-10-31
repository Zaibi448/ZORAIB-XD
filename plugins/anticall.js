/**
 * 🔰 AntiCall System for Baileys WhatsApp Bot
 * 👨‍💻 Developed by ChatGPT (GPT-5)
 * 📦 Features:
 *   ✅ Auto decline or block incoming WhatsApp calls
 *   ✅ SQLite + Sequelize database for persistent settings
 */

const { Sequelize, DataTypes } = require("sequelize");
const path = require("path");

// ========== 📦 Database Setup ==========
const DATABASE = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "anticall.db"),
    logging: false
});

// ========== 🧩 Define Model ==========
const AntiCallDB = DATABASE.define("anticall", {
    status: {
        type: DataTypes.ENUM("yes", "no"),
        defaultValue: "yes", // AntiCall ON by default
        allowNull: false
    },
    action: {
        type: DataTypes.ENUM("block", "decline"),
        defaultValue: "decline", // Default: decline calls
        allowNull: false
    }
}, { timestamps: false });

// ========== ⚙️ Initialize DB ==========
async function initAntiCallDB() {
    try {
        await DATABASE.sync();
        console.log("✅ AntiCall database ready!");
    } catch (err) {
        console.error("❌ Error initializing AntiCallDB:", err);
    }
}

// ========== 🔍 Fetch Settings ==========
async function getAntiCallSettings() {
    const [settings] = await AntiCallDB.findOrCreate({
        where: {},
        defaults: {}
    });
    return settings;
}

// ========== ✏️ Update Settings (Optional Command Use) ==========
async function updateAntiCallSettings(updates) {
    const settings = await getAntiCallSettings();
    await settings.update(updates);
    return settings;
}

// ========== 📞 AntiCall Handler ==========
async function antiCallHandler(sock) {
    await initAntiCallDB();

    sock.ev.on("call", async (calls) => {
        const settings = await getAntiCallSettings();
        if (settings.status === "no") return; // feature disabled

        for (const call of calls) {
            if (call.status === "offer") {
                const caller = call.from;
                const action = settings.action;

                try {
                    if (action === "decline") {
                        await sock.rejectCall(call.id, call.from);
                        console.log(`📞 Call from ${caller} declined automatically.`);
                    } else if (action === "block") {
                        await sock.updateBlockStatus(caller, "block");
                        console.log(`🚫 ${caller} blocked for calling.`);
                    }

                    // Optional: notify caller
                    await sock.sendMessage(caller, {
                        text: `⚠️ Please do not call this number on WhatsApp.\nYour call has been *${action}ed* automatically.`
                    });

                } catch (err) {
                    console.error("❌ Error handling call:", err);
                }
            }
        }
    });
}

// ========== 📤 Export Plugin ==========
module.exports = {
    antiCallHandler,
    updateAntiCallSettings,
    getAntiCallSettings
};
