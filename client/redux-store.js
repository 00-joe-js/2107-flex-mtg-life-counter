import { createStore } from "redux";

const initialState = {
    player1Health: 20,
    player2Health: 20
};

const reducer = (currentState = initialState, action) => {

    let newState = currentState;

    if (action.type === "DAMAGE_PLAYER_1") {
        newState = {
            player1Health: currentState.player1Health - 1,
            player2Health: currentState.player2Health
        };
    } else if (action.type === "DAMAGE_PLAYER_2") {
        newState = {
            player1Health: currentState.player1Health,
            player2Health: currentState.player2Health - 1
        };
    } else if (action.type === "HEAL_PLAYER_1") {
        newState = {
            player1Health: currentState.player1Health + 1,
            player2Health: currentState.player2Health
        };
    } else if (action.type === "HEAL_PLAYER_2") {
        newState = {
            player1Health: currentState.player1Health,
            player2Health: currentState.player2Health + 1
        };
    }

    return newState;

};

const store = createStore(reducer);
export default store;