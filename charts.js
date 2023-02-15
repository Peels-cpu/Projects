var xValues = ["HP", "Atk", "Def", "Sp.A", "Sp.D","Spe"];
var yValues = [100, 120, 85, 45, 105, 125];
var barColors = ["Yellow", "Red","Green","Purple","Orange", "Pink"];

new Chart("skadireChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Skadire Stats"
    }
  }
});