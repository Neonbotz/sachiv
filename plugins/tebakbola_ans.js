const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tektekk/i.test(m.quoted.text)) return !0
    this.tebakbola = this.tebakbola ? this.tebakbola : {}
    if (!(id in this.tebakbola)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == this.tebakbola[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakbola[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakbola[id][2]
            global.db.data.users[m.sender].tiketcoin += 1
            m.reply(`*Benar!*\n+${this.tebakbola[id][2]} XP\n+1 Tiketcoin\n+5000 Money\n+15 Limit`)
            clearTimeout(this.tebakbola[id][3])
            delete this.tebakbola[id]
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler