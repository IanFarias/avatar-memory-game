import { createPairOfCards } from ".."
import { ICard } from "../../interfaces/index"

export const createCards = (cardsList: string[]) => {
    const cards: ICard[] = []

    cardsList.forEach((name) => {
        cards.push(...createPairOfCards(name))
    })

    return cards
}