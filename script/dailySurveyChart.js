new Chart(document.getElementById("weekChart"), {
  type: 'line',
  data: {
    labels: ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15",
    "16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31",""],
    datasets: [{
        data: [1,0,0,2,2,1,1,1,2,2,2,0,1,1,2,0,0,2,2,2,2,1,1,0,0,0,2,2,1,2,1,2.5],
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
