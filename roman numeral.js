function convertToRoman(num) {
    let ans = "";
    const numerals = [
      [1000, "M"],
      [900, "CM"],
      [500, "D"], 
      [400, "CD"],
      [100, "C"],
      [90, "XC"],
      [50, "L"],
      [40, "XL"],
      [10, "X"],
      [9, "IX"],
      [5, "V"],
      [4, "IV"],
      [1, "I"]
    ];
    while (num > 0) {
      for (let i = 0; i < numerals.length; i++) {
        if (numerals[i][0] <= num) {
          ans += numerals[i][1];
          num -= numerals[i][0];
          break;
        }
      }
    }
   return ans;
  }