import Game from "@/components/Game";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full flex gap-4 border-b-2 justify-center items-center h-16">
        <img className="h-8" src="/logo.svg" />
        <h1 className="font-heading font-bold text-2xl bg-gradient-to-b from-primary to-primary-dark bg-clip-text text-transparent">
          AlgoVibe
        </h1>
      </nav>

      {/* Hero Section */}

      <main className="h-[90vh] sm:h-screen w-full overflow-hidden">
        <div className="flex max-w-6xl px-8 items-center h-full mx-auto">
          <div className="flex gap-6 flex-col justify-center items-center sm:items-start h-full text-center sm:text-left">
            <h1 className="font-heading font-extrabold text-5xl sm:text-7xl bg-gradient-to-b from-primary to-primary-dark bg-clip-text text-transparent">
              Watch
              <br />
              Dancing
              <br />
              Algorithms
              <br />
            </h1>
            <p className="font-text text-gray-700">
              AlgoVibe is a platform where you can visualize the algorithms that
              confuse your brain.
            </p>
            <Link
              className="relative group w-max font-bold font-text text-lg"
              href="/sorting"
            >
              Let's Visualize
              <BsArrowRight className="inline-block ml-2 h-full group-hover:translate-x-4 transition-all" />
              <span className="block absolute bottom-0 left-0 -z-10 w-full h-1/2 bg-secondary"></span>
            </Link>
          </div>
          <Image
            src="/hero-illustration.png"
            alt="tree-image"
            className="w-1/2 hidden sm:block"
            width={400}
            height={400}
          />
        </div>
      </main>

      {/* About Section */}

      <div className="w-full h-32 bg-primary text-white flex items-center justify-center skew-y-6 sm:skew-y-3 relative group hover:-skew-y-6 sm:hover:-skew-y-3 transition-transform">
        <span className="-skew-y-12 sm:-skew-y-6 font-heading font-extrabold text-3xl group-hover:skew-y-12 sm:group-hover:skew-y-6 transition-transform">
          Who am i?
        </span>
        <div className="absolute top-0 left-0 bg-primary-dark w-full h-full -skew-y-12 sm:-skew-y-6 -z-10 group-hover:skew-y-12 sm:group-hover:skew-y-6 transition-transform"></div>
      </div>

      <section className="w-full h-screen flex gap-8 px-8 max-w-6xl mx-auto justify-center items-center">
        <Game />
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <h2 className="font-text font-bold text-2xl mb-4 text-center sm:text-left text-gray-800">
            Hi, I am Nayan Radadiya <br className="sm:hidden" />( NayanVR😉 )
          </h2>
          <SkillTile title="Web Developer" />
          <SkillTile title="Graphic Designer" />
          <SkillTile title="UI/UX Designer" />
          <SkillTile title="Youtuber" />
          <Link
            className="relative group w-max mt-4 font-bold font-text text-lg"
            href="https://www.nayanvr.in"
            target="_blank"
          >
            My Portfolio
            <BsArrowRight className="inline-block ml-2 h-full group-hover:translate-x-4 transition-all" />
            <span className="block absolute bottom-0 left-0 -z-10 w-full h-1/2 bg-secondary"></span>
          </Link>
        </div>
      </section>
    </>
  );
}

function SkillTile({ title }: { title: string }) {
  return (
    <h3 className="px-6 py-3 relative font-text font-medium w-full text-center sm:w-max group">
      {title}
      <span className="absolute bg-secondary top-0 left-0 w-full h-full -z-10 group-hover:w-0 transition-all duration-500"></span>
    </h3>
  );
}
