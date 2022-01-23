import { App } from "vue";
import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  min,
  max,
  confirmed,
  email,
  min_value,
  max_value,
  not_one_of,
} from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";

export default {
  install(app: App) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("passwordsMismatch", confirmed);
    defineRule("email", email);
    defineRule("minValue", min_value);
    defineRule("maxValue", max_value);
    defineRule("excluded", not_one_of);
    defineRule("countryExcluded", not_one_of);

    configure({
      generateMessage: localize({
        en: {
          messages: {
            required: "This field is required.",
            min: "The {field} must be at least 0:{min} characters long.",
            max: "The {field} can't be longer than 0:{max} characters.",
            email: "The {field} must have a valid format.",
          },
          names: {
            name: "Name",
            email: "E-mail",
            message: "Message",
          },
        },
        pt: {
          messages: {
            required: "Este campo é essencial.",
            min: "O {field} tem que ter pelo menos 0:{min} caracteres.",
            max: "O {field} não pode ser maior que 0:{max} caracteres.",
            email: "O {field} tem que ter um formato válido.",
          },
          names: {
            name: "Nome",
            email: "E-mail",
            message: "Mensagem",
          },
        },
      }),
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
