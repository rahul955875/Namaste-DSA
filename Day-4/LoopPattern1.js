function makeNumberReversePeramindPattern(limit) {
  for (let i = limit; i > 0; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += ` ${j} `;
    }
    console.log(str);
  }
}

// makeNumberReversePeramindPattern(7);

function makeNumberPeramind2(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n - i; j++) {
      str += ` ${j + 1} `;
    }
    console.log(str);
  }
}

makeNumberPeramind2(5);
