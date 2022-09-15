import { MessageToast } from "../components";
import { Controller } from "./controller";

class CommentController extends Controller {
  constructor(route: string) {
    super(route);
  }

  async createComment(message: string) {
    let response = "";
    try {
      if (message.length <= 0) MessageToast.error("Required field!");
      else response = message + " COMMENT";
      console.log(
        "🚀 ~ file: commentController.ts ~ line 14 ~ CommentController ~ createComment ~ response",
        response
      );
      return response;
    } catch (error: any) {
      throw error.message;
    }
  }
}
export default new CommentController("comment");
