let handler = async(m, { conn, text, args, usedPrefix }) => {

let type = (args[0] || '').toLowerCase()

        switch (type) {

	          case 'cewek': 

	                  db.data.users[m.sender].tertarik = type 

                      conn.reply(m.chat, `Kamu dari kota mana?\n\n${usedPrefix}kotaaku Jakarta pusat`, m)

	          break

	          case 'cowok': 

	                  db.data.users[m.sender].tertarik = type

                      conn.reply(m.chat, `Kamu dari kota mana?\n\n${usedPrefix}kotaaku Jakarta pusat`, m)

	          break

	          case 'bebas': 

	                  db.data.users[m.sender].tertarik = type 

	                  conn.reply(m.chat, `Kamu dari kota mana?\n\n${usedPrefix}kotaaku Jakarta pusat`, m)

	          break

         default:

              return conn.sendButton(m.chat, `Silahkan pilih salah satu..`, 'Made with ♡ by Aine', null, [['Cewek', '.tertarik cewek'], ['Cowok', '.tertarik cowok'], ['Siapa Aja', '.tertarik bebas']], m)

          }

handler.command = /^(tertarik)$/i

handler.limit = false



module.exports = handler