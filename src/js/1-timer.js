import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// import "flatpickr/dist/themes/dark.css";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate = null;
const startButton = document.querySelector('[data-start]');
startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr("#datatime-picker", options);




