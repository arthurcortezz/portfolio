import { MessageToast } from "../components";
import { Controller } from "./controller";
import { Comment } from "../interfaces";
class CommentController extends Controller {
  constructor(route: string) {
    super(route);
  }

  async createComment(object: Comment): Promise<JSON> {
    try {
      let response = await this.api.post("/", object);
      const result = await this.getReturn(response);
      MessageToast.sucess("Comment sent successfully!");
      return result;
    } catch (error: any) {
      throw error.message;
    }
  }
}
export default new CommentController("comment");
