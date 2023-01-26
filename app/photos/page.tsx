import Container from "@/components/container";
import MetricCard from "@/components/metric-card";
import Photos from "@/components/photos";
import { META } from "@/data/meta";
import unsplash from "@/lib/unsplash";

export const revalidate = 86400; // 60*60*24

export default async function PhotosPage() {
  const photos = await unsplash.getPhotos();
  const stats = await unsplash.getStats();

  return (
    <>
      <Container>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
          <MetricCard href={META.social.unsplash} data={stats.views.total}>
            Unsplash Views
          </MetricCard>
          <MetricCard href={META.social.unsplash} data={stats.downloads.total}>
            Unsplash Downloads
          </MetricCard>
        </div>
      </Container>

      <Container size="large" className="mt-20">
        <Photos data={photos} />
      </Container>
    </>
  );
}
