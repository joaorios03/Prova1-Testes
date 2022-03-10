export const stringCalculator = (text: string): number => {
    let number: string[] = text.split(',');
    let sum: number = 0;
    for (let i = 0; i < number.length; i++) {
        if (+number[i] < 0)
            throw new Error('A função não suporta números negativos.');
            
        if (+number[i] <= 1000)
            sum += +number[i];
    }
    return sum;
}
