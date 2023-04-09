let handler = async (m, { conn, text, usedPrefix, command }) => {
    let ar = ['list', 'menu']
    let tekz = `*List Harga User Premium*`
    let tmb = `CLICK HERE ⎙`
    const sections = [
   {
	title: `ᴘᴀʏᴍᴇɴᴛ 💸 –––––––––·•`,
	rows: [
	    {title: "Bayar", "description": "Click Disini Untuk Bayar", rowId: ".pay"},
	]
    },{
	title: `ʟɪsᴛ ʜᴀʀɢᴀ ᴘʀᴇᴍɪᴜᴍ 💲 –––––––·•`,
	rows: [
	     {title: "⍟ Silver", "description": "Paket Premium Silver ⍟", rowId: ".sil"},
	  {title: "⍟ Gold", "description": "Paket Premium Gold ⍟", rowId: ".gold"},
	]
  },{
	title: `ᴏᴡɴᴇʀ 👾 –––––––––·•`,
	rows: [
	    {title: "Owner", rowId: ".owner", description: "Hubungi Owner Untuk Membeli User Premium"},
	]
    },
]

const listMessage = {
  text: tekz,
  mentions: [m.sender],
  footer: '📮 *Keuntungan User Premium:* Bisa Mengakses Fitur Premium',
  buttonText: tmb,
  sections
}

  if(!text) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!ar.includes(text)) throw conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.image) throw json
}

handler.help = ['orderprem']
handler.tags = ['main']
handler.command = /^(orderprem|hargaprem)$/i
handler.register = false

module.exports = handler