import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Calendar, Sprout, Sun, Flame } from "lucide-react";
import { Card } from "./ui/card";

export function Ritualidad() {
  const rituals = [
    {
      icon: Sprout,
      name: "La limpieza",
      description: "Elimina malas energías de personas, casas, predios, siembras y cosechas.",
      color: "from-green-50 to-emerald-50",
      iconColor: "text-green-700"
    },
    {
      icon: Sparkles,
      name: "La potencialización",
      description: "Ritual para brindar fuerza espiritual y protección profunda.",
      color: "from-purple-50 to-violet-50",
      iconColor: "text-purple-700"
    },
    {
      icon: Sun,
      name: "La armonización",
      description: "Busca equilibrar energías familiares y territoriales.",
      color: "from-yellow-50 to-amber-50",
      iconColor: "text-yellow-700"
    }
  ];

  const festivities = [
    {
      icon: Calendar,
      emoji: "📅",
      name: "Año Andino",
      date: "21 de junio",
      description: "Celebración territorial que busca recuperar el calendario propio.",
      color: "from-blue-50 to-cyan-50"
    },
    {
      icon: Sprout,
      emoji: "🌱",
      name: "Saakkhelu",
      date: "Septiembre",
      description: "Ofrenda a las semillas. Ritual realizado con participación de te'wala, autoridades, jóvenes y familias.",
      color: "from-green-50 to-lime-50"
    },
    {
      icon: Sun,
      emoji: "☀️",
      name: "Sek Buy",
      date: "Junio",
      description: "Recibimiento del sol. Ceremonia que honra la conexión con los ciclos solares.",
      color: "from-orange-50 to-yellow-50"
    },
    {
      icon: Flame,
      emoji: "🔥",
      name: "Armonización del fuego",
      date: "Marzo (luna menguante)",
      description: "Ceremonia para equilibrar las energías del fuego en la comunidad.",
      color: "from-red-50 to-orange-50"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <Sparkles className="size-16 text-orange-700" />
        </div>
        <h2 className="text-orange-800">SA'TH U'J - RITUALES ANCESTRALES</h2>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-700 shadow-md">
        <h3 className="text-orange-800 mb-3">Cosmovisión, Espiritualidad, Rituales y Fiestas en el Territorio Ancestral Guanaco</h3>
        <p className="text-gray-700 leading-relaxed">
          La comunidad mantiene una profunda conexión espiritual con el territorio ancestral Guanaco. 
          Su cosmovisión se fundamenta en la presencia de la madre naturaleza, los espíritus, 
          los sitios sagrados y el papel de los te'wala.
        </p>
      </div>

      {/* Rituales Fundamentales */}
      <div>
        <h3 className="text-orange-800 mb-4 text-center">Rituales fundamentales:</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {rituals.map((ritual, index) => {
            const Icon = ritual.icon;
            return (
              <Card 
                key={index}
                className={`bg-gradient-to-br ${ritual.color} shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="p-6 space-y-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white rounded-full p-4 shadow-md mb-3">
                      <Icon className={`size-8 ${ritual.iconColor}`} />
                    </div>
                    <h4 className="text-orange-800">{ritual.name}</h4>
                  </div>
                  <p className="text-gray-700 text-center leading-relaxed">
                    {ritual.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Rituales Colectivos */}
      <div>
        <h3 className="text-orange-800 mb-4 text-center">Rituales colectivos y fiestas ancestrales:</h3>
        
        <div className="space-y-4">
          {festivities.map((festivity, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br ${festivity.color} shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{festivity.emoji}</div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-orange-800">{festivity.name}</h4>
                      <span className="text-orange-700 italic">{festivity.date}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {festivity.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Ritual Image */}
      {/* <div className="rounded-lg overflow-hidden shadow-lg"> */}
        {/* <ImageWithFallback
          src="https://images.unsplash.com/photo-1609223708890-537ad732ebba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNlcmVtb255JTIwcml0dWFsfGVufDF8fHx8MTc2Mzc0NDE4NXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Ritual Saakhelu"
          className="w-full h-64 md:h-96 object-cover"
        /> */}
        {/* <div className="bg-orange-700 text-white p-3 text-center">
          <p>Ceremonia tradicional - Saakhelu</p>
        </div> */}
      {/* </div> */}

      {/* Featured Quote */}
      <div className="bg-gradient-to-r from-orange-700 to-amber-600 text-white p-8 rounded-lg shadow-lg">
        <div className="flex items-start gap-4">
          <Sparkles className="size-8 flex-shrink-0 mt-1" />
          <div>
            <p className="text-2xl leading-relaxed italic text-center">
              "Armonizar el corazón del territorio con el corazón de la comunidad"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
