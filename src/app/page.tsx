"use client";

import { FiSearch } from "react-icons/fi";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-md">
      <Input size="sm" placeholder="Your email" />
      <Input size="md" placeholder="Your name" />
      <Input size="lg" icon={<FiSearch />} placeholder="Search..." />
    </div>
  );
}
