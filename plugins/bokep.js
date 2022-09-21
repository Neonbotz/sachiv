let handler = async (m, { conn }) => {		
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih', m)
}
handler.help = ['bokep']
handler.tags = ['18+']

handler.command = /^(bokep)$/i
handler.premium = true
handler.register = false
handler.private = true
module.exports = handler