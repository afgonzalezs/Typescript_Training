class Length{
    private numberToConvert:number
    convertedNumber:number | undefined

    constructor(numberToConvert = 0,){
        this.numberToConvert = numberToConvert
    }

    getNumberToConvert(){
        return this.numberToConvert
    }
    setNumberToConvert(newNumberToConvert:number){
        this.numberToConvert = newNumberToConvert
    }

    ConvertCMtoFeet(){
        
        const convertedNumber = this.numberToConvert/30.48
        this.convertedNumber = convertedNumber
        return this.convertedNumber
    }
}

const number1:Length = new Length(30)
number1.ConvertCMtoFeet()
console.log(`${number1.getNumberToConvert()} centimetros son ${number1.ConvertCMtoFeet()} pies`)