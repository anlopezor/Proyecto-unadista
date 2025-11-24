import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface VocabularyItem {
  spanish: string;
  nasaYuwe: string;
  audio: string;
}

@Component({
  selector: "app-lengua-nasa-yuwe",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./lengua-nasa-yuwe.component.html",
  styleUrls: ["./lengua-nasa-yuwe.component.css"],
})
export class LenguaNasaYuweComponent {
  playingAudio: string | null = null;

  vocabulary: VocabularyItem[] = [
    { spanish: "Gracias", nasaYuwe: "Pay", audio: "/audios/pay.ogg" },
    { spanish: "Casa", nasaYuwe: "Yat", audio: "/audios/yat.ogg" },
    { spanish: "Sol", nasaYuwe: "Sek", audio: "/audios/sek.ogg" },
    { spanish: "Agua", nasaYuwe: "Yu'", audio: "/audios/yu.ogg" },
    { spanish: "Tierra", nasaYuwe: "Kiwe", audio: "/audios/kiwe.ogg" },
    {
      spanish: "Buenos días",
      nasaYuwe: "Ma'kwe Pete",
      audio: "/audios/pay.ogg",
    },
  ];

  playAudio(item: VocabularyItem): void {
    this.playingAudio = item.audio;

    const audio = new Audio(item.audio);

    audio.onended = () => {
      this.playingAudio = null;
    };

    audio.play();
  }

  isPlaying(item: VocabularyItem): boolean {
    return this.playingAudio === item.audio; // ✅ CORREGIDO
  }
}
