import { Container, Input, ErrorMessage } from "./Styles";

export default function FormInput({
  name,
  placeHolder,
  type,
  errors,
  register,
}) {
  const errorMessage = errors?.[name]?.message;
  return (
    <Container>
      <Input
        id={name}
        placeholder={placeHolder}
        type={type}
        error={errorMessage}
        {...register(name)}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}
