import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'

global.owner = [
  ['+923165123719', '๐ต๐ฐ๐ Dark Devil Umar ๐ต๐ฐ๐', true],
  ['+687720786 ']
] 
global.suittag = ['923165123719'] 
global.prems = ['923165123719','687720786'] 

global.packname = '๐๐-๐๐ฟ-๐1 ๐ฝ๐ฎ ๐ฟ๐๐ง๐ ๐ฟ๐๐ซ๐๐ก ยฉ 2023 | ud-md-v1 WhatsApp Bot :'
global.author = 'Dark Devil Umar ๐ต๐ฐ๐ค'
global.wm = 'โDark Devil Umar ๐ต๐ฐ๐ค'
global.igfg = 'โUmar ยป Rehmanโ'
global.wait = '*[๐ฅบ] Wait, Processing...*'

global.keysZens = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.lolkeysapi = ['85faf717d0545d14074659ad']

global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz',
  violetics: 'https://violetics.pw'
},
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://violetics.pw': 'beta'
}

global.imagen1 = fs.readFileSync('./Menu2.jpg')
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png')
global.imagen4 = fs.readFileSync('./Menu2.jpg')

global.mods = [] 


/*************************/
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	
global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
      level: '๐งฌ Nivel',
      limit: '๐ Diamante',
      exp: 'โก Experiencia',
      bank: '๐ฆ Banco',
      diamond: '๐ Diamante',
      health: 'โค๏ธ Salud',
      kyubi: '๐ Magia',
      joincount: '๐ช Token',
      emerald: '๐ Esmeralda',
      stamina: 'โจ Energรญa',
      role: '๐ช Rango',
      premium: '๐๏ธ Premium',
      pointxp: '๐ง Puntos Exp',
      gold: '๐ Oro',
      trash: '๐ Basura',
      crystal: '๐ฎ Cristal',
      intelligence: '๐ง  Inteligencia',
      string: '๐ธ๏ธ Cuerda',
      keygold: '๐ Llave de Oro',
      keyiron: '๐๏ธ Llave de Hierro',
      emas: '๐ช Piรฑata',
      fishingrod: '๐ฃ Caรฑa de Pescar',
      gems: '๐ Gemas',
      magicwand: 'โ๏ธ Varita Mรกgica',
      mana: '๐ช Hechizo',
      agility: '๐คธโโ๏ธ Agilidad',
      darkcrystal: 'โ ๏ธ Cristal Oscuro',
      iron: 'โ๏ธ Hierro',
      rock: '๐ชจ Roca',
      potion: '๐ฅค Pociรณn',
      superior: '๐ผ Superior',
      robo: '๐ Robo',
      upgrader: '๐งฐ Aumentar Mejora',
      wood: '๐ชต Madera',
      strength: '๐ฆนโ โ๏ธ Fuerza',
      arc: '๐น Arco',
      armor: '๐ฅผ Armadura',
      bow: '๐น Super Arco',
      pickaxe: 'โ๏ธ Pico',
      sword: 'โ๏ธ Espada',
      common: '๐ฆ Caja Comรบn',
      uncoommon: '๐ฅก Caja Poco Comรบn',
      mythic: '๐ณ๏ธ Caja Mรญtico',
      legendary: '๐ Caja Legendaria',
      petFood: '๐ Alimento para Mascota',
      pet: '๐ฑ Caja para Mascota',
      bibitanggur: '๐ Semilla de Uva',
      bibitapel: '๐ Semilla de Manzana',
      bibitjeruk: '๐ Semillas de naranja',
      bibitmangga: '๐ฅญ Semilla de Mango',
      bibitpisang: '๐ Semillas de Plรกtano',
      ayam: '๐ Pollo',
      babi: '๐ Puerco',
      Jabali: '๐ Jabali',
      bull: '๐ Toro',    
      buaya: '๐ Cocodrilo',    
      cat: '๐ Gato',      
      centaur: '๐ Centauro',
      chicken: '๐ Pollo',
      cow: '๐ Vaca', 
      dog: '๐ Perro',
      dragon: '๐ Dragรณn',
      elephant: '๐ Elefante',
      fox: '๐ฆ Zorro',
      giraffe: '๐ฆ Jirafa',
      griffin: '๐ฆ Ave',
      horse: '๐ Caballo',
      kambing: '๐ Cabra',
      kerbau: '๐ Bรบfalo',
      lion: '๐ฆ Leรณn',
      money: '๐พ MysticCoins',
      monyet: '๐ Mono',
      panda: '๐ผ Panda',
      snake: '๐ Serpiente',
      phonix: '๐๏ธ Fรฉnix',
      rhinoceros: '๐ฆ Rinoceronte',
      wolf: '๐บ Lobo',
      tiger: '๐ Tigre',
      cumi: '๐ฆ Calamar',
      udang: '๐ฆ Camarรณn',
      ikan: '๐ Pez',
      fideos: '๐ Fideos',
      ramuan: '๐งช Ingrediente NOVA',
      knife: '๐ช Cuchillo'
    }
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}}
global.rpgg = { //Solo emojis 
emoticon(string) {
string = string.toLowerCase()
    let emott = {
      level: '๐งฌ',
      limit: '๐',
      exp: 'โก',
      bank: '๐ฆ',
      diamond: '๐+',
      health: 'โค๏ธ',
      kyubi: '๐',
      joincount: '๐ช',
      emerald: '๐',
      stamina: 'โจ',
      role: '๐ช',
      premium: '๐๏ธ',
      pointxp: '๐ง',
      gold: '๐',
      trash: '๐',
      crystal: '๐ฎ',
      intelligence: '๐ง ',
      string: '๐ธ๏ธ',
      keygold: '๐',
      keyiron: '๐๏ธ',
      emas: '๐ช',
      fishingrod: '๐ฃ',
      gems: '๐',
      magicwand: 'โ๏ธ',
      mana: '๐ช',
      agility: '๐คธโโ๏ธ',
      darkcrystal: 'โ ๏ธ',
      iron: 'โ๏ธ',
      rock: '๐ชจ',
      potion: '๐ฅค',
      superior: '๐ผ',
      robo: '๐',
      upgrader: '๐งฐ',
      wood: '๐ชต',
      strength: '๐ฆนโ โ๏ธ',
      arc: '๐น',
      armor: '๐ฅผ',
      bow: '๐น',
      pickaxe: 'โ๏ธ',
      sword: 'โ๏ธ',
      common: '๐ฆ',
      uncoommon: '๐ฅก',
      mythic: '๐ณ๏ธ',
      legendary: '๐',
      petFood: '๐',
      pet: '๐ฑ',
      bibitanggur: '๐',
      bibitapel: '๐',
      bibitjeruk: '๐',
      bibitmangga: '๐ฅญ',
      bibitpisang: '๐',
      ayam: '๐',
      babi: '๐',
      Jabali: '๐',
      bull: '๐',    
      buaya: '๐',    
      cat: '๐',      
      centaur: '๐',
      chicken: '๐',
      cow: '๐', 
      dog: '๐',
      dragon: '๐',
      elephant: '๐',
      fox: '๐ฆ',
      giraffe: '๐ฆ',
      griffin: '๐ฆ', 
      horse: '๐',
      kambing: '๐',
      kerbau: '๐',
      lion: '๐ฆ',
      money: '๐พ',
      monyet: '๐',
      panda: '๐ผ',
      snake: '๐',
      phonix: '๐๏ธ',
      rhinoceros: '๐ฆ',
      wolf: '๐บ',
      tiger: '๐',
      cumi: '๐ฆ',
      udang: '๐ฆ',
      ikan: '๐',
      fideos: '๐',
      ramuan: '๐งช',
      knife: '๐ช'
    }
let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emott[results[0][0]]
}}
global.rpgshop = { //Tienda
emoticon(string) {
string = string.toLowerCase()
    let emottt = {
      exp: 'โก Experiencia',
      limit: '๐ Diamante',
      diamond: '๐ Diamante',
      joincount: '๐ช Token',
      emerald: '๐ Esmeralda',
      berlian: 'โฆ๏ธ Joya',
      kyubi: '๐ Magia',
      gold: '๐ Oro',
      money: '๐พ MysticCoins',
      tiketcoin: '๐ซ mystic Tickers',
      stamina: 'โจ Energรญa',
      potion: '๐ฅค Pociรณn',
      aqua: '๐ง Agua',
      trash: '๐ Basura',
      wood: '๐ชต Madera',
      rock: '๐ชจ Roca',
      batu: '๐ฅ Piedra',
      string: '๐ธ๏ธ Cuerda',
      iron: 'โ๏ธ Hierro',
      coal: 'โฑ๏ธ Carbรณn',
      botol: '๐ถ Botella',
      kaleng: '๐ฅซ Lata',
      kardus: '๐ชง Cartรณn',
      eleksirb: '๐ก Electricidad',
      emasbatang: 'ใฝ๏ธ Barra de Oro',
      emasbiasa: '๐งญ Oro Comรบn',
      rubah: '๐ฆ๐ซ๏ธ Zorro Grande',
      sampah: '๐๐ซ๏ธ Super Basura',
      serigala: '๐บ๐ซ๏ธ Super Lobo',
      kayu: '๐ท Super Madera',
      sword: 'โ๏ธ Espada',
      umpan: '๐ชฑ Carnada', 
      healtmonster: '๐ต Billetes',
      emas: '๐ช Piรฑata',
      pancingan: '๐ช Gancho',
      pancing: '๐ฃ Caรฑa de Pescar',
      common: '๐ฆ Caja Comรบn',
      uncoommon: '๐ฅก Caja Poco Comรบn',
      mythic: '๐ณ๏ธ Caja Mรญtica',
      pet: '๐ซ Caja de Mascotas',//?
      gardenboxs: '๐ Caja de Jardinerรญa',//?
      legendary: '๐ Caja Legendaria',
      anggur: '๐ Uva',
      apel: '๐ Manzana',
      jeruk: '๐ Naranja',
      mangga: '๐ฅญ Mango',
      pisang: '๐ Platano',
      bibitanggur: '๐พ๐ Semillas de uva',
      bibitapel: '๐พ๐ Semillas de manzana',
      bibitjeruk: '๐พ๐ Semillas de naranja',
      bibitmangga: '๐พ๐ฅญ Semillas de Mango',
      bibitpisang: '๐พ๐ Semillas de plรกtano',
      centaur: '๐ Centauro',
      griffin: '๐ฆ Ave',
      kucing: '๐ Gato',
      naga: '๐ Dragรณn',
      fox: '๐ฆ Zorro',
      kuda: '๐ Caballo',
      phonix: '๐๏ธ Fรฉnix',
      wolf: '๐บ Lobo',
      anjing: '๐ถ Perro',
      petFood: '๐ Alimento para Mascota', //?
      makanancentaur: '๐๐ฅฉ Comida de Centauro',
      makanangriffin: '๐ฆ๐ฅฉ Comida de Ave',
      makanankyubi: '๐๐ฅฉ Comida Mรกgica',
      makanannaga: '๐๐ฅฉ Comida de Dragรณn',
      makananpet: '๐ฑ๐ฅฉ Alimentos de mascotas',
      makananphonix: '๐๏ธ๐ฅฉ Comida de Fรฉnix'  
    }
let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emottt[results[0][0]]
}}
global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emotttt = {
      exp: 'โก',
      limit: '๐',
      diamond: '๐+',
      joincount: '๐ช',
      emerald: '๐',
      berlian: 'โฆ๏ธ',
      kyubi: '๐',
      gold: '๐',
      money: '๐พ',
      tiketcoin: '๐ซ',
      stamina: 'โจ',
      potion: '๐ฅค',
      aqua: '๐ง',
      trash: '๐',
      wood: '๐ชต',
      rock: '๐ชจ',
      batu: '๐ฅ',
      string: '๐ธ๏ธ',
      iron: 'โ๏ธ',
      coal: 'โฑ๏ธ',
      botol: '๐ถ',
      kaleng: '๐ฅซ',
      kardus: '๐ชง',
      eleksirb: '๐ก',
      emasbatang: 'ใฝ๏ธ',
      emasbiasa: '๐งญ',
      rubah: '๐ฆ๐ซ๏ธ',
      sampah: '๐๐ซ๏ธ',
      serigala: '๐บ๐ซ๏ธ',
      kayu: '๐ท',
      sword: 'โ๏ธ',
      umpan: '๐ชฑ', 
      healtmonster: '๐ต',
      emas: '๐ช',
      pancingan: '๐ช',
      pancing: '๐ฃ',
      common: '๐ฆ',
      uncoommon: '๐ฅก',
      mythic: '๐ณ๏ธ',
      pet: '๐ซ',//?
      gardenboxs: '๐',//?
      legendary: '๐',
      anggur: '๐',
      apel: '๐',
      jeruk: '๐',
      mangga: '๐ฅญ',
      pisang: '๐',
      bibitanggur: '๐พ๐',
      bibitapel: '๐พ๐',
      bibitjeruk: '๐พ๐',
      bibitmangga: '๐พ๐ฅญ',
      bibitpisang: '๐พ๐',
      centaur: '๐',
      griffin: '๐ฆ',
      kucing: '๐',
      naga: '๐',
      fox: '๐ฆ',
      kuda: '๐',
      phonix: '๐๏ธ',
      wolf: '๐บ',
      anjing: '๐ถ',
      petFood: '๐', //?
      makanancentaur: '๐๐ฅฉ',
      makanangriffin: '๐ฆ๐ฅฉ',
      makanankyubi: '๐๐ฅฉ',
      makanannaga: '๐๐ฅฉ',
      makananpet: '๐ฑ๐ฅฉ',
      makananphonix: '๐๏ธ๐ฅฉ'  
    }
