// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];

    if (matrix === undefined) {
        return arr;
    }
    if (matrix.length === 0) {
        return arr;
    } else {
        for (let i = 0; i < matrix.length; i++) {
            let currentArr = matrix[i];
            if (matrix[i] === 0) {
                return arr;
            }
            if (i % 2 === 0) {
                arr.push(currentArr);
            } else {
                let currentArrReverse = currentArr.reverse();
                arr.push(currentArrReverse);
            }
        }

        return arr.flat();
    }
};
