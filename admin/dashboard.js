var ctx = document.getElementById('salesChart').getContext('2d');
var salesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March'],
        datasets: [{
            label: 'Monthly Sales',
            data: [10000, 12000, 15000],
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function(value, index, values) {
                        return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }
                }
            }]
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var value = data.datasets[0].data[tooltipItem.index];
                    return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
            }
        }
    }
});
