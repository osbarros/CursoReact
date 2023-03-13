import { Container, ErrorMessage, Input, Label } from "./Styles";

export default function EditInput({
  label,
  name,
  placeHolder,
  type,
  errors,
  // register,
}) {
  const errorMessage = errors?.[name]?.message;
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        id={name}
        placeholder={placeHolder}
        type={type}
        // error={errorMessage}
        // {...register(name)}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}
