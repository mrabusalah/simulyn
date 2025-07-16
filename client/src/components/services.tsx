import { Code, Bug, Shield, Brain } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Code,
  Bug,
  Shield,
  Brain
};

export default function Services() {
  return (
    <section id="services" className="py-20" style={{ backgroundColor: 'hsl(220, 13%, 95%)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4">خدماتنا</h3>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: 'hsl(253, 100%, 69%)' }}></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            تدريب ميداني مطابق لمتطلبات الجامعات الأردنية في أربعة مجالات رئيسية
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const iconColors = [
              'hsl(142, 71%, 45%)', // Green for Software Dev
              'hsl(25, 95%, 53%)',  // Orange for QA Testing
              'hsl(0, 84%, 60%)',   // Red for Cybersecurity
              'hsl(253, 100%, 69%)' // Purple for AI
            ];
            const bgColors = [
              'hsl(142, 71%, 95%)', // Light green bg
              'hsl(25, 95%, 95%)',  // Light orange bg
              'hsl(0, 84%, 95%)',   // Light red bg
              'hsl(253, 100%, 95%)' // Light purple bg
            ];
            
            return (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 text-center card-hover">
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: bgColors[index] }}
                >
                  <Icon 
                    className="text-3xl" 
                    style={{ color: iconColors[index] }}
                  />
                </div>
                <h4 className="text-xl font-bold text-navy mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
