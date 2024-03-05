import { useState } from 'react';
import './App.css';

import Input from './Components/Input/Index';

const formDefaultValues = {
  name: '',
  age: '',
  gender: '',
  email: '',
  cpf: '',
  genreFirst: '',
  genreSecond: '',
  genreThird: '',
  preference: '',
};

function App() {
  const [formValues, setFormValues] = useState(formDefaultValues);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formValues);
  };

  const handleChange = (event: any) => {
    const value = event.target.value;
    const field = event.target.name;
    setFormValues({ ...formValues, [field]: value });
  };

  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
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

          <input type="submit" value="Enviar!" />
        </form>
      </main>
    </>
  );
}

export default App;
