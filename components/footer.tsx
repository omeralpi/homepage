import Container from "@/components/container";
import { StyleLink } from "@/components/link";

export default function Footer() {
  return (
    <footer className="mt-40">
      <Container>
        <p>
          Bu web sitesinin kaynak kodlarına{" "}
          <StyleLink href="https://github.com/devalpi/homepage">
            Github üzerinden
          </StyleLink>{" "}
          ulaşabilirsiniz.
        </p>
      </Container>
    </footer>
  );
}
