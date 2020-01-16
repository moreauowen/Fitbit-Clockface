import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { HeartRateSensor } from "heart-rate";
import { battery } from "power";

// Granularity at which to update clock and date
clock.granularity = "minutes";

const clockText = document.getElementById("clockText");
const dateText = document.getElementById("dateText");

// Update the clockText element every tick with the current time
// and dateText with current date
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  // Update time
  let mins = util.zeroPad(today.getMinutes());
  clockText.text = `${hours}:${mins}`;
  
  // Update date
  let monthnum = today.getMonth();
  let day = today.getDate();
  console.log("getMonth = " + monthnum);
  dateText.text = `${util.monthName(monthnum)}, ${day}`;
}

// Update batteryText element every time battery level changes
const batteryText = document.getElementById("batteryText");
let initiallevel = battery.chargeLevel;
batteryText.text = `${initiallevel}%`;
battery.onchange = (evt) => {
  let batterylevel = battery.chargeLevel;
  batteryText.text = `${batterylevel}%`;
}

// Update heartRateText element constantly
const heartRateText = document.getElementById("heartRateText");
if (HeartRateSensor) {
   console.log("This device has a HeartRateSensor!");
   const hrm = new HeartRateSensor();
   hrm.addEventListener("reading", () => {
     console.log(`Current heart rate: ${hrm.heartRate}`);
     heartRateText.text = `${hrm.heartRate}`;
   });
   hrm.start();
} else {
   console.log("This device does NOT have a HeartRateSensor!");
}