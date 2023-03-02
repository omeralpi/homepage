import A from "components/a";
import Text from "components/text";
import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { tr } from "date-fns/locale";
import type { IBookmark } from "types/index";

function Bookmark({ bookmark }: { bookmark: IBookmark }) {
  return (
    <article className="py-4">
      <Text as="h3" className="font-semibold">
        <A href={bookmark.link}>{bookmark.title}</A>
      </Text>

      <div className="mt-1 flex items-center space-x-2">
        <Text dim={2}>{bookmark.domain}</Text>
        <Text dim={2}>•</Text>
        <Text dim={2}>
          {formatDistanceToNowStrict(parseISO(bookmark.created), {
            addSuffix: true,
            locale: tr,
          })}
        </Text>
      </div>
    </article>
  );
}

function Bookmarks({ data, year }) {
  const sortedData = Object.keys(data).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  return (
    <>
      {sortedData.map((date) => (
        <div key={date} className="mt-20">
          <Text as="h3" size="sectionTitle" dim={3}>
            {date}. Hafta, {year}
          </Text>
          <div className="mt-6 divide-y divide-zinc-100 dark:divide-zinc-800">
            {data[date].map((item) => {
              return <Bookmark key={item._id} bookmark={item} />;
            })}
          </div>
        </div>
      ))}
    </>
  );
}

export default Bookmarks;
