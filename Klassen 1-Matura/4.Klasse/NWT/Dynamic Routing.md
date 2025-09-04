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

Routing-Protokolle sind Algorithmen, die Router verwenden, um Informationen über das Netzwerk auszutauschen und die besten Routen zu ermitteln. Sie lassen sich in zwei Hauptkategorien unterteilen: Interior Gateway Protocols (IGP) und Exterior Gateway Protocols (EGP).

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
