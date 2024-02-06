import Container from "@/components/container";
import Social from "@/components/social";
import Title from "@/components/title";

export default function Index() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <Title>
            <b className="font-semibold">Merhaba, Ben Ömer 👋</b>
          </Title>
        </div>

        <div className="mt-10">
          <Social />
        </div>
      </Container>
    </>
  );
}
