// Get the current date and time
const now = new Date();

// Format the time in "hour:min AM/PM"
let hours = now.getHours();
const minutes = now.getMinutes().toString().padStart(2, "0");
const ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
export const timeString = `${hours}:${minutes} ${ampm}`;

// Format the date in "month date, year"
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const month = monthNames[now.getMonth()];
const today = now.getDate();
const year = now.getFullYear();
export const dateString = `${month} ${today}, ${year}`;

export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const options = { year: "numeric", month: "short", day: "2-digit" };
  return date.toLocaleDateString("en-US", options);
}

export function formatFileSize(bytes) {
  const byt = "" + bytes;
  const l = byt.length;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  else if (l <= 3) return bytes + " " + sizes[0];
  else if (l > 3 && l < 7) return Math.floor(bytes / 1000) + " " + sizes[1];
  else if (l >= 7 && l < 10)
    return Math.floor(bytes / 1000000) + " " + sizes[2];
  else if (l >= 10 && l < 13)
    return Math.floor(bytes / 1000000000) + " " + sizes[3];
  else if (l >= 13 && l < 16)
    return Math.floor(bytes / 1000000000000) + " " + sizes[4];
}

function getStartOfWeek(date) {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  return new Date(date.setDate(diff));
}

// Function to get the end date of the week
function getEndOfWeek(startDate) {
  return new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate() + 6
  );
}

// Get the start and end dates of the current week
export const startOfWeek = getStartOfWeek(new Date(now));
export const endOfWeek = getEndOfWeek(new Date(startOfWeek));

const formatDateString = (date) => {
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};
