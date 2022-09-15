import * as yup from "yup";

yup.setLocale({
  mixed: {
    default: "it is invalid",
    required: "is a mandatory field",
    oneOf: "",
    notOneOf: "",
    notType: () => {
      return ``;
    },
    defined: "",
  },
  string: {
    length: "",
    min: "",
    max: "",
    email: "",
    url: "",
    trim: "",
    lowercase: "",
    uppercase: "",
  },
  number: {
    min: "",
    max: "",
    lessThan: "",
    moreThan: "",
    positive: "",
    negative: "",
    integer: "",
  },
  date: {
    min: "",
    max: "",
  },
  array: {
    min: "",
    max: "",
  },
});

export default yup;
