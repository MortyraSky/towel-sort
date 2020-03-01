
// You should implement your task here.

module.exports = function towelSort (matrix) {
  matrix = matrix || [];
    var size = matrix.length;    
    if (size != 0) {
        var array = [];
        for (var i = 0; i < size; i++) {
            if (i % 2 != 0) {
                matrix[i].sort((a, b) => a - b).reverse();
            }
            array = array.concat(matrix[i]);
        }
        return array;
    }
    return [];
}
