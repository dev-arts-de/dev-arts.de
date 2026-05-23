---
aside: true
---

# 9thbit

**KI-Blog für Entwickler · Java/Quarkus · Claude · RSS · [9thbit.de](https://9thbit.de)**

9thbit ist ein technischer Blog, der täglich automatisch Artikel über Java und objektorientierte Programmierung veröffentlicht. Themen, die jeder Java-Entwickler in seiner Karriere mehrfach durchläuft: wie Vererbung wirklich funktioniert, woran man typische Anti-Patterns erkennt, was hinter den klassischen Designprinzipien steht, welche Stolperfallen es bei Konstruktoren, Sichtbarkeitsmodifikatoren oder Immutability gibt.

Die Artikel haben eine klare Zielgruppe vor Augen. Sie richten sich an Entwickler, die ihre Grundlagen ehrlich auffrischen wollen, etwa in Vorbereitung auf ein technisches Vorstellungsgespräch, oder weil ein Code-Review im Job gezeigt hat, dass das Bauchgefühl bei einem Pattern nicht reicht. Jeder Artikel ist mit einem Schwierigkeitsgrad markiert und mit einer geschätzten Lesezeit versehen, sodass man auf einen Blick weiß, worauf man sich einlässt.

## Warum dieses Projekt

9thbit ist parallel zu Stoistic Forge entstanden, mit derselben Grundidee, aber für ein anderes Thema. Bei Stoistic Forge ging es um philosophische Inhalte. Hier geht es um die Frage, ob dasselbe Pipeline-Konzept auch für ein technisches Thema trägt, bei dem die Genauigkeit zählt und kleine Ungenauigkeiten sofort auffallen. Java-Grundlagen sind ein perfektes Testfeld: viele Quellen, klare Abgrenzungen, gleichzeitig hohe Versuchung zu oberflächlichen oder leicht falschen Erklärungen.

Der Name kommt vom neunten Bit. In einem Byte gibt es acht. Das neunte ist das gedachte Extra, das den Unterschied zwischen "kann ich erklären" und "habe ich verstanden" ausmacht.

## Wie die Inhalte entstehen

Die Pipeline folgt demselben Grundmuster wie bei Stoistic Forge: TopicSelectionAgent wählt das Thema, ArticleGenerationAgent schreibt, QualityReviewAgent prüft, bis zu drei Retries, dann Veröffentlichung. Für 9thbit habe ich die Pipeline an drei Stellen für das technische Thema angepasst.

Der Topic-Agent berücksichtigt nicht nur veröffentlichte Themen, sondern eine bewusst kuratierte Roadmap aus Themen, die ich für besonders wichtig halte. Der Generation-Agent hat einen Styleguide, der konkrete Codebeispiele einfordert und geschwätzige Einleitungen ausschließt. Der Quality-Review-Agent prüft zusätzlich, ob die Codebeispiele syntaktisch sauber sind und ob die Aussagen über das Verhalten der Sprache stimmen.

Statt einer Push-Benachrichtigung über ntfy nutzt 9thbit einen RSS-Feed. Das passt besser zur Zielgruppe. Entwickler abonnieren Feeds, RSS ist immer noch die solideste Methode, technische Inhalte zu verfolgen, ohne von Algorithmen geprägt zu werden.

## Themen und Schwierigkeitsgrade

```
L1  Junior-Interview-Stoff           Konstruktoren, equals/hashCode,
                                     God-Class, Vererbung vs. Komposition

L2  Mit Praxiserfahrung               Memory-Modell, volatile, Generics
                                     zur Laufzeit, Garbage Collection

L3  Urteilskraft, nicht Wissen        Sealed Classes seit Java 17,
                                     ForkJoinPool vs. CompletableFuture,
                                     Service-Loader vor/nach Modulsystem
```

Jeder Artikel bekommt einen dieser Schwierigkeitsgrade zugewiesen und eine geschätzte Lesezeit. So weiß man auf einen Blick, worauf man sich einlässt.

## Technischer Aufbau

```
Runtime         Java · Quarkus
Datenbank       PostgreSQL · Flyway
KI              Anthropic Claude (Haiku, Sonnet)
Distribution    RSS-Feed statt Push
Packages        ai · article · common · config · notification
                quality · rss · scheduler · topic
```

Innerhalb des `ai`-Pakets liegen die einzelnen Agenten als eigene Klassen: `TopicSelectionAgent`, `ArticleGenerationAgent`, `QualityReviewAgent`. Bildgenerierung ist bei 9thbit zurückhaltender eingesetzt, technische Artikel brauchen keine künstlerischen Titelbilder. Codebeispiele und Diagramme stehen stattdessen direkt im Artikel.

## Was ich daraus mitgenommen habe

Die Qualität der Pipeline hängt weit mehr am Styleguide und an den Review-Kriterien als am Modell selbst. Beide Projekte nutzen dieselben Claude-Modelle. Was den Unterschied macht, ist die Schärfe, mit der die Review-Stufe filtert. Wer dort sparsam ist, bekommt mittelmäßige Inhalte.

Bei technischen Inhalten zeigt sich außerdem schnell, wo die Grenzen aktueller Sprachmodelle liegen. Standard-Erklärungen sind solide. Sobald die Frage in Randbereiche kommt, in denen es mehrere konkurrierende Konventionen gibt oder eine Aussage nur in einer bestimmten Java-Version stimmt, wird es heikel. Die Review-Stufe fängt vieles ab, nicht alles. Bei strittigen Themen lese ich daher gelegentlich nach und schärfe die Style-Konfiguration nach, wenn ich systematische Schwachstellen finde.

---

[9thbit.de](https://9thbit.de){.cv-download-link}
