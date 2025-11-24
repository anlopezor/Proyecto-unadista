import { Volume2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function LenguaNasaYuwe() {
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  const vocabulary = [
    { spanish: "Buenos días", nasaYuwe: "Ma'kwe Pete'", audio: "/audios/buenos_dias.ogg" },
    { spanish: "Gracias", nasaYuwe: "Pay", audio: "/audios/pay.ogg" },
    { spanish: "Madre", nasaYuwe: "Uma", audio: "/audios/uma.ogg" },
    { spanish: "Tierra", nasaYuwe: "kiwe'", audio: "/audios/kiwe.ogg" },
    { spanish: "Agua", nasaYuwe: "Yu'", audio: "/audios/yu.ogg" },
    { spanish: "Sol", nasaYuwe: "Sek", audio: "/audios/sek.ogg" },
    { spanish: "Luna", nasaYuwe: "A'te", audio: "/audios/ate.ogg" },
    { spanish: "Casa", nasaYuwe: "Yat", audio: "/audios/yat.ogg" }
  ];

  const playAudio = (audioUrl: string | undefined) => {
    if (!audioUrl) return; // evita errores si falta el audio

    setPlayingAudio(audioUrl);

    const audio = new Audio(audioUrl);

    audio.onended = () => {
      setPlayingAudio(null);
    };

    audio.play();
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <Volume2 className="size-16 text-orange-700" />
        </div>
        <h2 className="text-orange-800">NASA YUWE - NUESTRA VOZ</h2>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-700 shadow-md">
        <h3 className="text-orange-800 mb-4">Palabras básicas para comenzar:</h3>
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full bg-white">
          <thead className="bg-gradient-to-r from-orange-700 to-amber-600 text-white">
            <tr>
              <th className="p-4 text-left">Español</th>
              <th className="p-4 text-left">Nasa Yuwe</th>
              <th className="p-4 text-center">Audio</th>
            </tr>
          </thead>

          <tbody>
            {vocabulary.map((item, index) => (
              <tr key={index} className="border-b hover:bg-orange-50 transition-colors">
                <td className="p-4">{item.spanish}</td>
                <td className="p-4 text-orange-700">{item.nasaYuwe}</td>

                <td className="p-4 text-center">
                  {item.audio ? (
                    <Button
                      size="sm"
                      className="bg-orange-700 hover:bg-orange-800"
                      onClick={() => playAudio(item.audio)}
                      disabled={playingAudio === item.audio}
                    >
                      <Volume2 className="size-4 mr-2" />
                      {playingAudio === item.audio ? "Reproduciendo..." : "Escuchar"}
                    </Button>
                  ) : (
                    <span className="text-gray-400 italic text-sm">Sin audio</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
