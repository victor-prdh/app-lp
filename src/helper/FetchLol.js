export async function fecthAllChamps() {
    var data = await fetch('https://ddragon.leagueoflegends.com/cdn/12.23.1/data/fr_FR/champion.json')
    var json = await data.json()
    return json
}

export async function fetchOne(championId) {
    var data = await fetch('https://ddragon.leagueoflegends.com/cdn/12.23.1/data/fr_FR/champion/'.concat(championId).concat('.json'))
    var json = await data.json()
    return json
}