export default function About() {
  return (
    <section id="about" className="py-20 bg-[#f1f2f4]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4">من نحن</h3>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: 'hsl(253, 100%, 69%)' }}></div>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Simulyn هي شركة أردنية ناشئة متخصصة في تقديم تدريب ميداني محاكي لطلبة الجامعات في تخصصات تكنولوجيا المعلومات.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              نحن نؤمن أن التدريب الجامعي يجب أن يكون فعّالًا، واقعيًا، وآمنًا… دون تعقيدات القبول أو ضغط العمل الحقيقي.
            </p>
            <p className="text-lg leading-relaxed">
              في Simulyn، نحاكي بيئة العمل بدقة من خلال مشاريع وهمية منظمة، نمكّن من خلالها الطلاب من خوض تجربة فريق برمجي حقيقية، والتدرّب على أدوات الصناعة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
