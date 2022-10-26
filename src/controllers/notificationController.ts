import { Controller } from "./";
class NotificacaoController extends Controller {
  constructor(route: string) {
    super(route);
  }
  async newSubscription(subscription: any) {
    try {
      let response = await this.api.post("/saveSubscription", subscription, {
        headers: { "Access-Control-Allow-Origin": true },
      });
      const retorno = await this.getReturn(response);
      return retorno.resposta;
    } catch (error: any) {
      throw error;
    }
  }

  async notificacoesPush() {
    try {
      let response = await this.api.post("/notificationPush", {
        headers: { "Access-Control-Allow-Origin": true },
      });
      const retorno = await this.getReturn(response);
      return retorno.resposta;
    } catch (error) {
      throw error;
    }
  }
}
export default new NotificacaoController("notification");
