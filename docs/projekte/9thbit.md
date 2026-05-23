---
aside: true
---

# 9thbit

**KI-Blog für Entwickler · Java/Quarkus · Claude · RSS · [9thbit.de](https://9thbit.de)**

9thbit ist ein technischer Blog, der täglich automatisch Artikel über Java und objektorientierte Programmierung veröffentlicht. Themen, die jeder Java-Entwickler in seiner Karriere mehrfach durchläuft: wie Vererbung wirklich funktioniert, woran man typische Anti-Patterns erkennt, was hinter den klassischen Designprinzipien steht, welche Stolperfallen es bei Konstruktoren, Sichtbarkeitsmodifikatoren oder Immutability gibt.

Die Artikel haben eine klare Zielgruppe vor Augen. Sie richten sich an Entwickler, die ihre Grundlagen ehrlich auffrischen wollen, etwa in Vorbereitung auf ein technisches Vorstellungsgespräch, oder weil ein Code-Review im Job gezeigt hat, dass das Bauchgefühl bei einem Pattern nicht reicht. Jeder Artikel ist mit einem Schwierigkeitsgrad markiert und mit einer geschätzten Lesezeit versehen, sodass man auf einen Blick weiß, worauf man sich einlässt.

## Warum dieses Projekt

9thbit ist parallel zu Stoistic Forge entstanden, mit derselben Grundidee, aber für ein anderes Thema. Bei Stoistic Forge ging es um philosophische Inhalte. Bei 9thbit ging es um die Frage, ob dasselbe Pipeline-Konzept auch für ein technisches Thema trägt, bei dem die Genauigkeit zählt und kleine Ungenauigkeiten sofort auffallen.

Java-Grundlagen sind ein perfektes Testfeld. Es gibt eine riesige Menge an verfügbaren Quellen, die Themen sind klar abgegrenzt, und gleichzeitig ist die Versuchung groß, oberflächliche oder leicht falsche Erklärungen zu liefern. Wenn das System dort gute Artikel produziert, ist das ein Beleg dafür, dass die Pipeline-Architektur nicht nur für weiche Themen funktioniert.

Der Name kommt vom neunten Bit. In einem Byte gibt es acht. Das neunte ist das, was es eigentlich nicht gibt, das gedachte Extra. So habe ich versucht, das Projekt zu positionieren: keine weitere Tutorial-Sammlung, sondern den zusätzlichen Bit, das eine Stück Verständnis, das den Unterschied zwischen "kann ich erklären" und "habe ich verstanden" ausmacht.

## Wie die Inhalte entstehen

Die Pipeline folgt demselben Grundmuster wie bei Stoistic Forge. Ein täglicher Scheduler startet einen mehrstufigen Generierungsprozess. Ein TopicSelectionAgent wählt das Thema des Tages aus, ein ArticleGenerationAgent schreibt den Artikel, ein QualityReviewAgent prüft das Ergebnis. Wenn der Review nicht passt, wird neu generiert, bis zu drei Mal. Erst danach wird veröffentlicht.

Für 9thbit habe ich die Pipeline an mehreren Stellen für das technische Thema angepasst. Der Topic-Agent berücksichtigt nicht nur veröffentlichte Themen, sondern auch eine bewusst kuratierte Roadmap aus Themen, die ich für besonders wichtig halte. Der Generation-Agent hat einen anderen Styleguide bekommen, der konkrete Codebeispiele einfordert und keine geschwätzigen Einleitungen erlaubt. Der Quality-Review-Agent prüft zusätzlich, ob die Codebeispiele syntaktisch sauber sind und ob die genannten Aussagen über das Verhalten der Sprache stimmen.

Statt einer Push-Benachrichtigung über ntfy nutzt 9thbit einen RSS-Feed. Das passt besser zur Zielgruppe. Entwickler abonnieren Feeds, RSS ist immer noch die solideste Methode, technische Inhalte zu verfolgen, ohne von Algorithmen geprägt zu werden. Der Feed wird bei jedem neuen Artikel aktualisiert und enthält die wichtigsten Metadaten plus eine kurze Vorschau.

## Themen und Schwierigkeitsgrade

Jeder Artikel bekommt einen Schwierigkeitsgrad zugewiesen, derzeit als L1, L2 oder L3 markiert. L1 sind die Grundlagen, die jeder Java-Entwickler bei einem Junior-Interview kennen sollte. L2 sind die Themen, die mit Praxiserfahrung kommen, etwa Memory-Modelle, Concurrency-Konzepte, oder die feinen Unterschiede zwischen ähnlichen Sprachfeatures. L3 sind die Themen für erfahrene Entwickler, bei denen es nicht mehr um Wissen geht, sondern um Urteilskraft.

Themen, die bisher erschienen sind oder vorgemerkt sind, decken die ganze Bandbreite ab. Konstruktoren und ihre Verkettung, das Problem mit der God-Class als typisches Anti-Pattern, Vererbung versus Komposition, equals und hashCode in Verbindung mit Collections, die Frage warum String immutable ist, was Generics zur Laufzeit wirklich machen, wie Garbage Collection in modernen JVMs funktioniert. Themen für L2 und L3 sind unter anderem das Memory-Modell und volatile, ForkJoinPool und CompletableFuture, das Verhalten von Sealed Classes seit Java 17, und der Unterschied zwischen den Service-Loader-Mechanismen vor und nach dem Modulsystem.

## Technischer Aufbau

Das Backend ist eine Quarkus-Anwendung in Java. Quarkus auch hier, derselbe Grund wie bei Stoistic Forge. Schneller Start, geringer Speicherverbrauch, modernes Java-Ökosystem. Die Anwendung ist nach Domänen-Packages strukturiert. Es gibt ai, article, common, config, notification, quality, rss, scheduler und topic. Die Pakete spiegeln die Pipeline-Stufen und die unterstützenden Konzepte. Innerhalb des ai-Pakets liegen die einzelnen Agenten: TopicSelectionAgent, ArticleGenerationAgent, QualityReviewAgent.

Persistierung über PostgreSQL mit Flyway-Migrationen. KI-Aufrufe gehen direkt an die Anthropic-API, mit Haiku für Topic-Selection und Sonnet für Generation und Review. Bildgenerierung ist bei 9thbit zurückhaltender eingesetzt, weil technische Artikel keine künstlerischen Titelbilder brauchen. Stattdessen werden Codebeispiele und Diagramme im Artikel direkt eingebettet.

Das Frontend folgt demselben Muster wie bei Stoistic Forge. Eine eigene Anwendung, die nach jedem Pipeline-Lauf über einen Deploy-Hook neu gebaut wird. Statische Auslieferung mit dynamischer Inhaltsverwaltung.

## Was ich daraus gelernt habe

Zwei Dinge sind mir bei 9thbit besonders aufgefallen.

Erstens: Die Qualität der Pipeline hängt weit mehr am Styleguide und an den Review-Kriterien als am Modell selbst. Beide Projekte nutzen dieselben Claude-Modelle, beide bekommen vergleichbare Antworten, wenn man sie isoliert betrachtet. Was den Unterschied macht, ist die Klarheit der Anweisungen und die Schärfe, mit der die Review-Stufe filtert. Wer dort sparsam ist, bekommt mittelmäßige Inhalte. Wer dort investiert, bekommt brauchbare.

Zweitens: Bei technischen Inhalten zeigt sich schnell, wo die Grenzen der aktuellen Sprachmodelle liegen. Standard-Erklärungen sind solide. Sobald die Frage in Randbereiche kommt, in denen es mehrere konkurrierende Konventionen gibt, oder in denen eine Aussage nur in einer bestimmten Java-Version oder JVM-Implementierung stimmt, wird es heikel. Die Review-Stufe fängt vieles ab, aber nicht alles. Bei strittigen Themen lese ich daher gelegentlich nach, bevor ich einen Artikel öffentlich lasse, und korrigiere die Style-Konfiguration, wenn ich systematische Schwachstellen finde.

Beides waren wertvolle Lektionen. Sie haben mein Verständnis dafür geschärft, was Sprachmodelle gut können, wo sie zuverlässig versagen, und wie eine gut gebaute Pipeline diese Lücke schließen kann, ohne dass man jeden einzelnen Artikel selbst überfliegen muss.

---

[9thbit.de](https://9thbit.de){.cv-download-link}
