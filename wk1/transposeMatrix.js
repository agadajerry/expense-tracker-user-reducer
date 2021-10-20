
function transpose(matrix){

    let output = new Array(matrix[0].length); // the first element of array  and it length [matrix first column]

    for(let i=0; i<output.length;i++){

        output[i] = new Array(matrix.length); //empty cell of the array
     
        for(let j=0;j<output[i].length;j++){

            output [i][j] = matrix[j][i];
           
        }
    }
    return output;
}

console.log(transpose([ 
    [9, 4, 8, 1],
      [1, 5, 9, 3],
      [2, 6, 10, 1],
      [3, 7, 7, 5],]));