
const oldLabels = [
   'div#comment-input textarea',
  'div#viewerContainer',
  'li.comments-list-toggle',
  'li.comments-template-toggle',
  'div#selected-emotion p'
];
const oldData = [42571, 4665, 3184, 2133, 2031];


const oldbar = document.getElementById('oldChart').getContext('2d');
new Chart(oldbar, {
  type: 'bar', // chart type
  data: {
    labels: oldLabels, // x-axis labels
    datasets: [{
      label: 'Click Count',
      data: oldData,
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

const newLabels = [ 
    "div#comment-input textarea", 
    "div#viewerContainer",
    'div.textLayer span ',
    'div.textLayer',
  ' li.comments-list-toggle']

const newData = [5195, 172,101,95,46]
const newbar = document.getElementById('newChart').getContext('2d');
new Chart(newbar, {
  type: 'bar', // chart type
  data: {
    labels: newLabels, // x-axis labels
    datasets: [{
      label: 'Click Count',
      data: newData,
      backgroundColor: ['#0a2a45', '#137cd4', '#6bbcff']
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true } 
    }
  }
});

window.onload = function () {
  var heatmapInstance = h337.create({
    container: document.getElementById("heatmap"),
    radius: 30,
    maxOpacity: 0.6,
    minOpacity: 0,
    blur: 0.85
  });

  fetch("heatmap_data.json")
    .then(response => response.json())
    .then(data => {
      const heatmapData = {
        max: 10,
        data: data.map(coord => ({
          x: parseInt(coord.x),
          y: parseInt(coord.y),
          value: 1 
        }))
      };
      // create map
      heatmapInstance.setData(heatmapData);
    })
};







