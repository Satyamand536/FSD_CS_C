
        async function getj(){
            try{
                let response = await fetch("https://v2.jokeapi.dev/joke/Any");
                let data = await response.json();
                let jokeDisplay = document.getElementById("generate");
                if (data.type === "single") {
                     jokeDisplay.textContent = data.joke;
                } else if (data.type === "twopart") { 
                 jokeDisplay.textContent = `${data.setup}+ " - " ${data.delivery}`;
                }
                if(countwords(joke) > 100){
                    jokeDisplay.textContent = "This joke is too long (more than 100 words)."
                }else{
                    jokeDisplay.textContent = joke;
                }
            }
             catch (error) {
                console.log("Error fetching joke:", error);
            }
        }
        function clearj() {
            document.getElementById("generate").textContent = "Press 'Get Joke' for a joke";
        }
    
    