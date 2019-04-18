const { Game, Card, Deck, CardColorEnum, Player } = require('../lib/game')
const { expect } = require('chai')
const sinon = require('sinon')

const Sample = require('../lib/sample')

describe('init game', () => {
  it('should have an instance of Deck', () => {
    // Given
    const game = new Game()

    // When
    const deck = game.deck

    // Then
    expect(deck).to.be.instanceOf(Deck)
  })

  it('The game should have 2 players', () => {
    // When
    const game = new Game()
    // Then
    expect(game).to.have.property('player1')
    expect(game).to.have.property('player2')
  })
})

describe('Hand', () => {
  describe('when has book', () => {
    it('should return identical cards\' value', () => {
      // Given
      const hands = [
        new Card(CardColorEnum.HEARTS, 'K'),
        new Card(CardColorEnum.DIAMONDS, 'K'),
        new Card(CardColorEnum.CLUBS, 'K'),
        new Card(CardColorEnum.SPADES, 'K'),
        new Card(CardColorEnum.SPADES, 'J'),
        new Card(CardColorEnum.SPADES, 'Q'),
        new Card(CardColorEnum.SPADES, '2'),
      ]
  
      // Then
      expect(containsBook(hands)).to.equal('K')
    })
  })
})

describe('Game Start', () => {

  describe('Each player', () => {
    it('should be dealt seven cards', () => {
      // Given
      const game = new Game()
  
      // When
      game.start()
      const player1 = game.player1
      const player2 = game.player2
  
      // Then
      expect(player1.cards).to.have.lengthOf(7)
      expect(player2.cards).to.have.lengthOf(7)
    })
  })

  describe('Deck', () => {
    it('should be reduced to 38 cards', () => {
      // Given
      const game = new Game()
  
      // When
      game.start()
      const deck = game.deck
  
      // Then
      expect(deck.cards).to.have.length(38)
    })
  })
})


describe('Deck', () => {

  let shuffler
  beforeEach(() => {
    shuffler = { shuffle: (cards) => cards }
  })

  it('should be composed of 52 cards', () => {
    // Given
    const deck = new Deck(shuffler)

    // Then
    expect(deck.cards).to.have.lengthOf(52)
  })

  it('should contains ordinary and unique cards', () => {
    // Given
    const deck = new Deck(shuffler)
    const expectedCards = [
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
    ];
    // Then
    expect(deck.cards).to.deep.equal(ordinaryCards)
  })

  it('first card of the deck should be a card', () => {
    // Given
    const deck = new Deck(shuffler)

    // When
    const firstCard = deck.getCard()

    // Then
    expect(firstCard).to.be.instanceOf(Card)
  })

  it('picking a card should remove the card from the deck', () => {
    // Given
    const deck = new Deck(shuffler)

    // When
    const firstCard = deck.getCard()

    // Then
    expect(deck.cards).to.not.contain(firstCard)
  })

  it('should call shuffle', () => {
    // Given
    const shuffler = { shuffle: sinon.stub() }

    new Deck(shuffler)

    // Then
    sinon.assert.calledOnce(shuffler.shuffle)
  })
})

describe('Card', () => {
  it('should have a value', () => {
    // Given
    const card = new Card('king')

    // Then
    expect(card).to.have.property('value', 'king')
  })

  it('should have a color', () => {
    // Given
    const card = new Card('king', 'heart')

    // Then
    expect(card).to.have.property('color', 'heart')
  })

})

it('Each player takes a turn to ask the other player for all the cards they have of a certain value e.g. ‘give me all your kings’, they must have at least one card of that value;')
it('Either:')
it('the asked player hands over the cards, a \'catch\', and the asking player’s turn continues, or')
it('the asked player has none and says ‘go fish!’, and it becomes their turn, and the asking player picks up another card from the deck;')
it('When a player acquires four of a kind (a ‘book’), they lay them face up on the table;')
it('When all the books are won, the game ends;')
it('The player with the most books wins.')
