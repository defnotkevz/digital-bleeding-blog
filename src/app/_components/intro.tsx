import localFont from "next/font/local";

const logoFont = localFont({
  src: "../Array-Semibold.otf",
});

export function Intro() {
  return (
    <section
      className={`${logoFont.className} flex-col md:flex-row flex items-center md:justify-between ml-10 mt-4`}
    >
      <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        <span className="text-yellow-400">Digi</span>
        <span className="text-yellow-400">tal Blee</span>
        <span className="text-yellow-400">ding.</span>
      </h1>
    </section>
  );
}
