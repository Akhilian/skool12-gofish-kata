const shuffle = require('shuffle-array')

const EMPTY_HAND = 0
const INIT_HAND = 7

class Shuffler {
  shuffle(input) {
    return shuffle(input)
  }
}

class Game {
  constructor() {
    this.deck = new Deck(new Shuffler())
    this.player1 = new Player()
    this.player2 = new Player()
  }

  start() {
    this.dealCards(this.player1, 7)
    this.dealCards(this.player2, 7)
  }

  dealCards(player, cardCount = 1) {
    let card
    for(let i=0; i < cardCount; i++) {
      card = this.deck.getCard()
      player.cards.push(card)
    }
  }
}

class Player {
  constructor() {
    this.cards = []
  }
}

const CardColorEnum = Object.freeze({
  HEARTS: 'hearts',
  DIAMONDS: 'diamonds',
  CLUBS: 'clubs',
  SPADES: 'spades'
})

class Card {
  constructor(value, color) {
    this.value = value
    this.color = color
  }
}

class Deck {
  constructor(shuffler) {
    let cards = [
      new Card(CardColorEnum.HEARTS, '2'),
      new Card(CardColorEnum.HEARTS, '3'),
      new Card(CardColorEnum.HEARTS, '4'),
      new Card(CardColorEnum.HEARTS, '5'),
      new Card(CardColorEnum.HEARTS, '6'),
      new Card(CardColorEnum.HEARTS, '7'),
      new Card(CardColorEnum.HEARTS, '8'),
      new Card(CardColorEnum.HEARTS, '9'),
      new Card(CardColorEnum.HEARTS, '10'),
      new Card(CardColorEnum.HEARTS, 'J'),
      new Card(CardColorEnum.HEARTS, 'Q'),
      new Card(CardColorEnum.HEARTS, 'K'),
      new Card(CardColorEnum.HEARTS, 'A'),
      new Card(CardColorEnum.SPADES, '2'),
      new Card(CardColorEnum.SPADES, '3'),
      new Card(CardColorEnum.SPADES, '4'),
      new Card(CardColorEnum.SPADES, '5'),
      new Card(CardColorEnum.SPADES, '6'),
      new Card(CardColorEnum.SPADES, '7'),
      new Card(CardColorEnum.SPADES, '8'),
      new Card(CardColorEnum.SPADES, '9'),
      new Card(CardColorEnum.SPADES, '10'),
      new Card(CardColorEnum.SPADES, 'J'),
      new Card(CardColorEnum.SPADES, 'Q'),
      new Card(CardColorEnum.SPADES, 'K'),
      new Card(CardColorEnum.SPADES, 'A'),
      new Card(CardColorEnum.DIAMONDS, '2'),
      new Card(CardColorEnum.DIAMONDS, '3'),
      new Card(CardColorEnum.DIAMONDS, '4'),
      new Card(CardColorEnum.DIAMONDS, '5'),
      new Card(CardColorEnum.DIAMONDS, '6'),
      new Card(CardColorEnum.DIAMONDS, '7'),
      new Card(CardColorEnum.DIAMONDS, '8'),
      new Card(CardColorEnum.DIAMONDS, '9'),
      new Card(CardColorEnum.DIAMONDS, '10'),
      new Card(CardColorEnum.DIAMONDS, 'J'),
      new Card(CardColorEnum.DIAMONDS, 'Q'),
      new Card(CardColorEnum.DIAMONDS, 'K'),
      new Card(CardColorEnum.DIAMONDS, 'A'),
      new Card(CardColorEnum.CLUBS, '2'),
      new Card(CardColorEnum.CLUBS, '3'),
      new Card(CardColorEnum.CLUBS, '4'),
      new Card(CardColorEnum.CLUBS, '5'),
      new Card(CardColorEnum.CLUBS, '6'),
      new Card(CardColorEnum.CLUBS, '7'),
      new Card(CardColorEnum.CLUBS, '8'),
      new Card(CardColorEnum.CLUBS, '9'),
      new Card(CardColorEnum.CLUBS, '10'),
      new Card(CardColorEnum.CLUBS, 'J'),
      new Card(CardColorEnum.CLUBS, 'Q'),
      new Card(CardColorEnum.CLUBS, 'K'),
      new Card(CardColorEnum.CLUBS, 'A'),
    ]

    this.cards = shuffler.shuffle(cards);
  }

  getCard() {
    return this.cards.pop();
  }
}
module.exports = { Game, Card, Deck, CardColorEnum, Player }
