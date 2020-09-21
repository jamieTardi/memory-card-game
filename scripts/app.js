const card1 = document.querySelector('.memory-card1')
const card2 = document.querySelector('.memory-card2')
const card3 = document.querySelector('.memory-card3')
const card4 = document.querySelector('.memory-card4')
const card5 = document.querySelector('.memory-card5')
const card6 = document.querySelector('.memory-card6')
const allCards = document.querySelectorAll('.card')
const startBtn = document.querySelector('.start-game')
const countDown = document.querySelector('.countdown')


let randomAnswers = Math.floor(Math.random() * 6)
console.log(randomAnswers)

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

    allCards.forEach(card => {
        setTimeout(() => {
            let para = document.createElement('p')
            let text = document.createTextNode('Time to guess!')
            card.appendChild(para)
            para.appendChild(text)

        }, 5000)
    })
}
startBtn.addEventListener('click', startGame)
let cardReveal = {
        answers: [{
                answer: '<img src="../images/leaves.jpg">',
                correctAnswer: true
            },
            {
                answer: 'Stone',
                correctAnswer: false
            },
            {
                answer: 'Tree',
                correctAnswer: true
            },
            {
                answer: 'Wall',
                correctAnswer: false
            },
            {
                answer: 'TV',
                correctAnswer: false
            },
            {
                answer: 'house',
                correctAnswer: false
            },
        ]


    },

    revealAnswer = () => {
        let answer = cardReveal.answers[randomAnswers].answer
        let div = document.createElement('div')
        div.classList.add('answer-cards')
        card1.appendChild(div)
        div.innerHTML = answer
        let answer2 = cardReveal.answers[randomAnswers].answer
        let div2 = document.createElement('div')
        div.classList.add('answer-cards')
        card2.appendChild(div)
        div2.innerHTML = answer2
    }
revealAnswer()

console.log(cardReveal)
console.log(cardReveal.answers[0].answer1)

// card1.addEventListener('click', revealAnswer)