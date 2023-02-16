const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return false;
    }
    if (word === "") {
        return false;
    }
    const verticalJoin = [];
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let l = 0; l < horizontalJoin[0].length; l++) {
        // console.log("horizontalJoin :", horizontalJoin)
        verticalJoin.push([]);
        if (horizontalJoin[l].includes(word)) return true
        for (let i = 0; i < horizontalJoin.length; i++) {
            verticalJoin[l].push(horizontalJoin[i][l])
            // console.log("verticalJoin :", verticalJoin)
            // console.log("l", verticalJoin[l])
            if (verticalJoin[l].join('').includes(word)) return true
        }
        // let verticalJoinString = verticalJoin.map(ls => ls.join(''))
        // console.log(verticalJoinString);
    }
    
    return false
};

module.exports = wordSearch