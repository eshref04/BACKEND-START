const express = require('express')

const port = 8080
const index=express()
index.use(express.json())

let counter =1000

let users=[

    {
        id:1,
        userName:"Esref",
        userEmail: 'esrefmuellim@code.edu.az',
        age: 99
    },
    {
        id:2,
        userName:"Aspirator",
        userEmail: 'aspirator@code.edu.az',
        age: 1
    },
    {
        id:3,
        userName:"Pendir",
        userEmail: 'pendirxanim@code.edu.az',
        age: 111111111111
    },
    {
        id:4,
        userName:"Osmanli dovrunde yasamis insan",
        userEmail: 'insan@code.edu.az',
        age: 1400
    },
]


index.get("/users",(req,res)=>{
    res.send(users)
})

index.get("/users/:id",(req,res)=>{
    const {id} = req.params
    const target=users.find(user=>user.id == id)
    res.send(target)
})

index.put("/users/:id",(req,res)=>{
    const {id} = req.params
    let target = users.find(user=>user.id == id)
    target= {...target, ...req.body}
    res.send(target)
})

index.delete("/users/:id",(req,res)=>{
    const {id} = req.params
    let target = users.find(user=>user.id == id)
    users.splice(users.indexOf(target,1))
    res.send(target)
})

index.listen(port,()=>{
    console.log("xos geldin cenab")
})