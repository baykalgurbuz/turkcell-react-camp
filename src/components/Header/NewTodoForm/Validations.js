import * as Yup from "yup";

const Validations =Yup.object().shape({
    text:Yup.string().required("Text is a required field"),
});

export default Validations;