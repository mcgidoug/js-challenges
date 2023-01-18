function trim(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  } else if (maxLength <= 3) {
    return str.slice(0, maxLength) + "...";
  } else {
    return str.slice(0, maxLength - 3) + "...";
  }
}
