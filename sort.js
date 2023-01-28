
  function refreshPage() {
    location.reload();
  }





function sortList() {
  var list = document.getElementById("sorted");
  var elements = Array.from(list.getElementsByClassName("sortt"));

  elements.sort(function(a, b) {
    var textA = a.innerHTML.toLowerCase();
    var textB = b.innerHTML.toLowerCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });

  elements.forEach(function(element) {
    list.appendChild(element);
  });
}

function reverseSortList() {
  var list = document.getElementById("sorted");
  var elements = Array.from(list.getElementsByClassName("sortt"));

  elements.sort(function(a, b) {
    var textA = a.innerHTML.toLowerCase();
    var textB = b.innerHTML.toLowerCase();
    return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
  });

  elements.forEach(function(element) {
    list.appendChild(element);
  });
}



  // Scroll animations.--------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting){
      entry.target.classList.add('show');

    }
    else {
      entry.target.classList.remove('show');
    }
  });
});


const hiddenElements = document.querySelectorAll('.accordion-item');
hiddenElements.forEach((el) => observer.observe(el));




