import { createStore } from "redux";

const initialState = {
    player1Health: 20,
    player2Health: 20
};

// Action constants.
const HEAL_PLAYER_1 = "HEAL_PLAYER_1";
const HEAL_PLAYER_2 = "HEAL_PLAYER_2";
const DAMAGE_PLAYER_1 = "DAMAGE_PLAYER_1";
const DAMAGE_PLAYER_2 = "DAMAGE_PLAYER_2";

// Action creator
// This function when invoked "creates" an action object
// for anywhere in your application to dispatch.
// This is so that the other parts of your application
// DO NOT NEED TO KNOW how to dispatch an instruction to the store.
export const healPlayer1 = () => {
    return { type: HEAL_PLAYER_1 };
};
export const damagePlayer1 = () => {
    return { type: DAMAGE_PLAYER_1 };
};
export const healPlayer2 = () => {
    return { type: HEAL_PLAYER_2 };
};
export const damagePlayer2 = () => {
    return { type: DAMAGE_PLAYER_2 };
};

// When an action is dispatched (store.dispatch)
// take in the current state of the store and the action object
// and produce the next state.
const reducer = (currentState = initialState, action) => {

    if (action.type === DAMAGE_PLAYER_1) {
        return {
            player1Health: currentState.player1Health - 1,
            player2Health: currentState.player2Health
        };
    } else if (action.type === DAMAGE_PLAYER_2) {
        return {
            player1Health: currentState.player1Health,
            player2Health: currentState.player2Health - 1
        };
    } else if (action.type === HEAL_PLAYER_1) {
        return {
            player1Health: currentState.player1Health + 1,
            player2Health: currentState.player2Health
        };
    } else if (action.type === HEAL_PLAYER_2) {
        return {
            player1Health: currentState.player1Health,
            player2Health: currentState.player2Health + 1
        };
    }

    return currentState;

};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;

window.store = store;