let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emotttt[results[0][0]]
}}	
	
global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']
global.gt = 'โAhmad ยป Aliโ'
global.mysticbot = 'โAhmad ยป Aliโ'
global.md = 'https://github.com/xIKRATOSx/Shizu-Bot-MD'
global.mysticbot = 'https://github.com/xIKRATOSx/Shizu-Bot-MD'
global.waitt = '*[๐] Processing, Wait a moment...*'
global.waittt = '*[๐] Processing, Wait a moment...*'
global.waitttt = '*[๐] Processing, Wait a moment...*'
global.nomorown = '923165123719'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']
global.cmenut = 'โโโโโโโใ'
global.cmenub = 'โโฆ '
global.cmenuf = 'โฐโโโโโโโโโโโเน\n'
global.cmenua = '\nโ โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ โ\n     '
global.dmenut = '*โโโโโโโฉ*'
global.dmenub = '*โยป*'
global.dmenub2 = '*โ*'
global.dmenuf = '*โฐโโโโโโโโโโโฆ*'
global.htjava = 'โซนโซบ'
global.htki = '*โญโขฬฉฬฉอโฑโขโขโขโข โช*'
global.htka = '*โช โขโขโขโขฬฉฬฉอโฐโขโญ*'
global.comienzo = 'โข โข โโโโโโ'
global.fin = 'โโโโโโ โข โข'
global.botdate = `โซนโซบ D A T E :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}` //Asia/Jakarta
global.bottime = `๐ป๐๐๐ : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {key: { participant : '0@s.whatsapp.net'}, message: { "videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu2.jpg')}}}
global.multiplier = 99
/*************************/

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)})
