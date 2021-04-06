import Chart from "chart.js/auto";

import { useState, useEffect } from "react";

export default function Graph({ state }) {
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: state.dailyEvents.map((el) => el.date),
        datasets: [
          {
            label: "Number of Events Daily",
            data: state.dailyEvents.map((el) => el.events),
            backgroundColor: [
              "Red",
              "Blue",
              "Yellow",
              "Green",
              "Purple",
              "Orange",
            ],
            borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            borderWidth: 1,
          },
        ],
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
