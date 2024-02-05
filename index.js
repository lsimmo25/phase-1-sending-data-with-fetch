// Add your code here
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };

const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };

fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
        return response.json()
    })
    .then(function (object) {
        console.log(object)
    })
    .catch(function (error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
      });


function submitData() {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": "Steve",
            "email": "steve@steve.com"
        })
    })
    .then(response => response.json())
    .then(data => {
        const newId = data.id;
        document.body.innerHTML += `<p>New ID: ${newId}</p>`
    })
    .catch(error => {
        let message = "Unauthorized Access"
        document.body.innerHTML += `<p>${error.message}</p>`
    })
}

// submitData();


