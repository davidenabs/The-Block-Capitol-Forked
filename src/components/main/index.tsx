import React from "react";
import BlockchainCourses from "./block-chain-courses";
import BuildingTheFuture from "./building-the-future";
import FAQ from "./faq";
import Footer from "./footer";
import HeroSection from "./hero";
import JoinNetwork from "./join-network";
import WhoWeAre from "./who-we-are";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <div id="hero">
        <HeroSection />
      </div>
      <div id="who-we-are">
        <WhoWeAre />
      </div>
      <div id="blockchain-courses">
        <BlockchainCourses />
      </div>
      <div id="building-the-future">
        <BuildingTheFuture />
      </div>
      <div id="join-network">
        <JoinNetwork />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}