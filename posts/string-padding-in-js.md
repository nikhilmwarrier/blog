---
layout: post"

title: "Quick Tips: String Padding in JS"
tags: [posts, quick tips]
date: 2021-05-27
snippet: "JavaScript: Quickly add padding to a string using the padStart() function"
cover-image: "/posts/img/stringpad-cover.png"
cover-image-alt-text: Image of sample code
cover-image-height: 630
cover-image-width: 1200"
---
# Quick Tip #1: String Padding in JavaScript
![An example image](../img/stringpad-cover.png)  
Use the `padStart()` string method with the string length and the string to fill the padding with.

Example:
```javascript
const text = "Party"
text.padStart(7, "🎉 ") //"🎉 Party"
```
## Actual Use Case
Suppose you have an array of binary numbers which need not necessarily be in the standard 8-digit format. 
We want to add "padding" to it so it looks like the 8-digit eyecandy we all know and love.

Here is how to do it:

```javascript
const binaryNums = [0, 1101, 011010, 1010]
const paddedBinary = []

binaryNums.forEach(num => {
  const str = num.toString(); // convert to string
  const paddedStr = str.padStart(8, "0") // fix the length of string at 8, and add padding with "0"
  paddedBinary.push(Number(paddedStr)
})


// paddedBinary = [ 00000000, 00001101, 00011010, 00001010 ]
```

See the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) for more info.
