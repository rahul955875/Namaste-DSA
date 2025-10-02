function makeBinaryPattern(limit) {
  for (let i = 0; i < limit; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
      if ((j + 1) % 2 === 0) {
        str += " 0 ";
      } else {
        str += " 1 ";
      }
    }
    console.log(str);
  }
}

makeBinaryPattern(7);
