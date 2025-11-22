import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BookOpen } from "lucide-react";

export function Introduccion() {
  return (
    <div className="space-y-8">
      {/* Hero Image */}
      <div className="rounded-lg overflow-hidden shadow-lg">
      <ImageWithFallback
   src="/img/fondo.jpeg"
  alt="Paisaje del Resguardo Indígena La Gaitana"
  className="w-full h-64 md:h-96 object-cover"
/>

      </div>

      {/* Title Section */}
      <div className="text-center space-y-4">
        <h2 className="text-orange-800">NUESTRA IDENTIDAD NASA</h2>
        <h3 className="text-amber-700">Resguardo Indígena La Gaitana</h3>
        <p className="text-orange-700">Vereda El Lago, Inzá - Cauca</p>
      </div>

      {/* Quote */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-700 shadow-md">
        <p className="text-center italic text-orange-900">
          "Los mayores y mayoras son bibliotecas vivientes, caminantes de la memoria"
        </p>
      </div>

      {/* Elders Image */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <ImageWithFallback
          src="/img/integrantes.jpeg"       
          alt="Mayores de la comunidad"
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>

      {/* History Section */}
      <div className="space-y-4">
        <h3 className="text-orange-800">Historia de Nuestro Territorio</h3>

        <div className="bg-orange-50 p-6 rounded-lg">
          <h4 className="text-orange-700 mb-3">Antiguo territorio ancestral: el pueblo Guanaco</h4>
          <p className="text-gray-700 leading-relaxed">
            El resguardo La Gaitana se encuentra ubicado sobre el territorio ancestral Guanaco,
            pues la comunidad actual reconoce que desciende del antiguo pueblo Guanaco, hoy desaparecido.
          </p>
        </div>
      </div>

      {/* Objective */}
      <div className="bg-gradient-to-r from-orange-700 to-amber-600 text-white p-8 rounded-lg shadow-lg">
        <div className="flex items-start gap-4">
          <BookOpen className="size-8 flex-shrink-0 mt-1" />
          <div>
            <h4 className="mb-3">Objetivo de esta cartilla:</h4>
            <p className="leading-relaxed">
              Preservar y compartir los conocimientos ancestrales a través de formatos digitales accesibles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
