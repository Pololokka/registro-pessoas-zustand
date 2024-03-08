import { useState } from 'react';
import './App.css';

import Input from './Components/Input/Index';

const formDefaultValues = {
  name: '',
  age: '',
  gender: 'masc',
  email: '',
  cpf: '',
  genreFirst: '',
  genreSecond: '',
  genreThird: '',
  preference: 'shorts',
};

function App() {
  const [formValues, setFormValues] = useState(formDefaultValues);
  const [show, setShow] = useState(true);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formValues);
    setFormValues(formDefaultValues);
    handleShow();
  };

  const handleChange = (event: any) => {
    const value = event.target.value;
    const field = event.target.name;
    setFormValues({ ...formValues, [field]: value });
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
            <Input
              handleChange={handleChange}
              name="Nome"
              type="text"
              htmlName="name"
              required={false}
              value={formValues.name}
            />

            <Input
              handleChange={handleChange}
              name="Idade"
              type="number"
              htmlName="age"
              required={true}
              value={formValues.age}
            />

            <label className="text" htmlFor="gender">
              Sexo
            </label>
            <select
              className="text__input"
              name="gender"
              id="gender"
              required
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="masc">Masculino</option>
              <option value="fem">Feminino</option>
              <option value="other">Outro</option>
              <option value="na">Prefiro não comentar</option>
            </select>

            <Input
              handleChange={handleChange}
              name="Email"
              type="email"
              htmlName="email"
              required={true}
              value={formValues.email}
            />

            <Input
              handleChange={handleChange}
              name="CPF"
              type="number"
              htmlName="cpf"
              required={false}
              value={formValues.cpf}
            />

            <Input
              handleChange={handleChange}
              name="Gênero Favorito de Filme"
              type="text"
              htmlName="genreFirst"
              required={true}
              value={formValues.genreFirst}
            />

            <Input
              handleChange={handleChange}
              name="Segundo Gênero Favorito de Filme"
              type="text"
              htmlName="genreSecond"
              required={true}
              value={formValues.genreSecond}
            />

            <Input
              handleChange={handleChange}
              name="Terceiro Gênero Favorito de Filme"
              type="text"
              htmlName="genreThird"
              required={true}
              value={formValues.genreThird}
            />

            <label className="text" htmlFor="preference">
              Preferência
            </label>
            <select
              className="text__input"
              name="preference"
              id="preference"
              required
              onChange={handleChange}
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
