import { ICard } from "../../interfaces";

export const shuffleCards = (cards: ICard[]): ICard[] => {
    const cardsList = [...cards];
    let currentIndex = cardsList.length - 1;

    while(currentIndex > 0) {
        const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
        [cardsList[currentIndex], cardsList[randomIndex]] = [cardsList[randomIndex], cardsList[currentIndex]];
        currentIndex--;
    }

    return cardsList
  };