/* import styles */
import './style.scss';

/* hello world */
function greeter(person:any) {
    return "Hello, " + person;
}
let user = "Jane User";

document.body.innerHTML = greeter(user);
