import { ICard } from "../../interfaces";


export const flipCard = (card: ICard): ICard => {
    const cardFlipped = { ...card, isTurnedOver: !card.isTurnedOver, clickable: !card.clickable } 
     
    return cardFlipped
}