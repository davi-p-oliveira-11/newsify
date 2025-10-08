import accordionData from "@/data/accordionData";
import Accordion from "./components/ui/Accordion";
import { AccordionItem } from "@/types/accordion";

export default function Home() {
  return (
    <div className="p-6">
      {accordionData.map((item: AccordionItem) => (
        <Accordion key={item.id} item={item} />
      ))}
    </div>
  );
}
