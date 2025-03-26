class Users {
    constructor(name, authorized) {
        this.name = name;
        this.authorized = authorized;
    }
}

const usersList = [
    new Users("Alejandra", true),
    new Users("Ana", false),
    new Users("Johanna", true),
    new Users("Juliana", false),
    new Users("Liliana", true)
];

function LogIn() {
    let attempts = 1;
    let identify = true;

    do {
        let userInput = prompt("Type your user");

        if (userInput === null) {
            break;
        }

        userInput = userInput.toLowerCase();

        let foundUser = usersList.find(user => user.name.toLowerCase() === userInput);

        if (foundUser && attempts <= 3) {
            alert("Welcome " + foundUser.name);
            identify = false;
        } else {
            alert("Jumm... That is not one of our users");
            attempts++;

            if (attempts > 3) {
                alert("You have exceeded the number of attempts, try again later");
                break;
            }
        }
    } while (identify);
}


LogIn();

