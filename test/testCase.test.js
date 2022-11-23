import {
    checkName,
    checkCardNumber,
    checkCCV,
    checkExpDate,
} from '../function/formatCheck'
describe('Unit Test', () => {
    it('should return true when the String is not empty', () => {
        expect(checkName('name')).toBeTruthy()
    })
    it('should return false when the String is empty', () => {
        expect(checkName('')).toBeFalsy()
    })
    it('should return true when the input is number and length is 16', () => {
        expect(checkCardNumber('1111222233334444')).toBeTruthy()
    })
    it('should return false when the input is not number or length is not 16', () => {
        expect(checkCardNumber('111122223333')).toBeFalsy()
        expect(checkCardNumber('111122223333abcd')).toBeFalsy()
    })
    it('should return true when the input is number and length is 3', () => {
        expect(checkCCV('123')).toBeTruthy()
    })
    it('should return false when the input is not number or length is not 3', () => {
        expect(checkCCV('abc')).toBeFalsy()
        expect(checkCCV('abc1')).toBeFalsy()
        expect(checkCCV('1234')).toBeFalsy()
    })
    it('should return true when the input is in correct date format and the input should be greater than current date', () => {
        expect(checkExpDate('12/2050')).toBeTruthy()
    })
    it('should return true when the input is not in correct date format or the input is less than current date', () => {
        expect(checkExpDate('12/2000')).toBeFalsy()
        expect(checkExpDate('121/2000')).toBeFalsy()
        expect(checkExpDate('12-2000')).toBeFalsy()
        expect(checkExpDate('20-2000')).toBeFalsy()
    })
})
