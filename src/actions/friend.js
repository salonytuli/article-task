import { GET_FRIENDS } from "./index";

const friends = require("../data/friends")

export const getFriendsData = () => {
    return ({
        type: GET_FRIENDS,
        payload: friends,
    });
};
