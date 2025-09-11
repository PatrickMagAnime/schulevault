[[4.NWT]]
___
Begriff / Zweck:
- LSAs (Link State Advertisements) sind die OSPF-internen Dateneinheiten, mit denen Topologie- und Routing-Informationen innerhalb festgelegter Flooding-Scopes verteilt werden (Link / Area / AS).
- Jede LSA-Art beschreibt bestimmte Aspekte: eigene Links, Multiaccess-Netze, Zusammenfassungen, Externals, Opaque/Erweiterungen usw.
- Alle LSAs landen (je nach Scope) in der Link State Database (LSDB) und bilden die Basis für SPF-Berechnung (Dijkstra), woraus der Routing-Table entsteht.

Allgemeiner OSPF LSA-Header (v2):
- LS Age (16 Bit): Zeit in Sekunden seit Erzeugung (Max 3600).
- Options (8 Bit): Fähigkeits-Bits (z.B. E, N/P, DC, L, O).
- LS Type (8 Bit): LSA-Typnummer.
- Link State ID (32 Bit): Bedeutung abhängig vom Typ (z.B. Router-ID Zielnetz, Netz-ID, ASBR-ID).
- Advertising Router (32 Bit): Router-ID des erzeugenden Routers.
- LS Sequence Number (32 Bit): Versionskontrolle (0x80000001 bis 0x7fffffff).
- LS Checksum (16 Bit): Fletcher-Checksum über LSA-Inhalt (ohne LS Age).
- Length (16 Bit): Gesamtlänge LSA inkl. Header.

Flooding-Scopes:
- Link-Local (nur auf einem Link): v2 via Opaque Type 9, v3 über Scope Bits.
- Area-Local: klassische Typen (1–5,7) plus Opaque Type 10.
- AS-Weit: Externals, Opaque Type 11 etc.

OSPFv2 Standard LSA-Typen (RFC 2328 + Erweiterungen):
1 Router-LSA: Pro Router je Area; listet alle aktiven Interfaces (Links), Link-Typ, Metrik, Flags (V,E,B, etc.).
2 Network-LSA: Von DR auf Multiaccess-Netz; enthält alle teilnehmenden Router-IDs.
3 Summary LSA (Netz-Zusammenfassung): Von ABR in andere Areas exportierte Präfixe (inter-area).
4 ASBR Summary LSA: Erreichtbarkeit eines ASBR über Bereiche.
5 AS-External LSA: Externe Routen (z.B. aus BGP, statisch); enthält External-Metrik (Type 1/2).
6 (Veraltet für MOSPF Multicast).
7 NSSA External LSA: Externals innerhalb NSSA; später durch ABR in Type 5 übersetzt (außer wenn P-Bit=0).
8 External Attributes LSA (selten genutzt: BGP-Attributtransport, praktisch obsolet).
9 Opaque LSA (Link-Local Scope): Traffic Engineering, GMPLS etc.
10 Opaque LSA (Area Scope): Erweiterungsstrukturen (z.B. TE LSAs für MPLS).
11 Opaque LSA (AS Scope): Globale Erweiterungen (z.B. Graceful Restart Informationen).
(12–13 reserviert; 14–15 nicht genutzt.)

Wichtige Erweiterungen (OSPFv2):
- Traffic Engineering LSAs: Opaque Type 10, LS ID strukturiert (Router-ID + Typfelder) für MPLS/RSVP.
- Grace LSAs: Unterstützen Non-Stop-Restart.
- Extended Link / Extended Prefix LSAs (RFC 7684/9394): Neue Formate (statt Opaque) zur Trennung von Attributen; Kodierungen TLV-basiert (ersetzt älteres Opaque-Ansatzmodell schrittweise).

OSPFv3 (IPv6) Unterschiede:
- LS Type Feld besitzt Struktur: LS Type = (U | S2 S1) | (13-bit Type Value)
  - U-Bit: Verhalten bei unbekannt (0=verwerfen,1=weiter,2=weiter+instanz).
  - S2/S1 bestimmen Scope: 00=Link, 01=Area, 10=AS, 11=reserviert.
- IPv6-Adressen nicht direkt in Router-/Network-LSAs; Präfixe ausgelagert in Intra-Area-Prefix-LSAs.
- Authentifizierung nicht mehr im OSPF Header, sondern über IPv6 Security (AH/ESP) oder IPsec.

