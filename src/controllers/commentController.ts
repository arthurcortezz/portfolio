import { MessageToast } from "../components";
import { Controller } from "./controller";

class CommentController extends Controller {
  constructor(route: string) {
    super(route);
  }

  async createComment(message: string) {
    try {
      MessageToast.sucess("Comment sent successfully!");
    } catch (error: any) {
      throw "Catch";
    }
  }
}
export default new CommentController("comment");
