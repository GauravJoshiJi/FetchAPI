console.log("Start");

//Case 1:-  Basic node server

// fetch("http://localhost:8080/")
// .then((response) => console.log(response));

//Case 2:- Getting data from server
// fetch("http://localhost:8080/")
//   .then((response) => response.text())
//   .then((response) => console.log(response));

fetch("http://localhost:8080/custom", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "hello World" }),
})
  .then((response) => response.text())
  .then((response) => console.log(response));