OSPFv3 Kern-LSAs (Type Value, mit Scope Bits codiert; hier symbolisch dargestellt):
- Router-LSA (0x2001 Area Scope): Topologie des Routers (ohne Präfixe).
- Network-LSA (0x2002 Area Scope): Multiaccess-Link Teilnehmer.
- Inter-Area-Prefix-LSA (0x2003): Präfixzusammenfassung zwischen Areas.
- Inter-Area-Router-LSA (0x2004): Erreichbarkeit zu einem Router (ABR/ASBR) zwischen Areas.
- AS-External-LSA (0x4005 AS Scope): Externe Prefixe.
- NSSA-LSA (0x2007 Area Scope): Externals in NSSA (wie Type 7).
- Link-LSA (0x0008 Link Scope): Pro Interface; liefert Link-Local-Adresse + Options für Nachbarn.
- Intra-Area-Prefix-LSA (0x2009): IPv6-Präfixe, die zu Router- oder Network-LSAs gehören.
- (Group-Membership-LSA veraltet, Grace-LSAs existieren als neue Typen mit entsprechenden Scope Bits.)
Neue Extended-LSAs (RFC 9357 ff.): Bieten generische TLV-Erweiterung für zukünftige Attribute (z.B. Segment Routing, RI LSA für Router Information).

Wichtige Flags / Bits:
- Router-LSA Flags: V (Virtual Link Endpoint), E (ASBR), B (ABR), NP (NSSA Translator), etc.
- Options-Feld (v2/v3): Bits wie E (External Routing), N/P (NSSA), DC (Demand Circuit), O (Opaque), L (Link-Local Signaling), AF (Address Families, v3 Erweiterungen), R, S bits je nach RFC.

SPF-Berechnung:
- LSAs mit Topologie (Router/Network) bauen Graph.
- Summary/External LSAs fügen Kanten/Leafs mit Metriken hinzu.
- Cost Aggregation: Intra-Area < Inter-Area < External Type 1 < External Type 2 (mit besonderer Metrikbehandlung für Type 2: interne Kosten nur bis ASBR signifikant).

Beziehung Pakete vs LSAs:
- OSPF Paket-Typen: 1 Hello, 2 Database Description (DBD), 3 Link State Request (LSR), 4 Link State Update (LSU – enthält ein oder mehrere LSAs), 5 Link State Acknowledgment (LSAck).
- LSUs transportieren LSAs; LSAck bestätigt Empfang (entweder explizit oder implizit durch erneutes Flooding unterdrückt).

IP Header (OSPFv2 über IPv4):
- Protocol Number: 89
- TTL: 1 (lokale Nachbarschaft, verhindert Weiterleitung)
- DSCP/ToS: meist 0 (manchmal QoS-Klassen konfigurierbar)
- Source: Interface-IP des sendenden Routers
- Destination Multicast:
  - 224.0.0.5 (AllSPFRouters) für: Hello, DBD, LSR, LSU (normal), LSAck (meist)
  - 224.0.0.6 (AllDRouters) für: DR/BDR-spezifische Kommunikation (z.B. DBD vom DR zu DROthers, LSAcks Richtung DR)
  - Unicast: Während Adjacency-Aufbau (DBD/LSR/LSU) häufig auch unicast genutzt (Implementationsabhängig)
- Fragmentierung: Möglich, aber wegen MTU-Mismatch DBD-Exchange wichtig (MTU-Feld im DBD).

IP Header (OSPFv3 über IPv6):
- Next Header: 89
- Hop Limit: 1
- Source: Link-Local-Adresse (fe80::/10) des Interfaces
- Destination Multicast:
  - ff02::5 (AllSPFRouters)
  - ff02::6 (AllDRouters)
- Authentisierung: Nicht im OSPF Header; IPsec (ESP/AH) oder Null-Sicherheit.

OSPF Paket-Header (v2 und v3 ähnliche Struktur):
- Version: 2 oder 3
- Type: 1–5
- Packet Length
- Router ID (32 Bit)
- Area ID (32 Bit)
- Checksum
- AuType (nur v2 veraltet) / Authentication (v2 veraltet wenn nicht MD5) / In v3: Instance ID + 0-Felder
- Instance ID (v3): Mehrere OSPFv3 Instanzen auf gleichem Link (z.B. VRF)
- Weitere Felder je nach Packet Type (Hello: Dead Interval, DR/BDR, Neighbor List; DBD: Flags (I,M,MS), MTU; LSR: (Type, LS ID, Adv Router); LSU: Anzahl LSAs; LSAck: LSA Headers).

