export async function fecthAllChamps() {
    var data = await fetch('https://ddragon.leagueoflegends.com/cdn/12.21.1/data/fr_FR/champion.json')
    var json = await data.json()
    return json
}