let handler = async (m, { conn }) => {
    let wm = global.wm
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    let tio = `
┏━━〔 𝐒𝐓𝐀𝐓𝐔𝐒 〕━⬣
┃⬡ ⏲️𝘼𝙠𝙩𝙞𝙛 𝙎𝙚𝙡𝙖𝙢𝙖 :  _*${uptime}*_
┃⬡ 💌𝙈𝙤𝙙𝙚 : _*${global.opts['self'] ? 'Self' : 'publik'}*_
┃⬡ 👤𝙋𝙚𝙣𝙜𝙜𝙪𝙣𝙖 : _*${Object.keys(global.db.data.users).length}*_ 
┃⬡ 🚫 𝙋𝙚𝙣𝙜𝙜𝙪𝙣𝙖 𝙏𝙚𝙧𝙗𝙖𝙣𝙣𝙚𝙙 : _*${Object.entries(global.db.data.users).filter(user => user[1].banned).length}*_
┗━━━━━━━━⬣\n\njika Mode Self
maka bot sedang off atau sedang dalam mode maintenance

jika Mode Public
maka bot sedang online dan bisa di pakai
    `.trim()
conn.send2But(m.chat, tio, wm, 'Speed⚡', '.speed', 'Back📄', '.menu',m)
conn.reply(tio)
}
handler.help = ['mode']
handler.tags = ['main']
handler.customPrefix = /^(mode)$/i 
handler.command = new RegExp
handler.limit = false

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
