import { GET_FRIENDS } from "../actions/index"

const Initial_state = {
    friend_data: []
};
export default (state= Initial_state,action)=>{
    switch (action.type) {
        case GET_FRIENDS:{
            return{
                ...state,
                friend_data: action.payload
            };
        }
        default:
            return state;

    }
}
