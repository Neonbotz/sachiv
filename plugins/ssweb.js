const axios = require ("axios")
const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, args }) => {
   if (!args[0]) return conn.reply(m.chat, 'Nothing url', m)
   let buffer = await getBuffer(`https://rest-api-aiinne.herokuapp.com/api/tools/ssweb?link=${args[0]}`)
   conn.sendMessage(m.chat, { image: buffer, caption: wm }, { quoted: m })
}
handler.help = ['ssweb']
handler.tags = ['internet']
handler.command = /^ss(web)?f?$/i
handler.limit = true
handler.fail = null
module.exports = handler
const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})
const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}