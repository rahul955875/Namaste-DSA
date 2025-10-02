function makeStarReversePeramindPattern(limit) {
  for (let i = limit; i > 0; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += ` ${"*"} `;
    }
    console.log(str);
  }
}

makeStarReversePeramindPattern(7);
