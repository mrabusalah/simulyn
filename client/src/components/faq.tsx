import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-[fff]" style={{ backgroundColor: 'hsl(220, 13%, 95%)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4">الأسئلة الشائعة</h3>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: 'hsl(253, 100%, 69%)' }}></div>
          </div>
          <Accordion type="single" collapsible className="space-y-6">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-light-gray rounded-lg overflow-hidden border-0"
              >
                <AccordionTrigger className="px-6 py-4 text-right hover:no-underline bg-[#f1f2f4]">
                  <span className="text-lg font-semibold text-navy">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
