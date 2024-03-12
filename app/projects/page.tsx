import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye } from "lucide-react";

export const revalidate = 60;
export default async function ProjectsPage() {

  const mockProjects = [
    {
      key: 1,
      title: "Code Quest",
      description:
        "Embark on a thrilling journey through the coding realm. Join our hero as they conquer challenges and unravel the mysteries of programming.",
      date: 1678742400000,
      views: 5,
    },
    {
      key: 2,
      title: "Data Dance",
      description:
        "Witness the enchanting dance of data elements. From graceful strings to rhythmic numbers, our JSON dancers twirl and spin, creating a symphony of structured information.",
      date: 1678742400000,
      views: 8,
    },
    {
      key: 3,
      title: "Pixel Poetry",
      description:
        "Explore the artistry of pixels in this poetic journey. Each pixel tells a story, and together they create a masterpiece of digital expression.",
      date: 1678742400000,
      views: 3,
    },
    {
      key: 4,
      title: "Byte Breeze",
      description:
        "Feel the refreshing byte breeze as you navigate the digital landscape. Let the bits and bytes guide you through a seamless and breezy coding experience.",
      date: 1678742400000,
      views: 7,
    },
    {
      key: 5,
      title: "Crypto Chronicles",
      description:
        "Delve into the fascinating world of cryptocurrencies. Join our virtual explorer as they unveil the tales and adventures within the blockchain.",
      date: 1678742400000,
      views: 2,
    },
    {
      key: 6,
      title: "Bug Ballet",
      description:
        "Experience the elegant ballet of bugs. Watch as they pirouette through the code, creating a dance of debugging and choreographed fixes.",
      date: 1678742400000,
      views: 9,
    },
    {
      key: 7,
      title: "Infinite Loops",
      description:
        "Embark on a mesmerizing journey through infinite loops. Explore the beauty and challenges of cyclical patterns in the ever-expanding digital universe.",
      date: 1678742400000,
      views: 4,
    },
    {
      key: 8,
      title: "Pixel Pioneers",
      description:
        "Join the pioneers of pixel artistry. Discover the pixelated landscapes created by visionary artists pushing the boundaries of digital creativity.",
      date: 1678742400000,
      views: 6,
    },
    {
      key: 9,
      title: "Code Canvas",
      description:
        "Paint your code on the digital canvas. Let your creativity flow as you brush strokes of logic and syntax to create a masterpiece of programming.",
      date: 1678742400000,
      views: 1,
    },
    {
      key: 10,
      title: "Binary Beats",
      description:
        "Groove to the binary beats of the digital realm. Each 0 and 1 contributes to the rhythm, creating a symphony of electronic harmony.",
      date: 1678742400000,
      views: 10,
    },
  ];
  // const views = (
  //   await redis.mget<number[]>(
  //     ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":"))
  //   )
  // ).reduce((acc, v, i) => {
  //   acc[allProjects[i].slug] = v ?? 0;
  //   return acc;
  // }, {} as Record<string, number>);

  const featured = mockProjects.find((project) => project.key === 1)!;
  const top2 = mockProjects.find((project) => project.key === 2)!;
  const top3 = mockProjects.find((project) => project.key === 3)!;
  const sorted = mockProjects
    // .filter((p) => p.published)
    .filter(
      (project) =>
        project.key !== featured.key &&
        project.key !== top2.key &&
        project.key !== top3.key
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      featured.views
                    )}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project, k) => (
              <Card key={k}>
                <Article project={project} views={project.views} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.key}>
                  <Article project={project} views={project.views} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.key}>
                  <Article project={project} views={project.views} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.key}>
                  <Article project={project} views={project.views} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
