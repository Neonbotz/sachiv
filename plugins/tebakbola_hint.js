let handler = async (m, { conn }) => {
    conn.tebakbola = conn.tebakbola ? conn.tebakbola : {}
    let id = m.chat
    if (!(id in conn.tebakbola)) throw false
    let json = conn.tebakbola[id][1]
    let ans = json.name.trim()
    let clue = ans.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\nBalas soalnya, bukan pesan ini', conn.tebakbola[id][0])
}
handler.command = /^tektekk$/i
handler.limit = true

module.exports = handler