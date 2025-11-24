import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Users, BookOpen, GraduationCap } from "lucide-react";
import { Card } from "./ui/card";

export function Agradecimientos() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <Heart className="size-16 text-red-600 fill-red-600" />
        </div>
        <h2 className="text-orange-800">Pay</h2>
        <p className="text-orange-700 italic">(Gracias)</p>
      </div>

      {/* Community Image */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <ImageWithFallback
          src="/img/fuego.jpeg"
          alt="Comunidad del Resguardo La Gaitana"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Main Thanks */}
      <Card className="bg-gradient-to-br from-orange-50 to-amber-50 shadow-lg">
        <div className="p-8 text-center space-y-4">
          <Users className="size-12 text-orange-700 mx-auto" />
          <h3 className="text-orange-800">Agradecemos a nuestros mayores</h3>
          <p className="text-gray-700 leading-relaxed">
            Por compartir generosamente su sabiduría ancestral, sus historias,
            y sus conocimientos tradicionales con las nuevas generaciones.
          </p>
        </div>
      </Card>

      {/* Community Thanks */}
      <div className="bg-gradient-to-r from-orange-700 to-amber-600 text-white p-8 rounded-lg shadow-lg text-center">
        <h3 className="mb-4">A la comunidad del Resguardo La Gaitana</h3>
        <p className="leading-relaxed text-lg">
          por compartir sus saberes para las futuras generaciones
        </p>
      </div>

      {/* Special Thanks Sections */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg">
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-green-700 p-3 rounded-full">
                <Sparkles className="size-6 text-white" />
              </div>
              <h4 className="text-green-800">Te'wala y Sabedores</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Los te'wala y sabedores tradicionales que mantienen viva la conexión
              espiritual con el territorio y transmiten las prácticas ancestrales.
            </p>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-violet-50 shadow-lg">
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-purple-700 p-3 rounded-full">
                <Users className="size-6 text-white" />
              </div>
              <h4 className="text-purple-800">Mayores y Mayoras</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Los mayores y mayoras portadores de la memoria, guardianes de las historias
              y tradiciones que dan identidad a nuestro pueblo.
            </p>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg">
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-blue-700 p-3 rounded-full">
                <Heart className="size-6 text-white" />
              </div>
              <h4 className="text-blue-800">Jóvenes Aprendices</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Los jóvenes que se interesaron por aprender y mantener vivos los conocimientos
              ancestrales para las generaciones futuras.
            </p>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 shadow-lg">
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-700 p-3 rounded-full">
                <Flag className="size-6 text-white" />
              </div>
              <h4 className="text-yellow-800">Autoridades del Cabildo</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Las autoridades del cabildo que impulsan la preservación cultural y
              el fortalecimiento de nuestra identidad.
            </p>
          </div>
        </Card>
      </div>

      {/* Institutional Thanks */}
      <Card className="bg-gradient-to-br from-orange-50 to-red-50 shadow-lg">
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <GraduationCap className="size-8 text-orange-700" />
            <h4 className="text-orange-800">Apoyo Institucional</h4>
          </div>
          <div className="space-y-2 text-gray-700">
            <p className="leading-relaxed">
              <strong>Universidad Nacional Abierta y a Distancia (UNAD)</strong>
            </p>
            <p className="leading-relaxed">
              Por su acompañamiento en el fortalecimiento de la CTI (Ciencia, Tecnología e Innovación)
              para las regiones y el apoyo en la construcción de este material educativo.
            </p>
          </div>
        </div>
      </Card>

      {/* Featured Quote */}
      <div className="bg-gradient-to-r from-orange-700 to-amber-600 text-white p-8 rounded-lg shadow-lg">
        <div className="text-center space-y-4">
          <BookOpen className="size-12 mx-auto" />
          <p className="text-2xl leading-relaxed italic">
            "Esta cartilla es un puente entre el ayer y el mañana, entre los abuelos y los nietos,
            entre la tradición y la tecnología."
          </p>
        </div>
      </div>

      {/* References */}
      <div className="bg-orange-50 p-6 rounded-lg shadow-md">
        <h3 className="text-orange-800 mb-4">REFERENCIAS BIBLIOGRÁFICAS</h3>
        <div className="space-y-3 text-gray-700">
          <p className="leading-relaxed">
            • Equipo de Territorio del Resguardo Indígena La Gaitana. (2021).
            <em> ESEJTT R.I. La Gaitana–Inzá.</em> .
          </p>
          <p className="leading-relaxed">
            • Entrevistas a mayores y mayoras del Resguardo La Gaitana (2025)
          </p>
          <p className="leading-relaxed">
            • González, A. (2020). <em>La Acción Solidaria para el Desarrollo Regional.</em> UNAD.
          </p>
          <p className="leading-relaxed">
            • Sandoval, Y. et al. (2019). <em>El fomento de la CTI desde la UNAD para las regiones.</em>
            Sello Editorial UNAD.
          </p>
        </div>
      </div>

      {/* Final Message */}
      <div className="text-center bg-gradient-to-r from-orange-100 to-amber-100 p-8 rounded-lg">
        <p className="text-orange-900 text-xl">
          © Resguardo Indígena La Gaitana, 2025
        </p>
        <p className="text-orange-700 mt-3 leading-relaxed">
          El conocimiento aquí compartido es propiedad colectiva de nuestra comunidad
        </p>
      </div>
    </div>
  );
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

function Flag({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
    </svg>
  );
}
