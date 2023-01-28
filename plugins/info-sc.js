let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
✨Hai ${ye} Bot Ini Menggunakan Script🔖 :\nhttps://github.com/LynnXzy/RTXZY-MD\n\nSc Ori🔖:\nhttps://github.com/BOTCAHX/RTXZY-MD
`
conn.sendBut(m.chat, esce, wm3, 'Thanks', 'thanks', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
