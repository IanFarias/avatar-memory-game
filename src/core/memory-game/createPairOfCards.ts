import { ICard } from "../../interfaces/index"


export const createPairOfCards = (card: string): ICard[]=> {
    const pair = [ 
        {
            id: card + 1,
            image: card,
            isTurnedOver: false,
            pairId: card,
            clickable: true,
        },
        {
            id: card + 2,
            image: card,
            isTurnedOver: false,
            pairId: card,
            clickable: true
        }
    ]

    return pair
}