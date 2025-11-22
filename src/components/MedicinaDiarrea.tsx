import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Leaf, ThermometerSnowflake, Flame, AlertCircle } from "lucide-react";
import { Card } from "./ui/card";

export function MedicinaDiarrea() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <Leaf className="size-16 text-green-700" />
        </div>
        <h2 className="text-orange-800">UXI' ZA - PLANTAS MEDICINALES</h2>
        <h3 className="text-green-700 mt-2">Remedios para la Diarrea (EDA)</h3>
      </div>

      {/* Hero Image */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <ImageWithFallback
        src="/img/plantas.jpeg"
          alt="Plantas medicinales tradicionales"
          className="w-full h-48 md:h-64 object-cover"
        />
      </div>

      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-700">
        <p className="text-gray-700 italic">
          Sabiduría de nuestros mayores para identificar y tratar la diarrea según su causa
        </p>
      </div>

      {/* Type 1: Diarrea por Frío */}
      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 shadow-lg">
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <ThermometerSnowflake className="size-8 text-blue-700" />
            <div>
              <h3 className="text-blue-800">1. DIARREA POR FRÍO</h3>
              <p className="text-blue-700">
                <strong>Se identifica por:</strong> color verde oscuro a veces como negra y con pintas blancas 
                si el niño ya come alimentos normalmente.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="text-blue-800 mb-3">PLANTAS CALIENTES:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {["Apio", "Limoncillo", "Ajenjo", "Yerbabuena", "Hinojo", "Mejorana", "Perejil"].map((planta) => (
                <div key={planta} className="bg-blue-100 p-2 rounded text-center">
                  <p className="text-blue-900">{planta}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg">
            <h4 className="text-blue-800 mb-2">Preparación:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-700 mt-1">•</span>
                <span><strong>Si el niño es menor de un año:</strong> la madre debe tomar la infusión para que baje en la leche materna</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 mt-1">•</span>
                <span><strong>Niño de 2 años:</strong> dar infusión de 2 a 3 gramos de alguna de estas plantas; una cucharada 3 veces al día</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Type 2: Diarrea por Calor */}
      <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300 shadow-lg">
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Flame className="size-8 text-red-700" />
            <div>
              <h3 className="text-red-800">2. DIARREA POR CALOR</h3>
              <p className="text-red-700">
                <strong>Se identifica por:</strong> color amarillo y espesa, puede acompañar con vómito.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="text-red-800 mb-3">PLANTAS FRESCAS:</h4>
            <div className="space-y-2">
              {[
                "Linaza hervida",
                "Cebada hervida",
                "Escoba real machacado o licuado",
                "Sumo o ponche de sábila con clara de huevo",
                "Sumo de verdolaga"
              ].map((planta) => (
                <div key={planta} className="bg-red-100 p-3 rounded">
                  <p className="text-red-900">{planta}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Type 3: Diarrea por Empacho */}
      <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 shadow-lg">
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="size-8 text-amber-700" />
            <div>
              <h3 className="text-amber-800">3. DIARREA POR EMPACHO</h3>
              <p className="text-amber-700">
                <strong>Se identifica por:</strong> líquida con comidas enteras, tiene llenura, 
                bota gases y a veces acompaña con vómito.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="text-amber-800 mb-3">PLANTAS:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {["Apio", "Yerba de chivo con coca", "Alcachofa", "Sauco", "Mejorana", "Perejil"].map((planta) => (
                <div key={planta} className="bg-amber-100 p-2 rounded text-center">
                  <p className="text-amber-900">{planta}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
