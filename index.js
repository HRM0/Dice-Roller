const myDiceBox = new DiceBox()
const rollHistory = new RollHistory()
myDiceBox.seed([20, 12, 10, 8, 6, 4])

const rollButton = document.querySelector(".rollButton")
const rollContainer = document.querySelector(".roll_container")

rollButton.addEventListener("click",function(){
   
    let newRoll = new Roll(document.querySelector(".rollNameInput").value,myDiceBox.diceList)
    rollHistory.seed(newRoll)
})

rollContainer.addEventListener("click", function (e) {
    let classArray = Array.from(e.target.classList)
    if(classArray.length<2){
        return
    }
    let diceType = classArray[1].split("_")[0]
    let buttonType = classArray[1].split("_")[1]
    
    if(buttonType=== "Plus") {
        myDiceBox.addDice(diceType)
    } else if(buttonType=== "Minus") {
        myDiceBox.subtractDice(diceType)
    }
    myDiceBox.updateDiceText(diceType)
})
