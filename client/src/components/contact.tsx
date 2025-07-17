import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { CONTACT_INFO } from "@/lib/constants";

interface ContactFormData {
  name: string;
  email: string;
  university: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    university: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "تم الإرسال بنجاح!",
        description: data.message,
      });
      setFormData({ name: "", email: "", university: "", message: "" });
      setErrors({});
    },
    onError: (error) => {
      toast({
        title: "خطأ في الإرسال",
        description: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    },
  });

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "الاسم مطلوب";
    }

    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    if (!formData.university.trim()) {
      newErrors.university = "الجامعة مطلوبة";
    }

    if (!formData.message.trim()) {
      newErrors.message = "الرسالة مطلوبة";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      contactMutation.mutate(formData);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 text-white" style={{ backgroundColor: 'hsl(210, 29%, 24%)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">تواصل معنا</h3>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: 'hsl(253, 100%, 69%)' }}></div>
            <p className="text-xl">نحن هنا لمساعدتك في بداية رحلتك المهنية</p>
          </div>
          <div className="max-w-2xl mx-auto mb-12">
            <Card className="bg-transparent border-gray-600">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-lg font-semibold text-white">
                      الاسم الكامل
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="mt-2 bg-white"
                      style={{ color: 'hsl(210, 29%, 24%)' }}
                      placeholder="أدخل اسمك الكامل"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-lg font-semibold text-white">
                      البريد الإلكتروني
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-2 bg-white"
                      style={{ color: 'hsl(210, 29%, 24%)' }}
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="university" className="text-lg font-semibold text-white">
                      الجامعة
                    </Label>
                    <Input
                      id="university"
                      type="text"
                      value={formData.university}
                      onChange={(e) => handleInputChange("university", e.target.value)}
                      className="mt-2 bg-white"
                      style={{ color: 'hsl(210, 29%, 24%)' }}
                      placeholder="أدخل اسم جامعتك"
                    />
                    {errors.university && (
                      <p className="mt-1 text-sm text-red-400">{errors.university}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-lg font-semibold text-white">
                      الرسالة
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="mt-2 bg-white"
                      style={{ color: 'hsl(210, 29%, 24%)' }}
                      placeholder="اكتب رسالتك هنا"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="btn-primary w-full py-3 text-lg font-semibold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {contactMutation.isPending ? "جاري الإرسال..." : "إرسال الرسالة"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12">
            <h4 className="text-2xl font-bold mb-6 text-center">معلومات التواصل</h4>
            <div className="flex justify-center space-x-reverse space-x-8">
              <div className="flex items-center space-x-reverse space-x-4">
                <Mail className="text-xl flex-shrink-0" style={{ color: 'hsl(253, 100%, 69%)' }} />
                <span className="text-lg">{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-4">
                <MapPin className="text-xl flex-shrink-0" style={{ color: 'hsl(253, 100%, 69%)' }} />
                <span className="text-lg">{CONTACT_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}