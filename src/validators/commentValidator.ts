import yup from "./validator";

const validateComment = {
  comment: yup.object().shape({
    message: yup.string().required().label("Message"),
  }),
};

const validationComment = async function (comment: object) {
  try {
    await validateComment.comment.validate(comment);
    return { valid: true, title: "valid" };
  } catch (error: any) {
    throw { valid: false, title: `${error.params.label + " " + error.message}` };
  }
};
export default validationComment;
