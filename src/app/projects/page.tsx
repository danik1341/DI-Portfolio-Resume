import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Reddit Clone",
      link: "https://reddit-clone-msrecka92-danik1341.vercel.app/",
      description: (
        <p>
          Lorem ipsum dolor sit amet. Eos eius quasi sed amet eaque ut
          distinctio amet sit debitis assumenda aut esse provident sed minus
          deleniti ut odio minus. Eos quaerat iusto et quis ullam qui pariatur
          quod. Non vero deserunt eos dolores quaerat et explicabo debitis est
          nihil animi. Nam quibusdam reiciendis sed tempore ratione ut dicta
          itaque sed autem explicabo et soluta velit qui veritatis sint. Ut sint
          vero quo labore velit ex sunt deserunt et suscipit quis et sint
          officiis nam vero voluptatem. Ut numquam ipsa a quia neque sit
          obcaecati repudiandae eos officiis quibusdam et ipsam nesciunt nam
          nisi debitis. Eos necessitatibus consequuntur et alias architecto quo
          maxime expedita et voluptas voluptas et voluptatem dolore hic quisquam
          eligendi. Eos architecto provident aut iusto doloremque non veritatis
          dicta aut quibusdam laudantium. Sed voluptate quis cum perferendis
          ipsa rem laudantium voluptatem est magni voluptatem. Id ipsam
          voluptatem ut sequi expedita ad exercitationem consequuntur aut quia
          quia 33 mollitia consequuntur eos laboriosam necessitatibus et
          voluptas galisum.
        </p>
      ),
      imgLink: "projectsPic/Reddit-Clone.png",
    },
    {
      name: "Reddit Clone",
      link: "https://reddit-clone-msrecka92-danik1341.vercel.app/",
      description: (
        <p>
          Lorem ipsum dolor sit amet. Eos eius quasi sed amet eaque ut
          distinctio amet sit debitis assumenda aut esse provident sed minus
          deleniti ut odio minus. Eos quaerat iusto et quis ullam qui pariatur
          quod. Non vero deserunt eos dolores quaerat et explicabo debitis est
          nihil animi. Nam quibusdam reiciendis sed tempore ratione ut dicta
          itaque sed autem explicabo et soluta velit qui veritatis sint. Ut sint
          vero quo labore velit ex sunt deserunt et suscipit quis et sint
          officiis nam vero voluptatem. Ut numquam ipsa a quia neque sit
          obcaecati repudiandae eos officiis quibusdam et ipsam nesciunt nam
          nisi debitis. Eos necessitatibus consequuntur et alias architecto quo
          maxime expedita et voluptas voluptas et voluptatem dolore hic quisquam
          eligendi. Eos architecto provident aut iusto doloremque non veritatis
          dicta aut quibusdam laudantium. Sed voluptate quis cum perferendis
          ipsa rem laudantium voluptatem est magni voluptatem. Id ipsam
          voluptatem ut sequi expedita ad exercitationem consequuntur aut quia
          quia 33 mollitia consequuntur eos laboriosam necessitatibus et
          voluptas galisum.
        </p>
      ),
      imgLink: "projectsPic/Reddit-Clone.png",
    },
    {
      name: "Reddit Clone",
      link: "https://reddit-clone-msrecka92-danik1341.vercel.app/",
      description: (
        <p>
          Lorem ipsum dolor sit amet. Eos eius quasi sed amet eaque ut
          distinctio amet sit debitis assumenda aut esse provident sed minus
          deleniti ut odio minus. Eos quaerat iusto et quis ullam qui pariatur
          quod. Non vero deserunt eos dolores quaerat et explicabo debitis est
          nihil animi. Nam quibusdam reiciendis sed tempore ratione ut dicta
          itaque sed autem explicabo et soluta velit qui veritatis sint. Ut sint
          vero quo labore velit ex sunt deserunt et suscipit quis et sint
          officiis nam vero voluptatem. Ut numquam ipsa a quia neque sit
          obcaecati repudiandae eos officiis quibusdam et ipsam nesciunt nam
          nisi debitis. Eos necessitatibus consequuntur et alias architecto quo
          maxime expedita et voluptas voluptas et voluptatem dolore hic quisquam
          eligendi. Eos architecto provident aut iusto doloremque non veritatis
          dicta aut quibusdam laudantium. Sed voluptate quis cum perferendis
          ipsa rem laudantium voluptatem est magni voluptatem. Id ipsam
          voluptatem ut sequi expedita ad exercitationem consequuntur aut quia
          quia 33 mollitia consequuntur eos laboriosam necessitatibus et
          voluptas galisum.
        </p>
      ),
      imgLink: "projectsPic/Reddit-Clone.png",
    },
  ];

  return (
    <main className="flex flex-col flex-1 bg-slate-100">
      {projects.map((project, projectIndex) => {
        return (
          <ProjectCard
            key={projectIndex}
            project={project}
            index={projectIndex}
          />
        );
      })}
    </main>
  );
}
