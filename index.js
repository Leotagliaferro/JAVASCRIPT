const data = [
    {name: "sujeito", age: 23, salary: 4000, active: true, team:"frontend", bonus: 0},
    {name: "jose", age: 53, salary: 4000, active: true, team:"mobile", bonus: 0},
    {name: "ana", age: 13, salary: 1000, active: true, team:"backend", bonus: 0},
    {name: "bauer", age: 43, salary: 3500, active: true, team:"devops", bonus: 0},
    {name: "matheus", age: 33, salary: 2500, active: true, team:"frontend", bonus: 0}
]

//find percore o array e devolve o primeiro item que encontrar

// const user = data.find((user) => {
//     return user.age >= 25
// })

// console.log(user)




//filter devolve os objetos que atendem a condição 



// const users = data.filter((user) => {
//     return user.salary >= 4000 && user.active;
// })

// console.log(users)

//findindex encontra a posição de um item dentro de um array


// const indexUser = data.findIndex((user) => {
//     return user.name === "bauer"
// })

// console.log(indexUser)
// console.log(data[indexUser].active = false)
// console.log(data)


// map percorre o array e devolve um novo

// const users = data.map((user, index) => {
//     if(user.salary <= 2500) {
//         user.salary+= 900;
//         user.bonus+= 1;
//     }

//     return {
//         name: user.name,
//         salary: user.salary,
//         bonus: user.bonus
//     }
// })

// console.log(users)


//reverse reverte o array
// console.log(data.reverse())


//some percorre o item e verifica se algum objeto é falso

// const userInactive = data.some((user) => {
//     return user.active === false;
// })

// console.log(userInactive)

//every verifica se todos os usuarios são true precisa que todos os itens sejam true 

// const userActive = data.every((user) => {
//     return user.active === true;
// })


// console.log(userActive)

//reduce 

const totalSalarios = data.reduce((total, user) => {
    return total += user.salary 
}, 0)

console.log(totalSalarios)