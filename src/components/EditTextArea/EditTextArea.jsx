import { Container, Label, TextArea, ErrorMessage } from "./Styles";

export default function EditTextArea({
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
      <TextArea
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
