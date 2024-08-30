import { data, keyMetrics } from './data.js';

document.addEventListener('DOMContentLoaded', function () {
    // Extract data from the JSON object
    var triageIntervalData = data[0].graphs.AccidentEmergency.triage["comparison-1"].y;
    // console.log("triageIntervalData",triageIntervalData)
    
    const triageZoneData = data[0].graphs.AccidentEmergency.Zone["barpie-1"].bar;
    const patientIntervalData = data[0].graphs.AccidentEmergency.interval["barline-1"].y;
    const patientDoctorData = data[0].graphs.AccidentEmergency.Doctor["barline-1"].y;

    var triageData = data[0].graphs.AccidentEmergency.triage["comparison-1"];
    
   





    var options = {
        series: [{
        name: 'Traige done',
        type: 'column',
        data: triageData.y[0].data,
      }, {
        name: 'Traige not done',
        type: 'column',
        data: triageData.y[2].data,
      }, {
        name: 'Traige done(by Avg)',
        type: 'line',
        data: triageData.y[2].data,
      },
      ],
        chart: {
        height: 240,
        type: 'line',
        stacked: false
      },
      dataLabels: {
        enabled:false
      },
      stroke: {
        width: [1, 1, 4]
      },
     
      xaxis: {
        categories: triageData.x,
      },
      yaxis: [
        {
          labels: {
            show:false
          },
        }
      ],
      
      legend: {
       horizontalAlign: 'bottom', // Align the legend horizontally
    // Adjust horizontal position, set to 0 to center
    showForSingleSeries: true, // Optionally show the legend even if there's only one series
    // Allows more flexibility in positioning
    position: 'bottom', // Position the legend at the top
   // Make the legend float
    align: 'bottom' // Center align the legend
      }
      };

      var chart = new ApexCharts(document.querySelector("#chartTriageInterval"), options);
      chart.render();




    // Triage by Zone Chart
    var triageZoneOptions = {
        series: [
            {
                name: 'Total Visits',
                data: triageZoneData.y[0].data,
                type: 'column'
            },
            {
                name: 'Average Time',
                data: triageZoneData.y[1].data, // Ensure this is the correct index for Average Time
                type: 'area'
            }
        ],
        chart: {
            height: 250,
            type: 'line', // The main chart type, which will be overridden by individual series types
            stacked: false,
        },
        stroke: {
            width: [0, 2], // Adjust widths to match the series
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '30%' // Adjust column width
            }
        },
        fill: {
            opacity: [0.85, 0.25],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: 'vertical',
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100]
            }
        },
        xaxis: {
            categories: triageZoneData.x, // Ensure this matches the categories in your data
        },
        yaxis: [
            {
               
                labels: {
                    show: false // Show y-axis labels
                }
            },
            {
               
    
                labels: {
                    show: false
                }
            }
        ],
        legend: {
            position: 'bottom',
            horizontalAlign: 'center'
        },
        tooltip: {
            shared: true,
            intersect:false,
        }
    };
    
    // Render the chart
    var chartTriageZone = new ApexCharts(document.querySelector("#chartTriageZone"), triageZoneOptions);
    chartTriageZone.render();
    
    

    // Patient by Interval Chart
    var patientIntervalOptions = {
        series: [
            {
                name: patientIntervalData[0].name,
                data: patientIntervalData[0].data
            },
            {
                name: patientIntervalData[1].name,
                data: patientIntervalData[1].data
            }
        ],
        chart: {
            type: 'line',
            height: 250
        },
        xaxis: {
            categories: data[0].graphs.AccidentEmergency.interval["barline-1"].x
        }
    };
    var chartPatientInterval = new ApexCharts(document.querySelector("#chartPatientInterval"), patientIntervalOptions);
    chartPatientInterval.render();

    // Patient by Doctor Chart
    var patientDoctorOptions = {
        series: [
            {
                name: patientDoctorData[0].name,
                data: patientDoctorData[0].data
            },
            {
                name: patientDoctorData[1].name,
                data: patientDoctorData[1].data
            }
        ],
        chart: {
            type: 'bar',
            height: 250
        },
        xaxis: {
            categories: data[0].graphs.AccidentEmergency.Doctor["barline-1"].x
        }
    };
    var chartPatientDoctor = new ApexCharts(document.querySelector("#chartPatientDoctor"), patientDoctorOptions);
    chartPatientDoctor.render();
});

// Key Metrics Logic
document.addEventListener('DOMContentLoaded', function () {
    const keyMetricsDiv = document.querySelector('.key-metrics');
    keyMetrics.keyMetrics.forEach(metric => {
        // Create the HTML string
        const htmlContent = `
            <div class="child2">
                <div>
                    <p class="sub-child1">${metric.title}</p>
                </div>
                <div class="sub-child2">
                    <p class="reg">${metric.label}</p>
                    <p class="time">${metric.time}</p>
                </div>
            </div>
        `;
        
        // Insert the HTML string after the <p class="child1"> element
        keyMetricsDiv.insertAdjacentHTML('beforeend', htmlContent);
    });
});




const tableBody = document.querySelector("#docStatsTable tbody");
const docstats = data[0].docstats

docstats.forEach(stat => {
    // Create a new row
    const row = document.createElement("tr");
    row.classList.add("custom-row-style");

    // Create cells for doctor name, patient count, and average visit time
    const nameCell = document.createElement("td");
    nameCell.textContent = stat.doc_name;
    
    const countCell = document.createElement("td");
    countCell.textContent = stat.count;
    
    const timeCell = document.createElement("td");
    timeCell.textContent = Math.round(stat.avg_visit_tm / 60); // Convert time to minutes
    
    // Append cells to the row
    row.appendChild(nameCell);
    row.appendChild(countCell);
    row.appendChild(timeCell);
    
    // Append row to the table body
    tableBody.appendChild(row);
});
