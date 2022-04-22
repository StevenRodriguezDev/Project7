const trafficCanvas = document.getElementById('traffic-chart');
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-9", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750,1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .5)',
        borderWidth: 1,
        fill: true,
        hoverRadius: 4,
        tension: .4,
    }]
}

let trafficOptions = {
    aspectRatio: 2.5,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    date: trafficData,
    options: trafficOptions
});



