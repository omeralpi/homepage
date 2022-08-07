import PageTransition from "components/page-transition";
import Social from "components/social";
import Text from "components/text";

export default function HomePage() {
  return (
    <PageTransition>
      <div className="c-small">
        <div className="space-y-6">
          <Text as="h1" size="pageTitle">
            Merhaba, Ben Ömer 👋
            <br />
            Yeri yurdu belli olmayan, düşünceli (?) bir yazılım geliştiriciyim.
          </Text>

          <Text as="p" size="large" dim={1}>
            Motosiklet sürmeyi severim. Özellikle de MacBook ekranı silmek
            hobilerimin başında gelir.
            <br />
            <br />
            Kamp, voleybol, koşu, beni tanımlayan ama aynı zamanda hayatıma tam
            anlamıyla entegre edemediğim kavramlar.
          </Text>

          <Text as="p" size="large" dim={1}>
            Son zamanlarda Airsoft&apos;a ilgim var ve bir de bir Vosvosum olsun
            istiyorum... 🚗
          </Text>
        </div>

        <div className="mt-10">
          <Social />
        </div>
      </div>
    </PageTransition>
  );
}
