function makeStarSlicePeramindPattern(limit) {
  for (let i = 0; i < limit; i++) {
    let str = "";
    for (let j = 0; j < limit - i; j++) {
      str += " ";
    }
    for (let s = 0; s <= i; s++) {
      str += `${"*"}`;
    }
    console.log(str);
  }
}

makeStarSlicePeramindPattern(7);
function makeStarSlicePeramindPattern2(limit) {
  for (let i = 0; i < limit; i++) {
    let str = "";
    for (let j = 0; j < limit - (i + 1); j++) {
      str += " ";
    }
    for (let s = 0; s < i + 1; s++) {
      str += `${"*"}`;
    }
    console.log(str);
  }
}

makeStarSlicePeramindPattern2(7);
