import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export const revalidate = 60;
export default async function ProjectsPage() {
  const projects = [
    {
      key: 1,
      title: "License Plate Detector",
      description:
        "A real-time license plate detection and blurring system using YOLOv11n, cutting down manual redaction effort by 90% for online privacy",
      date: 1678742400000,
      views: 5,
      image: "/blur-license-plate.jpg",
      githubUrl: "https://github.com/Praneetha35/my-digital-showcase",
      stacks: ["Python", "Numpy", "OpenCV", "YOLOv11n"],
    },
    {
      key: 5,
      title: "Unity 3D Adventure Game",
      description:
        "3D third-person free-roaming game, creating immersive environments, engaging gameplay mechanics, and seamless sound integration, earning recognition for innovation and quality.",
      date: 1678742400000,
      views: 8,
      image: "/unity.png",
      stacks: ["Unity", "C#", "3D Char"],
    },
    {
      key: 3,
      title: "Web3 hiring platform",
      description:
        "A Polygon based web3 platform revolutionizing hiring: seamlessly connecting companies with deserving candidates",
      date: 1678742400000,
      views: 5,
      image: "/web3-hiring.png",
      githubUrl: "https://github.com/Praneetha35/BidVerse",
      stacks: ["React", "IPFS", "OpenZepplin", "Solidity"],
    },
    {
      key: 8,
      title: "What’s in my fridge?",
      description:
        "Executed the first-ever Polymesh blockchain mainnet NFT drop, integrating Web3 credit card payments for seamless user experience.",
      date: 1678742400000,
      views: 7,
      image: "/fridge.png",
      githubUrl: "https://github.com/Praneetha35/npm-form-checker",
      stacks: ["Next.js", "Python Flask", "MongoDB", "OpenAI"],
    },
    {
      key: 6,
      title: "Music NFT",
      description:
        "Spearheaded the development and enhancement of a Music NFT Marketplace, integrating Web3 wallet-less payments and multi-blockchain NFT support, while maintaining high coding standards and optimized deployment strategies.",
      date: 1678742400000,
      views: 5,
      image: "/music_nft.png",
      stacks: [
        "Next.js",
        "Nest.js",
        "MongoDB",
        "OpenZepplin",
        "Solidity",
        "Arweave",
      ],
    },
    {
      key: 9,
      title: "One-click Auto deployment",
      description:
        "One-click Auto-deployment system using AWS CloudFormation, enabling seamless full-stack application setup with email notifications and secure credential management.",
      date: 1678742400000,
      views: 7,
      image: "/auto-deploy.png",
      githubUrl: "https://github.com/Praneetha35/pantry-pal",
      stacks: [
        "AWS EC2",
        "AWS CF",
        "AWS S3",
        "AWS EBS",
        "Next.js",
        "Nodemailer",
      ],
    },
    {
      key: 4,
      title: "Distributed document uploader",
      description:
        "Built a Web3 application for secure PDF modification and upload to IPFS, with cryptographic signing for on-chain verification to ensure tamper-proof document integrity.",
      date: 1678742400000,
      views: 3,
      image: "/pdf.png",
      // image: "/auto-deploy.png",
      githubUrl: "https://github.com/Praneetha35/pixel-python",
      stacks: ["React Js", "Nest.js", "IPFS", "Solidity", "Cryptography"],
    },
    {
      key: 2,
      title: "Decentralized Exchange",
      description:
        "First DEX on Algorand, customizing smart contracts and delivering features based on client requirements through iterative deployments",
      date: 1678742400000,
      views: 5,
      image: "/algo.png",
      stacks: ["Next.js", "Python Flask", "PostgreSQL", "TEAL (Assembly)"],
    },
    {
      key: 7,
      title: "Kadena NFT",
      description:
        "NFT marketplace on the Kadena blockchain, building and deploying the entire application on AWS, with continuous feature modifications based on client requirements",
      date: 1678742400000,
      views: 7,
      image: "/kadena.png",
      githubUrl: "https://github.com/Praneetha35/sky-watch",
      stacks: ["React", "Pact", "Nest.js"],
    },
    {
      key: 13,
      title: "Health Hive",
      description:
        "HealthHive is a social wellness app that connects users with health partners to set goals, track progress, and stay motivated. Featuring BeeFriend AI for personalized support and a gamified tree-growing system, it makes health journeys fun, accountable, and engaging.",
      date: 1678742400000,
      views: 7,
      image: "/health-hive.png",
      githubUrl: "https://github.com/Praneetha35/health-hive",
      stacks: [
        "TypeScript",
        "Next.js",
        "MongoDB Atlas",
        "Groq SDK",
        "llama3",
        "Material-UI",
      ],
    },
  ];

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
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {projects
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.key}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {projects
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.key}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {projects
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.key}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
