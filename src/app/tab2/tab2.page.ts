import { Component, ViewChild,ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { get, set } from "../storage.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild("barChart", { static: true }) barCanvas: ElementRef;
  @ViewChild("lineCanvas") lineCanvas: ElementRef;
  @ViewChild("doughnutCanvas") doughnutCanvas: ElementRef;

  barChart: any;
  lineChart:any;
  doughnutChart:any;
  colorArray: any;
  public boughtitems:any;
  public uniqueboughtitems:any;
  public uniqueboughtitemsCount:any;
  public dataset:any;


  constructor() { }

  ionViewDidEnter() {
    this.componentDidLoad();
    this.countItems();
    this.setupdata();
    this.createBarChart();
    this.doughnutChartMethod();
    this.lineChartMethod();
  }

  async componentDidLoad() {
    this.boughtitems = await get("myboughtItems");

  }
  countItems()
  {
    var count = [];
    var uniquObjects= [];
    var i=0;
  for (var item in this.boughtitems)
  {
    let itemname= this.boughtitems[item].title;
    itemname= itemname.trim();
    if(uniquObjects.includes(itemname))
    {
      let indexbought= uniquObjects.indexOf(itemname);
      count[indexbought]= count[indexbought]+1;
    }
    else
    {
      uniquObjects[i]= itemname;
      count[i]=1;
      i=i+1;   
    }
  }
  this.uniqueboughtitems= uniquObjects;
  this.uniqueboughtitemsCount=count;

}

  setupdata()
  {
    if (this.boughtitems!= undefined)
    {
      this.dataset = this.boughtitems.map(function(d, i) {
        return {
          timestamp: d.timestamp,
          title: d.title,
        };
      })
    }

  }
  parseDate(input) {
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(
      input.slice(0, 4),
      input.slice(4, 6) - 1,
      input.slice(6, 8),
      input.slice(9, 11),
      input.slice(11, 13),
      input.slice(13, 15)
    ); // months are 0-based
  }

  parsejustDate(input) {
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(input.slice(0, 4), input.slice(4, 6) - 1, input.slice(6, 8)); // months are 0-based
  }

  parsejustTime(input) {
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return (
      input.slice(9, 11) + ":" + input.slice(11, 13) + ":" + input.slice(13, 15)
    );
  }
   parseTimeOfDay(input) {
    //EarlyMorning Morning Afternoon Evening Night AfterMidnight
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    let hr = input.slice(9, 11);
    if (hr > 5 && hr < 12) {
      return " Morning";
    } else if (hr >= 12 && hr < 18) {
      return "Day";
    } else if (hr >= 18 && hr < 24) {
      return "Evening";
    } else if (hr >= 0 && hr < 6) {
      return "Night";
    }
    return "";
  }

  createBarChart()
  {
      this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: this.uniqueboughtitems,
        datasets: [
          {
            label: "Bought Items`",
            data: this.uniqueboughtitemsCount,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }



doughnutChartMethod() {
  this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
    type: 'doughnut',
    data: {
      labels: this.uniqueboughtitems,
      datasets: [{
        label: 'Total Bought Items',
        data: this.uniqueboughtitemsCount,
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        hoverBackgroundColor: [
          '#FFCE56',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6384'
        ]
      }]
    }
  });
}

lineChartMethod() {
  this.lineChart = new Chart(this.lineCanvas.nativeElement, {
    type: 'line',
    data: {
      labels: this.uniqueboughtitems,
      datasets: [
        {
          label: 'Sell per week',
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.uniqueboughtitemsCount,
          spanGaps: false,
        }
      ]
    }
  });
}




}