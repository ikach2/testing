
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
  type: 'bar', // chart type
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green'], // x-axis labels
    datasets: [{
      label: 'Votes',
      data: [12, 19, 3, 5], // values for each bar
      backgroundColor: ['red', 'blue', 'yellow', 'green']
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true } // y-axis starts at 0
    }
  }
});
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{
      label: 'Sales',
      data: [10, 20, 15, 25],
      borderColor: 'blue',
      fill: false // don’t fill under the line
    }]
  },
  options: {
    responsive: true
  }
});
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['Apples', 'Bananas', 'Cherries'],
    datasets: [{
      label: 'Fruit Share',
      data: [30, 45, 25],
      backgroundColor: ['red', 'yellow', 'purple']
    }]
  },
  options: {
    responsive: true
  }
});