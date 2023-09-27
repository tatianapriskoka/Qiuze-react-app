import { combineReducers, configureStore } from "@reduxjs/toolkit";

const ADD_CARD = 'ADD_CARD'
const CHANGE_CARD = 'CHANGE_CARD'
const DELETE_CARD = 'DELETE_CARD'

const postListReducer = (state = [], action) => {

    switch (action.type) {
        case ADD_CARD: return action.itemList;
        case CHANGE_CARD:
            return state.map(item =>
                item.id === action.id ? { ...item, liked: !item.liked } : item
            )
        case DELETE_CARD:
            return state.filter(item =>
                item.id !== action.id
            )
        default: return state;
    }
}

export const addCardList = (itemList) => {
    return {
        type: ADD_CARD,
        itemList: itemList
    }
}

export const toggleItem = id => {
    return {
        type: CHANGE_CARD,
        id
    }
}

export const deleteItem = id => {
    return {
        type: DELETE_CARD,
        id
    }
}

const reducers = combineReducers({ itemListState: postListReducer })

export const store = configureStore({ reducer: reducers })