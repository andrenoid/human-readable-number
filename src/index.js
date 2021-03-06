module.exports = function toReadable (number) {
  let str = String(number)
    let result;
    if (str.length == 1) {
        result = zeroTwenty(number)
        return result
    } else if (str.length == 2) {
        let index = number
        if (index < 21) {
            result = zeroTwenty(index)
            return result
        } else {
            index = String(index)
            let indexStart = Number(index[0])
            let indexEnd = Number(index[index.length - 1])
            result = twentyNinety(indexStart)
            if (indexEnd == 0) {
                return result
            } else {
                result += ` ${zeroTwenty(indexEnd)}`
                return result
            }
        }
    } else {
        let hundreds = str[0];
        let index = Number(str.slice(1))
        result = `${zeroTwenty(Number(hundreds))} hundred`
        if (index == 0) {
            return result
        } else if (index < 21) {
            result += ` ${zeroTwenty(index)}`
            return result
        } else {
            index = String(index)
            let indexStart = Number(index[0])
            let indexEnd = Number(index[index.length - 1])
            result += ` ${twentyNinety(indexStart)}`
            if (indexEnd == 0) {
                return result
            } else {
                result += ` ${zeroTwenty(indexEnd)}`
                return result
            }
        }
    }


    function zeroTwenty(num) {
        let zeroNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
        return zeroNine[num]
    }

    function twentyNinety(num) {
        let twentyNinety = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
        return twentyNinety[num]
    }

}
