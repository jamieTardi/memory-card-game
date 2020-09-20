const card1 = document.querySelector('.memory-card1')
const card2 = document.querySelector('.memory-card2')
const card3 = document.querySelector('.memory-card3')
const card4 = document.querySelector('.memory-card4')
const card5 = document.querySelector('.memory-card5')
const card6 = document.querySelector('.memory-card6')
const allCards = document.querySelectorAll('.card')
const startBtn = document.querySelector('.start-game')
const countDown = document.querySelector('.countdown')



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
            answer1: '<img src="../images/leaves.jpg">',
            correctAnswer: true
        },
        {
            answer2: 'Stone',
            correctAnswer: false
        },
        {
            answer3: 'Tree',
            correctAnswer: true
        },
        {
            answer4: 'Wall',
            correctAnswer: false
        },
        {
            answer5: 'TV',
            correctAnswer: false
        },
        {
            answer6: 'house',
            correctAnswer: false
        },
    ]
}
revealAnswer = () => {
    let answer1 = cardReveal.answers[0].answer1
            let div = document.createElement('div')
            let text = document.createTextNode('Is this right?')
            div.classList.add('answer-cards')
            card1.appendChild(div)
            div.innerHTML = answer1
            
            
}
revealAnswer()

console.log(cardReveal)
console.log(cardReveal.answers[0].answer1)

// card1.addEventListener('click', revealAnswer)