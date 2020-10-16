module.exports = function toReadable (number) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const scales = ['hundred', 'thousand', 'million', 'billion']

  let final
  var stringNumber = number.toString()
  var dividedDigits = stringNumber.split('')
  var digitsLength = dividedDigits.length

  if(digitsLength <= 3){
    if(digitsLength === 3 && dividedDigits[1] === '0' && dividedDigits[2] === '0') {
        final = units[Number(dividedDigits[0])] + ' hundred'
    }
    else if(digitsLength === 3 && dividedDigits[1] !== '1' && dividedDigits[2] === '0'){
        final = units[Number(dividedDigits[0])] + ' hundred ' + tens[Number(dividedDigits[1])]
    }
    else if(digitsLength === 3 && dividedDigits[1] === '0' && dividedDigits[2] !== '0'){
        final = units[Number(dividedDigits[0])] + ' hundred ' + units[Number(dividedDigits[2])]
    }
    else if(digitsLength === 3 && dividedDigits[1] !== '1') {
        final = units[Number(dividedDigits[0])] + ' hundred ' + tens[Number(dividedDigits[1])] + ' ' + units[Number(dividedDigits[2])]
    }
    else if(digitsLength === 3 && dividedDigits[1] === '1') {
        final = units[Number(dividedDigits[0])] + ' hundred ' + teens[Number(dividedDigits[2])]
    }
    else if(digitsLength === 2 && dividedDigits[0] !== '1' && dividedDigits[1] !== '0') {
        final = tens[Number(dividedDigits[0])] + ' ' + units[Number(dividedDigits[1])]
    }
    else if(digitsLength === 2 && dividedDigits[0] !== '1') {
        final = tens[Number(dividedDigits[0])]
    }
    else if(digitsLength === 2 && dividedDigits[0] === '1'){
        final = teens[Number(dividedDigits[1])]
    }
    else if(digitsLength === 1) {
        final = units[Number(dividedDigits[0])]
    }
  }
  return final
}
