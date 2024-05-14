// import axios from "axios";
import Chart from "chart.js/auto";
export default {
  state: {
    chartInstance: null,
    chartInstance2: null,
  },
  mutations: {
    setChartInstance(state, instance) {
      state.chartInstance = instance;
    },
    setChartInstance2(state, instance) {
      state.chartInstance2 = instance;
    },
  },
  actions: {
    initializeChart({ commit }) {
      const ctx = document.getElementById("myChart");
      const ctx2 = document.getElementById("myChart2");

      const chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              type: "bar",
              label: "Bar Dataset",
              data: [20, 10, 30, 15],
            },
            {
              type: "bar",
              label: "Bar Dataset",
              data: [20, 10, 30, 15],
            },
            {
              type: "line",
              label: "Line Dataset",
              data: [10, 30, 10, 5],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      });
      const chartInstance2 = new Chart(ctx2, {
        type: "pie",
        data: {
          labels: ["Red", "Blue", "Yellow"],
          datasets: [
            {
              label: "My First Dataset",
              data: [11, 16, 7, 3, 14],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(75, 192, 192)",
                "rgb(255, 205, 86)",
                "rgb(201, 203, 207)",
                "rgb(54, 162, 235)",
              ],
            },
          ],
        },
        options: {},
      });

      commit("setChartInstance", chartInstance);
      commit("setChartInstance2", chartInstance2);
    },
  },
};
