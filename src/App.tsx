import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll reveal animation
      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && !el.classList.contains('visible')) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mesajul a fost trimis cu succes!');
  };

  const services = [
    'Construcții civile și industriale',
    'Execuție rețele de distribuție apă',
    'Lucrări hidrotehnice',
    'Sisteme de alimentare cu apă și canalizare',
    'Reparații capitale pentru clădiri existente',
    'Confecții metalice',
    'Tâmplărie din aluminiu și PVC',
    'Montaj instalatii electrice'
  ];

  const whyUs = [
    'Experiență acumulată în timp, din proiecte reale',
    'Execuție responsabilă și respectarea termenelor',
    'Comunicare clară pe tot parcursul lucrării',
    'Soluții adaptate cerințelor concrete ale proiectului'
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Top Utility Bar */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-10 bg-[#F2B94B] text-[#1F2933] border-b border-gray-200 flex items-center px-4 md:px-6">
        <div className="max-w-7xl mx-auto w-full">
          {/* Desktop View */}
          <div className="hidden md:flex items-center justify-between text-sm">
            <span>Concept demo • Conținut orientativ • Dezvoltat de sky.ro • </span>
            <div className="flex items-center gap-2">
              <a href="mailto:dan.trifan@sky.ro" className="hover:text-[#2F80ED] transition-colors">dan.trifan@sky.ro</a>
              <span>•</span>
              <a href="tel:+40720088880" className="hover:text-[#2F80ED] transition-colors">+4 0720 088 880</a>
            </div>
          </div>
          
          {/* Mobile View */}
          <div className="flex md:hidden items-center justify-between text-sm">
            <span className="truncate">Concept demo</span>
            <span className="text-center flex-1 mx-2">Dezvoltat de sky.ro</span>
            <a href="tel:+40720088880" className="text-[#2F80ED]">+4 0720 088 880</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <img
              src="/getnic_logo3.png"
              alt="GETNIC Logo"
              className="h-14 md:h-16 cursor-pointer object-contain"
              onClick={() => scrollToSection('home')}
            />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {['Acasă', 'Ce facem', 'De ce noi', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['home', 'services', 'why-us', 'contact'][index])}
                  className={`text-sm font-medium transition-all duration-300 ${
                    isScrolled ? 'text-dark hover:text-primary' : 'text-dark hover:text-primary'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium"
              >
                Solicită ofertă
              </button>
              <button
                onClick={() => window.open('tel:0724579775', '_blank')}
                className="flex items-center gap-2 px-4 py-2 border border-dark text-dark rounded-lg hover:bg-dark hover:text-white transition-all duration-300 font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Sună acum
              </button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav className="flex flex-col gap-3">
                {['Acasă', 'Ce facem', 'De ce noi', 'Contact'].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(['home', 'services', 'why-us', 'contact'][index])}
                    className="text-left py-2 text-dark hover:text-primary font-medium"
                  >
                    {item}
                  </button>
                ))}
              </nav>
              <div className="mt-4 space-y-2">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium"
                >
                  Solicită ofertă
                </button>
                <button
                  onClick={() => window.open('tel:0724579775', '_blank')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-dark text-dark rounded-lg hover:bg-dark hover:text-white transition-all duration-300 font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Sună acum
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 md:pt-48 md:pb-24 bg-gradient-to-b from-yellow-50 to-white relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            src="/044.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-gray-50/60 to-white" />
        </div>
        
        {/* Background Patterns */}
        <div className="absolute inset-0 yellow-dot-pattern pointer-events-none z-10" />
        <div className="absolute inset-0 blueprint-grid gradient-vignette pointer-events-none z-10" />
        <div className="absolute inset-0 grain-pattern pointer-events-none z-10" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 reveal">
              <div className="inline-block px-6 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-0">
                De 22 de ani in domeniu
              </div>
              <h1 className="text-[clamp(1.6rem,3.5vw,2.8rem)] font-bold leading-tight text-dark tracking-tight font-manrope">
                Construcții durabile.<br />
                Lucrări executate corect.<br />
                Partener de încredere.
              </h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover-lift"
                >
                  Solicită ofertă
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="flex items-center justify-center gap-2 px-8 py-4 border border-dark text-dark rounded-lg hover:bg-dark hover:text-white transition-all duration-300 font-medium hover-lift"
                >
                  Vezi servicii
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Trust Strip */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 floating hover-lift">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Activ din 2004</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 floating floating-delay-1 hover-lift">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">Cernavodă, Constanța</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 floating floating-delay-2 hover-lift">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="font-medium">Construcții civile & industriale</span>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden reveal hover-lift">
              <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative group">
                <img
                  src="/construction-site-workers-2026-01-08-08-23-12-utc.webp"
                  alt="Site de construcție cu muncitori"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 reveal">
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark font-manrope">
                GETNIC CONSTRUCT SERV
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                GETNIC CONSTRUCT SERV S.R.L. este o companie românească cu capital privat, activă din 2004, cu sediul în Cernavodă, județul Constanța. De peste 20 de ani, realizăm lucrări de construcții civile și industriale, oferind soluții eficiente, adaptate cerințelor fiecărui beneficiar.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Ne adresăm clienților care caută seriozitate, execuție corectă și respectarea angajamentelor, indiferent de complexitatea proiectului.
              </p>
              
              {/* Pull Quote */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border-l-4 border-primary inset-glow">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-primary mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <p className="text-gray-700 italic text-lg">
                    "Pentru noi, fiecare proiect este o responsabilitate asumată, nu doar o lucrare finalizată."
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 reveal">
              {/* Timeline Strip */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-dark mb-6">Principii cheie</h3>
                <div className="space-y-6">
                  {[
                    { icon: 'M5 13l4 4L19 7', text: 'Seriozitate' },
                    { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Execuție corectă' },
                    { icon: 'M13 10V3L4 14h7v7l9-11h-7z', text: 'Respectare termenelor' },
                    { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Soluții adaptate' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-dark">{item.text}</div>
                        {index === 0 && <div className="text-xs text-gray-500 mt-1">Fiecare lucrare este tratată cu profesionalism</div>}
                        {index === 1 && <div className="text-xs text-gray-500 mt-1">Standardele înalte de calitate sunt respectate</div>}
                        {index === 2 && <div className="text-xs text-gray-500 mt-1">Termenele de livrare sunt onorate</div>}
                        {index === 3 && <div className="text-xs text-gray-500 mt-1">Soluții personalizate pentru fiecare proiect</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Stats Card */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 border border-primary/20">
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-gray-700 font-medium">Ani de experiență</div>
                </div>
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-4 border border-secondary/20">
                  <div className="text-3xl font-bold text-secondary">100+</div>
                  <div className="text-sm text-gray-700 font-medium">Proiecte finalizate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-24 bg-gray-50 relative">
        <div className="absolute inset-0 yellow-dot-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-12 md:mb-16 reveal">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-4 font-manrope">
              Ce facem
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Oferim servicii complete în domeniul construcțiilor și al instalațiilor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover-lift reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-bold text-dark mb-2">
                  {service}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 reveal inset-glow">
            <p className="text-gray-700 text-lg leading-relaxed">
              Abordăm fiecare lucrare cu atenție la detalii și cu focus pe durabilitate și funcționalitate.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-6">
                De ce să ne alegeți
              </h2>
              
              <div className="space-y-4">
                {whyUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center mt-0.5 shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 italic text-lg leading-relaxed pt-4 border-t border-gray-200">
                Pentru noi, fiecare proiect este o responsabilitate asumată, nu doar o lucrare finalizată.
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">20+</div>
                    <div className="text-gray-700 font-medium">Ani de experiență</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">100+</div>
                    <div className="text-gray-700 font-medium">Proiecte finalizate</div>
                  </div>
                </div>
                <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-dark">Solicită ofertă gratuită</div>
                      <div className="text-sm text-gray-600">În 24 de ore</div>
                    </div>
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium"
                  >
                    Solicită acum
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 md:py-24 bg-gray-50 relative">
        <div className="absolute inset-0 yellow-dot-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 reveal">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-4 font-manrope">
              Proiecte
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Vezi câteva din realizările noastre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "/construction-site-with-workers-2026-01-08-08-07-18-utc.webp",
                title: "Complex rezidențial Verde",
                type: "Construcții civile",
                location: "Cernavodă, Constanța"
              },
              {
                image: "/brigade-of-large-construction-company-2025-12-17-03-34-38-utc.mp4",
                title: "Fabrică de prefabricate",
                type: "Construcții industriale",
                location: "Constanța"
              },
              {
                image: "/builders-measuring-window-2026-01-05-23-32-10-utc.webp",
                title: "Complex comercial Blue",
                type: "Construcții civile",
                location: "Medgidia, Constanța"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 hover-lift reveal"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-48 relative group overflow-hidden">
                  {project.image.endsWith('.mp4') ? (
                    <video
                      src={project.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-dark font-manrope">{project.title}</h3>
                    <div className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      COMPLETAT
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{project.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <button
              className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium hover-lift"
            >
              Vezi toate proiectele
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
        <div className="absolute inset-0 grain-pattern opacity-20 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto reveal">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-6 font-manrope">
              Contactați-ne
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Suntem disponibili pentru discuții, solicitări de ofertă sau informații suplimentare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium hover-lift"
              >
                Solicită ofertă
              </button>
              <button
                onClick={() => window.open('mailto:office@getnic.ro', '_blank')}
                className="flex items-center justify-center gap-2 px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-dark transition-all duration-300 font-medium hover-lift"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Trimite email
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-24 bg-gray-50 relative">
        <div className="absolute inset-0 yellow-dot-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="reveal">
                <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-6">
                  Contactați-ne
                </h2>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm reveal inset-glow">
                <h3 className="text-xl font-bold text-dark mb-6 font-manrope">
                  GETNIC CONSTRUCT SERV S.R.L.
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-dark">Adresă</div>
                      <div className="text-gray-600">Str. Dacia, Nr. 36, Cernavodă, jud. Constanța</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-dark">Email</div>
                      <div className="space-y-2">
                        <a href="mailto:office@getnic.ro" className="text-gray-600 hover:text-primary transition-colors">
                          office@getnic.ro
                        </a>
                        <a href="mailto:vanzari@getnic.ro" className="text-gray-600 hover:text-primary transition-colors">
                          vanzari@getnic.ro
                        </a>
                        <a href="mailto:contact@getnic.ro" className="text-gray-600 hover:text-primary transition-colors">
                          contact@getnic.ro
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-dark">Telefon / Fax</div>
                      <div className="text-gray-600">0241 238 077</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-dark">Mobil</div>
                      <div className="space-y-2">
                        <a href="tel:0724579775" className="text-gray-600 hover:text-primary transition-colors">
                          0724 579 775
                        </a>
                        <a href="tel:0726393268" className="text-gray-600 hover:text-primary transition-colors">
                          0726 393 268
                        </a>
                        <a href="tel:0722247423" className="text-gray-600 hover:text-primary transition-colors">
                          0722 247 423
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm reveal hover-lift">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.9743988522866!2d28.6167!3d44.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b7e9e8b8a3c1d3%3A0x4f7a0d8e4c3d5e6f!2sStr.%20Dacia%2C%2036%2C%20Cernavod%C4%83%2C%20Constan%C8%9Ba!5e0!3m2!1sen!2sro!4v1234567890123"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                />
                <div className="p-4">
                  <div className="flex gap-3">
                    <button
                      onClick={() => window.open('https://maps.google.com', '_blank')}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-dark text-white rounded-lg hover:bg-dark/90 transition-all duration-300 font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Google Maps
                    </button>
                    <button
                      onClick={() => window.open('https://waze.com', '_blank')}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-dark rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium"
                    >
                      Waze
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg reveal inset-glow">
              <h3 className="text-2xl font-bold text-dark mb-6 font-manrope">Trimiteți un mesaj</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nume și prenume</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Introduceți numele"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Introduceți adresa de email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Număr de telefon</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Introduceți numărul de telefon"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mesaj</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Scrieți mesajul"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium hover-lift"
                >
                  Trimite
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="/getnic_logo3.png"
                alt="GETNIC Logo"
                className="h-14 mb-4 object-contain"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Construcții durabile. Lucrări executate corect. Partener de încredere.
              </p>
              <div className="flex gap-3 mt-4">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 font-manrope">Servicii</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors underline-animation">Construcții civile</a></li>
                <li><a href="#" className="hover:text-primary transition-colors underline-animation">Construcții industriale</a></li>
                <li><a href="#" className="hover:text-primary transition-colors underline-animation">Lucrări hidrotehnice</a></li>
                <li><a href="#" className="hover:text-primary transition-colors underline-animation">Tâmplărie</a></li>
                <li><a href="#" className="hover:text-primary transition-colors underline-animation">Confecții metalice</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 font-manrope">Informații</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors underline-animation">Despre noi</a></li>
                <li><a href="#" className="hover:text-primary transition-colors underline-animation">Proiecte</a></li>
                <li><a href="#" className="hover:text-primary transition-colors underline-animation">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors underline-animation">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 font-manrope">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Str. Dacia, Nr. 36, Cernavodă
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0724 579 775
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  office@getnic.ro
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2026 GETNIC CONSTRUCT SERV S.R.L. Toate drepturile rezervate.
              </p>
              <a href="https://sky.ro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors">
                <span>crafted in the clouds by</span>
                <img src="/skyro-LOGO-6A-final -without tagline-01.png" alt="sky.ro Logo" className="h-6 w-auto" />
              </a>
              <div className="flex gap-4 text-sm text-gray-400">
                <a href="#" className="hover:text-primary transition-colors underline-animation">Confidențialitate</a>
                <a href="#" className="hover:text-primary transition-colors underline-animation">Termeni și condiții</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
