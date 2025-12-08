function twoSum(arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (map.has(complement)) {
      return [map[complement], i];
    }
    map.set(num[i], i);
  }
  return [];
}

function maxSubArray(arr) {
  let currentsum = arr[0];
  let maxsum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let addtocurrent = currentsum + arr[i];

    if (arr[i] > addtocurrent) {
      currentsum = arr[i];
    } else {
      currentsum = addtocurrent;
    }
    if (currentsum > maxsum) {
      maxsum = currentsum;
    }
  }
  return maxsum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function maxProfit(prices) {
  let minPriceSoFar = Infinity;
  let bestProfit = 0;
  for (let price of prices) {
    if (price < minPriceSoFar) {
      minPriceSoFar = price;
    }
    const profit = price - minPriceSoFar;

    if (profit > bestProfit) {
      bestProfit = profit;
    }
  }
  return bestProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));



function productExceptSelf(arr){
    let res = [arr.length].fill(1);
    let prefix = 1;

    for(let i=0;i<arr.length;i++){
        res[i] = prefix
        prefix*=arr[i];
    }

    let suffix = 1;
    for(let i=arr.length-1;i>=0;i--){
        res[i] *= suffix;
        suffix *= arr[i];
        console.log(suffix)
    }
    return res;
}
console.log(productExceptSelf([1,2,3,4]));





function flattenarr(arr)
{
let ar = [];

for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
     let fl =  flattenarr(arr[i]);
     ar = ar.concat(fl);
    }else{
        ar.push(arr[i]);
    }

}
return ar;
}

console.log(flattenarr([1, [2, 3], 4, [5, 6]]));