function makeSliceSquarePatter(limit) {
    for (let i = 0; i < limit; i++) {
        let str = ""
        for (let j = 0; j <=i; j++) {
            str += " * "
        }
        console.log(str)
    }

}

makeSliceSquarePatter(7)
