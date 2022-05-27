import { InitialScreen } from "../ui/pages";
import PATHS from "./paths";

const ROUTER = {
    INITIAL: {
        path: PATHS.initial,
        component: () => <InitialScreen />
    }
}

export default ROUTER