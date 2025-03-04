import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js';
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
);

export const options = {
  scales: {
    r: {  // Use 'r' instead of 'scale' for radar charts
      min: 0,
      max: 5,
      ticks: {
        stepSize: 1,  // Optional: Set step size for better readability
      }
    }
  }

}
