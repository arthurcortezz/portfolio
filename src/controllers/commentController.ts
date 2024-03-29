import { Controller } from "./controller";
import { AxiosResponse } from "axios";
class CommentController extends Controller {
  constructor(route: string) {
    super(route);
  }

  async createComment(object: string): Promise<JSON> {
    try {
      let response: AxiosResponse = await this.api.post("/newComment", object);
      // const result = await this.getReturn(response);
      return response.data.name;
    } catch (error: any) {
      throw error.message;
    }
  }

  async notificacoesPush(subscription: any, token?: string | null) {
    try {
      let response = await this.api.post("/saveSubscription", subscription, {
        headers: { authorization: token },
      });
      const retorno = await this.getReturn(response);
      return retorno.resposta;
    } catch (error) {
      throw error;
    }
  }
}
export default new CommentController("comment");
