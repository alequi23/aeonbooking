
class users = {
    builder(name,authorized){
        this.name = name
        this.authorized = authorized
    }
}

const user1 = new users("Alejandra",true)
const user2 = new users("Ana",false)
const user3 = new users("Johanna",true)
const user4 = new users("Juliana",false)
const user5 = new users("Liliana",true)

function LogIn(){
    let attempts = 1
    let identify = true

    
    do{
        let user = prompt("Type your user").toUpperCase()
        let search = users.filter( (x)=> x.toUpperCase().includes(user) )
        if(user === null){
            break
        }
        if(search.length >0 && attempts <=3){
            alert("Welcome " + search)
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

