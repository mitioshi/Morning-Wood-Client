import { HOME_PAGE_LOADED } from "../action_types";

export default (state = {}, actions) => {
    switch (actions.type) {
        case HOME_PAGE_LOADED:
            return {
                ...state,
            }
        default:
            return state;
    }
};