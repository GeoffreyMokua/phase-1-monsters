fetch("http://localhost:3000/monsters")
.then(r => r.json())
.then(monstersArray => {
const theMonstersArray= monstersArray
let i=0
let monsterSet= theMonstersArray.slice(i, i+50)
let firstSet= monsterSet.forEach(showAllMonsters)
});

let forwardButton= document.getElementById("forward")
forwardButton.addEventListener("click", (event) => {
i+=50
let nextFifty= monstersArray.slice(i, i+50)
nextFifty.forEach(showAllMonsters)
})