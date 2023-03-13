import { Container, Label, Input, TextArea, ErrorMessage } from "./Styles";

export default function EditInput({
  label,
  name,
  placeHolder,
  type,
  errors,
  textAreaMode = false,
  // register,
}) {
  const errorMessage = errors?.[name]?.message;
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      {textAreaMode ? (
        <TextArea
          id={name}
          placeholder={placeHolder}
          type={type}
          // error={errorMessage}
          // {...register(name)}
        />
      ) : (
        <Input
          id={name}
          placeholder={placeHolder}
          type={type}
          // error={errorMessage}
          // {...register(name)}
        />
      )}

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}
