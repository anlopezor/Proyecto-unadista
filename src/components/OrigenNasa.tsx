import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mountain, Users, Shield, Heart } from "lucide-react";

export function OrigenNasa() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <Mountain className="size-16 text-orange-700" />
        </div>
        <h2 className="text-orange-800">ORIGEN DEL PUEBLO NASA</h2>
      </div>

      {/* Hero Image */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <ImageWithFallback
          src=".\public\img\traje.jpeg"
          alt="Territorio ancestral Nasa"
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>

      <p className="text-gray-700 leading-relaxed">
        El pueblo Nasa —también llamados "paeces"— es uno de los pueblos indígenas más antiguos del Cauca y Tierradentro.
      </p>

      {/* Section 1: Origen Mítico */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-orange-700 text-white p-3 rounded-full">
            <span>1</span>
          </div>
          <h3 className="text-orange-800">Origen mítico</h3>
        </div>
        
        <p className="text-gray-700 mb-4">
          La cosmogonía nasa relata que el pueblo nació de la unión entre:
        </p>
        
        <div className="space-y-3 ml-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-orange-700 rounded-full"></div>
            <p className="text-gray-700"><strong>Uma</strong> (la tierra)</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-orange-700 rounded-full"></div>
            <p className="text-gray-700"><strong>Tay</strong> (el sol)</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-orange-700 rounded-full"></div>
            <p className="text-gray-700">y la <strong>estrella</strong>, que tocó una laguna sagrada dando origen a los primeros Nasa.</p>
          </div>
        </div>
      </div>

      {/* Section 2: Ubicación */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-orange-700 text-white p-3 rounded-full">
            <span>2</span>
          </div>
          <h3 className="text-orange-800">Ubicación ancestral</h3>
        </div>
        
        <p className="text-gray-700">
          Los Nasa han habitado históricamente la zona occidental y oriental de la cordillera central, 
          especialmente en Inzá y Páez.
        </p>
      </div>

      {/* Section 3: Luchas */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-orange-700 text-white p-3 rounded-full">
            <Shield className="size-5" />
          </div>
          <h3 className="text-orange-800">Luchas históricas</h3>
        </div>
        
        <p className="text-gray-700 mb-3">Los Nasa participaron en:</p>
        
        <div className="space-y-3 ml-6">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-orange-700 rounded-full mt-2"></div>
            <p className="text-gray-700">Resistencia a la conquista española (1530–1650)</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-orange-700 rounded-full mt-2"></div>
            <p className="text-gray-700">Defensa conjunta con los caciques Tálaga, Páez, Taravira, Suyn y Esmisa</p>
          </div>
        </div>
      </div>

      {/* Section 4: La Gaitana */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-orange-700 text-white p-3 rounded-full">
            <Heart className="size-5" />
          </div>
          <h3 className="text-orange-800">Relación con La Gaitana</h3>
        </div>
        
        <p className="text-gray-700 mb-4">
          La comunidad del resguardo La Gaitana se autoidentifica como Nasa, aunque reconoce raíces y mezcla con:
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          <div className="bg-white p-3 rounded-lg text-center shadow-sm">
            <p className="text-orange-700">Guanacos</p>
          </div>
          <div className="bg-white p-3 rounded-lg text-center shadow-sm">
            <p className="text-orange-700">Misak</p>
          </div>
          <div className="bg-white p-3 rounded-lg text-center shadow-sm">
            <p className="text-orange-700">Coconucos</p>
          </div>
          <div className="bg-white p-3 rounded-lg text-center shadow-sm">
            <p className="text-orange-700">Puracé</p>
          </div>
        </div>
        
        <p className="text-gray-700">
          Hoy el resguardo hace parte del CRIC y mantiene lengua Nasa Yuwe, bastón de mando y prácticas tradicionales.
        </p>
      </div>
    </div>
  );
}
