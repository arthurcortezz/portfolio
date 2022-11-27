import { MessageToast } from "../components";
import { Controller } from "./controller";

class LoginController extends Controller {
  constructor(route: string) {
    super(route);
  }

  async makeLogin(object: any) {
    try {
      let response = await this.api.post("/login", object);
      return response.data;
    } catch (error: any) {
      MessageToast.error(error.response.data.message);
    }
  }
  async makeRegister(object: any) {
    try {
      let response = await this.api.post("/register", object);
      return response.data;
    } catch (error: any) {
      MessageToast.error(error.response.data.message);
    }
  }
}
export default new LoginController("account");
