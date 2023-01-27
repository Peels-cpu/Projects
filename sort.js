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

// Refresh to top speed format button
document.getElementById("refresh-button").addEventListener("click", function(){
  location.reload();
});



// function sortList() {
//     var list, i, switching, b, shouldSwitch;
//     list = document.getElementById("sorted");
//     switching = true;
//     /* Make a loop that will continue until
//     no switching has been done: */
//     while (switching) {
//       // Start by saying: no switching is done:
//       switching = false;
//       b = list.getElementsByClassName("sortt");
//       // Loop through all list items:
//       for (i = 0; i < (b.length - 1); i++) {
//         // Start by saying there should be no switching:
//         shouldSwitch = false;
//         /* Check if the next item should
//         switch place with the current item: */
//         if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
//           /* If next item is alphabetically lower than current item,
//           mark as a switch and break the loop: */
//           shouldSwitch = true;
//           break;
//         }
//       }
//       if (shouldSwitch) {
//         /* If a switch has been marked, make the switch
//         and mark the switch as done: */
//         b[i].parentNode.insertBefore(b[i + 1], b[i]);
//         switching = true;
//       }
//     }
//   };

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




