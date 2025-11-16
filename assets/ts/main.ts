import "bootstrap"
import { GreetingService } from "./components/GreetingService";

let service = new GreetingService();

(function() {
    console.log(service.greet("Guest!"));
})();
