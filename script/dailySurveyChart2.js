new Chart(document.getElementById("weekChart"), {
  type: 'line',
  data: {
    labels: ["0","1","2","3","4","5"],
    datasets: [{
        data: [1,0,0,2,2,1],
        label: "",
        borderColor: "#ff6384",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Dagsutvärderingar'
    }
  }
});
