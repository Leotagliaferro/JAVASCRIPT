/* let valores = [8, 1, 7, 4, 2, 9]

    for(let pos=0; pos < valores.length; pos++) {
        console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
    } 
*/
  /*  let num = [2, 4, 6, 7, 8]

    for(let res=0; res < num.length; res++){ 
        console.log(`a posição ${res} tem o valor ${num[res]} `)
    }
    */
    let num = [8, 1, 7, 4, 2, 9]
    num.sort()
    for(let pos in num) {
        console.log(`a posição ${pos} tem o valor ${num[pos]}`)
    }
