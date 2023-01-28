let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'donasi'
let digi = global.digi
let maxis = global.maxis
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
├ Digi : ${digi}
├ Maxis : ${maxis}
└────
Berapapun donasi kalian akan sangat berarti 👍

Terimakasih =D

Group bot 1✨
https://chat.whatsapp.com/EheAWPrQMhV25xW0N7l7WD

Group bot 2✨
https://chat.whatsapp.com/GzDQlgoUamS5Ok4EOcYRRB

Contact person Owner👤:
wa.me/${numberowner} (Owner)

*donasi via follow ig juga boleh*`
  conn.sendButtonImg(m.chat, fla + teks, anu, instagram, 'Thanks', 'thanks', m) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
