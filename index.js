/***** Deliverable 1 *****/

const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/

header.style.color = 'red'

/***** Deliverable 3 *****/
const players = document.querySelector('.player-container') //console.log("PLAYERS array looks like this:", PLAYERS)

 PLAYERS.forEach(function(p){ 
    player = document.createElement('div')
    player.className = 'player'
    player.setAttribute('data-number', p.number)
    player.innerHTML = `<h3>${p.name} (<em>${p.nickname}</em>)</h3><img src="${p.photo}" alt="${p.name}">`
    players.appendChild(player)
})

const raheem = document.querySelector("[data-number = '7']")
raheem.remove();


/***** Deliverable 4 *****/