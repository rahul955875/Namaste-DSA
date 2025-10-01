function makeNumberPeramindPattern(limit) {
    for (let i = 0; i < limit; i++) {
        let str = ""
        for (let j = 0; j <=i; j++) {
            str += ` ${j+1} `
        }
        console.log(str)
    }

}

makeNumberPeramindPattern(7)
