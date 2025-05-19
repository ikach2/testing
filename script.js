
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
  type: 'bar', // chart type
  data: {
    labels: ['AI Generated', 'Custom Made', 'Suggested'], // x-axis labels
    datasets: [{
      label: 'Votes',
      data: [12, 19, 3] ,// values for each bar
      backgroundColor: ['#0a2a45', '#137cd4', '#6bbcff']
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
    labels: ['Happy', 'Confused', 'Excited'],
    datasets: [{
      label: 'Emotions of Misty',
      data: [30, 45, 25],
      backgroundColor: ['#ffd663', '#90fce0', '#eb91ff']
    }]
  },
  options: {
    responsive: true
  }
});