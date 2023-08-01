// Write a sum of Array Elements

function mysun(sum){
    let total = 0;
    for(var i=0; i<sum.length; i++){
        total += sum[i];
    }
    return total;
}

const myarr= [1,2,3,4,5]
const result = mysun(myarr)
console.log(result)
  