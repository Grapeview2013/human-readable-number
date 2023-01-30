module.exports = function toReadable (number) {
    
        let conversion = "";
        const singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const doubleDigitsFirst  = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const doubleDigitsSecond = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const allDigits = number.toString().split("");

        if (allDigits.length === 3) {
            conversion += singleDigits[allDigits[0]] + " hundred";
            if (allDigits[1] != "0") {
                if (allDigits[1] === "1") {
                    conversion += " " + doubleDigitsFirst[allDigits[2]];
                } else {
                    conversion += " " + doubleDigitsSecond[allDigits[1]];
                }
            }
            if (allDigits[2] != "0" && allDigits[1] != "1") {
                conversion += " " + singleDigits[allDigits[2]];
            }
        } else if (allDigits.length === 2) {
            if (allDigits[0] === "1") {
                conversion += doubleDigitsFirst[allDigits[1]];
            } else {
                conversion += doubleDigitsSecond[allDigits[0]];
                if (allDigits[1] != "0") {
                    conversion += " " + singleDigits[allDigits[1]];
                }
            }
        } else {
            conversion += singleDigits[allDigits[0]];
        }
        return conversion;
}



