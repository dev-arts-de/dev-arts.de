---
aside: true
---

# daily-pi-poetry

**Raspberry Pi · Lokales Sprachmodell · [GitHub](https://github.com/dev-arts-de/daily-pi-poetry)**

daily-pi-poetry ist ein kleines Experiment: Ein lokales Sprachmodell, das auf dem Raspberry Pi läuft und jeden Tag automatisch ein kurzes Gedicht generiert – ohne Cloud, ohne API-Kosten, ohne externe Abhängigkeit.

## Die Idee

Der Raspberry Pi unter meinem Schreibtisch läuft ohnehin. Neben DailyDev, das mir täglich Lernbeiträge liefert, wollte ich testen, wie weit ein lokales Sprachmodell auf so einem kleinen Gerät sinnvoll einsetzbar ist. Keine groß angelegte KI-Infrastruktur, keine GPU – einfach ein sparsamer ARM-Prozessor, ein quantisiertes Modell und eine Frage: Was kommt dabei heraus?

Die Antwort: ein tägliches Gedicht, generiert vollständig lokal, direkt auf dem Gerät. Kein Serveraufruf, kein Internetzugang zur Laufzeit, keine Abhängigkeit von einem Dienst der morgen vielleicht kostenpflichtig wird oder wegfällt.

## Technische Umsetzung

Das Projekt nutzt ein quantisiertes Sprachmodell, das für eingeschränkte Hardware optimiert ist und auf dem Raspberry Pi ohne externe Ressourcen betrieben werden kann. Ein Cron-Job löst die Generierung täglich zu einem festen Zeitpunkt aus, das Ergebnis wird gespeichert und – wie bei DailyDev – als Benachrichtigung aufs Mobiltelefon geschickt.

Der Quellcode liegt öffentlich auf GitHub. Das Projekt ist bewusst klein gehalten: kein Framework-Overhead, kein kompliziertes Setup. Es sollte eine Sache gut können, und das tut es.

## Was es zeigt

Das Interessante an diesem Experiment ist nicht das Gedicht selbst – es geht um die Frage, was auf einem 50-Euro-Gerät ohne Internetverbindung zur Laufzeit möglich ist. Die Antwort ist: mehr als man erwartet. Lokale Sprachmodelle sind für viele Alltagsanwendungen inzwischen brauchbar, besonders wenn die Anforderungen klar und begrenzt sind. Ein tägliches Gedicht ist ein denkbar einfacher Anwendungsfall – aber er zeigt das Prinzip.

---

[GitHub – daily-pi-poetry](https://github.com/dev-arts-de/daily-pi-poetry){.cv-download-link}
