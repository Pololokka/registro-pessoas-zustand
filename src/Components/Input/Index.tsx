import { useAnswerStore } from '../../Store/AnswersStore';

const Input = ({
  name,
  type,
  htmlName,
  id,
  required,
}: {
  name: string;
  type: any;
  htmlName: string;
  id?: string;
  required: boolean;
}) => {
  const changeAnswer = useAnswerStore((state) => state.changeAnswer);
  const answers = useAnswerStore((state) => state.answers);

  return (
    <>
      <label className="text input__comp" htmlFor={htmlName}>
        {name}:{' '}
      </label>
      <input
        className="text__input"
        type={type}
        name={htmlName}
        id={id || htmlName}
        required={required}
        onChange={(event) =>
          changeAnswer(event.target.name, event.target.value)
        }
        //@ts-ignore
        value={answers[htmlName] || ''}
      />
    </>
  );
};

export default Input;
