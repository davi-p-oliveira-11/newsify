"use client";

import Button from "./components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-10">
      <Button
        size="md"
        variant="primary"
        onClick={() => console.log("clicked")}
      >
        Primary
      </Button>
      <Button size="md" variant="secondary">
        Secondary
      </Button>
    </div>
  );
}
