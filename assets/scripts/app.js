// Its all about charts and graphs
// Area Chart
const areaCtx = document.getElementById('areaChart').getContext('2d');
const areaChart = new Chart(areaCtx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // X-axis labels
    datasets: [{
      label: 'Requests', // Label for the dataset
      data: [1500, 2300, 3000, 3500, 2800, 3200, 4000], // Y-axis data points
      fill: true, // Fill the area below the line
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Area fill color
      borderColor: 'rgba(75, 192, 192, 1)', // Line color
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      y: {
        min: 1000, // Minimum value for Y-axis
        max: 5000, // Maximum value for Y-axis
        ticks: {
          stepSize: 500 // Y-axis interval
        }
      }
    }
  }
});

 // Bar Chart
 const barCtx = document.getElementById('barChart').getContext('2d');
 const barChart = new Chart(barCtx, {
   type: 'bar', // Type of chart
   data: {
     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // X-axis labels
     datasets: [{
       label: 'Requests', // Label for the dataset
       data: [300, 450, 600, 900, 750, 1000], // Y-axis data points
       backgroundColor: 'rgba(54, 162, 235, 0.7)', // Blue color for the bars
       borderColor: 'rgba(54, 162, 235, 1)', // Border color for the bars
       borderWidth: 2
     }]
   },
   options: {
     scales: {
       y: {
         min: 0, // Minimum value for Y-axis
         max: 1000, // Maximum value for Y-axis
         ticks: {
           stepSize: 500 // Y-axis interval
         }
       }
     }
   }
 });


 //workflow js
//  <!-- JavaScript for Dynamic Interaction -->

    //  let currentStep = 1;

    //  function completeStep(stepNumber) {
    //      const step = document.getElementById(`step${stepNumber}`);
    //      const nextStep = document.getElementById(`step${stepNumber + 1}`);
         
    //      // Mark current step as completed
    //      step.classList.add('completed');
    //      step.querySelector('.step-status').classList.remove('active');
    //      step.querySelector('.step-status').classList.add('completed');
    //      step.querySelector('.step-status').innerText = 'Completed';
         
    //      // If there is a next step, activate it
    //      if (nextStep) {
    //          nextStep.classList.add('active');
    //          nextStep.querySelector('.step-status').classList.add('active');
    //          nextStep.querySelector('.step-status').innerText = 'Active';
    //      }

    //      currentStep++;
    //  }
