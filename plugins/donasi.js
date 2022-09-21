let fs = require('fs')
let handler = async (m, { conn }) => {
let anu = `
╭─「 Donasi 」
│• [ 081390413987 ] - GOPAY
│• [ https://saweria.co/gung ] - SAWERIA
│• [ QRISS ] - pm me
╰────
*_note_*: jangan pencet button tar fc.
`
await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 9999,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: anu,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}// Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(donasi|donate)$/i

module.exports = handler