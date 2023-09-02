function palindrome(str) {
    str = str.replace(/[_\W]/ig, "").toLowerCase();
    return str.substring(0, str.length / 2) == str.substring(str.length % 2 == 0 ? str.length / 2 : str.length / 2 + 1)
    .split("")
    .reverse()
    .join("") ? true : false;
}
