import { MessageToast } from "../components";
import { Controller } from "./controller";

class LoginController extends Controller {
  constructor(route: string) {
    super(route);
  }

  async makeLogin(object: any) {
    try {
      const bodyCriptografado = await this.criptografarBody(object, process.env.NEXT_STATIC_VAPID_PUBLIC_KEY);
      let response = await this.api.post("/login", object);
      const retorno = await this.descriptografarRetornoBody(response, bodyCriptografado.chaves);
      return retorno;
    } catch (error: any) {
      throw error.message;
    }
  }
  async makeRegister(object: any) {
    try {
      let response = await this.api.post("/register", object);
      const result = await this.getReturn(response);
      return result;
      // MessageToast.sucess("Register make successfully!");
    } catch (error: any) {
      throw error.message;
    }
  }
}
export default new LoginController("account");
