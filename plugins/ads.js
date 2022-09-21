let handler = async m => m.reply(`
."Sell YouTube premium Family + 5 akun anggota keluarga
Hubungi wa.me/6285156723669"
`.trim()) // Tambah sendiri kalo mau
handler.help = ['ads']
handler.tags = ['main']
handler.command = /^(ads)$/i

module.exports = handler