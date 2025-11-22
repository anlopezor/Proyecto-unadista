import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BookOpen, Users, Flag, Lightbulb } from "lucide-react";
import { Card } from "./ui/card";

export function Historias() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <BookOpen className="size-16 text-orange-700" />
        </div>
        <h2 className="text-orange-800">WE'KHA - HISTORIAS DE ORIGEN</h2>
      </div>

      {/* Hero Image */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <ImageWithFallback
src="/img/ritual.jpeg"
        
          alt="Comunidad reunida"
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>

      {/* La Gaitana Story */}
      <Card className="bg-gradient-to-br from-orange-50 to-amber-50 shadow-lg">
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Flag className="size-8 text-orange-700" />
            <h3 className="text-orange-800">La Historia de La Gaitana</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            El nombre del resguardo honra la memoria de La Gaitana, líder indígena que resistió 
            la conquista española en el siglo XVI, convirtiéndose en símbolo de valentía y defensa 
            del territorio.
          </p>
        </div>
      </Card>

      {/* Origin Story */}
      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg">
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Lightbulb className="size-8 text-blue-700" />
            <h3 className="text-blue-800">El origen del pueblo Nasa</h3>
          </div>
          <div className="bg-white/70 p-4 rounded-lg">
            <p className="text-gray-700 italic leading-relaxed">
              "Antes de que el sol naciera, los primeros nasa emergieron de las entrañas de la tierra..."
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Según la tradición oral, el pueblo Nasa nació de la unión sagrada entre Uma (la tierra), 
            Tay (el sol) y las estrellas, quienes tocaron las aguas de una laguna sagrada dando vida 
            a los primeros habitantes de estas montañas.
          </p>
        </div>
      </Card>

      {/* Territory Struggle */}
      <div>
        <h3 className="text-orange-800 mb-4">La Lucha por Nuestro Territorio</h3>
        
        <div className="space-y-4">
          {/* 1894 */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-700 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span>1</span>
                </div>
                <div>
                  <h4 className="text-green-800 mb-2">1894 - Reconstrucción del cabildo y del resguardo</h4>
                  <p className="text-gray-700 leading-relaxed">
                    El cabildo indígena volvió a organizarse y se re-expidió un título colonial 
                    reconociendo el Resguardo de Guanacas.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* 1944-1945 */}
          <Card className="bg-gradient-to-r from-red-50 to-pink-50 shadow-lg">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span>2</span>
                </div>
                <div>
                  <h4 className="text-red-800 mb-2">1944-1945 - Crisis y pérdida del resguardo</h4>
                  <p className="text-gray-700 leading-relaxed">
                    El resguardo fue parcelado y liquidado por el gobierno tras afirmar que no existían 
                    escrituras originales. Momento oscuro en la historia de la comunidad.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* 1965 */}
          <Card className="bg-gradient-to-r from-orange-50 to-amber-50 shadow-lg">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-700 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span>3</span>
                </div>
                <div>
                  <h4 className="text-orange-800 mb-2">1965 - Reorganización: nacimiento del Cabildo La Gaitana</h4>
                  <p className="text-gray-700 leading-relaxed">
                    El origen del cabildo actual se dio alrededor de 1965, con líderes como 
                    <strong> Abigail Hurtado Calambás</strong> y otros mayores, quienes lucharon 
                    incansablemente por recuperar la tierra y la identidad de la comunidad.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Storyteller Attribution */}
      <div className="bg-gradient-to-r from-orange-700 to-amber-600 text-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-4">
          <Users className="size-8 flex-shrink-0" />
          <div>
            <h4 className="mb-2">Relatos transmitidos por:</h4>
            <p className="text-amber-100">
              Los mayores y mayoras del Resguardo Indígena La Gaitana
            </p>
            <p className="text-amber-200 mt-2 italic">
              Guardianes de la memoria ancestral
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-700">
        <p className="text-gray-700 leading-relaxed">
          <strong>Nota:</strong> Estas historias son el patrimonio vivo de nuestra comunidad. 
          Cada relato ha sido transmitido de generación en generación y representa la memoria 
          colectiva del pueblo Guanaco y Nasa. Te invitamos a honrar y preservar estos conocimientos.
        </p>
      </div>
    </div>
  );
}
