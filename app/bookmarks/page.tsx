import Bookmarks from "@/components/bookmarks";
import Container from "@/components/container";
import { format, startOfYear } from "date-fns";
import Raindrop from "lib/raindrop";

export const revalidate = 86400; // 60*60*24

export default async function PhotosPage({}) {
  const dateStartOfYear = startOfYear(new Date());
  const date = format(dateStartOfYear, "yyyy-MM-dd");

  const raindrop = new Raindrop(date);
  const data = await raindrop.getBookmarksGroupByWeek();

  return (
    <>
      <Container size="large" className="mt-20">
        <div className={"max-w-screen-sm mx-auto"}>
          <Bookmarks year={dateStartOfYear.getFullYear()} data={data} />
        </div>
      </Container>
    </>
  );
}
