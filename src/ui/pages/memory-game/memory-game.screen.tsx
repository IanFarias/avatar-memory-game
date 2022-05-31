import { useEffect, useState } from 'react'
import { aangtheme, zukotheme } from '../../../assets'
import { CARDS } from '../../../constants'
import { createCards, verifyPairOfCards, flipCard, verifyEndGame, shuffleCards } from '../../../core'
import { CardSelected } from '../../../core/types'
import { ICard } from '../../../interfaces'
import { Card } from '../../components'
import { Board, EndGame } from './components'
import './memory-game.screen.css'

const showCards = (cards: ICard[]): ICard[] => {
  const flippedCards = cards.map(card => (card ? { ...card, isTurnedOver: true } : card))

  return flippedCards
}

const hideCards = (cards: ICard[]): ICard[] => {
  const flippedCards = cards.map(card => (card ? { ...card, isTurnedOver: false } : card))

  return flippedCards
}

const MemoryGameScreen = () => {
  const [gameOwn, setGameOwn] = useState<boolean>(false)
  const [pairsFounded, setPairsFounded] = useState<number>(0)
  const [cardSelected, setCardSelected] = useState<null | CardSelected>(null)
  const [cards, setCards] = useState<ICard[]>([...shuffleCards(createCards(CARDS))])

  useEffect(() => {
    setCards(current => showCards(current))

    const timeout = setTimeout(() => {
      setCards(current => hideCards(current))
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (verifyEndGame(pairsFounded, cards.length)) {
      setGameOwn(true)
    }
  }, [pairsFounded, cards.length])

  const handleClick = (currentCard: CardSelected) => {
    //vira a carta selecionada
    setCards(current => current.map(card => (card.id === currentCard.id ? flipCard(card) : card)))

    //guarda essa carta caso seja a primeira de uma dupla selecionada
    if (!cardSelected) {
      setCardSelected({ ...currentCard })
      return
    }

    // se carta selecionada for o par da anterior, contabiliza mais um par achado
    if (verifyPairOfCards(cardSelected.pairId, currentCard.pairId)) {
      setPairsFounded(currentValue => currentValue + 1)
      setCards(currentValue =>
        currentValue.map(card =>
          card.id === cardSelected.id || card.id === currentCard.id ? { ...card, clickable: false } : card
        )
      )
      setCardSelected(null)
      return
    }

    //caso não for o seu par, vira as cartas para baixo
    setTimeout(() => {
      setCards(currentValue =>
        currentValue.map(card => (card.id === cardSelected.id || card.id === currentCard.id ? flipCard(card) : card))
      )
      setCardSelected(null)
    }, 500)
  }

  return (
    <main className="memory-game--container">
      {!gameOwn && cards && (
        <Board>
          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                id={card?.id}
                pairId={card?.pairId}
                clickable={card?.clickable}
                flipped={card?.isTurnedOver}
                image={card?.image}
                onClick={handleClick}
              />
            )
          })}
        </Board>
      )}
      {gameOwn && <EndGame />}
    </main>
  )
}

export { MemoryGameScreen }
