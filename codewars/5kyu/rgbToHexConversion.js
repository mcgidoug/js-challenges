function rgb(r, g, b) {
    return [r, g, b]
    // clamp value range
      .map(x => Math.max(0, Math.min(255, x)))
    // convert to hexadecimal string
    // padStart method ensures output is 2 digit hexadecimal num (padded w/ zeros if necessary)
      .map(x => x.toString(16).toUpperCase().padStart(2, '0'))
      .join('');
  }

  console.log(rgb(231, 021, 102))
  // E71166