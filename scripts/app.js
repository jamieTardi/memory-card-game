const card1 = document.querySelector('.memory-card1')
const card2 = document.querySelector('.memory-card2')
const card3 = document.querySelector('.memory-card3')
const card4 = document.querySelector('.memory-card4')
const card5 = document.querySelector('.memory-card5')
const card6 = document.querySelector('.memory-card6')
const allCards = document.querySelectorAll('.card')


revealAnswer = () => {
    card1.innerHTML = 'answer'
}

card1.addEventListener('click', revealAnswer)


allCards.forEach(card => {
    setTimeout(() => {
        let para = document.createElement('p')
        let text = document.createTextNode('Time to guess!')
        card.appendChild(para)
        para.appendChild(text)
    }, 2000)
})