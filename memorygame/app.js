let clickedCard
let wait = false
let cardsFound = 0

let isdark = false

const main = document.querySelector("*")

const theheader = document.querySelector(".upheader")



main.style.background =  "white"

const rbutton = document.querySelector(".restart-button")

const sbutton = document.querySelector(".switch-button")


const colors = ["blue", "pink", "red", "darkblue", "yellow", "green", "orange", "purple"]

const cards = [...document.querySelectorAll(".card")]

for (let color of colors) {
    const cardAIndex = parseInt(Math.random() * cards.length)
    const cardA = cards[cardAIndex]
    cards.splice(cardAIndex, 1)
    cardA.className += color
    cardA.setAttribute("data-color", color)

    
    const cardBIndex = parseInt(Math.random() * cards.length)
    const cardB = cards[cardBIndex]
    cards.splice(cardBIndex, 1)
    cardB.className += color
    cardB.setAttribute("data-color", color)

    

}

function thereload() {
    rbutton.style.transform = "rotate(360deg)"
    setTimeout(() => {
        location.reload()
        
    }, 200);
}

rbutton.addEventListener("click", thereload)

sbutton.addEventListener("click", function() {
    if (!isdark) {
        main.style.background = "rgb(30, 30, 30)"
        theheader.style.color = "white"
        isdark = true
        document.documentElement.style.setProperty("--the-border", "rgb(151, 144, 144)")
        document.documentElement.style.setProperty("--the-hover-border", "rgb(104, 111, 111)")
        document.querySelector(".switch-button").src="lightmoon.svg"
    } else {
        main.style.background = "white"
        theheader   .style.color = "rgb(30, 30, 30)"
        isdark = false
        document.documentElement.style.setProperty("--the-border", "white")
        document.documentElement.style.setProperty("--the-hover-border", "rgb(151, 144, 144)")
        document.querySelector(".switch-button").src="darkmoon.svg"
    }
})


function onCardClicked(e) {
    

    if (!wait){
    
        const target = e.currentTarget
        target.className = target.className.replace("color-hidden","").trim()

        if (target === clickedCard || target.classList.contains("done")){
            return; 
        }


        if (!clickedCard) {
            clickedCard = target


        } else if ((clickedCard)) {
            if (clickedCard.getAttribute("data-color") !== target.getAttribute("data-color")) {
                console.log("Card are equal")
            
                console.log("Card are not equal")
                wait = true
                setTimeout(() => {
                    console.log("We did it")
                    clickedCard.className = clickedCard.className.replace("done", "").trim() + " color-hidden"
                    target.className = target.className.replace("done", "").trim() + " color-hidden"
                    clickedCard = null
                    wait = false


                }, 500);
            } else {
                clickedCard.className += " done"
                target.className += " done"
                clickedCard = null
                cardsFound++
                
                if (cardsFound === 8) {
                setTimeout(() => {
                    alert("YOU WIN!")    
                }, 250);

                setTimeout(() => {
                    const wantreload = confirm("The page will restart now. OK?")
                    if (wantreload) {
                        thereload()
                    } 
                }, 250); 

                   
                } 
            }


        } 
    }

    

    

    

    
}
