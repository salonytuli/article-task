import { GET_ARTICLES } from "./index";

const articles = require("../data/article")

export const getArticleData = () => {
    return ({
        type: GET_ARTICLES,
        payload: articles,
    });
};
