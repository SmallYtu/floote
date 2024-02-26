function makeRemembrance(){
    for (let i = 0; i < 3; i++) {
        let hasClover = getClovers() > i

        let rem = document.createElement('button')
        rem.className = `remembrance`
        rem.style.border = `1px solid ${hasClover ? '#3f943f' : '#606060'}`

        let icon = document.createElement('img')
        icon.src = hasClover ? `../../res/wilted_clover.png` : `../../res/missing.png`

        rem.append(icon)
        document.getElementById('remContainer').append(rem)
    }

    DOM(`remember`).style.display = getClovers() >= 3 ? 'block' : 'none'
}
function refreshRemembrance(){
    document.getElementById(`remContainer`).replaceChildren()
    makeRemembrance()
}
function getClovers(){
    let amount = 0
    for (let i = 0; i < data.items[4].length; i++) {
        if(data.items[4][i].name === "Wilted Clover") amount++
    }
    return amount
}

function remember(){
    if(getClovers() < 3) return

    let clover = getRandomItem(5)
    data.items[5].push(clover)

    let removed = 0
    for (let i = 0; i < data.items[4].length; i++) {
        if(removed >= 3) break;
        if(data.items[4][i].name === "Wilted Clover"){
            data.items[4] = data.items[4].slice(0, i).concat(data.items[4].slice(i+1))
            removed++
        }
    }
    refreshRemembrance()
}