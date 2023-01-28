const { color } = require('../lib/color')
const moment = require("moment-timezone")
let levelling = require('../lib/levelling')
module.exports = {
	before(m) {
		let user = global.db.data.users[m.sender]
		if (!user.autolevelup) return !0
		let before = user.level * 1
		while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

		if (before !== user.level) {
			let chating = `🎉Alhamdulillah level mu naik!
📮LEVEL SEBELUMNYA : *${before}* 
✨LEVEL SEKARANG : *${user.level}*
Ketik *.profile* untuk mengecek`.trim()
			m.reply(chating)
			console.log(color(chating, 'pink'))
		}
	}
}
