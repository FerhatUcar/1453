export const setTimeToFormattedString = (time: Date) => {
  return time.toLocaleString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });
};

export const formatCounter = (num: number) =>
  ("0" + parseInt(String(num))).substring(-2);

export const formatValue = (value: number) => value.toString().padStart(2, "0");
