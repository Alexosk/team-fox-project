new Chart(document.getElementById("weekChart"), {
  type: 'line',
  data: {
    labels: ["Måndag","Tisdag","Onsdag","Torsdag","Fredag"],
    datasets: [{
        data: [20,26,14,20,33],
        label: "Glad",
        borderColor: "#36a2eb",
        fill: false
      }, {
        data: [10,6,9,12,0],
        label: "Neutral",
        borderColor: "#ffce56",
        fill: false
      }, {
        data: [3,1,7,1,0],
        label: "Ledsen",
        borderColor: "#ff6384",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Vecka 41'
    }
  }
});
