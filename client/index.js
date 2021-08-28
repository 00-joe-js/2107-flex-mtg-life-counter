import store from "./redux-store";

window.addEventListener("DOMContentLoaded", () => {

  const player1 = document.querySelector("#player-1-score");
  const player2 = document.querySelector("#player-2-score");

  const player1Up = player1.querySelector("h4:first-child");
  const player1Down = player1.querySelector("h4.down-arrow");

  player1Up.addEventListener("click", () => {
    store.dispatch({ type: "HEAL_PLAYER_1" });
  });
  player1Down.addEventListener("click", () => {
    store.dispatch({ type: "DAMAGE_PLAYER_1" });
  });

  const player2Up = player2.querySelector("h4:first-child");
  const player2Down = player2.querySelector("h4.down-arrow");

  player2Up.addEventListener("click", () => {
    store.dispatch({ type: "HEAL_PLAYER_2" });
  });
  player2Down.addEventListener("click", () => {
    store.dispatch({ type: "DAMAGE_PLAYER_2" });
  });

  const player1Score = player1.querySelector("h3");
  const player2Score = player2.querySelector("h3");

  store.subscribe(() => {
    const state = store.getState();
    player1Score.innerText = state.player1Health;
    player2Score.innerText = state.player2Health;
  });

});