LSA Aging & Refresh:
- LS Age erhöht jede Sekunde.
- MaxAge = 3600s: LSA wird aus LSDB entfernt nach Flooding.
- Refresh-Zyklus: Alle 30 Minuten (1800s) neu publiziert (neue Sequence Number).
- Premature Aging (Flush): LS Age direkt auf MaxAge setzen (z.B. bei Withdraw).

Sequence Number Handling:
- Startwert für neue LSA: 0x80000001
- Bei Änderung +1
- Erreicht oberes Limit (0x7fffffff): LSA wird mit MaxAge geflutet, danach Neustart Zyklus.

Vergleich OSPFv2 vs OSPFv3 Schlüsselunterschiede in LSAs:
- Adressinformationen getrennt (v3 entkoppelt Topologie von Präfixen).
- OSPFv3 Link-LSA liefert Interface-spezifische Daten (inkl. Link-Local).
- Optionen ausgebaut für neue Features (z.B. Flooding Scope Bits im LS Type).
- Unterstützung multipler Address Families über Erweiterungen (RFC 5838).

NSSA Besonderheiten:
- Type 7 LSAs bleiben innerhalb NSSA.
- ABR übersetzt Type 7 -> Type 5 wenn P-Bit (Propagate) gesetzt.
- Übersetzung nur ein ABR (Priorität per Highest Router ID / Konfig).

Wichtige Praxispunkte:
- MTU-Mismatch: DBD Austausch scheitert -> Adjacency nicht Full.
- LSA Flood Control: Retransmit Interval; Nachbarn Tracking per LS Acks.
- Graceful Restart: Grace-LSAs signalisieren Neustart ohne Routing-Flap.
- Fast Convergence: Incremental SPF (Partial-Recalc) bei Teiländerung (z.B. nur eine LSA Änderung).
- Opaque/Extended LSAs notwendig für moderne Features (Segment Routing, TE, RI).

Kurzer Ablauf Adjacency + LSAs:
1 Hello Austausch (Nachbarerkennung, Parameter-Abgleich: Area ID, Hello/Dead, Options, Auth, MTU).
2 Wahl DR/BDR auf Multiaccess (Highest Priority > Highest Router ID).
3 DBD Austausch (Master/Slave Aushandlung).
4 LSR anfordern fehlender/älterer LSAs.
5 LSU liefert angeforderte LSAs.
6 LSAck bestätigt -> Zustand Full.
7 Laufender Flood bei Änderungen (LS Sequence +1, Verteilen über alle relevanten Nachbarn, außer Eingangsinterface Ausnahmen).

Fehlerbilder Diagnose:
- Stuck in EXSTART/EXCHANGE: MTU oder Flags (I/M/MS) Problem.
- Endlose LSA Retransmissions: Mismatch Checksum/Sequence -> mögliche Korruption oder Filterung.
- Externals fehlen: E-Bit in Options nicht übereinstimmend oder Area als Stub konfiguriert.
- NSSA → Externals nicht weitergeleitet: P-Bit nicht gesetzt oder ABR Übersetzung deaktiviert.

Begrenzung LSAs in Stub-Arten:
- Stub Area: Keine Type 5 (Externals), statt dessen Default Route (Typ 3).
- Totally Stubby (Cisco): Unterdrückt zusätzlich Type 3/4 außer Default.
- NSSA: Erlaubt Type 7 (lokale Externals) anstelle Type 5.
- Totally NSSA: Unterdrückt Summary LSAs (3/4) plus erlaubt Type 7 + Default.

Zusammenhang Routingentscheidungen:
- Präferenzen Reihenfolge (typisch Implementationen):
  1 Intra-Area
  2 Inter-Area
  3 Type 1 External
  4 Type 2 External (mit größtem Restbandbreitenvergleich nur bis ASBR)

Kennzahlen / Metrik:
- Standard Cost: Meist 1 pro FastEthernet/Default; empfohlen Auto-Cost Reference-Bandwidth anpassen (z.B. 100 Gbps) um High-Speed Links differenzieren zu können.
- External Type 2: Gesamtmetrik = Externe Metrik; interne Cost bis ASBR nur bei Gleichheit relevant.
- External Type 1: Gesamtmetrik = interne Cost bis ASBR + externe Metrik.
