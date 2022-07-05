import React, { useState } from "react";
import Radio from "./form/Radio";

const asks = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./component"',
      'require("./component")',
      'import "./component"',
    ],
    resposta: 'import Component from "./component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useState()", "useFetch()", "useEffect()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criar um custom hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

export default function Quiz() {
  const [answers, setAnswers] = useState({ p1: "", p2: "", p3: "", p4: "" });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);

  function handleChange(value, id) {
    setAnswers({ ...answers, [id]: value });
  }

  function handleNext() {
    if (answers[asks[currentQuestion].id]) {
      setCurrentQuestion(currentQuestion + 1);
    }
    if (currentQuestion >= asks.length - 1) {
      setRightAnswers(
        asks.filter((ask) => ask.resposta === answers[ask.id]).length
      );
    }
  }

  if (!asks[currentQuestion]) {
    return <h1>Você acertou {rightAnswers} de {asks.length}</h1>;
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2>{asks[currentQuestion].pergunta}</h2>
      {asks[currentQuestion].options.map((option) => (
        <Radio
          key={option}
          id={asks[currentQuestion].id}
          label={<code>{option}</code>}
          handleChange={handleChange}
          value={option}
          radioValue={answers}
        />
      ))}
      <button onClick={handleNext}>Próxima</button>
    </form>
  );
}