function humanReadable(seconds) {
    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  
  function pad(num) {
    return num < 10 ? "0" + num : num;
  }

  console.log(humanReadable(0)); // 00:00:00
console.log(humanReadable(5)); // 00:00:05
console.log(humanReadable(60)); // 00:01:00
console.log(humanReadable(86399)); // 23:59:59
console.log(humanReadable(359999)); // 99:59:59
