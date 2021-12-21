---
layout: post

title: "Quick Tip: Padding a string in Javascript"
tags: [posts, quick tips, javscript]
date: 2021-05-27
last-updated: 2021-12-21 
snippet: "JavaScript: The `padStart()` function is used to add 'padding' to a string with another repeating string and to fix its width."
cover-image: "/posts/img/stringpad-cover.png"
cover-image-alt-text: Image of sample code
cover-image-height: 630
cover-image-width: 1200"
---
# Quick Tip #1: Padding a string in Javascript
![Cover image](../img/stringpad-cover.png)
The `padStart()` function is used to add "padding" to a string with another repeating string and to fix its width.

`padStart()` takes two arguments. The first argument sets the length of the string and the second argument takes another string to pad the original string with.

## Example
Padding a string containing binary numbers with zeroes to make it eight digits long.

```javascript
const bin1 = "110
const bin2 = "1101"
const bin3 = "01001"

const paddedBin1 = bin1.padStart(8, "0") // 00000110
const paddedBin2 = bin2.padStart(8, "0") // 00001101
const paddedBin3 = bin3.padStart(8, "0") // 00001001
```
Here, we are using `padStart()` to fix the length of the strings at 8 characters and to fill any empty spaces with `"0"`
  
---
See the [MDN Docs on the `padStart()` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) for more info.