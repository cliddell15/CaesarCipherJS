var str = "This is a test of ROT translations!"
console.log("String:",str)

for(var a = 1; a < 26; a ++){
	var output = '';

	for (var i = 0; i < str.length; i++) {

		var c = str[i];

		if (c.match(/[a-z]/i)) {

			// ASCII value
			var code = str.charCodeAt(i);

			// Dealing with lowercase letter wraparound
			if ((code >= 97) && (code <= 122))
					c = String.fromCharCode(((code - 97 + a) % 26) + 97);

			// Dealing with uppercase letter wraparound
			else if ((code >= 65) && (code <= 90))
					c = String.fromCharCode(((code - 65 + a) % 26) + 65);
		}

		output += c;

	}

	console.log("ROT",a,":", output);
}
