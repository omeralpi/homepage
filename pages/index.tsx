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
            Şu an için İstanbul'da yaşıyorum. Yazılım geliştirme ile
            ilgileniyorum.
          </Text>

          <Text as="p" size="large" dim={1}>
            Yakında burayı güncelleyeceğim. 🚧 (10.09.2022)
          </Text>
        </div>

        <div className="mt-10">
          <Social />
        </div>
      </div>
    </PageTransition>
  );
}
