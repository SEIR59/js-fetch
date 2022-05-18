const clickBtn = document.querySelector("#get-users-btn");
// console.log(clickBtn);
// clickBtn.addEventListener('click', function(){console.log("hello?")})
clickBtn.addEventListener('click', myFetch)

// const response = fetch("https://randomuser.me/api?results=5");

// console.log("I am first!")

function myFetch(){
    fetch("https://randomuser.me/api?results=5").then(function(response){
            // console.log(response); // didn't give me the data the way I need it
            // console.log(response.json())
            response.json().then(function(data){
                // console.log(data)
                console.log(data.results)
                // console.log(data.results[0])
                // console.log(data.results[0].email);
                // const userH3 = document.createElement('h3');
                // userH3.innerText = data.results[0].email;
                // console.log(userH3);
                // document.body.append(userH3);
                // userH3.innerText = data.results[0].name.first + " " + data.results[0].name.last;
                // document.body.append(userH3);
                // const myImg = document.createElement('img');
                // myImg.setAttribute("src", data.results[0].picture.large);
                // document.body.append(myImg);
    
                for(let i = 0; i < data.results.length; i++){
                    const userH3 = document.createElement('h3');
                    userH3.innerText = data.results[i].name.first + " " + data.results[i].name.last;
                    document.body.append(userH3);
                    const myImg = document.createElement('img');
                    myImg.setAttribute("src", data.results[i].picture.large);
                    document.body.append(myImg);
                }
            })
        }
    );
}


// console.log("I am last!")
