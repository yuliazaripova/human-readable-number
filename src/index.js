module.exports = function toReadable (number) {
	const under19 = {
	    0:"zero",
	    1:"one",
	    10:"ten",
	    11:"eleven",
	    12:"twelve",
	    13:"thirteen",
	    14:"fourteen",
	    15:"fifteen",
	    16:"sixteen",
	    17:"seventeen",
	    18:"eighteen",
	    19:"nineteen",
	    2:"two",
	    3:"three",
	    4:"four",
	    5:"five",
	    6:"six",
	    7:"seven",
	    8:"eight",
	    9:"nine",
	}
	const under90 = {
		20:"twenty",
		30: "thirty",
		40:"forty",
		50:"fifty",
		60:"sixty",
		70:"seventy",
		80:"eighty",
		90:"ninety",

	}

	function makeDozen (number) {
		if (number < 20) { 
			return under19[number]
		} else if (number > 19 && number < 100 && number%10 == 0) { 
			return under90[number]
		} else if (number > 19 && number < 100 && !(number%10 == 0)) {
			return (`${under90[Math.floor(number/10) * 10]} ${under19[number%10]}`)
		} 
	}	
	function makeHundered(number) {
		if (number%100 == 0) {
			return (`${under19[Math.floor(number/100)]} hundred`)
		} else {
			return (`${under19[Math.floor(number/100)]} hundred ${makeDozen(number%100)}`)
		}
	}

	if (number < 100) { 
		return makeDozen(number)
	}
		else { 
			return makeHundered(number)
		}
}
