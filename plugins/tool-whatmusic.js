import fs from 'fs'
import acrcloud from 'acrcloud'
let acr = new acrcloud({
host: 'identify-eu-west-1.acrcloud.com',
access_key: 'c33c767d683f78bd17d4bd4991955d81',
access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})

let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/audio|video/.test(mime)) {
let media = await q.download()
let ext = mime.split('/')[1]
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`))
let { code, msg } = res.status
if (code !== 0) throw msg
let { title, artists, album, genres, release_date } = res.metadata.music[0]
let txt = `
𝑺𝒆𝒂𝒓𝒄𝒉 𝑹𝒆𝒔𝒖𝒍𝒕 🖤🙈

• 📌 𝑻𝒊𝒕𝒍𝒆: ${title}
• 👨‍🎤 𝑨𝒓𝒕𝒊𝒔𝒕: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'No encontrado'}
• 💾 𝑨𝒍𝒃𝒖𝒎: ${album.name || 'No encontrado'}
• 🌐 𝑮𝒆𝒏𝒓𝒆𝒔: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'No encontrado'}
• 📆 𝑹𝒆𝒍𝒆𝒂𝒔𝒆 𝑫𝒂𝒕𝒆: ${release_date || 'No encontrado'}
`.trim()
fs.unlinkSync(`./tmp/${m.sender}.${ext}`)
m.reply(txt)
} else throw '*[ 🙈 𝐈𝐍𝐅𝐎 🙈] 𝑹𝒆𝒔𝒑𝒐𝒏𝒅 𝑻𝒐 𝑨𝒖𝒅𝒊𝒐*'
}
handler.command = /^quemusica|quemusicaes|whatmusic$/i
export default handler
