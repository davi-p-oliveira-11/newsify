"use client";
import FeatureCard from "./components/ui/FeatureCard";

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center gap-8 p-10 bg-gray-100 min-h-screen">
      <FeatureCard
        imageSrc="/images/features/analytics.webp"
        imageAlt="Analytics Dashboard"
        title="Powerful Analytics"
        description="Gain insights with real-time analytics and intuitive dashboards."
        buttonText="Learn More"
        onButtonClick={() => console.log("Analytics clicked")}
      />
      <FeatureCard
        imageSrc="/images/features/automation.webp"
        imageAlt="Automation Tools"
        title="Smart Automation"
        description="Automate your workflow and save hours every week."
        buttonText="Discover"
      />
    </main>
  );
}
