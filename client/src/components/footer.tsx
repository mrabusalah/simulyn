import { Laptop, Linkedin, Facebook, Instagram } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  const quickLinks = [
    { href: "#about", label: "من نحن" },
    { href: "#services", label: "خدماتنا" },
    { href: "#faq", label: "الأسئلة الشائعة" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 sm:text-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-right">
            <div className="flex items-center space-x-reverse space-x-2 mb-4 justify-start">
              <Laptop className="text-purple text-2xl" />
              <h4 className="text-xl font-bold">Simulyn</h4>
            </div>
            <p className="text-gray-400 leading-relaxed">
              نحاكي بيئة العمل… لتصنع مستقبلك الوظيفي بثقة.
            </p>
          </div>
          <div className="text-right">
            <h5 className="text-lg font-semibold mb-4">روابط سريعة</h5>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="block text-gray-400 hover:text-purple transition-colors w-full text-right"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div className="text-right">
            <h5 className="text-lg font-semibold mb-4">تواصل معنا</h5>
            <div className="text-gray-400 space-y-2">
              <p>{CONTACT_INFO.email}</p>
              <p>الأردن – عمّان</p>
              <div className="flex space-x-reverse space-x-4 mt-4 justify-start">
                <a
                  href={CONTACT_INFO.socials.linkedin}
                  className="text-gray-400 hover:text-purple transition-colors"
                >
                  <Linkedin className="text-xl" />
                </a>
                <a
                  href={CONTACT_INFO.socials.facebook}
                  className="text-gray-400 hover:text-purple transition-colors"
                >
                  <Facebook className="text-xl" />
                </a>
                <a
                  href={CONTACT_INFO.socials.instagram}
                  className="text-gray-400 hover:text-purple transition-colors"
                >
                  <Instagram className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-right">
          <p className="text-gray-400">© 2025 Simulyn. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
