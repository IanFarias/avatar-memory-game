import { GalleryScreen, InitialScreen, MemoryGameScreen, MenuScreen } from "../ui/pages";
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
    },
    GALLERY: {
        path: PATHS.GALLERY,
        component: () => <GalleryScreen />
    }
}

export default ROUTER 