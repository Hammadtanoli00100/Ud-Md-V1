let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*๐ผ๐ด๐ฝ๐๐ฐ๐น๐ด:* ${pesan}`
let teks = `*โบDark Devil - Bot Incโบ*\n\nโ ${oi}\n\nโ *๐ด๐๐ธ๐๐๐ด๐๐ฐ๐:*\n`
for (let mem of participants) {
teks += `โฃโฅ @${mem.id.split('@')[0]}\n`}
teks += `*โ* ๐๐-๐๐ฟ-๐1 ๐ฝ๐ฎ ๐ฟ๐๐ง๐ ๐ฟ๐๐ซ๐๐ก ยฉ 2023 | ud-md-v1 WhatsApp Bot :*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciรณn)$/i
handler.admin = true
handler.group = true
export default handler
