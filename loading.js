// var loadingPage = document.querySelector(".loading-page");
// var loadingBar = document.querySelector(".loading-bar");

// function updateLoadingBar(percentage) {
//   loadingBar.style.width = percentage + "%";
// }

// window.addEventListener("load", function() {
//   setTimeout(function() {
//     loadingPage.style.display = "none";
//   }, 7000);
// });

var quotes = [
  "Did you know: Only one out of Two Shiny legendaires that have been spawned are caught?.",
  "Did you know: Revomast was the first champion ever of Revomon?.",
  "Did you know: Skadire doe's not have a physical Ice Type attack?.",
  "Did you know: You can hurt flying types with earth-type attacks if they used Roost first on the same turn?",
  "Did you know: Spectreat and Reignifir are the top revomon NFT collectables? Who knows how much are really left.",
  "Did you know: The First Legendary NFT Revomon sold for over 15k USD?",
  "Did you know: If you want a strong PvP team, Create one with revomon tiers of B and above.",
  "The CounterDex was created to replicate smogon but for revomon.",
  "Did you know: The monthly PvP tournaments are hosted by BeanHunter, Atila889 and SapDaddy.",
  "Did you know: A few (broken) Murdolls have moves they can never learn? like Dragon Dance and belly Drum?",
  "Did you know: The first shiny legendary ever spawned and caught was Khepreetle.",
  "Did you know: Only fully evolved revomon are on the CounterDex.",
  "Did you know: The first shiny rare that first spawned and caught was a dekute?",
  "Did you know: The Revo-Triva game was made deliberately to be Hard and frustrating?.",
  "Did you know: The Monthly revomon tournament gives away 200$ USD to the top 3 Players?",
  "Did you know: The Diamond Hands NFT will increase your Tier up by 1 stage except to master tier?",
  "Did you know: If you keep Refreshing the counterDex page, it will give you a different quote?",
  "Did you know: The Starter revomons are based on creatures from the legend of zelda?"
  
];

var loadingPage = document.querySelector(".loading-page");
var loadingBar = document.querySelector(".loading-bar");

function updateLoadingBar(percentage) {
  loadingBar.style.width = percentage + "%";
}

function showRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  loadingPage.innerHTML = quotes[randomIndex];
}

window.addEventListener("load", function() {
  showRandomQuote();
  setTimeout(function() {
    loadingPage.style.display = "none";
  }, 9000);
});

