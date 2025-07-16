import { CheckCircle, Shield, Users, Globe } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: CheckCircle,
      text: "تجربة تحاكي دورة حياة المشروع البرمجي"
    },
    {
      icon: Shield,
      text: "بيئة تطوير آمنة للتعلّم من الأخطاء"
    },
    {
      icon: Users,
      text: "إشراف مباشر من مهندسين محترفين"
    },
    {
      icon: Globe,
      text: "تدريب عن بُعد لجميع مدن الأردن"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4">لماذا تختار Simulyn؟</h3>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: 'hsl(253, 100%, 69%)' }}></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-reverse space-x-4 rounded-lg p-6 shadow-sm"
                style={{ backgroundColor: 'hsl(220, 13%, 95%)' }}
              >
                <feature.icon 
                  className="text-3xl flex-shrink-0" 
                  style={{ color: 'hsl(253, 100%, 69%)' }}
                />
                <span className="text-lg">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}