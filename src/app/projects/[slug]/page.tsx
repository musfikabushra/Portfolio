import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetails({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 lg:px-20 py-20">
        <Link href="/#projects" className="inline-block mb-8">
          <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
            ← Back to Projects
          </Button>
        </Link>
        
        <div className="glass-card p-8 lg:p-12">
          <h1 className="text-4xl font-bold mb-6 text-purple-500">
            {project.title}
          </h1>

          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="w-full h-full rounded-lg mb-8 object-cover"
          />

          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Description
              </h3>
              <p className="leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Technology Stack
              </h3>
              <p>{project.tech}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Challenges Faced
              </h3>
              <p>{project.challenges}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Future Improvements & Plans
              </h3>
              <p>{project.future}</p>
            </div>

            <div className="flex gap-4 pt-6">
              <Link href={project.live} target="_blank">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
                  🚀 Live Project
                </Button>
              </Link>

              <Link href={project.github} target="_blank">
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3">
                  📂 GitHub Repository
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
