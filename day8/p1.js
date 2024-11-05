async function restaurant(){

    console.log("very good");
    let pizza = await orderedfood("pizza",2000);
    console.log(pizza);
    try{
        let burger = await orderedfood("burger",3000);
        console.log(burger);
    }
}