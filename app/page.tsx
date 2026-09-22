import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Hero />
      <Clients />
      <Services />
    </main>
  );
}
