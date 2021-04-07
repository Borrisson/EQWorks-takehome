import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import { useEffect } from "react";

export default function Graph({ state }) {
  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    const gradient = ctx.createLinearGradient(0, 600, 0, 0);

    gradient.addColorStop(0, "#00800d");
    gradient.addColorStop(1, "#66ff75");

    const chart = new Chart(ctx, {
      type: "bar",
      options: {
        plugins: {
          title: {
            text: "Chart.js Time Scale",
            display: true,
          },
        },
        scales: {
          x: {
            type: "time",
            time: {
              displayFormat: "DD T",
            },
            title: {
              display: true,
              text: "Date",
            },
          },
          y: {
            title: {
              display: true,
              text: "Events",
            },
          },
        },
      },
      data: {
        datasets: [
          {
            label: "Number of Daily Events",
            data: state.dailyEvents,
            parsing: {
              yAxisKey: "events",
              xAxisKey: "date",
            },
            backgroundColor: gradient,
          },
          {
            type: "line",
            label: "Number of Hourly Events",
            data: state.hourlyEvents,
            parsing: {
              yAxisKey: "events",
              xAxisKey: "date",
            },
            order: -1,
            backgroundColor: "cyan",
            borderColor: "cyan",
            color: "cyan",
          },
        ],
      },
    });
    return () => chart.destroy();
  });
  return (
    <div id="chartContainer">
      <canvas id="myChart" aria-label="chart" role="img" />
    </div>
  );
}
