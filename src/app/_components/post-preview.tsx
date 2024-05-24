import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({ title, date, excerpt, slug }: Props) {
  return (
    <div className="w-[700px] mb-52">
      <h3 className="text-5xl mb-4 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-8 italic">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-xl leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
