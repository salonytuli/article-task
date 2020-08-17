import { combineReducers } from 'redux';
import ArticleReducer from './article'
import FriendReducer from './friend'

export default combineReducers({ home:ArticleReducer,friend:FriendReducer})
