export default function getDuration(date) {
  const diff = new Date() - date;

  const timeInSeconds = diff / 1000;
  const hourInSeconds = 60 * 60;
  const minuteInSeconds = 60;

  const hours = Math.floor(timeInSeconds / hourInSeconds);
  const minutes = Math.floor((timeInSeconds % hourInSeconds) / minuteInSeconds);

  const HH = String(hours).padStart(2, "0");
  const MM = String(minutes).padStart(2, "0");

  return `${HH}:${MM}`;
}
