var loadingPage = document.querySelector(".loading-page");
var loadingBar = document.querySelector(".loading-bar");

function updateLoadingBar(percentage) {
  loadingBar.style.width = percentage + "%";
}

window.addEventListener("load", function() {
  setTimeout(function() {
    loadingPage.style.display = "none";
  }, 10000);
});

