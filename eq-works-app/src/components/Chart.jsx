import Chart from "chart.js/auto";

import { useEffect } from "react";

export default function Graph({ state }) {
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: state.dailyEvents.map((el) => el.date),
        datasets: [
          {
            label: "Number of Daily Events",
            data: state.dailyEvents.map((el) => el.events),
            xAxesId: "daily",
            backgroundColor: [
              "Red",
              "Blue",
              "Yellow",
              "Green",
              "Purple",
              "Orange",
            ],
          },
          {
            type: "line",
            label: "Number of Hourly Events",
            data: state.hourlyEvents.map((el) => el.hour),
            xAxisId: "hourly",
            backgroundColor: [
              "Blue",
              "Yellow",
              "Green",
              "Purple",
              "Orange",
              "Red",
            ],
            borderColor: "black",
            borderWidth: 2,
            order: -1,
          },
        ],
        options: {
          scales: {
            x: [{ id: "hourly", stacked: false }],
          },
        },
      },
    });
    return () => chart.destroy();
  });
  return (
    <div id="chartContainer">
      <canvas id="myChart" />
    </div>
  );
}
