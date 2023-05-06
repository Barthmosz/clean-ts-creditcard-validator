export class CreditCardValidator {
    /**
     * Validates an credit card number.
     * @param {string} creditCard
     * @returns {boolean}
    */
    static validate(creditCard: string): boolean {
        const creditCardRegex = /^\d{16}/g
        return creditCardRegex.test(creditCard.replace(/\s/g, ''))
    }
}
