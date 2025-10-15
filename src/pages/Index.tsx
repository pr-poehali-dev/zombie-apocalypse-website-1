import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('stories');

  const stories = [
    {
      id: 1,
      title: 'Последний бункер',
      excerpt: 'День 127. Запасы заканчиваются. Снаружи слышны стоны мертвецов...',
      danger: 'Высокая',
      survivors: 3
    },
    {
      id: 2,
      title: 'Город-призрак',
      excerpt: 'Мы думали, что здесь никого нет. Мы ошибались...',
      danger: 'Критическая',
      survivors: 1
    },
    {
      id: 3,
      title: 'Побег из лаборатории',
      excerpt: 'Они создали вирус. Теперь они сами стали его жертвами.',
      danger: 'Экстремальная',
      survivors: 5
    }
  ];

  const locations = [
    {
      id: 1,
      name: 'Заброшенная больница',
      status: 'Крайне опасно',
      zombies: '200+',
      resources: 'Медикаменты, инструменты',
      image: 'https://cdn.poehali.dev/projects/5d12d60b-4e98-460c-992f-9801d5bdfd74/files/05b38297-9741-4126-964b-bc84b64ed4e0.jpg'
    },
    {
      id: 2,
      name: 'Торговый центр',
      status: 'Умеренная угроза',
      zombies: '50-100',
      resources: 'Еда, одежда, оружие',
      image: 'https://cdn.poehali.dev/projects/5d12d60b-4e98-460c-992f-9801d5bdfd74/files/05b38297-9741-4126-964b-bc84b64ed4e0.jpg'
    },
    {
      id: 3,
      name: 'Военная база',
      status: 'Высокая опасность',
      zombies: '150+',
      resources: 'Оружие, боеприпасы, броня',
      image: 'https://cdn.poehali.dev/projects/5d12d60b-4e98-460c-992f-9801d5bdfd74/files/05b38297-9741-4126-964b-bc84b64ed4e0.jpg'
    }
  ];

  const zombieTypes = [
    {
      id: 1,
      name: 'Ходок',
      threat: 'Низкая',
      speed: 'Медленная',
      weakness: 'Голова',
      image: 'https://cdn.poehali.dev/projects/5d12d60b-4e98-460c-992f-9801d5bdfd74/files/db0ea39f-9c16-4898-b7ca-ecbc0d1891f0.jpg'
    },
    {
      id: 2,
      name: 'Бегун',
      threat: 'Высокая',
      speed: 'Очень быстрая',
      weakness: 'Ноги',
      image: 'https://cdn.poehali.dev/projects/5d12d60b-4e98-460c-992f-9801d5bdfd74/files/db0ea39f-9c16-4898-b7ca-ecbc0d1891f0.jpg'
    },
    {
      id: 3,
      name: 'Танк',
      threat: 'Критическая',
      speed: 'Медленная',
      weakness: 'Огонь',
      image: 'https://cdn.poehali.dev/projects/5d12d60b-4e98-460c-992f-9801d5bdfd74/files/db0ea39f-9c16-4898-b7ca-ecbc0d1891f0.jpg'
    }
  ];

  const weapons = [
    {
      id: 1,
      name: 'Бейсбольная бита',
      damage: 'Средний',
      durability: 'Высокая',
      type: 'Ближний бой',
      image: 'https://cdn.poehali.dev/projects/5d12d60b-4e98-460c-992f-9801d5bdfd74/files/72ead5a5-05c8-408b-ae83-32905b848f1b.jpg'
    },
    {
      id: 2,
      name: 'Дробовик',
      damage: 'Высокий',
      durability: 'Средняя',
      type: 'Дальний бой',
      image: 'https://cdn.poehali.dev/projects/5d12d60b-4e98-460c-992f-9801d5bdfd74/files/72ead5a5-05c8-408b-ae83-32905b848f1b.jpg'
    },
    {
      id: 3,
      name: 'Топор',
      damage: 'Очень высокий',
      durability: 'Высокая',
      type: 'Ближний бой',
      image: 'https://cdn.poehali.dev/projects/5d12d60b-4e98-460c-992f-9801d5bdfd74/files/72ead5a5-05c8-408b-ae83-32905b848f1b.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1412] via-[#2C1810] to-[#1A1412]">
      <div 
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/5d12d60b-4e98-460c-992f-9801d5bdfd74/files/05b38297-9741-4126-964b-bc84b64ed4e0.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-[#BB0000] mb-4 drop-shadow-[0_0_30px_rgba(187,0,0,0.8)] animate-flicker">
            ЗОМБИ АПОКАЛИПСИС
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Мир, каким мы его знали, больше не существует. Выживание — единственная цель.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-[#BB0000] hover:bg-[#C41E3A] text-white font-bold px-8 py-6 text-lg animate-pulse-glow"
              onClick={() => setActiveSection('stories')}
            >
              <Icon name="BookOpen" className="mr-2" size={24} />
              Истории выживших
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-[#BB0000] text-[#BB0000] hover:bg-[#BB0000] hover:text-white font-bold px-8 py-6 text-lg"
              onClick={() => setActiveSection('locations')}
            >
              <Icon name="Map" className="mr-2" size={24} />
              Карта локаций
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-[#2C1810] border border-[#BB0000]/30 mb-12">
            <TabsTrigger value="stories" className="data-[state=active]:bg-[#BB0000] data-[state=active]:text-white">
              <Icon name="BookOpen" className="mr-2" size={18} />
              Истории
            </TabsTrigger>
            <TabsTrigger value="locations" className="data-[state=active]:bg-[#BB0000] data-[state=active]:text-white">
              <Icon name="Map" className="mr-2" size={18} />
              Локации
            </TabsTrigger>
            <TabsTrigger value="zombies" className="data-[state=active]:bg-[#BB0000] data-[state=active]:text-white">
              <Icon name="Skull" className="mr-2" size={18} />
              Зомби
            </TabsTrigger>
            <TabsTrigger value="weapons" className="data-[state=active]:bg-[#BB0000] data-[state=active]:text-white">
              <Icon name="Swords" className="mr-2" size={18} />
              Оружие
            </TabsTrigger>
          </TabsList>

          <TabsContent value="stories" className="space-y-6">
            <h2 className="text-4xl font-bold text-[#BB0000] mb-8 text-center">
              Истории выживших
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {stories.map((story) => (
                <Card key={story.id} className="bg-[#2C1810] border-[#BB0000]/30 hover:border-[#BB0000] transition-all duration-300 overflow-hidden group animate-fade-in">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-[#BB0000] group-hover:text-[#C41E3A] transition-colors">
                        {story.title}
                      </h3>
                      <Icon name="AlertTriangle" className="text-[#BB0000]" size={24} />
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {story.excerpt}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Users" size={16} className="text-gray-400" />
                        <span className="text-gray-400">{story.survivors} выживших</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        story.danger === 'Критическая' ? 'bg-[#BB0000] text-white' :
                        story.danger === 'Экстремальная' ? 'bg-[#C41E3A] text-white' :
                        'bg-[#2C1810] text-[#BB0000] border border-[#BB0000]'
                      }`}>
                        {story.danger}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="locations" className="space-y-6">
            <h2 className="text-4xl font-bold text-[#BB0000] mb-8 text-center">
              Опасные локации
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {locations.map((location) => (
                <Card key={location.id} className="bg-[#2C1810] border-[#BB0000]/30 hover:border-[#BB0000] transition-all duration-300 overflow-hidden group animate-fade-in">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={location.image} 
                      alt={location.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#BB0000] mb-3">
                      {location.name}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Статус:</span>
                        <span className="text-[#C41E3A] font-bold">{location.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Зомби:</span>
                        <span className="text-gray-300">{location.zombies}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Ресурсы:</span>
                        <span className="text-gray-300">{location.resources}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="zombies" className="space-y-6">
            <h2 className="text-4xl font-bold text-[#BB0000] mb-8 text-center">
              Типы зомби
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {zombieTypes.map((zombie) => (
                <Card key={zombie.id} className="bg-[#2C1810] border-[#BB0000]/30 hover:border-[#BB0000] transition-all duration-300 overflow-hidden group animate-fade-in">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={zombie.image} 
                      alt={zombie.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#BB0000] mb-3 flex items-center gap-2">
                      <Icon name="Skull" size={24} />
                      {zombie.name}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Угроза:</span>
                        <span className="text-[#C41E3A] font-bold">{zombie.threat}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Скорость:</span>
                        <span className="text-gray-300">{zombie.speed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Слабость:</span>
                        <span className="text-gray-300">{zombie.weakness}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="weapons" className="space-y-6">
            <h2 className="text-4xl font-bold text-[#BB0000] mb-8 text-center">
              Арсенал выживания
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {weapons.map((weapon) => (
                <Card key={weapon.id} className="bg-[#2C1810] border-[#BB0000]/30 hover:border-[#BB0000] transition-all duration-300 overflow-hidden group animate-fade-in">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={weapon.image} 
                      alt={weapon.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#BB0000] mb-3 flex items-center gap-2">
                      <Icon name="Swords" size={24} />
                      {weapon.name}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Урон:</span>
                        <span className="text-[#C41E3A] font-bold">{weapon.damage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Прочность:</span>
                        <span className="text-gray-300">{weapon.durability}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Тип:</span>
                        <span className="text-gray-300">{weapon.type}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="bg-[#1A1412] border-t border-[#BB0000]/30 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            <Icon name="Skull" className="inline mr-2" size={16} />
            Помни: в мире зомби каждый день может стать последним
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
