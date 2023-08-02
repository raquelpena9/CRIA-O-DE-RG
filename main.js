const input = document.querySelector('input')

input.addEventListener('keypress', () => {
    let inputLength = input.value.length

    //+= deixa 0 1, 2 e 3 e adicinao ponto.
    // Max LENGTH 13 RG
    if (inputLength == 2 || inputLength == 5 ||inputLength == 9) {
         input.value += '.'
    } else if (inputLength == 12 ) {             
}

})