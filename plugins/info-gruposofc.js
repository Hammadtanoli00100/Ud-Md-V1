let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
✪𝐆𝐑𝐔𝐏𝐎𝐒 𝐎𝐅𝐈𝐂𝐈𝐀𝐋𝐄𝐒 𝐃𝐄𝐋 𝐁𝐎𝐓✪
▒▒▒▒▒▒▐███████▌▒▒▒▒▒▒▒
▒▒▒▒▒▒▐░▀░▀░▀░▌▒▒▒▒▒▒▒
▒▒▒▒▒▒▐▄▄▄▄▄▄▄▌▒▒▒▒▒▒▒
▄▀▀▀█▒▐░▀▀▄▀▀░▌▒█▀▀▀▄▒
▌▌▌▌▐▒▄▌░▄▄▄░▐▄▒▌▐▐▐▐▒
*1° https://chat.whatsapp.com/LwPNmhUV8P76isIyFgEK8E*

*2° https://chat.whatsapp.com/HtL4o3tb8Lk0jTo9iAvrV5*
███▀▀▀▀███████████████
██░░░░░▄██████████████
█▌░░░░████░░██░░██░░██
██░░░░░▀██████████████
███▄▄▄▄███████████████
`.trim(), wm, media, [['💟 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 💟', '#allmenu']], m)
handler.command = /^linkgc|gruposofc$/i
export default handler
