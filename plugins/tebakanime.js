async function tebakanime() {
    let limit = Math.floor(Math.random() * (500 - 1 + 1) + 1)
    let html = await (await axios.get('https://myanimelist.net/character.php?limit=' + limit)).data
    $ = cheerio.load(html)
    let collect = { r: [], anime: [] }
    $('table > tbody > tr > td').each(function (i, e) {
        let txt = $(e).find('a').text().trim()
        let url
        url = $(e).find('img').attr('data-srcset') ? $(e).find('img').attr('data-srcset') : $(e).find('a').attr('href')
        let low = url ? url.replace('https://', '').split('/')[1] : ''
        collect[low]?.push({ text: txt.replace(',', ''), url })
    })
    let rand = Math.floor(Math.random() * collect.r.length)
    let r = collect.r[rand]
    let anime = collect.anime[rand]
    return { 
     status: true, 
     name: r.text, 
     anime: anime.text != null ? anime.text : '', 
     img: r.url.split(',')[1].trim().split(' ')[0]
    }
}