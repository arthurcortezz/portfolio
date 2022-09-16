import yup from "./validator";
import { Comment } from "../interfaces";

const validateComment = {
  comment: yup.object().shape({
    message: yup.string().required().label("Message"),
  }),
};

const validationComment = async function (comment: any) {
  try {
    await validateComment.comment.validate(comment);
    return { valid: true, message: "valid", object: comment };
  } catch (error: any) {
    throw { valid: false, message: `${error.params.label + " " + error.message}` };
  }
};
export default validationComment;
