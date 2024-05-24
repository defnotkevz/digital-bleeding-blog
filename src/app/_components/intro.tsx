import localFont from "next/font/local";

const logoFont = localFont({
  src: "../Array-Semibold.otf",
});

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1
        className={`text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 ${logoFont.className} text-zinc-500`}
      >
        Digital <span className="text-red-800">Bleeding.</span>
      </h1>
      <h4 className="text-center md:text-left text-lg md:pl-8">
        evanescence of human emotions in zeroes and ones.
      </h4>
    </section>
  );
}
