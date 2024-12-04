import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export const revalidate = 60;
export default async function ProjectsPage() {
  const projects = [
    {
      key: 1,
      title: "Music NFT",
      description:
        "Spearheaded the development and enhancement of a Music NFT Marketplace, integrating Web3 wallet-less payments and multi-blockchain NFT support, while maintaining high coding standards and optimized deployment strategies.",
      date: 1678742400000,
      views: 5,
      image: "/nft-image.jpg",
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
      key: 3,
      title: "Web3 hiring platform",
      description:
        "A Polygon based web3 platform revolutionizing hiring: seamlessly connecting companies with deserving candidates",
      date: 1678742400000,
      views: 5,
      image: "/bidverse.jpg",
      githubUrl: "https://github.com/Praneetha35/BidVerse",
      stacks: ["React", "Arweave", "OpenZepplin", "Solidity"],
    },
    {
      key: 6,
      title: "Profile Website",
      description:
        "My portfolio website - to flaunt my projects and skills, because let's face it, my work deserves its own stage!",
      date: 1678742400000,
      views: 5,
      image: "/portfolio.png",
      githubUrl: "https://github.com/Praneetha35/my-digital-showcase",
      stacks: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      key: 8,
      title: "Polymesh NFT",
      description:
        "Executed the first-ever Polymesh blockchain mainnet NFT drop, integrating Web3 credit card payments for seamless user experience.",
      date: 1678742400000,
      views: 7,
      image: "/npm.jpeg",
      githubUrl: "https://github.com/Praneetha35/npm-form-checker",
      stacks: ["@polymesh-sdk", "Next.js", "Node JS"],
    },
    {
      key: 9,
      title: "One-click Auto deployment",
      description:
        "One-click Auto-deployment system using AWS CloudFormation, enabling seamless full-stack application setup with email notifications and secure credential management.",
      date: 1678742400000,
      views: 7,
      image: "/pantry.jpg",
      githubUrl: "https://github.com/Praneetha35/pantry-pal",
      stacks: ["Next.js", "AWS CF", "AWS S3", "AWS EC2", "AWS Secrets Manager"],
    },
    {
      key: 2,
      title: "Decentralized Exchange",
      description:
        "First DEX on Algorand, customizing smart contracts and delivering features based on client requirements through iterative deployments",
      date: 1678742400000,
      views: 5,
      image: "/market-research.jpeg",
      stacks: [
        "Next.js",
        "Express.js",
        "MongoDB",
        "TEAL",
      ],
    },
    {
      key: 4,
      title: "Distributed document uploader",
      description:
        "Built a Web3 application for secure PDF modification and upload to IPFS, with cryptographic signing for on-chain verification to ensure tamper-proof document integrity.",
      date: 1678742400000,
      views: 3,
      image: "/snake-game.jpg",
      githubUrl: "https://github.com/Praneetha35/pixel-python",
      stacks: ["React Js", "Nest.js", "Solidity"],
    },
    {
      key: 5,
      title: "3D video game",
      description:
        "3D third-person free-roaming game, creating immersive environments, engaging gameplay mechanics, and seamless sound integration, earning recognition for innovation and quality.",
      date: 1678742400000,
      views: 8,
      image: "/secure-sign.png",
      stacks: [
        "Unity",
        "C++",
        "3D Char",
      ],
    },
    {
      key: 7,
      title: "Kadena NFT",
      description:
        "NFT marketplace on the Kadena blockchain, building and deploying the entire application on AWS, with continuous feature modifications based on client requirements",
      date: 1678742400000,
      views: 7,
      image: "/weather.jpg",
      githubUrl: "https://github.com/Praneetha35/sky-watch",
      stacks: ["React", "Pact", "Nest.js"],
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
