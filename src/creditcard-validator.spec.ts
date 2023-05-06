import { CreditCardValidator } from './creditcard-validator'
import { type Validator } from './creditcard-validator-protocol'

const makeSut = (): Validator => {
    const sut = CreditCardValidator
    return sut
}

describe('CreditCard Validator', () => {
    test('should return false if an invalid credit card is provided', () => {
        const sut = makeSut()
        expect(sut.validate('1234 1234 1234')).toBe(false)
    })

    test('should return false if an empty credit card is provided', () => {
        const sut = makeSut()
        expect(sut.validate('')).toBe(false)
    })

    test('should return true if a valid credit card is provided with no spaces', () => {
        const sut = makeSut()
        expect(sut.validate('1234123412341234')).toBe(true)
    })
})
