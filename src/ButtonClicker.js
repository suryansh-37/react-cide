function ButtonClicker(){
    function handleClick() { 
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userInput = prompt('type a number'); 
        alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
    return(
        <div>
            <button onClick={handleClick}>click me</button>
        </div>

    )

}
export default ButtonClicker