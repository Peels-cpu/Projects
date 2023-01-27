// binance and revo tickers
// let ws = new WebSocket('wss://stream.binance.com:9443/ws/bnbeur@trade');
// let binanace = document.getElementById('BinanaceTicker');
// ws.onmessage = (event) => {
//     let stockObject = JSON.parse(event.data);
//     binanace.innerText = parseFloat(stockObject.p).toFixed(2) ;
// }

// let bnb = document.getElementById('bnb');
// let revo = document.getElementById('revo');


// var liveprice = {
//     "async": true,
//     "scroosDomain": true,
//     "url": "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin%2Crevomon&vs_currencies=usd",

//     "method": "GET",
//     "headers": {}
// }

// $.ajax(liveprice).done(function (response){
//     bnb.innerHTML = response.binancecoin.usd;
//     revo.innerHTML = response.revomon.usd;

// });


let bnb = document.getElementById('bnb');
let revo = document.getElementById('revo');

function updatePrices() {
  var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin%2Crevomon&vs_currencies=usd",
    "method": "GET",
    "headers": {}
  }

  $.ajax(liveprice).done(function (response) {
    bnb.innerHTML = response.binancecoin.usd;
    revo.innerHTML = response.revomon.usd;
  });
}

// Make the initial request
updatePrices();

// Set the interval for subsequent requests
setInterval(updatePrices, 20000);





