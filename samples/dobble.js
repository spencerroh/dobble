// original dobble algorithm as python: https://www.101computing.net/the-dobble-algorithm/

function createDobbleCards(numberOfSymbolsOnCard) {
    let cards = [];

    const n = numberOfSymbolsOnCard - 1
    const numberOfCards = n * n + n + 1; // e.g. 7^2 + 7 + 1 = 57 ÷
    
    for (let i = 0; i < numberOfSymbolsOnCard; i++) {
        cards.push([0]);
        for (let j = 0; j < n; j++) {
            cards[i].push((j + 1) + i * n);
        }
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            cards.push([i + 1]);
    
            for (let k = 0; k < n; k++) {
                const index = (n + 1) + n * k + (i * k + j) % n;
                cards[cards.length - 1].push(index);
            }
        }
    }

    return {
        numberOfSymbols: numberOfCards,
        cards: cards
    };
}

module.exports = {
    createCards: createDobbleCards
};