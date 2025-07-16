import { Button } from "@/components/ui/button";
import { Play, Mail } from "lucide-react";

export default function Hero() {
  const handleGetStarted = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleContactUs = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="gradient-bg text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Simulyn – بيئتك الذكية للتدريب الميداني المحاكي
          </h2>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            تدريب احترافي، محاكي للواقع، دون عملاء حقيقيين أو مقابلات. صُمم لطلبة الجامعات في مجالات البرمجة، السيكيوريتي، الذكاء الاصطناعي، واختبار البرمجيات.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-6">
            <Button
              onClick={handleGetStarted}
              className="btn-primary text-white px-8 py-4 text-lg font-semibold w-full sm:w-auto"
            >
              <Play className="mr-2 h-5 w-5" />
              ابدأ الآن
            </Button>
            <Button
              onClick={handleContactUs}
              variant="outline"
              className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-semibold transition-colors w-full sm:w-auto"
              style={{
                borderColor: 'white',
                color: 'white',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = 'hsl(210, 29%, 24%)';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.color = 'hsl(210, 29%, 24%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
                const icon = e.currentTarget.querySelector('svg');
                if (icon) icon.style.color = 'white';
              }}
            >
              <Mail className="mr-2 h-5 w-5 transition-colors" />
              راسلنا
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
