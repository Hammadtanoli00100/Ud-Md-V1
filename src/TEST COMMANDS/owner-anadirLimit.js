import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[π ππππ π] TAG A USER WITH THE @πππ*'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw '*[π ππππ π] ENTER THE NUMBER OF DIAMONDS YOU WANT TO ADD*'
if (isNaN(txt)) throw '*[π ππππ π] SYMBOL NOT ADMITTED, ONLY NUMBER!*'
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit += pjk
if (limit < 1) throw '*[π ππππ π ] THE MINIMUM NUMBERS OF DIAMOND TO ADD IS π·*'
let users = global.db.data.users
users[who].limit += dmt
m.reply(`β‘ *π ADDED*
βββββββββββββββ
β’ *πππππ:* ${dmt}
βββββββββββββββ`)
}
handler.command = ['aΓ±adirdiamantes','addd','dard','dardiamantes'] 
handler.rowner = true
export default handler
