# Clean Credit Card Validator

## Installation
---
```npm i clean-creditcard-validator```

<br/>

## Usage
---
#### JavaScript

```javascript
const { CreditCardValidator } = require('clean-creditcard-validator')

const isValid = CreditCardValidator.validate('1234123412341234') // true
const isValid = CreditCardValidator.validate('1234 1234 1234 1234') // true
```

#### TypeScript
```typescript
import { CreditCardValidator } from 'clean-creditcard-validator'

const isValid = CreditCardValidator.validate('1234123412341234') // true
const isValid = CreditCardValidator.validate('1234 1234 1234 1234') // true
```
