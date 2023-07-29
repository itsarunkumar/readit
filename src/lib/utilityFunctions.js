function bytesToMB(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

function convertToReadableDate(dateString) {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  return date.toLocaleDateString(undefined, options);
}

export { bytesToMB, convertToReadableDate };
