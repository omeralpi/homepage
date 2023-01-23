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
            İçimdeki çocuğu tatmin etmek için yazılım geliştirme ile
            uğraşıyorum.
          </Text>
        </div>

        <div className="mt-10">
          <Social />
        </div>
      </div>
    </PageTransition>
  );
}
