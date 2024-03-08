import { create } from 'zustand';

type formTypes = {
  name: string;
  age: string;
  gender: string;
  email: string;
  cpf: number;
  genreFirst: string;
  genreSecond: string;
  genreThird: string;
  preference: string;
};

export const formDefaultValues = {
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

type AnswerStore = {
  answers: formTypes;
  changeAnswer: (field: string, value: string | number) => void;
  clearAnswers: () => void;
};

//@ts-ignore
export const useAnswerStore = create<AnswerStore>((set) => {
  return {
    answers: {},

    changeAnswer: (field, value) => {
      console.log(field);
      console.log(value);
      set((state) => ({ answers: { ...state.answers, [field]: value } }));
    },

    //@ts-ignore
    clearAnswers: () => set(() => ({ answers: formDefaultValues })),
  };
});
