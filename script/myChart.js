var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Hur mycket tid har du lagt ner på studierna?", "Hur engagerad var du i dina studier?", "Hur upplävde du stämningen i klassen?", "Hur upplevde du tempot?", "Kursens literatur var enkel att förstå?", "Betygsätt din förståelse för kursens kursstruktur", "Betygsätt din njutning av kursen", "Hur mycket praktisk kunskap har du fått från kursen?", "Vilken övergripande betyg skulle du ge instruktören?", "Vilken övergripande betyg skulle du ge kursen?"],
        datasets: [{
            label: '# of Votes',
            data: [3, 5, 3, 3, 2, 3, 1, 5, 2, 1, 3, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
