import DescriptionMap from "@/components/DescriptionMap";
import Link from "next/link";

function SectionHeaderText(props: any) {
  const { children } = props;
  return <h4 className="pb-5 text-xl font-semibold">{children}</h4>;
}

export default function Home() {
  const links = [
    {
      name: "Email",
      content: "danik1341@gmail.com",
      link: "danik1341@gmail.com",
    },
    {
      name: "GitHub",
      content: "danik1341",
      link: "https://github.com/danik1341",
    },
    {
      name: "LinkedIn",
      content: "Daniel Yakovizki",
      link: "https://www.linkedin.com/in/daniel-yakovizki-336905233/",
    },
  ];

  const skills = [
    {
      name: "JavaScript",
      content: ["React", "React Native", "NextJs 13", "Node.js", "TypeScript"],
    },
    {
      name: "Python",
      content: ["Data Analysis", "Django", "Flask", "Data Visualization"],
    },
    {
      name: "Web",
      content: [
        "Sass",
        "TailwindCSS",
        "Bootstrap",
        "ChakraUI",
        "Firebase",
        "Sanity",
        "NoSQL",
        "MongoDB",
        "GIT",
      ],
    },
    { name: "Design", content: ["Figma"] },
  ];

  return (
    <main className="flex flex-col space-y-8 p-4 mx-auto max-w-[900px] w-full">
      <h2 className=" font-bold text-4xl sm:text-5xl md:text-6xl sm:py-4 md:py-8">
        Digital Résumé
      </h2>
      <section>
        <SectionHeaderText>Daniel Yakovizki - Web Developer</SectionHeaderText>
        <DescriptionMap list={links} type={"links"} />
      </section>

      <section>
        <SectionHeaderText>Skills</SectionHeaderText>
        <DescriptionMap list={skills} type={"skills"} />
      </section>

      <section>
        <SectionHeaderText>Projects</SectionHeaderText>
        <p className="text-sm">
          Check out my latest{" "}
          <Link href={"/projects"} className=" text-sky-400">
            projects
          </Link>
        </p>
      </section>
    </main>
  );
}
