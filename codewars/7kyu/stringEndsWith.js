function solution(str, ending) {
  if (str.endsWith(ending)) {
    return true;
  } else {
    return false;
  }
}

console.log(solution("string", "ing"));

// or...

function solution(str, ending) {
  return str.endsWith(ending);
}
