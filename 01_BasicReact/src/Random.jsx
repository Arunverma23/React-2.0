function Random() {
    let number = Math.floor((Math.random() * 10) + 1);
    return <h1 style = {{'background-color':'rgba(67, 132, 197, 1)'}}>Random number is : {number}</h1>
}

export default Random;