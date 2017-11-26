new Chart(document.getElementById("weekChart"), {
  type: 'line',
  data: {
    labels: ["35","36","37","38","39","40","41"],
    datasets: [{
        data: [2,2,5,4,3,1,5],
        label: "Hur upplever du tempot?",
        borderColor: "#36a2eb",
        fill: false
      }, {
        data: [4,4,3,3,5,3,5],
        label: "Hur engagerad anser du själv att du är i dina studier?",
        borderColor: "#ffce56",
        fill: false
      }, {
        data: [3,1,4,5,3,2,4],
        label: "Hur upplever du stämningen i klassen?",
        borderColor: "#ff6384",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Veckoreflekteringar'
    }
  }
});
