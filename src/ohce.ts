export const ohce = (phrase: string):string => {
    let palindromo:string[] = phrase.split('');
    for(let i = 0; i <= phrase.length; i++) {
        palindromo[i] = phrase[(phrase.length - 1) - i];
    }
    let reverse_phrase:string = palindromo.join('');
    if(reverse_phrase == phrase) {
        return "Gostei da palavra!";
    }
    else {
        return reverse_phrase;
    }
}
