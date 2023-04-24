import { Container } from "./Styles";

export default function Button({ text, ...props }) {
  return <Container {...props}>{text}</Container>;
}
