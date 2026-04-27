const data = [
    {name: "sujeito", age: 23, salary: 4000, active: true, team:"frontend", bonus: 0},
    {name: "jose", age: 53, salary: 4000, active: true, team:"mobile", bonus: 0},
    {name: "ana", age: 13, salary: 1000, active: true, team:"backend", bonus: 0},
    {name: "bauer", age: 43, salary: 3500, active: true, team:"devops", bonus: 0},
    {name: "matheus", age: 33, salary: 2500, active: false, team:"frontend", bonus: 0}
]


const activeUsers = data.some((users) => {
    return users.active;
})

console.log(activeUsers)