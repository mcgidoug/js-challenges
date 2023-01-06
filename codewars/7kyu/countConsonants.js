function consonantCount(str) {
    const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    return [...str].filter(char => consonants.includes(char)).length;
  }

  console.log(consonantCount("helleodkhsdlkg"))

  // ------------------ OR ------------------

  function consonantCount(str) {
    return (str.match(/[b-df-hj-np-tv-z]/gi) || []).length;
  }