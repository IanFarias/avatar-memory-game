import { ICard } from "../../interfaces";


export const flipCard = (card: ICard, isTurnedOver: boolean, clickable: boolean): ICard => {
    const cardFlipped = { ...card, isTurnedOver: isTurnedOver, clickable: clickable } 
     
    return cardFlipped
}