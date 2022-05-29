import { CardSelected } from '../../../core/types'
import './card.css'

type CardProps = {
  id: any
  pairId: string
  image: string
  flipped: boolean
  clickable: boolean
  onClick: (card: CardSelected) => void
}

const Card = ({ image, flipped, clickable, onClick, pairId, id, ...props }: CardProps) => {
  const handleClick = () => {
    if (clickable) {
      onClick({ id: id, pairId: pairId })
    }
  }

  const cardImage = require(`../../../assets/img/cards/${image}.png`)

  return (
    <div className={`card ${flipped ? 'flip' : ''}`} onClick={handleClick} id={id} {...props}>
      <div className="card-front">
        <img src={cardImage} alt="frente do cartao" />
      </div>
      <div className="card-back"></div>
    </div>
  )
}

export { Card }
