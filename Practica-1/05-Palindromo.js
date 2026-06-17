const esPalindromo = (cadena) => {
    const limpia = cadena.toLowerCase().replace(/\s/g, '');
    return limpia === limpia.split('').reverse().join('');
};
console.log(esPalindromo("oruro"));