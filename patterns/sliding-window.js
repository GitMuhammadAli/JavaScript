// - Longest Substring Without Repeating Characters#3Meta, Amazon, Google, Microsoft
// - Minimum Window Substring  #76Meta, Google, Amazon, Uber
// - Find All Anagrams in a String  #438Amazon, Meta
// - Sliding Window Maximum #239Amazon, Google, Microsoft
// - Longest Repeating Character Replacement #424Google, Amazon
function maxSumSubarray(arr, k) {
  let maxsum = 0;

  for (let i = 0; i < k; i++) {
    maxsum += arr[i];
  }

  for (let j = k; j < arr.length; j++) {
    maxsum = Math.max(maxsum, maxsum + arr[j] - arr[j - k]);
  }

  return maxsum;
}

// Test cases
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Expected: 9
console.log(maxSumSubarray([1, 2, 3, 4, 5], 2)); // Expected: 9 (4+5)
console.log(maxSumSubarray([5, 5, 5, 5], 2)); // Expected: 10
console.log(maxSumSubarray([1, 2, 3, 4], 2)); // Expected: 7

function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3
console.log(lengthOfLongestSubstring("")); // Expected: 0

function hehe(arr, k) {
  let left = 0;
  let length = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    while (sum >= k) {
      length = Math.min(length || Infinity, i - left + 1);
      sum -= arr[left];
      left++;
    }
  }
  return length === Infinity ? 0 : length;
}

console.log(hehe([2, 3, 1, 2, 4, 3], 7)); // Expected: 2  console.log(hehe([1,4,4], 4)); // Expected: 1
console.log(hehe([1, 1, 1, 1, 1, 1, 1, 1], 11)); // Expected: 0
