const data = [
    {name: "sujeito", age: 23, salary: 4000, active: true, team:"frontend", bonus: 0},
    {name: "jose", age: 53, salary: 4000, active: true, team:"mobile", bonus: 0},
    {name: "ana", age: 13, salary: 1000, active: true, team:"backend", bonus: 0},
    {name: "bauer", age: 43, salary: 3500, active: true, team:"devops", bonus: 0},
    {name: "matheus", age: 33, salary: 2500, active: true, team:"frontend", bonus: 0}
]

const users = data.map((user)=> {
    let bonus = user.bonus

    if (user.team === "frontend") {
        bonus = 300
         }
    if(user.team ==="backend") {
        bonus = 500
    }  
    if(user.team ==="devops") {
        bonus = 1000
    }
    if(user.team ==="mobile") {
        bonus = 200
    }
   
   return {
    name: user.name,
    bonus: bonus,
    team: user.team
    }
})

console.log(users)


