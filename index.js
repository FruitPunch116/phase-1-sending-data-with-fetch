// Add your code here

function submitData(name, email) {

    return fetch("http://localhost:3000/users", {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        }),
    })
    .then(response => response.json())
    .then(newUser => {
        const id = newUser.id;
        const heading = document.createElement("h5");
        heading.textContent = "Just created User #" + id + "!";
        document.body.append(heading);
    }).catch(error => {
        const message = error.message;
        const heading = document.createElement("h5");
        heading.textContent= message;
        document.body.append(heading);
    })
}