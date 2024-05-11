import Articles from "@/components/Articles";
import Hero from "@/components/Hero";
import Resume from "@/components/Resume";
import ResumeItem from "@/components/ResumeItem";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Articles></Articles>
      <ResumeItem></ResumeItem>
    </main>
  );
}
