let handler = async (m, { conn }) => {
    let wm = global.wm
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    let tio = `
βββγ ππππππ γββ¬£
ββ¬‘ β²οΈπΌπ π©ππ πππ‘ππ’π :  _*${uptime}*_
ββ¬‘ πππ€ππ : _*${global.opts['self'] ? 'Self' : 'publik'}*_
ββ¬‘ π€πππ£πππͺπ£π : _*${Object.keys(global.db.data.users).length}*_ 
ββ¬‘ π« πππ£πππͺπ£π πππ§πππ£π£ππ : _*${Object.entries(global.db.data.users).filter(user => user[1].banned).length}*_
ββββββββββ¬£\n\njika Mode Self
maka bot sedang off atau sedang dalam mode maintenance

jika Mode Public
maka bot sedang online dan bisa di pakai
    `.trim()
conn.send2But(m.chat, tio, wm, 'Speedβ‘', '.speed', 'Backπ', '.menu',m)
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
