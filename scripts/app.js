const card1 = document.querySelector('.memory-card1')
const card2 = document.querySelector('.memory-card2')
const card3 = document.querySelector('.memory-card3')
const card4 = document.querySelector('.memory-card4')
const card5 = document.querySelector('.memory-card5')
const card6 = document.querySelector('.memory-card6')
const allCards = document.querySelectorAll('.card')
const startBtn = document.querySelector('.start-game')
const countDown = document.querySelector('.countdown')
const innerImg = document.querySelector('.card-inner-image')
const score = document.querySelector('.score-span')

randomAnswersFunc = () => {
let randomAnswers = Math.floor(Math.random() * 6)
return randomAnswers
}



startGame = () => {
    //start countdown timer
    setTimeout(() => {
        countDown.innerHTML = '5'
    }, 1000);
    setTimeout(() => {
        countDown.innerHTML = '4'
    }, 2000)
    setTimeout(() => {
        countDown.innerHTML = '3'
    }, 3000)
    setTimeout(() => {
        countDown.innerHTML = '2'
    }, 4000)
    setTimeout(() => {
        countDown.innerHTML = 'GO!'
    }, 5000)

    //Random image for the start card
    innerImg.innerHTML = cardReveal.answers[randomAnswersFunc()].answer
     
    //Logic for the 6 cards
    allCards.forEach(card => {
        card.innerHTML = ''
        let para = document.createElement('p')
            let text = document.createTextNode('Time to guess!')
            card.appendChild(para)
            para.appendChild(text)
            let answer = cardReveal.answers[randomAnswersFunc()].answer
        let div = document.createElement('div')
        div.classList.add('answer-cards')
        card.appendChild(div)
        div.innerHTML = answer
        setTimeout(() => {
            div.style.opacity = '0'
            div.addEventListener('click', () => {
                console.log('working')
                div.style.opacity = '1'
            })
        }, 5000)
    })
}

let cardReveal = {
        answers: [{
                answer: '<img src="../images/leaves.jpg">',
                correctAnswer: true
            },
            {
                answer: '<img src="../images/house.jpg">',
                correctAnswer: false
            },
            {
                answer: '<img src="../images/wall.jpg">',
                correctAnswer: true
            },
            {
                answer: '<img src="../images/tree.jpg">',
                correctAnswer: false
            },
            {
                answer: '<img src="../images/stone.jpg">',
                correctAnswer: false
            },
            {
                answer: '<img src="../images/tv.jpg">',
                correctAnswer: false
            },
        ]


    }

startBtn.addEventListener('click', startGame)