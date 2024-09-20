import { Controller , Get, HttpCode} from "@nestjs/common";
import { View } from "./view";

@Controller('')
export class AppController {
@Get()
@HttpCode(200)
    getHome(): string{
        return (View)
    }
}