[[4.NWT]]
___
Das gegenteil ist Static routing wobei man die Adressen manuell eingeben muss. Die routen sind also schon fix festgelelgt.

Beim Dynamischen routing sucht es die routen selbst.

#### Vorteile des Dynamischen Routings

- **Automatische Anpassung:** Router können sich automatisch an Netzwerkänderungen anpassen, wie z.B. Ausfälle oder neue Verbindungen.
- **Skalierbarkeit:** Geeignet für große Netzwerke, da es die Verwaltung von Routen vereinfacht.
- **Ausfallsicherheit:** Bei Ausfall einer Route kann schnell eine alternative Route gefunden werden.

Die Sogenannte **Metrik** gibt an wie günstig eine Route ist. In den meisten Protokollen werden dabei die Hops gezählt. die Route mit der geringsten metrik wird immer bevorzugt.

Die **Administrative Distanz** gibt an wie vertrauenswürdig eine route ist. Statische routen haben meistens eine AD von 1. 

### Routing Protokolle

Routing-Protokolle sind Algorithmen, die Router verwenden, um Informationen über das Netzwerk regelmäßig auszutauschen und die besten Routen zu ermitteln. Sie lassen sich in zwei Hauptkategorien unterteilen: Interior Gateway Protocols (IGP) und Exterior Gateway Protocols (EGP).

- **Interior Gateway Protocols (IGP):** Diese Protokolle werden innerhalb eines autonomen Systems verwendet. Beispiele sind:
    
    - **RIP (Routing Information Protocol):** Ein einfaches, distanzvektorbasiertes Protokoll, das die Anzahl der Hops als Metrik verwendet. Es ist leicht zu konfigurieren, aber nicht sehr skalierbar.
    - **OSPF (Open Shortest Path First):** Ein Link-State-Protokoll, das die kürzesten Pfade zu Zielen basierend auf einer Vielzahl von Metriken berechnet. Es ist skalierbar und effizient für große Netzwerke.
- **Exterior Gateway Protocols (EGP):** Diese Protokolle werden zwischen autonomen Systemen verwendet. Ein Beispiel ist:
    
    - **BGP (Border Gateway Protocol):** Das Hauptprotokoll für das Routing zwischen autonomen Systemen im Internet. Es verwendet Pfadvektoren und ist sehr skalierbar.

### Link State Routing Protokoll

Link-State-Routing-Protokolle, wie OSPF, basieren auf der Kenntnis des gesamten Netzwerks. Jeder Router erstellt eine Karte des Netzwerks und berechnet die besten Routen basierend auf dieser Karte. Dies ermöglicht eine schnellere Konvergenz und genauere Routen im Vergleich zu Distanzvektorprotokollen.

- **Vorteile:** Schnellere Konvergenz, genauere Routen, bessere Skalierbarkeit.
- **Nachteile:** Höherer Rechenaufwand und Speicherbedarf.
### Time to Live (TTL)

TTL ist ein Feld in IP-Paketen, das die maximale Anzahl von Hops angibt, die ein Paket durchlaufen darf, bevor es verworfen wird. Es verhindert, dass Pakete endlos im Netzwerk zirkulieren.

Bei IPv6 heisst es nur noch **HopCount**.

### Classful Routing Protokoll

Classful Routing-Protokolle berücksichtigen die ursprünglichen IP-Adressklassen (A, B, C, D, E) und verwenden keine Subnetzmasken. Sie sind veraltet, da sie keine effiziente Nutzung von IP-Adressen ermöglichen.

- **Klasse A:** Große Netzwerke mit wenigen Netzwerken und vielen Hosts.
- **Klasse B:** Mittelgroße Netzwerke.
- **Klasse C:** Kleine Netzwerke mit vielen Netzwerken und wenigen Hosts.
- **Klasse D:** Multicast-Adressen.
- **Klasse E:** Reserviert für zukünftige oder experimentelle Zwecke.

### Classless Routing

Classless Routing verwendet Subnetzmasken, um IP-Adressen effizienter zu nutzen. Es ermöglicht die Verwendung von CIDR (Classless Inter-Domain Routing), das flexible Subnetzmaskenlängen unterstützt.

- **CIDR (Classless Inter-Domain Routing):** Ermöglicht die Aggregation von IP-Adressen zu größeren Blöcken, was die Routing-Tabelle verkleinert und die Effizienz erhöht. CIDR verwendet eine Notation wie z.B. 192.168.0.0/24, wobei die Zahl nach dem Schrägstrich die Anzahl der Bits in der Subnetzmaske angibt.

### VLSM (Variable Length Subnet Masking)

VLSM ermöglicht die Verwendung von Subnetzen mit variabler Länge innerhalb eines Netzwerks. Im Gegensatz zu festen Subnetzmasken, die in classful Routing verwendet werden, erlaubt VLSM die Zuweisung von Subnetzmasken unterschiedlicher Länge an verschiedene Subnetze innerhalb desselben Netzwerks. Dies führt zu einer effizienteren Nutzung von IP-Adressen und ermöglicht eine flexiblere Netzwerkarchitektur.

#### Vorteile von VLSM

- **Effiziente IP-Adressen-Nutzung:** Durch die Anpassung der Subnetzmaske an die spezifischen Anforderungen eines Subnetzes können IP-Adressen optimal genutzt werden, was besonders in großen Netzwerken von Vorteil ist.
- **Flexibilität:** Netzwerke können mit Subnetzen unterschiedlicher Größe gestaltet werden, um den spezifischen Anforderungen verschiedener Netzwerksegmente gerecht zu werden.
- **Reduzierte Verschwendung:** Minimiert die Verschwendung von IP-Adressen, indem nur die benötigte Anzahl von Adressen für jedes Subnetz zugewiesen wird.

#### Anwendung von VLSM

VLSM wird häufig in Netzwerken eingesetzt, die CIDR unterstützen. Es ermöglicht Netzwerkadministratoren, Subnetze mit unterschiedlichen Größen zu erstellen, indem sie die Subnetzmaske für jedes Subnetz individuell anpassen. Dies ist besonders nützlich in Netzwerken mit einer Vielzahl von Geräten und unterschiedlichen Anforderungen an die Anzahl der Hosts pro Subnetz.

#### Beispiel

Angenommen, ein Unternehmen hat ein Netzwerk mit der IP-Adresse 192.168.1.0/24 und möchte es in mehrere Subnetze aufteilen. Mit VLSM kann es Subnetze mit unterschiedlichen Subnetzmasken erstellen, z.B.:

- 192.168.1.0/26 für ein Subnetz mit 62 Hosts
- 192.168.1.64/27 für ein Subnetz mit 30 Hosts
- 192.168.1.96/28 für ein Subnetz mit 14 Hosts

Diese Flexibilität ermöglicht eine maßgeschneiderte Netzwerkarchitektur, die den spezifischen Anforderungen des Unternehmens entspricht.