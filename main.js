function LogIn(){
    let attempts = 1
    let identify = true
    
    do{
        let user = prompt("Type your user")
        if(user === null){
            break
        }
        if(user === "user"){
            alert("Who are you trying to fool?")
        }
        if(user === "Ale Qui" && attempts <=3){
            alert("Welcome Ale")
            identify =false
        }else{
            alert("Jumm... That is not one of our users")
            attempts++
            if(attempts > 3){
                alert("You have exceeded the number of attempts, try again later")
                break
            }
        }
    }while(identify)
}

LogIn()

