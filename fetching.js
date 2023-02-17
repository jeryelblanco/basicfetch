const namesList = document.getElementById("names-list")

//! Using .then
fetch("http://localhost:3000/Humans")
.then(response => response.json())
.then(data => {
data.forEach(data => {
    const liElement = document.createElement("li")
    namesList.append(liElement)
    liElement.innerText = "Name: " + data.name + ", Age: " + data.age
})
})

//! Using async await
// async function fetchThis (){
// //* Equivalent to your first .then
// let req = await fetch("http://localhost:3000/Humans")
// //* Equivalent to your second .then and contains data received
// let res = await req.json()
// res.forEach(data => {
//     const liElement = document.createElement("li")
//     namesList.append(liElement)
//     liElement.innerText = "Name: " + data.name + ", Age: " + data.age
// })

// }
// fetchThis()