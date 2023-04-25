import { Container } from "./Styles";

export default function Title({
  text,
  marginBottom = "9rem",
  responsiveMarginBottom = "6rem",
}) {
  return (
    <Container
      marginBottom={marginBottom}
      responsiveMarginBottom={responsiveMarginBottom}
    >
      {text}
    </Container>
  );
}
