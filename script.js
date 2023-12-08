const extendHex = (shortHex) => {
  // write your code here
	// Remove # if present and convert to uppercase
    shortHex = shortHex.replace("#", "").toUpperCase();

    // Check if the shortHex has only one character per color
    if (shortHex.length === 3) {
        // Repeat each character to get the full hex code
        shortHex = shortHex.split("").map(char => char.repeat(2)).join("");
    }

    // Add # prefix to the extended hex code
    return "#" + shortHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
