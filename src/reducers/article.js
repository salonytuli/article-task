import { GET_ARTICLES } from "../actions/index"

const Initial_state = {
    article_data: []
};
export default (state= Initial_state,action)=>{
    switch (action.type) {
        case GET_ARTICLES:{
            return{
                ...state,
                article_data: action.payload
            };
        }
        default:
            return state;

    }
}
