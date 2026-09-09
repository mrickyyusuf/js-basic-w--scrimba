const btnPlusOneHome = document.querySelector(".btn-plus-one-home");
const btnPlusTwoHome = document.querySelector(".btn-plus-two-home");
const btnPlusThreeHome = document.querySelector(".btn-plus-three-home");
const btnPlusOneGuest = document.querySelector(".btn-plus-one-guest");
const btnPlusTwoGuest = document.querySelector(".btn-plus-two-guest");
const btnPlusThreeGuest = document.querySelector(".btn-plus-three-guest");
const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");
let countHome = 0;
let countGuest = 0;

document.addEventListener("click", (e) => {
    if (e.target === btnPlusOneHome) homeScore.textContent = plusOneHome()
    else if (e.target === btnPlusTwoHome) homeScore.textContent = plusTwoHome()
    else if (e.target === btnPlusThreeHome) homeScore.textContent = plusThreeHome()
    else if (e.target === btnPlusOneGuest) guestScore.textContent = plusOneGuest()
    else if (e.target === btnPlusTwoGuest) guestScore.textContent = plusTwoGuest()
    else if (e.target === btnPlusThreeGuest) guestScore.textContent = plusThreeGuest();
});

const plusOneHome = () => countHome += 1;
const plusTwoHome = () => countHome += 2;
const plusThreeHome = () => countHome += 3;
const plusOneGuest = () => countGuest += 1;
const plusTwoGuest = () => countGuest += 2;
const plusThreeGuest = () => countGuest += 3;