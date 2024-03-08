import { useState } from 'react';
import './App.css';

import Input from './Components/Input/Index';
import { useAnswerStore } from './Store/AnswersStore';

function App() {
  const [show, setShow] = useState(true);
  const answers = useAnswerStore((state) => state.answers);
  const changeAnswer = useAnswerStore((state) => state.changeAnswer);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(answers);
    handleShow();
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <main>
        <form
          className={show ? 'hide' : 'form__container'}
          onSubmit={handleShow}
        >
          <h1 className="text">Obrigado por participar!</h1>
          <input className="text button" type="submit" value="Refazer!" />
        </form>

        <form
          className={show ? 'form__container' : 'hide'}
          onSubmit={handleSubmit}
        >
          <div className="form__container">
            <Input name="Nome" type="text" htmlName="name" required={false} />

            <Input name="Idade" type="number" htmlName="age" required={true} />

            <label className="text" htmlFor="gender">
              Sexo
            </label>
            <select
              className="text__input"
              name="gender"
              id="gender"
              required
              onChange={(event) =>
                changeAnswer(event.target.name, event.target.value)
              }
            >
              <option value=""></option>
              <option value="masc">Masculino</option>
              <option value="fem">Feminino</option>
              <option value="other">Outro</option>
              <option value="na">Prefiro não comentar</option>
            </select>

            <Input name="Email" type="email" htmlName="email" required={true} />

            <Input name="CPF" type="number" htmlName="cpf" required={false} />

            <Input
              name="Gênero Favorito de Filme"
              type="text"
              htmlName="genreFirst"
              required={true}
            />

            <Input
              name="Segundo Gênero Favorito de Filme"
              type="text"
              htmlName="genreSecond"
              required={true}
            />

            <Input
              name="Terceiro Gênero Favorito de Filme"
              type="text"
              htmlName="genreThird"
              required={true}
            />

            <label className="text" htmlFor="preference">
              Preferência
            </label>
            <select
              className="text__input"
              name="preference"
              id="preference"
              required
              onChange={(event) =>
                changeAnswer(event.target.name, event.target.value)
              }
            >
              <option value=""></option>
              <option value="shorts">Curtas</option>
              <option value="feature">Longas</option>
              <option value="miniseries">Mini-séries</option>
              <option value="shows">Séries</option>
            </select>
          </div>

          <input className="text button" type="submit" value="Enviar!" />
        </form>
      </main>
    </>
  );
}

export default App;
