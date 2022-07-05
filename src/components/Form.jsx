import { useState } from "react";
import useForm from "../hooks/useForm";
import Checkbox from "./form/Checkbox";
import Input from "./form/Input";
import Radio from "./form/Radio";
import Select from "./form/Select";

export default function Form() {
  const [selectedValue, setSelectedValue] = useState("");
  const [radioValue, setRadioValue] = useState([]);
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [agree, setAgree] = useState([]);

  const cep = useForm("cep");
  const email = useForm("email");
  const nome = useForm("name");
  const cpfCnpj = useForm("cpfCnpj");

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      alert(
        `Enviado: \n Nome: ${nome.value} \n Email: ${email.value} \n CEP: ${cep.value} \n CPF/CNPJ: ${cpfCnpj.value} \n Dispositivo: ${selectedValue}`
      );
    }
  }

  function validateForm() {
    return (
      nome.validate(nome.value) &&
      cep.validate(cep.value) &&
      cpfCnpj.validate(cpfCnpj.value) &&
      email.validate(email.value) &&
      selectedValue &&
      checkboxValues.length &&
      radioValue
    );
  }

  function handleRadioChange(value) {
    setRadioValue(value);
  }

  function handleCheckboxChange(target) {
    if (target.checked) {
      setCheckboxValues([...checkboxValues, target.value]);
    } else {
      setCheckboxValues(
        checkboxValues.filter((value) => value !== target.value)
      );
    }
  }

  function handleAgree(target) {
    if (target.checked) {
      setAgree([target.value]);
    } else {
      setAgree([]);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          width: "100%",
          padding: "10px",
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Input
          type="text"
          label="Nome Completo"
          id="nome"
          value={nome.value}
          onBlur={() => nome.onBlur(nome.value)}
          onChange={nome.onChange}
          placeholder="Nome"
          error={nome.error}
        />
        <Input
          type="text"
          label="CEP"
          id="cep"
          value={cep.value}
          onBlur={() => cep.onBlur(cep.value)}
          onChange={cep.onChange}
          placeholder="00000-000"
          error={cep.error}
        />
        <Input
          type="text"
          label="CPF ou CNPJ"
          id="cpfCnpj"
          value={cpfCnpj.value}
          onBlur={() => cpfCnpj.onBlur(cpfCnpj.value)}
          onChange={cpfCnpj.onChange}
          placeholder="000.000.000-00 ou 00.000.000/0001-00"
          error={cpfCnpj.error}
        />
        <Input
          type="text"
          label="Email"
          id="email"
          value={email.value}
          onBlur={() => email.onBlur(email.value)}
          onChange={email.onChange}
          placeholder="email@email.com"
          error={email.error}
        />
        <div>
          <span>Sexo *</span>
          <Radio
            id="sex"
            label="Masculino"
            value="masc"
            radioValue={radioValue}
            handleChange={handleRadioChange}
          />
          <Radio
            id="sex"
            label="Feminino"
            value="fem"
            radioValue={radioValue}
            handleChange={handleRadioChange}
          />
          <Select
            options={["notebook", "desktop"]}
            value={selectedValue}
            setValue={setSelectedValue}
            // _default={"Dispositivo"}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: "1rem auto",
            }}
          >
            <Checkbox
              id="js"
              value="js"
              label="JavaScript"
              handleChange={handleCheckboxChange}
              values={checkboxValues}
            />
            <Checkbox
              id="java"
              value="java"
              label="Java"
              handleChange={handleCheckboxChange}
              values={checkboxValues}
            />
            <Checkbox
              id="php"
              value="php"
              label="PHP"
              handleChange={handleCheckboxChange}
              values={checkboxValues}
            />
            <Checkbox
              id="python"
              value="python"
              label="Python"
              handleChange={handleCheckboxChange}
              values={checkboxValues}
            />
          </div>
          <Checkbox
            id="agree"
            label="Li e concordo com os termos"
            value="agree"
            values={agree}
            handleChange={handleAgree}
          />
        </div>
      </div>
      <button disabled={!agree.length}>Enviar</button>
    </form>
  );
}
