let choises = document.querySelectorAll("img");
let userScore = document.querySelector(".you");
let CompScore = document.querySelector(".comp");
let win = document.querySelector(".win");
let userChoise;

let userNum = 0;
let compNum = 0;


choises.forEach((choise)=>{
    choise.addEventListener("click", () =>{
         userChoise = choise.getAttribute("id");
         CompChoise();

         GamePlay(userChoise, CompChoise())

  
    })
})


CompChoise = () =>{
    let values = ["rock","paper","scissors"];
    let random = Math.floor(Math.random() * 3);
    return values[random]; 

}


GamePlay = (userChoise, CompChoise) =>{
console.log(userChoise)
console.log(CompChoise)

if(userChoise === CompChoise){
    win.innerHTML = `Draw, as you choose ${userChoise} and Comp choose ${CompChoise}`
    win.style.background = "blue"
}

else if(userChoise === "rock")
{
    //paper, scissors
    if(CompChoise === "paper")
    {
        // console.log(`Comp win, you choose ${userChoise} & comp choose ${CompChoise}`)
    win.innerHTML = `Comp win, you choose ${userChoise} and Comp choose ${CompChoise}`
       CompScore.innerHTML =  ++compNum;
       win.style.background = "red"
    }
else if(CompChoise === "scissors")
{
    // console.log(`You win, you choose ${userChoise} & comp choose ${CompChoise}`)
    win.innerHTML = `You win, you choose ${userChoise} and Comp choose ${CompChoise}`
   userScore.innerHTML = ++userNum;
   win.style.background = "green"
}

}


else if(userChoise === "paper")
{
    //rock, scissors
    if(CompChoise === "rock")
    {
        // console.log(`You win, you choose ${userChoise} & comp choose ${CompChoise}`)
    win.innerHTML = `You win, you choose ${userChoise} and Comp choose ${CompChoise}`
        userScore.innerHTML = ++userNum;
        win.style.background = "green"
    }
else if(CompChoise === "scissors")
{
    // console.log(`Comp win, you choose ${userChoise} & comp choose ${CompChoise}`)
    win.innerHTML = `Comp win, you choose ${userChoise} and Comp choose ${CompChoise}`
    CompScore.innerHTML =  ++compNum;
    win.style.background = "red"
}

}


else if(userChoise === "scissors")
{
    //rock, paper
    if(CompChoise === "rock")
    {
        // console.log(`Comp win, you choose ${userChoise} & comp choose ${CompChoise}`)
    win.innerHTML = `Comp win, you choose ${userChoise} and Comp choose ${CompChoise}`
        CompScore.innerHTML =  ++compNum;
        win.style.background = "red"
    }
else if(CompChoise === "paper")
{
    // console.log(`You win, you choose ${userChoise} & comp choose ${CompChoise}`)
    win.innerHTML = `You win, you choose ${userChoise} and Comp choose ${CompChoise}`

    userScore.innerHTML = ++userNum;
    win.style.background = "green"
}

}



}



