export const verifyEndGame = (pairsFounded: number, totalCards: number): boolean => {
    return pairsFounded === totalCards / 2
}