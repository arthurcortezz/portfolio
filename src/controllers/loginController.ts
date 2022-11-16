import { MessageToast } from "../components";
import { Controller } from "./controller";

class LoginController extends Controller {
  constructor(route: string) {
    super(route);
  }

  async makeLogin(object: any) {
    try {
      let response = await this.api.post("/login", object);
      const result = await this.getReturn(response);
      MessageToast.sucess("Login make successfully!");
      return result;
    } catch (error: any) {
      throw error.message;
    }
  }
  async makeRegister(object: any) {
    try {
      let response = await this.api.post("/register", object);
      const result = await this.getReturn(response);
      MessageToast.sucess("Register make successfully!");
      return result;
    } catch (error: any) {
      throw error.message;
    }
  }
}
export default new LoginController("login");
