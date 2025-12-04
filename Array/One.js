// ARRAY MASTER MODULE — SUPER SIMPLE BEGINNER-FRIENDLY VERSIONS
// ---------------------------------------------------------------

// 1. Two Sum (Map, beginner style)
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];
    if (map.has(needed)) {
      return [map.get(needed), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

// 2. Maximum Subarray (Kadane, beginner logic)
function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const addToCurrent = currentSum + nums[i];

    // remove ternary, use simple if/else
    if (nums[i] > addToCurrent) {
      currentSum = nums[i];
    } else {
      currentSum = addToCurrent;
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}


// 3. Best Time to Buy & Sell Stock (beginner logic)
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

// 4. Product of Array Except Self (prefix + suffix, beginner style)
function productExceptSelf(nums) {
  const result = new Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * suffix;
    suffix *= nums[i];
  }

  return result;
}

// 5. Missing Number (XOR, beginner-readable)
function missingNumber(nums) {
  let xor = nums.length;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ i ^ nums[i];
  }
  return xor;
}

// 6. Rotate Array by K (reverse trick, beginner version)
function rotate(nums, k) {
  k = k % nums.length;
  nums.reverse();
  reversePart(nums, 0, k - 1);
  reversePart(nums, k, nums.length - 1);
  return nums;
}

function reversePart(arr, left, right) {
  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}

// 7. Container With Most Water (two pointers, simple version)
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let biggest = 0;

  while (left < right) {
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    const area = width * h;

    if (area > biggest) {
      biggest = area;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return biggest;
}

// 8. Flatten Array (Super Simple Beginner Version)
function flatten(arr) {
  const result = [];

  function helper(current) {
    for (let item of current) {
      if (Array.isArray(item)) {
        helper(item);
      } else {
        result.push(item);
      }
    }
  }
  helper(arr);
  return result;
}

// Exports (optional)
module.exports = {
  twoSum,
  maxSubArray,
  maxProfit,
  productExceptSelf,
  missingNumber,
  rotate,
  maxArea,
  flatten
};
