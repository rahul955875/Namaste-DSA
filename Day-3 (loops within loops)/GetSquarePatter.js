function makeSquarePatter(limit) {
    const squarePatter = []
    for (let i = 0; i < limit; i++){
        let str = ""
        for (let j = 0; j < limit; j++){
            str += " * "
        }
        squarePatter.push(str)
    }
    return squarePatter
}

makeSquarePatter(7).forEach(e=>console.log(e))
