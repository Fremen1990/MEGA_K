// Uzupełnij typy - w jaki sposób możesz to zrobić? Czy musisz coś jeszcze modyfikować?

interface ProductDescription {
    name: string;
    count: number;
    isDegradable: boolean;
}

const product: ProductDescription = {
    name: 'Opakowanie zbiorcze',
    count: 1000,
    isDegradable: true,
};

function getProductProp(obj: ProductDescription,
                        propName:
                            // 'name' | 'count' | 'isDegradable'
                            keyof ProductDescription
): string | number | boolean {
    return obj[propName];
}

const count  = getProductProp(product, 'count') as number;
const degraded = getProductProp(product, 'isDegradable') as boolean;
console.log(`${count.toFixed(2)} ${degraded ? 'degraded' : 'undegraded'}`)
