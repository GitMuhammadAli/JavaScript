// Compress String
function counterr(str) {
  let st = "";
  let obj = {};
  for (let i in str) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  for (let key in obj) {
    st += key + obj[key];
  }
  return st;
}

console.log(counterr("aaabbbcc"));

// Valid Palindrome

function isPalindrome(s) {

    let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    console.log(str);
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));