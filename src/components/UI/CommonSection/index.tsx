import { Container } from "reactstrap";
import '../../../styles/common-section.css';

interface commonProps{
  title: string;
}

export function CommonSection (props: commonProps) {
  return(
    <section className="common__section">
      <Container>
        <h2 className="text-white">{props.title}</h2>
      </Container>
    </section>
  );
}