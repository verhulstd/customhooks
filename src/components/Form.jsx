import { useField } from "../helpers";
const Form = () => {
  const nameField = useField(true);
  const ageField = useField(false);
  const cityField = useField(false);
  return (
    <div>
      <input type="text" {...nameField} />
      <br />
      <input type="text" {...ageField} />
      <br />
      <input type="text" {...cityField} />
      <h1>
        {nameField.value} - {ageField.value} - {cityField.value}
      </h1>
    </div>
  );
};

export default Form;
