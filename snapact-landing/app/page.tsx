import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Modules from "@/components/Modules";

export default function Home() {
  return (
    <main className="flex flex-col gap-0 pb-0">
      <Hero />
      <Problem />
      <Solution />
      <Modules />
    </main>
  );
}
