import { Container } from "./Styles";

export default function Title({
  text,
  marginBottom = "90px",
  responsiveMarginBottom = "60px",
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
