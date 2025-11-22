import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Introduccion } from "./components/Introduccion";
import { OrigenNasa } from "./components/OrigenNasa";
import { LenguaNasaYuwe } from "./components/LenguaNasaYuwe";
import { MedicinaDiarrea } from "./components/MedicinaDiarrea";
import { MedicinaFiebre } from "./components/MedicinaFiebre";
import { UsoAnimal } from "./components/UsoAnimal";
import { Ritualidad } from "./components/Ritualidad";
import { Historias } from "./components/Historias";
import { Cronologia } from "./components/Cronologia";
import { Agradecimientos } from "./components/Agradecimientos";

const pages = [
  { id: 1, title: "Introducción", component: Introduccion },
  { id: 2, title: "Origen del Pueblo Nasa", component: OrigenNasa },
  { id: 3, title: "Lengua Nasa Yuwe", component: LenguaNasaYuwe },
  { id: 4, title: "Medicina - Diarrea", component: MedicinaDiarrea },
  { id: 5, title: "Medicina - Fiebre", component: MedicinaFiebre },
  { id: 6, title: "Uso Animal en Medicina", component: UsoAnimal },
  { id: 7, title: "Ritualidad y Cosmovisión", component: Ritualidad },
  { id: 8, title: "Historias y Relatos", component: Historias },
  { id: 9, title: "Cronología Histórica", component: Cronologia },
  { id: 10, title: "Agradecimientos", component: Agradecimientos },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const CurrentPageComponent = pages[currentPage].component;

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-800 to-amber-700 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">

          {/* Imagen izquierda */}
          <img
            src="/img/logo.svg.png"
            alt="Universidad"
            className="w-10 h-10 object-contain"
          />

          {/* Título centrado */}
          <div className="text-center flex-1">
            <h1 className="text-xl font-bold"> SABERES DE NUESTROS MAYORES - Yaçkatey fxizenxis athnxisa</h1>
            <p className="text-amber-100 mt-1">
              Cartilla Digital del Resguardo Indígena La Gaitana
            </p>
          </div>

          {/* Imagen derecha */}
          <img
          src="/img/unnamed.jpg"

            alt="Resguardo"
            className="w-10 h-10 object-contain"
          />
        </div>
      </header>



      {/* Page Navigation Tabs */}
      <nav className="bg-white shadow-md sticky top-[104px] z-40">
        <div className="container mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {pages.map((page, index) => (
              <Button
                key={page.id}
                variant={currentPage === index ? "default" : "outline"}
                onClick={() => {
                  setCurrentPage(index);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={currentPage === index ? "bg-orange-700 hover:bg-orange-800" : ""}
              >
                {page.id}. {page.title}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Card className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6 md:p-8 lg:p-12">
            <CurrentPageComponent />
          </div>

          {/* Navigation Buttons */}
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-4 flex justify-between items-center border-t">
            <Button
              onClick={goToPreviousPage}
              disabled={currentPage === 0}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ChevronLeft className="size-4" />
              Página Anterior
            </Button>

            <span className="text-orange-800">
              Página {currentPage + 1} de {pages.length}
            </span>

            <Button
              onClick={goToNextPage}
              disabled={currentPage === pages.length - 1}
              className="flex items-center gap-2 bg-orange-700 hover:bg-orange-800"
            >
              Página Siguiente
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-900 to-amber-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© Resguardo Indígena La Gaitana, 2025</p>
          <p className="text-amber-200 mt-2">
            El conocimiento aquí compartido es propiedad colectiva de nuestra comunidad
          </p>
        </div>
      </footer>
    </div>
  );
}
