import { Container, Label, Input, ErrorMessage } from "./Styles";

export default function EditInput({
  label,
  name,
  placeHolder,
  type,
  errors,
  defaultValue,
  register,
}) {
  const errorMessage = errors?.[name]?.message;
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        placeholder={placeHolder}
        type={type}
        defaultValue={defaultValue}
        error={errorMessage}
        {...register(name)}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}
