export class CreditCardValidator {
    static validate(creditCard: string): boolean {
        const creditCardRegex = /^\d{16}/g
        return creditCardRegex.test(creditCard.replace(/\s/g, ''))
    }
}
