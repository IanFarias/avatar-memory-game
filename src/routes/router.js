import { InitialScreen, MemoryGameScreen } from "../ui/pages";
import PATHS from "./paths";

const ROUTER = {
    INITIAL: {
        path: PATHS.INITIAL,
        component: () => <InitialScreen />
    },
    GAME: {
        path: PATHS.GAME,
        component: () => <MemoryGameScreen />
    },
}

export default ROUTER 