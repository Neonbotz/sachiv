let fs = require('fs')
let handler = async (m, { conn }) => {
let anu = `
LIST HARGA SEWA BOT :
- 1 MINGGU = 5K 
- 1 BULAN = 10K 
- PERMANEN = 20K 🔥

*LIST HARGA PREMIUM USER 
RP. 5.000 = GOPAY QRISS

KEUNTUNGAN SEWA BOT :
- JAWAB OTOMATIS 
- ONLINE 24 JAM
- SC NO PASARAN
- COCOK BUAT JAGA GRUP
- SC NO ERROR ( FIX ) 
- ADA FITUR WELCOME IMAGE
- ADA FITUR ANTILINK
- FITUR DELETE PESAN MEMBER ( KHUSUS ADMIN AJA)
- DAN BERBAGAI MENU LAINYA

• NOTE : bisa perpanjang jika waktu sewa Habis
• perpanjang sewa : 5k
• Via GOPAY-QRISS

wa.me/${owner[0]}
*Bukan Bot!!!*
*Owner Sachi Bot*
`
conn.send2ButtonImg(m.chat, 'https://telegra.ph/file/c2f37988ca1e8ac4c505a.jpg', anu, wm, 'Owner', '.owner', 'Donasi', 'donasi', m)
} // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)$/i

module.exports = handler