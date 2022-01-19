function pricify (price:number, currency:string, vat:number):string {

    return `$({(price + (price * vat)).toFixed(2)} ${currency})`;

}
const result:string = pricify(10,"EUR", 0.2)
console.log(result)

// A co jeżeli currency i VAT najczęściej jest taki sam?
//        ARROW FUNCTIION

const pricifyArrow =(price:number,
                     currency:string = 'PLN',
                     vat:number=0.23):string => {
    return `$({(price + (price * vat)).toFixed(2)} ${currency})`;

}

const resultArrow:string = pricifyArrow(10,"EUR", 0.2)
const resultArrow2:string=pricifyArrow(33)

console.log(resultArrow)

// A co jeżeli currency i VAT najczęściej jest taki sam?
