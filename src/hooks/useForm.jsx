import { useState } from "react";

const types = {
  name: {
    regex: /^[a-zA-Zá-úÁ-Ú' ]{8,30}$/,
  },
  cep: {
    regex: /^\d{5}-?\d{3}$/,
  },
  cpfCnpj: {
    regex: /^([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})$|^([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})$/,
  },
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
};

export default function useForm(type) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function validate(value) {
    if (!value.length) {
      setError("Preencha esse campo");
      return false;
    } else if (!types[type].regex.test(value.trim())) {
      setError(`Invalid ${type}`);
      return false;
    } else {
      setError("");
      return true;
    }
  }

  function onChange(value) {
    setValue(value.trimStart());
    if (error) {
      validate(value);
    }
  }

  return { value, setValue, error, onChange, validate, type, onBlur: () => { setValue(value.trim()); validate(value); } };
}