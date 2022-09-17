import { MessageToast } from "../components";
import { Controller } from "./controller";
import { Comment } from "../interfaces";
import { AxiosResponse } from "axios";
class CommentController extends Controller {
  constructor(route: string) {
    super(route);
  }

  async createComment(object: string): Promise<JSON> {
    try {
      let response: AxiosResponse = await this.api.post("/", object);
      // const result = await this.getReturn(response);
      return response.data.name;
    } catch (error: any) {
      throw error.message;
    }
  }
}
export default new CommentController("comment");
