function rot13(str) {
    return str.replace(/(\w)/g, (letter) => 
        String.fromCharCode(
        letter.charCodeAt() >= 78
        ? letter.charCodeAt() -   13
        : letter.charCodeAt() + 13))
  }