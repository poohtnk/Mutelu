import {
    checkName,
    checkCardNumber,
    checkCCV,
    checkExpDate,
} from '../function/formatCheck'

// Test CheckName
describe('TestCheckName', () => {
    // ISP (ACoC)
    // C1 = Valid Input (Should not be empty string)
    // b1 = True
    // b2 = False

    // C1b1
    it('should return true when the String is not empty', () => {
        expect(checkName('name')).toBeTruthy()
    })
    // C1b2
    it('should return false when the String is empty', () => {
        expect(checkName('')).toBeFalsy()
    })
})

// Test CheckCardNumber
describe('TestCheckCardNumber', () => {
    // ISP (ACoC)
    // C1 = Valid Input (Should be only number and the length is 16)
    // b1 = True
    // b2 = False

    // C1b1
    it('should return true when the input is number and length is 16', () => {
        expect(checkCardNumber('1111222233334444')).toBeTruthy()
    })
    // C1b2
    it('should return false when the input is not number or length is not 16', () => {
        // Length is not 16
        expect(checkCardNumber('111122223333')).toBeFalsy()
        // It contains non-number value
        expect(checkCardNumber('111122223333abcd')).toBeFalsy()
    })
})

// Test CheckCardNumber
describe('Test CheckCCV', () => {
    // ISP (ACoC)
    // C1 = Valid Input (Should be only number and the length is 3)
    // b1 = True
    // b2 = False

    // C1b1
    it('should return true when the input is number and length is 3', () => {
        expect(checkCCV('123')).toBeTruthy()
    })
    // C1b2
    it('should return false when the input is not number or length is not 3', () => {
        // Contain non-number value
        expect(checkCCV('abc')).toBeFalsy()
        expect(checkCCV('abc1')).toBeFalsy()
        // Length is not 3 (4)
        expect(checkCCV('1234')).toBeFalsy()
    })
})

// Test CheckExpDate
describe('Test CheckExpDate', () => {
    // ISP (ACoC)
    // C1 = Valid Input (Should be MM/YYYY format and should be greater than current date)
    // b1 = True
    // b2 = False

    // C1b1
    it('should return true when the input is in correct date format and the input should be greater than current date', () => {
        expect(checkExpDate('12/2050')).toBeTruthy()
    })
    // C1b2
    it('should return true when the input is not in correct date format or the input is less than current date', () => {
        // The date is less than the current date
        expect(checkExpDate('12/2000')).toBeFalsy()
        // The month is exceed 12
        expect(checkExpDate('121/2000')).toBeFalsy()
        // The format is wrong (use - instead of /)
        expect(checkExpDate('12-2000')).toBeFalsy()
    })
})
