//Intro
navigator.geolocation.getCurrentPosition (position => {
    console.log(position);
});
console.log('done'); //can run the code through the browser. Done will display first, this is asynchronous!

//Some Asynch functions we may have looked at

window.addEventListener("load", () => {
    alert("page has loaded")
})

const image = document.getElementById("myImg") //getting image from index.html

image.addEventListener("load", () => {
    alert("Image has loaded")
})

//set timeout

function myFunction(){
    setTimeout(() => {
        alert("Hello there")
    }, 3000);
}

//intro to callback hell

window.addEventListener("load", () => {
    console.log("page has loaded")
    console.log("done")
})

//callback hell example

//navigator.geolocation.getCurrentPosition (position => {
    //console.log(position);
   // anotherFunction(position, restaurant => { //passing in another function, one is depending on the other. If one d/n work the other d/n work. No way to test!
        //console.log(position);
        //console.log(restaurant);
            //issues with this:
            //what if there was an error on top?
            //we get no details of the execution
            //no controll over the program
    // })
// });
// console.log('done');

//How can we fix callback hell?

//Restaurant example
        ///some promises that can take place:
        /// 1) Pending (waiting to be seated, walking to the restaurant while the food is being prepared)
        //  2) fulfilled (once it ready, you can do as you wish)
        //  3) rejected ()

        //creates a constructor funciton
        const promise = new Promise((resolve, reject) => {

            setTimeout(() => resolve ('done'), 1000)

            setTimeout(() => resolve (Error('Promise failed')), 1000)


        })

        console.log(promise)

        //Question: what can we do nest after, "resolve" and "reject" are being used in the callback?

        promise.then().catch()
        //looking up, when resolve is called, the code will execute "then" function
        //if reject is called, the code will execute the "catch" function

        //Student's example
        // const thepromise = new Promise((resolve, reject) => {
        //     let connection = true;
        //     if(connection){
        //         resolve('it works')
        //     } else {
        //         reject('failed')
        //     }
      

        // });
        //     //this text inside the promise block d/n work prob next line "promise is what doesn;t work
        //     // promise
        //     // .then(() => console.log("success"))
        //     // .catch(() => console.log("failed"))

        // thepromise.then((msg) => {
        //     console.log(msg);
        // }).catch((msg) => {
        //     console.log(msg);
        // })

        // console.log(promise)

        //Another student's example
        //      const promise1 = new Promise((resolve, reject) => {
        //          resolve('Success!')
        //          reject('failed')
        //      });
        
        //      promise1.then((value) => { console.log(value) }).catch((fail => { console.log(fail) }))
        //can use this link for the documentation that helps, slides make it more complicated: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

        //Fahad's example
        const promise1 = new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(position => {
                //console.log(position)
                //we know that when we get the position, our promise was able to resolve successfully therefore we can pass position into resolve
                resolve(position)

                //but what if it failed?
            }, error => {
                reject(error)
            });
        })

        //now we can use method chaining
        promise1
        .then(position => console.log(position))
        .catch(error => console.log(error))
        .finally(() => console.log("done"))

        //**** */ APIs

        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json()) //usefil because when we make an API request we want the format to be in a json object!!! We get a response and then we use to convert the response into json data
        .then(data => console.log(data))

        //this is our obejct where we would be making our POST request
        const blogPost = {
            title: "Cool post",
            body: "jfkdls;afjklsd",
            userId: 1
        }

        //How can we make a POST request?
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blogPost)
        })
        .then(response => response.json()) //returns another promise as json obj
        .then(data => console.log(data))

        ////But what if we have a problem with our GET request??
        // fetch('https://jsonplaceholder.typicode.com/pots/1') //error 404, use catch!
        // .then(response => response.json())
        // .then(data => console.log(data))
        // //fetch promise will result in an object even if it fails

        .catch(error => console.error(error))

        //we have to define what error is
        fetch('https://jsonplaceholder.typicode.com/pots/1') 
            .then(response => {
                //response.ok.// status code of 200 if OK
                
                if (!response.ok){
                    //when response is not OK
                    throw new Error("Error!!")

                }

                return response.json()
            })
            .then(data => console.log(data))
            .catch(error => console.log(error))

           
    