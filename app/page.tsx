import AboutMe from "@/components/AboutMe";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Navbar name="Oskar Mularski" />
        <AboutMe />
      </main>
    </div>
  );
}
