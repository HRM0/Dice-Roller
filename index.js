const myDiceBox = new DiceBox()
const rollHistory = new RollHistory()
myDiceBox.seed([20, 12, 10, 8, 6, 4])

const rollButton = document.querySelector(".rollButton")

rollButton.addEventListener("click",function(){
   
    let newRoll = new Roll(document.querySelector(".rollNameInput").value,myDiceBox.diceList)
    rollHistory.seed(newRoll)
})
