// // // //async lecture

// // // // *** Intro

// // // // navigator.geolocation.getCurrentPosition(position => {
// // // //     console.log(position);
// // // // });
// // // // console.log('done');

// // // //usually second line runs after the first line but this is an example of async JS

// // // // Some Async functions we already looked at example earlier :


// // // //general load
// // // // window.addEventListener("load", () => {
// // // //     alert("page has loaded")
// // // // })

// // // //load image and then display
// // // const img1 = document.getElementById("myImg")

// // // img1.addEventListener("load", () => {
// // //     alert("Pic 1 has loaded")

// // //     //note addEventListener is not what is making this function async but rather the load 
// // // })

// // // // //example 2
// // // // function myFunction() {
// // // //     setTimeout(function(){ alert("Hello"); }, 3000);
// // // //     console.log("hi")
// // // //   }

// // // //this function works without stopping our program. People wouldn't want to use our app if it has to wait for one function or code to finish before starting the next 


// // // //intro to callback hell
// // // //getCurrentPosition does what it needs to do to gets position and when it does, it passes it to a callback function
// // // //once we get that data, we can do what we want
// // // //problem is what if we want to run something after that function 


// // // // navigator.geolocation.getCurrentPosition(position => {
// // // //     console.log(position);
// // //         //rest of our program depends on the program data
// // //         //not a good way to organize

// // //         //example of callbacK hell
// // //         getSomeData(position, restaurant => {
// // //             console.log(restaurant);
// // //             console.log('done');
// // //             //what if there was an error on the top?
// // //             // we get no details of the execution 
// // //             // no control over our program 
// // //         })
// // // //     
// // // // });


// // // //Fix callback hell with promises 


// // // callbackes -> promises

// // // restaurant example
// // // //-- States of a promise
// // // //pending (pick the seat, walk to the restaurant)
// // // //fulfilled (once it comes back it is either fulfilled)
// // // //rejected  (or rejected)

// // // //constructor function -> returns an instance of a promise return to us
// // // const promise = new Promise ((resolve, reject) => {
// // //     //resolve allows you to change the status of a function to fulfilled
// // //     setTimeout(() => resolve('done'), 1000)

    
// // //     // setTimeout(() => reject(Error("Promise Failed")), 1000)


    
// // //     //reject allows you to change the status of a function to reject 
// // // })
// // // // console.log(promise)

// // // //--instance of our promise will show it is pending
// // // //--doesn't show change whether it was fulfilled or rejecteed
// // // //--constructor functions create objects and they have their own properties and methods and all created promises can invoke 2 methods  (then and catch and both accept their own functions)

// // // promise.then().catch()
// // // //when resolve is called, the code will execute to "then" function 
// // // //when reject is called, the code will excute the code passed to "reject" function
// // // //only one can be executed -- either fulfilled or rejected 

// // // promise.then(() => console.log("success")).catch(() => console.log("failed"))

// // // //we still are not getting our "done" message however
// // // //we pass in the value that we passed earlier, can name it as we wish 
// // // promise.then(value => console.log(value)).catch(() => console.log("failed"))

// // // //change the function above to reject and get the "failed output "
// // // promise
// // // .then(value => console.log(value))
// // // .catch(() => console.log(error))
// // // //we can also add finally 
// // // .finally(() => console.log("done"))


// // // /// -- since we are now familiar with promises, lets revisit the earlier example 

// // // new Promise ((resolve, reject) => {
// // //     navigator.geolocation.getCurrentPosition(position => {
// // //         console.log(position); 
// // //         //we know that when we get the position, our promise was able to resolve successfully 
// // //         //therefore we can pass position into resolve
// // //         resolve(position)
        
// // //         //but what if it failed?
// // //       }, error => {
// // //           reject(error)
// // //       }); 
// // // })

// // // //now we get our promise instance to our promise constructor function so we save it to a variable 

// // // const promise = new Promise ((resolve, reject) => {
// // //     navigator.geolocation.getCurrentPosition(position => {
// // //         console.log(position); 
// // //         //we know that when we get the position, our promise was able to resolve successfully 
// // //         //therefore we can pass position into resolve
// // //         resolve(position)
        
// // //         //but what if it failed?
// // //       }, error => {
// // //           reject(error)
// // //       }); 
// // // })

// // // //now we can use method chaining 
// // // promise
// // // .then(position => console.log(position))
// // // .catch(error => console.log(error))
// // // .finally(() => console.log("done"))


// // // //AJAX video 


// // ////******  API - Application programming interface: software to communicate with other software 
// // // //API - helpful service
// // // //REST API : network request aka AJAX request 

// // // // APIs give us equivalent to 
// // // //CRUD 
// // // //create POST
// // // //read GET
// // // //update PUT / PATCH
// // // // delete DELETE


// // // http://jsonplaceholder.typicode.com/posts
// // // //JSON - JS Object Notation 
// // // //fetch (url) url: is the endpoint, each url has it's own documentation 


// // // // lets try it for:

// // // GET	/posts/1 //single blog post 

// // // //promise instance is returned 

// // // console.log(fetch('https://jsonplaceholder.typicode.com/posts/1'));

// // fetch('https://jsonplaceholder.typicode.com/posts/1')
//         //we use the endpoint above to make a request for a single post

// //     .then(response => response.json())
//         //we get a response and then we use to convert the response into json data



// //     //this then returns it's own promise
// //     .then(data => console.log(data))


// //     //what if you wanted to add a new blog post?
// //     //for anything apart from a simple GET request, we need to pass in an object as a second argument 

// //     ///this is our object where we would be making our POST request
// //     const blogPost = {
// //         title: "Cool post",
// //         body: "lkajsdflkjasjlfda",
// //         userId: 1  
// //       }

// //       fetch('https://jsonplaceholder.typicode.com/posts', {
// //         method: "POST",
// //         headers: {
// //            "Content-Type": "application/json" 
// //         },
// //         body: JSON.stringify(blogPost)
// //       })
// //         .then(response => response.json())
// //         .then(data => console.log(data))


// //   /// But what if we have a problem with our GET request??  

// //   fetch('https://jsonplaceholder.typicode.com/pots/1')
// //   .then(response => response.json())
// //   .then(data => console.log(data))
// //   //fetch promise will result in an object even if it fails 

// //   .catch(error => console.error(error))
// //   //to use the error approach, we need to define and detect the error ourselves using the status code
// // //this will be doing with OK 


// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     //   response.ok // status code of 200 if OK 
//     if (!response.ok) {
//         //we can provide our own error message 
//         throw new Error ("Error")
//         //or we can pass the status code as the error
//         throw new Error (response.status)

//         //4xx client error
//         //5xx server 
//         //2xx OK
//     }
//     return response.json()
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error(error))
//   //catch will catch the error from above 


//   ///exercise 
// //   using https://jsonplaceholder.typicode.com/users/3
// //   extract data about the user's name and email and the company they work for 


// // fetch("https://jsonplaceholder.typicode.com/users/3")
// // .then(response => {
// //     if (!response.ok) {
// //         throw new Error(response.status);
// //     }
// //     return response.json();
// // })
// // .then(person => {
// //     console.log(`${person.name} works for ${person.company.name}`);
// // })
// // .catch(err => console.log(err));
