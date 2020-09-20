const card1 = document.querySelector('.memory-card1')
const card2 = document.querySelector('.memory-card2')
const card3 = document.querySelector('.memory-card3')
const card4 = document.querySelector('.memory-card4')
const card5 = document.querySelector('.memory-card5')
const card6 = document.querySelector('.memory-card6')
const allCards = document.querySelectorAll('.card')
const startBtn = document.querySelector('.start-game')
const countDown = document.querySelector('.countdown')


revealAnswer = () => {
    card1.innerHTML = 'answer'
}

startGame = () => {
    setTimeout(() => {
        countDown.innerHTML = '5'
    },1000);
    setTimeout(() => {
        countDown.innerHTML = '4'
    },2000)
    setTimeout(() => {
        countDown.innerHTML = '3'
    },3000)
    setTimeout(() => {
        countDown.innerHTML = '2'
    },4000)
    setTimeout(() => {
        countDown.innerHTML = 'GO!'
    },5000)

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
card1.addEventListener('click', revealAnswer)








// let cardReveal = [{answers: [{
// answer1: 'Tree',
// correctAnswer: true
// },
// {
// answer1: 'Stone',
// correctAnswer: false
// },
// {
//     answer1: 'Tree',
//     correctAnswer: true
//     },
//     {
//         answer1: 'Wall',
//         correctAnswer: false
//         },
//         {
//             answer1: 'TV',
//             correctAnswer: false
//             },
//             {
//                 answer1: 'house',
//                 correctAnswer: false
//                 },
// ]}]