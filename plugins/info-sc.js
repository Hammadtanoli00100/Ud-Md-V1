let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `*https://github.com/umar404/Ud-Md-V1*`
let buttonMessage= {
'document': { url: `https://github.com/umar404/Ud-Md-V1` },
'mimetype': `application/${document}`,
'fileName': `γ  π―ππππ πΎππππ γ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/umar404/Ud-Md-V1',
'mediaType': 2,
'previewType': 'pdf',
'title': 'πΌπ-π΄π-π½1 πΎπππππ¨ππ π©ππβ©',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/@UMARMODS' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'πΌπ΄π½π'}, type: 1}, 
{buttonId: `${usedPrefix}owner`, buttonText: {displayText: 'OWNER'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['sc','script']
export default handler
