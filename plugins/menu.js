let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `
╭╭─────═[ INFO USER ]═─────⋆
│╭───────────────···
┴│☂︎ *Name:* %name
⬡│☂︎ *Premium:* %premium
⬡│☂︎ *Limit:* %limit
⬡│☂︎ *Money:* %money
⬡│☂︎ *Role:* %role
⬡│☂︎ *Level:* %level [ %xp4levelup Xp For Levelup]
⬡│☂︎ *Xp:* %exp / %maxexp
┬│☂︎ *Total Xp:* %totalexp
│╰────────────────···
┠─────═[ TODAY ]═─────⋆
│╭────────────────···
┴│    *${ucapan()} %name*
⬡│☂︎ *Tanggal:* %week %weton
⬡│☂︎ *Date:* %date
⬡│☂︎ *Tanggal Islam:* %dateIslamic
┬│☂︎ *Waktu:* %time
│╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│☂︎ *Nama Bot:* %me
⬡│☂︎ *Prefix:* [ *%_p* ]
⬡│☂︎ *Baileys:* Multi Device
⬡│☂︎ *Battery:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
⬡│☂︎ *Platform:* %platform
⬡│☂︎ *Type:* Node.Js
⬡│☂︎ *Uptime:* %muptime
┬│☂︎ *Database:* %rtotalreg dari %totalreg
│╰────────────────···
╰──────────═┅═──────────
⃝▣──「 *INFO CMD* 」───⬣
│ *Ⓟ* = Premium
│ *Ⓛ* = Limit
▣────────────⬣
%readmore
`.trimStart(),
  header: '⃝▣──「 %category 」───⬣',
  body: '│○ %cmd %isPremium %islimit',
  footer: '▣───────────⬣\n',
  after: ` %me
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {

  let tags
  let teks = `${args[0]}`.toLowerCase()
let arrayMenu = ['all', 'game', 'xp', 'stiker', 'kerang', 'quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'maker', 'downloader', 'tools', 'fun', 'jadian', 'berita', 'random', 'database', 'islami', 'audio', 'nsfw', 'info', '18+', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'UTAMA',
    'game': 'Game',
    'rpg': 'RPG',
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'group': 'Grup',
    'premium': 'Premium',
    'topup': 'Top Up Store',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'maker': 'Maker',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'berita': 'Berita',
    'jadian': 'Jadian',
    'random': 'Random',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'islami': 'Islami',
    'audio': 'Pengubah Suara',
    'nsfw': 'Nsfw',
    'info': 'Info',
    '': 'Tanpa Kategori',
  }
  if (teks == 'game') tags = {
    'game': 'Game',
    'rpg': 'RPG'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerang') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'topup') tags = {
    'topup': 'Top Up Store'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'maker') tags = {
    'maker': 'Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'jadian') tags = {
    'jadian': 'Jadian'
  }
  if (teks == 'berita') tags = {
    'berita': 'Berita'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'islami') tags = {
    'islami': 'Islami'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == '18+') tags = {
    '18+': '18+'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let { premium, premiumTime } = global.db.data.users[m.sender]
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    global.jam = time
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      let judul = `✧────···[ Dashboard ]···────✧
*${ucapan()} ${conn.getName(m.sender)}*
╭━━━━━━━━━━━━━━━━┈─✧
┴
│⬡ Aktif selama ${muptime}
│⬡ Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
│⬡ Prefix : [ ${_p} ]
│⬡ *${Object.keys(global.db.data.users).length}* Pengguna
│⬡ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
│⬡ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
┬
├━━━━━━━━━━━━━━━━┈─⋆
┴ ▸ *ᴏᴡɴᴇʀ :* ᴀɢᴜɴɢx ᴅᴇᴠs ( ᴛᴏʟx ɪ ᴀᴍ ʜᴇʀᴇ )
✧
┬ 📌 𝗣𝗶𝗻𝗻𝗲𝗱 :
│ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ^ω^
╰━━━━━━━━━━━━━━━━┈─◂`.trim()
      const sections = [
   {
	title: `┠─────═[ OWNER ]═─────⋆`,
	rows: [
	    {title: `「 👤 」Owner Bot`, rowId: ".owner", description: "Jika Mau Sewa Bot Atau Buy Premium Hubungi Owner"},
	]
    },{
	title: `┠─────═[ SEWA & PREMIUM ]═─────⋆`,
	rows: [
	    {title: `「 🛍️ 」Sewa Bot`, rowId: ".sewa", description: 'Menampilkan List Harga Sewa Bot'},
	    {title: `「 🪙 」Premium`, rowId: ".orderprem", description: 'Menampilkan List Harga Premium'},
	]
	},{
	title: `┠─────═[ SUPPORT ]═─────⋆`,
	rows: [
	    {title: `「 💹 」Donate`, rowId: ".donasi", description: 'Support Owner Biar Lebih Semangat'},
	]
	},{
	title: `┠─────═[ LIST MENU ]═─────⋆`,
        rows: [
          { title: '「 📃 」Semua Perintah', description: '     Menampilkan Semua Menu', rowId: `${_p}? all` },
          { title: "「 🕌 」Islami", description: "     Menampilkan Menu Islami", rowId: `${_p}? islami` },
          { title: '「 🎮 」Game', description: '     Menampilkan Menu Game', rowId: `${_p}? game` },
          { title: '「 ✨ 」Exp & Limit Pay', description: '     Menampilkan Menu Exp & Limit Pay', rowId: `${_p}? xp` },
          { title: '「 🎨 」Stiker', description: '     Menampilkan Menu Sticker', rowId: `${_p}? stiker` },
          { title: '「 🐚 」Kerang Ajaib', description: '     Menampilkan Menu Kerang Ajaib', rowId: `${_p}? kerang` },
          { title: '「 🐾 」Fun', description: '     Menampilkan Menu Fun', rowId: `${_p}? fun`},
          { title: '「 ❤️🔥 」Jadian', description: '     Menampilkan Menu Jadian', rowId: `${_p}? jadian` },
          { title: '「 📌 」Vote & Absen', description: '     Menampilkan Menu Vote & Absen', rowId: `${_p}? vote` },
          { title: '「 ☃️ 」Quotes', description: '     Menampilkan Menu Quotes', rowId: `${_p}? quotes` },
          { title: '「 🏢 」Grup', description: '     Menampilkan Menu Grup', rowId: `${_p}? grup` },
          { title: '「 🛒 」Top Up Store', description: '     Menampilkan Menu Top Up Store', rowId: `${_p}? topup` },
          { title: '「 📰 」Berita News', description: '     Menampilkan Menu Berita News', rowId: `${_p}? berita` },
          { title: '「 🛸 」Random', description: '     Menampilkan Menu Random', rowId: `${_p}? random`},
          { title: '「 🧸 」Premium', description: '     Menampilkan Menu Premium', rowId: `${_p}? premium` },
          { title: '「 🔍 」Internet', description: '     Menampilkan Menu Internet', rowId: `${_p}? internet` },
          { title: '「 🎭 」Anonymous', description: '     Menampilkan Menu Anonymous', rowId: `${_p}? anonymous` },
          { title: '「 🖼️ 」Maker', description: '     Menampilkan Menu Maker', rowId: `${_p}? maker` },
          { title: '「 📥 」Downloader', description: '     Menampilkan Menu Downloader', rowId: `${_p}? downloader` },
          { title: '「 🛠️ 」Tools', description: '     Menampilkan Menu Tools', rowId: `${_p}? tools` },
          { title: '「 🗃️ 」Database', description: '     Menampilkan Menu Database', rowId: `${_p}? database` },
          { title: '「 🎵 」Pengubah Suara', description: '     Menampilkan Menu Pengubah Suara', rowId: `${_p}? audio` },
          { title: '「 🔞 」Nsfw', description: '     Menampilkan Menu Nsfw', rowId: `${_p}? nsfw` },
          { title: '「 ⚔️ 」Info', description: '     Menampilkan Menu Info', rowId: `${_p}? info` },
          { title: '「 🔞 」18+', description: '     Menampilkan Menu 18+', rowId: `${_p}? 18+` },
          { title: '「 👨‍💻 」Owner', description: '     Menampilkan Menu Owner', rowId: `${_p}? owner` },
        ]
      }
    ]
    const listMessage = {
      text: judul,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: '',
      buttonText: "Klik Disini",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
    
    }

    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? 'Ⓛ' : '')
                .replace(/%isPremium/g, menu.premium ? 'Ⓟ' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: 'Sachi Bot WhatsApp',
      npmdesc: 'ʀᴏʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ',
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, umur, money, age, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.sendButton(m.chat, text.trim(),'Sachi Bot WhatsApp', 'https://telegra.ph/file/ba1b936624db88aea7445.jpg', [['Donasi', '.donasi'], ['Owner', '.owner']], m, {asLocation: true})
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(m(enu)?|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat Dini Hari 🌇"
  if (time >= 4) {
    res = "Selamat Pagi 🌄"
  }
  if (time > 10) {
    res = "Selamat Siang 🌅"
  }
  if (time >= 15) {
    res = "Selamat Sore 🌆"
  }
  if (time >= 18) {
    res = "Selamat Malam 🌃"
  }
  return res
}
