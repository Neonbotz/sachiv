/* Create By Agungx Devs 
 Fitur Tebak Pemain Bola By Agungx Devs
 Jangan Di Hapus Hargai Pembuat !!! */


let fetch = require('node-fetch')

let timeout = 120000
let poin = 1000
let money = 5000
let limit = 15
let tiketcoin = 1
let src
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakbola = conn.tebakbola ? conn.tebakbola : {}
    let id = m.chat
    if (id in conn.tebakbola) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakbola[id][0])
        throw false
    }
    if (!src) src = await (await fetch(global.API('https://raw.githubusercontent.com', '/Neonbotz/database-/main/bola.json'))).json()
    let json = src[Math.floor(Math.random() * src.length)]
    if (!json) throw json
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tektekk untuk bantuan
Bonus: ${poin} XP
Bonus: ${money} Money
Bonus: ${limit} Limit
Tiketcoin: ${tiketcoin} TiketCoin
`.trim()
    conn.tebakbola[id] = [
        await conn.sendFile(m.chat, json.img, 'img.jpg', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbola[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.name}*`, conn.tebakbola[id][0])
            delete conn.tebakbola[id]
        }, timeout)
    ]
}
handler.help = ['tebakpemainbola']
handler.tags = ['game']
handler.command = /^tebakpemainbola|tebakpbola/i
handler.limit = true
handler.group = true

module.exports = handler
