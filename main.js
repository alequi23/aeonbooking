
const users = ["Alejandra Quitian","Ana Maria Marin","Andrea Rojas","Camilo Salcedo","Cristian Cardona","Cristian Valderrama","Daniel Pinto","Johanna Arboleda","Juliana Perez","Leidy Garcia","Lidsay Perez","Liliana Munoz","Marggie Monroy","Nicolas Velasquez","Santiago Rico","Stefanny Malaver","Valeria Ossa"]


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

