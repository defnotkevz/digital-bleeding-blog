import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  slug: string;
};

export function PostPreview({ title, date, slug }: Props) {
  return (
    <div className="w-full mb-52 flex flex-col justify-center items-center mt-36">
      <h3 className="text-5xl max-w-2xl md:text-7xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none w-full mb-6 md:text-left">
        <Link href={`/posts/${slug}`} className="hover:underline ">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-8 italic w-full md:w-[42rem] lg:w-[42rem] text-left">
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
}
