export interface AccordionItem {
  id: string | number;
  question: string;
  answer: string;
}

export interface AccordionProps {
  item: AccordionItem;
}
