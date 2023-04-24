import { Container, Select, ErrorMessage } from "./Styles";

export default function FormSelect({
  name,
  placeHolder,
  type,
  errors,
  register,
  data,
}) {
  const errorMessage = errors?.[name]?.message;
  return (
    <Container>
      <Select
        id={name}
        placeholder={placeHolder}
        type={type}
        error={errorMessage}
        {...register(name)}
      >
        {data.map((text) => (
          <option value={text} key={text}>
            {text}
          </option>
        ))}
      </Select>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}
