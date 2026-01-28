import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Zap',
      title: 'Энергоэффективные технологии',
      description: 'Разработка и внедрение решений для снижения энергопотребления промышленных предприятий'
    },
    {
      icon: 'Recycle',
      title: 'Переработка отходов',
      description: 'Технологии замкнутого цикла производства и безотходного производства'
    },
    {
      icon: 'Lightbulb',
      title: 'Экологический консалтинг',
      description: 'Профессиональные консультации по внедрению экологических стандартов'
    },
    {
      icon: 'Building2',
      title: 'Умные города',
      description: 'Создание инфраструктуры для экологичного транспорта и энергосбережения'
    },
    {
      icon: 'GraduationCap',
      title: 'Образовательные программы',
      description: 'Курсы и тренинги по экологической грамотности для школьников и предприятий'
    }
  ];

  const projects = [
    {
      name: 'Зелёный завод',
      description: 'Модернизация промышленных предприятий с внедрением безотходных технологий',
      status: 'active',
      progress: 65
    },
    {
      name: 'Умный город',
      description: 'Создание инфраструктуры для экологичного транспорта и энергосбережения в городах',
      status: 'active',
      progress: 45
    },
    {
      name: 'Школа экологии',
      description: 'Образовательные программы для школьников и предприятий',
      status: 'planning',
      progress: 20
    }
  ];

  const team = [
    { role: 'Генеральный директор', name: 'Иванов Александр' },
    { role: 'Зам. директора (Технологии)', name: 'Петрова Елена' },
    { role: 'Зам. директора (Финансы)', name: 'Сидоров Михаил' },
    { role: 'Зам. директора (Развитие)', name: 'Козлова Ольга' }
  ];

  const values = [
    {
      icon: 'Sparkles',
      title: 'Инновационность',
      description: 'Постоянное развитие и поиск новых решений'
    },
    {
      icon: 'Shield',
      title: 'Ответственность',
      description: 'Забота об экологии и обществе'
    },
    {
      icon: 'Eye',
      title: 'Прозрачность',
      description: 'Открытость в работе с партнёрами и клиентами'
    },
    {
      icon: 'Users',
      title: 'Командность',
      description: 'Сотрудничество и взаимопомощь внутри коллектива'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2E8B57] to-[#4682B4] rounded-lg flex items-center justify-center">
                <Icon name="Leaf" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-[#2E8B57]">ЭкоТех-Прогресс</span>
            </div>
            
            <nav className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-[#2E8B57] transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-[#2E8B57] transition-colors">
                О компании
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-[#2E8B57] transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('technologies')} className="text-sm font-medium hover:text-[#2E8B57] transition-colors">
                Технологии
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:text-[#2E8B57] transition-colors">
                Проекты
              </button>
              <button onClick={() => scrollToSection('team')} className="text-sm font-medium hover:text-[#2E8B57] transition-colors">
                Персонал
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-[#2E8B57] transition-colors">
                Контакты
              </button>
            </nav>

            <Button className="bg-[#2E8B57] hover:bg-[#236b43]">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section id="home" className="py-24 bg-gradient-to-br from-[#2E8B57]/5 to-[#4682B4]/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <Badge className="mb-6 bg-[#2E8B57]/10 text-[#2E8B57] hover:bg-[#2E8B57]/20">
                С 2025 года на рынке
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#2E8B57]">
                Инновации для устойчивого будущего
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Содействие устойчивому развитию через внедрение инновационных экологичных технологий в промышленность и городское хозяйство
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-[#2E8B57] hover:bg-[#236b43]">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Наши проекты
                </Button>
                <Button size="lg" variant="outline" className="border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57]/5">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4 text-[#2E8B57]">О компании</h2>
              <p className="text-center text-gray-600 mb-16 text-lg">
                ООО «ЭкоТех-Прогресс» — лидер в сфере зелёных технологий
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card className="border-l-4 border-l-[#2E8B57]">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#2E8B57]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Target" className="text-[#2E8B57]" size={24} />
                    </div>
                    <CardTitle className="text-[#2E8B57]">Миссия</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Содействие устойчивому развитию через внедрение инновационных экологичных технологий в промышленность и городское хозяйство
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#4682B4]">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#4682B4]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Eye" className="text-[#4682B4]" size={24} />
                    </div>
                    <CardTitle className="text-[#4682B4]">Видение</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Стать лидером в сфере «зелёных» технологических решений, обеспечивая баланс между экономическим ростом и экологической безопасностью
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-16">
                <h3 className="text-2xl font-bold text-center mb-12 text-[#2E8B57]">Наши ценности</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#2E8B57] to-[#4682B4] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={value.icon} className="text-white" size={28} />
                      </div>
                      <h4 className="font-bold mb-2 text-[#2E8B57]">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#2E8B57]">Услуги</h2>
            <p className="text-center text-gray-600 mb-16 text-lg">
              Комплексные решения для устойчивого развития
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-[#2E8B57] to-[#4682B4] rounded-xl flex items-center justify-center mb-4">
                      <Icon name={service.icon} className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-[#2E8B57]">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="technologies" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#2E8B57]">Ключевые технологии</h2>
            <p className="text-center text-gray-600 mb-16 text-lg">
              Инновационные проекты для будущего
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-t-4 border-t-[#2E8B57]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#2E8B57]/10 rounded-lg flex items-center justify-center">
                      <Icon name="Factory" className="text-[#2E8B57]" size={24} />
                    </div>
                    <CardTitle className="text-[#2E8B57]">Зелёный завод</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Модернизация промышленных предприятий с внедрением безотходных технологий
                  </p>
                  <Badge className="bg-[#2E8B57]/10 text-[#2E8B57]">Промышленность</Badge>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#4682B4]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#4682B4]/10 rounded-lg flex items-center justify-center">
                      <Icon name="Building2" className="text-[#4682B4]" size={24} />
                    </div>
                    <CardTitle className="text-[#4682B4]">Умный город</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Создание инфраструктуры для экологичного транспорта и энергосбережения
                  </p>
                  <Badge className="bg-[#4682B4]/10 text-[#4682B4]">Городская среда</Badge>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#2E8B57]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#2E8B57]/10 rounded-lg flex items-center justify-center">
                      <Icon name="GraduationCap" className="text-[#2E8B57]" size={24} />
                    </div>
                    <CardTitle className="text-[#2E8B57]">Школа экологии</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Образовательные программы для школьников и предприятий
                  </p>
                  <Badge className="bg-[#2E8B57]/10 text-[#2E8B57]">Образование</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#2E8B57]">Портал проектов</h2>
            <p className="text-center text-gray-600 mb-16 text-lg">
              Отслеживание статуса внедрения технологий
            </p>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-[#2E8B57] mb-2">{project.name}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {project.description}
                        </CardDescription>
                      </div>
                      <Badge 
                        className={project.status === 'active' 
                          ? 'bg-[#2E8B57]/10 text-[#2E8B57]' 
                          : 'bg-[#4682B4]/10 text-[#4682B4]'}
                      >
                        {project.status === 'active' ? 'В работе' : 'Планируется'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Прогресс внедрения</span>
                        <span className="font-medium text-[#2E8B57]">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-[#2E8B57] to-[#4682B4] h-2 rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-[#4682B4] hover:bg-[#3a6d99]">
                <Icon name="FolderOpen" size={20} className="mr-2" />
                Открыть полный портал
              </Button>
            </div>
          </div>
        </section>

        <section id="team" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#2E8B57]">Персонал</h2>
            <p className="text-center text-gray-600 mb-16 text-lg">
              Команда профессионалов
            </p>
            
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-[#2E8B57]">Руководство</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {team.map((member, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#2E8B57] to-[#4682B4] rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="User" className="text-white" size={28} />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#2E8B57]">{member.name}</h4>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#2E8B57]/10 rounded-lg flex items-center justify-center mb-2">
                      <Icon name="FlaskConical" className="text-[#2E8B57]" size={24} />
                    </div>
                    <CardTitle className="text-[#2E8B57] text-lg">R&D</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">Отдел исследований и разработок</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#4682B4]/10 rounded-lg flex items-center justify-center mb-2">
                      <Icon name="Wrench" className="text-[#4682B4]" size={24} />
                    </div>
                    <CardTitle className="text-[#4682B4] text-lg">Инженеры</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">Инженерный центр</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#2E8B57]/10 rounded-lg flex items-center justify-center mb-2">
                      <Icon name="Briefcase" className="text-[#2E8B57]" size={24} />
                    </div>
                    <CardTitle className="text-[#2E8B57] text-lg">Проекты</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">Отдел внедрения и сопровождения</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24 bg-gradient-to-br from-[#2E8B57]/5 to-[#4682B4]/5">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#2E8B57]">Контакты</h2>
            <p className="text-center text-gray-600 mb-16 text-lg">
              Свяжитесь с нами
            </p>
            
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#2E8B57]">Контактная информация</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#2E8B57]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" className="text-[#2E8B57]" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-[#2E8B57]">Адрес</p>
                        <p className="text-gray-600">125009, г. Москва, ул. Тверская, д. 1, офис 505</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#4682B4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" className="text-[#4682B4]" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-[#4682B4]">Телефон</p>
                        <p className="text-gray-600">+7 (495) 123-45-67</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#2E8B57]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" className="text-[#2E8B57]" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-[#2E8B57]">Email</p>
                        <p className="text-gray-600">info@ecotech-progress.ru</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#4682B4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Globe" className="text-[#4682B4]" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-[#4682B4]">Сайт</p>
                        <p className="text-gray-600">www.ecotech-progress.ru</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#2E8B57]">Написать нам</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <input 
                          type="text" 
                          placeholder="Ваше имя" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          placeholder="Email" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                        />
                      </div>
                      <div>
                        <textarea 
                          placeholder="Сообщение" 
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                        />
                      </div>
                      <Button className="w-full bg-[#2E8B57] hover:bg-[#236b43]">
                        <Icon name="Send" size={18} className="mr-2" />
                        Отправить
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2E8B57]">Как нас найти</CardTitle>
                  <CardDescription>ул. Тверская, д. 1, офис 505, Москва</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-[400px] rounded-lg overflow-hidden">
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?um=constructor%3A8d7f0e4b5c6a3d2f1e0c9b8a7f6e5d4c&amp;source=constructor"
                      width="100%"
                      height="400"
                      frameBorder="0"
                      className="w-full h-full"
                      title="Яндекс Карта - Офис ЭкоТех-Прогресс"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2E8B57] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Icon name="Leaf" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">ЭкоТех-Прогресс</span>
              </div>
              <p className="text-white/80 text-sm">
                Инновации для устойчивого будущего с 2025 года
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <div className="space-y-2 text-sm text-white/80">
                <button onClick={() => scrollToSection('about')} className="block hover:text-white">О компании</button>
                <button onClick={() => scrollToSection('services')} className="block hover:text-white">Услуги</button>
                <button onClick={() => scrollToSection('technologies')} className="block hover:text-white">Технологии</button>
                <button onClick={() => scrollToSection('projects')} className="block hover:text-white">Проекты</button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Филиалы</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>Москва</p>
                <p>Санкт-Петербург</p>
                <p>Екатеринбург</p>
                <p>Новосибирск</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2025 ООО «ЭкоТех-Прогресс». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;