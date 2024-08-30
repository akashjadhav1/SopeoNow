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
        height: 200,
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
            type: 'bar',
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


//pagination and stats data 

document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector("#docStatsTable tbody");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    const pageNumbers = document.getElementById("pageNumbers");
    const searchInput = document.getElementById("search");
    const rowsPerPage = 4;
    let currentPage = 1;

    let filteredData = data[0].docstats;
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    // Function to display rows for the current page
    function displayRows() {
        // Clear the existing rows
        tableBody.innerHTML = '';

        // Calculate start and end indices for the current page
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = Math.min(startIndex + rowsPerPage, filteredData.length);

        // Add rows for the current page
        for (let i = startIndex; i < endIndex; i++) {
            const stat = filteredData[i];
            
            // Create a new row element
            const row = document.createElement("tr");
            row.classList.add("custom-row-style");

            const nameCell = document.createElement("td");
            nameCell.textContent = stat.doc_name;

            const countCell = document.createElement("td");
            countCell.textContent = stat.count;

            const timeCell = document.createElement("td");
            timeCell.textContent = Math.round(stat.avg_visit_tm / 60); // Convert time to minutes

            row.appendChild(nameCell);
            row.appendChild(countCell);
            row.appendChild(timeCell);

            tableBody.appendChild(row);
        }

        // Update pagination controls
        updatePaginationControls();
    }

    // Function to update pagination controls
    function updatePaginationControls() {
        pageNumbers.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageNumber = document.createElement("span");
            pageNumber.textContent = i;
            pageNumber.classList.add("page-number");

            if (i === currentPage) {
                pageNumber.classList.add("active");
            }

            pageNumber.addEventListener("click", function() {
                currentPage = i;
                displayRows();
            });

            pageNumbers.appendChild(pageNumber);
        }

        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
    }

    // Event listeners for pagination buttons
    prevButton.addEventListener("click", function() {
        if (currentPage > 1) {
            currentPage--;
            displayRows();
        }
    });

    nextButton.addEventListener("click", function() {
        if (currentPage < totalPages) {
            currentPage++;
            displayRows();
        }
    });

    // Function to filter data based on search input
    function filterData() {
        const query = searchInput.value.toLowerCase();
        filteredData = data[0].docstats.filter(stat =>
            stat.doc_name.toLowerCase().includes(query)
        );
        currentPage = 1; // Reset to first page after filtering
        displayRows();
    }

    // Event listener for search input
    searchInput.addEventListener("input", filterData);

    // Initial display
    displayRows();
});