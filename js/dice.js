class Dice{
    constructor(name) {
        this.name = name
        this.count = 0
    }

    render(name) {
        const diceCont = document.createElement("div")
        diceCont.classList = "diceCont"

        const html = `
        <input type="submit" class="diceImg d${name}Plus" value="+D${name}"></input>
        <input type="number" class="dicetext d${name}Text" value= 0></input>
        <input type="submit" class="diceImg d${name}Minus" value="-D${name}"></input>
        `

        diceCont.innerHTML = html;
        return diceCont
    }
}