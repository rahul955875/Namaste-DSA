function makeBinaryPattern(limit) {
  let toggle = 1;
  for (let i = 0; i < limit; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
      str += " " + toggle + " ";
      if (toggle === 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }

    console.log(str);
  }
}

makeBinaryPattern(7);
