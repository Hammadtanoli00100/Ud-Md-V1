let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
✪𝑼𝒅-𝑴𝒅-𝑽1 𝑩𝒐𝒕 𝑨𝒏𝒅 𝑺𝒖𝒑𝒑𝒐𝒓𝒕 𝑮𝒓𝒐𝒖𝒑𝒔✪
▒▒▒▒▒▒▐███████▌▒▒▒▒▒▒▒
▒▒▒▒▒▒▐░▀░▀░▀░▌▒▒▒▒▒▒▒
▒▒▒▒▒▒▐▄▄▄▄▄▄▄▌▒▒▒▒▒▒▒
▄▀▀▀█▒▐░▀▀▄▀▀░▌▒█▀▀▀▄▒
▌▌▌▌▐▒▄▌░▄▄▄░▐▄▒▌▐▐▐▐▒
*1° https://chat.whatsapp.com/FrYa5MtvVjr94oMNTXCdPg*

*2° https://chat.whatsapp.com/FrYa5MtvVjr94oMNTXCdPg*
███▀▀▀▀███████████████
██░░░░░▄██████████████
█▌░░░░████░░██░░██░░██
██░░░░░▀██████████████
███▄▄▄▄███████████████
`.trim(), wm, media, [['🙈 𝑴𝒂𝒊𝒏 𝑴𝒆𝒏𝒖 🙈', '#allmenu']], m)
handler.command = /^linkgc|gruposofc$/i
export default handler
