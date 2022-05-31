import { InitialScreen, MemoryGameScreen, MenuScreen } from "../ui/pages";
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
    MENU: {
        path: PATHS.MENU,
        component: () => <MenuScreen />
    }
}

export default ROUTER 