const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn }) => {
	conn.p = conn.p ? conn.p : {}
	let id = m.chat
	ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 1, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
	fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./src/logo.jpg'), thumbnail: require('fs').readFileSync('./src/logo.jpg'),sendEphemeral: true}}}
	global.kontak2 = [
['6281390413987', 'Agungx ( Owner )', 'Developer Bot 🥀', 'Nomernya', 'agungx@gmail.com', 'Indonesia', 'https://github.com/Neonbotz', 'Terima Sewa Bot'], ['6285790613290', 'Jinxed ( Friend Owner )', 'Developer Bot 🥀', 'Nomernya', 'jinxed@gmail.com', 'Indonesia', 'https://github.com/Jinxed2', 'Developer Friends'], ['14044228888', 'Agungx 2 ( Owner )', 'Developer Bot 🥀', 'Nomernya', 'agungx@gmail.com', 'Indonesia', 'https://github.com/Neonbotz', 'Terima Sewa Bot'], ['6281391274893', 'Sachi Bot', 'Bot Whatsapp', 'Nomernya', 'saxhi@gmail.com', 'Indonesia', 'https://github.com/Neonbotz', '🤖 Hanya bot biasa yang kadang suka eror ☺'],
]

	conn.p[id] = [
	await conn.sendContactArray(m.chat, kontak2, fkontak, { contexInfo: { forwardingScore: 9, isForwarded: false } })
	]
	await delay(150)
  return conn.sendMessage(m.chat, { text: `Hay kak @${await m.sender.split('@')[0]}, itu nomor ownerku jangan dispam yah ^_^`, mentions: [m.sender] }, { quoted: conn.p[id][0] })
  await delay(100)
  return delete conn.p[id]


}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler