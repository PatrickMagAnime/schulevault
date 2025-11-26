[[4.NWT]]
___
# Teil 1: Netzwerksicherheit (Konzepte & Bedrohungen)

_Basierend auf Modul 3_

Dies ist die theoretische Grundlage. Du musst verstehen, **was** du schützt und **wovor**.

### 1. Das CIA-Dreieck (Sicherheitsziele)

Jede Sicherheitsmaßnahme dient einem dieser drei Ziele:

- **Vertraulichkeit (Confidentiality):** Nur autorisierte Personen dürfen Daten lesen (z.B. durch Verschlüsselung).
    
- **Integrität (Integrity):** Daten dürfen nicht unerkannt verändert werden (z.B. durch Hashing).
    
- **Verfügbarkeit (Availability):** Systeme müssen erreichbar sein (z.B. durch Redundanz, Schutz vor DoS).
    

### 2. Bedrohungsakteure (Wer greift an?)

- **White Hat:** Ethische Hacker, testen Sicherheit mit Erlaubnis.
    
- **Black Hat:** Kriminelle, handeln böswillig.
    
- **Gray Hat:** Grauzone, melden Lücken oft erst nach dem Hack.
    
- **Script Kiddies:** Unerfahrene Angreifer, nutzen fertige Tools.
    
- **State-Sponsored:** Regierungs-Hacker, hochkompetent (Spionage, Sabotage).
    

### 3. Malware-Typen

- **Virus:** Braucht eine Wirtsdatei und menschliche Interaktion (Klick), um sich zu verbreiten.
    
- **Wurm:** Verbreitet sich selbstständig über das Netzwerk (nutzt Schwachstellen).
    
- **Trojaner:** Tarnt sich als nützliche Software, enthält aber Schadcode (z.B. Backdoor).
    
- **Ransomware:** Verschlüsselt Daten und fordert Lösegeld.
    
- **Rootkit:** Versteckt sich tief im System (Admin-Ebene), schwer zu entdecken.
    

### 4. Netzwerk-Angriffe

- **Reconnaissance (Aufklärung):** Scannen von Netzwerken (Ping-Sweeps, Port-Scans), um Ziele zu finden.
    
- **Access Attacks:** Passwort-Knacken (Brute Force), Spoofing (Identität vortäuschen).
    
- **DoS / DDoS (Denial of Service):** Überflutung von Systemen, um sie lahmzulegen.
    
- **Man-in-the-Middle (MitM):** Angreifer schaltet sich unbemerkt in die Kommunikation.
    

### 5. Spezifische Angriffsvektoren

- **Social Engineering:** Manipulation von Menschen (z.B. **Phishing** per Mail, **Tailgating** = jemandem durch die Tür folgen).
    
- **ARP Spoofing:** Angreifer sendet gefälschte ARP-Antworten, um Traffic über sich selbst umzuleiten (ermöglicht MitM im LAN).
    
- **DHCP Spoofing:** Ein falscher DHCP-Server verteilt falsche Gateways oder DNS-Server an Clients.
    

### 6. Kryptografie (Verschlüsselung)

- **Integrität (Hashing):** Ein "Fingerabdruck" von Daten. Ändert sich ein Bit, ändert sich der Hash komplett. (MD5, SHA).
    
- **Symmetrische Verschlüsselung:** **Ein** Schlüssel für Ver- und Entschlüsselung. Schnell, gut für große Datenmengen (AES, DES).
    
- **Asymmetrische Verschlüsselung:** Schlüsselpaar (**Public Key** zum Verschlüsseln, **Private Key** zum Entschlüsseln). Sicherer Schlüsselaustausch, aber langsamer (RSA).
    

---

# Teil 2: Access Control Lists (ACLs)

_Basierend auf Modul 4 und 5_

ACLs sind das wichtigste Werkzeug auf Routern, um Traffic zu filtern (Firewall-Funktion).

### 1. Grundprinzipien von ACLs

- **Sequenzielle Abarbeitung:** Der Router prüft Regeln von oben nach unten.
    
- **First Match Wins:** Sobald eine Regel zutrifft (permit oder deny), wird ausgeführt. Der Rest der Liste wird ignoriert.
    
- **Implicit Deny:** Am Ende jeder ACL steht eine unsichtbare "Veriete Alles"-Regel. Wenn kein `permit` zutrifft, wird das Paket verworfen.
    
- **Richtung:** Muss an ein Interface gebunden werden (`in` oder `out`).
    

### 2. Die Wildcard Maske

ACLs nutzen keine Subnetzmasken, sondern Wildcard-Masken (umgekehrt).

- **0** = Bit muss übereinstimmen.
    
- **1** (bzw. 255) = Bit ist egal.
    
- _Berechnung:_ 255.255.255.255 MINUS Subnetzmaske = Wildcard Maske.
    
    - Host 192.168.1.1 -> Maske `0.0.0.0` (Schlüsselwort `host`)
        
    - Netz 192.168.1.0/24 -> Maske `0.0.0.255`
        
    - Alles -> Maske `255.255.255.255` (Schlüsselwort `any`)
        

### 3. Standard vs. Extended ACLs (Sehr wichtig!)

|**Merkmal**|**Standard ACL**|**Extended ACL**|
|---|---|---|
|**Nummer**|1 - 99|100 - 199|
|**Filtert nach**|Nur **Quell-IP**|Quelle, Ziel, Protokoll (TCP/UDP), Port|
|**Platzierung**|So nah wie möglich am **Ziel**|So nah wie möglich an der **Quelle**|
|**Konfiguration**|`access-list 10 permit 192.168.1.1`|`access-list 100 permit tcp 192.168.1.0...`|

### 4. Konfiguration & Befehle

**Standard ACL (Nummeriert):**

```bash
Router(config)# access-list 10 permit 192.168.10.0 0.0.0.255
Router(config)# interface g0/0
Router(config-if)# ip access-group 10 out
```

Extended ACL (Named - empfohlen):

Benannte ACLs sind übersichtlicher und leichter zu editieren.

```bash
Router(config)# ip access-list extended WEB-FILTER
Router(config-ext-nacl)# permit tcp 192.168.10.0 0.0.0.255 any eq 80
Router(config-ext-nacl)# permit tcp 192.168.10.0 0.0.0.255 any eq 443
Router(config-ext-nacl)# deny ip any any  (Optional, da implizit vorhanden)
```

**VTY (SSH/Telnet) absichern:**


```bash
Router(config)# line vty 0 4
Router(config-line)# access-class 10 in
```

_(Dies erlaubt nur IPs aus ACL 10 den Fernzugriff)._

---

# Teil 3: OSPFv2 (Routing Protokoll)

_Basierend auf Modul 1 und 2_

OSPF ist ein Link-State-Protokoll. Es kennt die komplette Topologie des Netzwerks (wie eine Landkarte), nicht nur Richtungen.

### 1. OSPF Grundbegriffe

- **Link-State:** Router tauschen Informationen über ihre Links (Interfaces, Bandbreite, Kosten) aus.
    
- **Dijkstra Algorithmus (SPF):** Berechnet den kürzesten Pfad zum Ziel.
    
- **Metric:** Die Metrik ist **Cost**. (Formel: Referenzbandbreite / Interface-Bandbreite). Höhere Bandbreite = niedrigere Kosten = besserer Weg.
    
- **Area 0:** Die Backbone-Area. Alle anderen Areas müssen an Area 0 angeschlossen sein (in Single-Area OSPF sind alle Router in Area 0).
    

### 2. OSPF Paket-Typen

1. **Hello:** Findet Nachbarn, hält Verbindung (Keepalive).
    
2. **DBD (Database Description):** Inhaltsverzeichnis der Datenbank.
    
3. **LSR (Link-State Request):** "Ich brauche Infos zu Route X".
    
4. **LSU (Link-State Update):** "Hier sind die Infos zu Route X" (enthält LSAs).
    
5. **LSAck:** Empfangsbestätigung.
    

### 3. Nachbarschafts-Status (States)

Ein Router durchläuft diese Phasen, um "Full Adjacency" zu erreichen:

1. **Down:** Nichts empfangen.
    
2. **Init:** Hello empfangen.
    
3. **2-Way:** Bi-direktionale Kommunikation (wichtig für DR-Wahl).
    
4. **ExStart:** Master/Slave-Aushandlung für Datenaustausch.
    
5. **Exchange:** Austausch von DBDs.
    
6. **Loading:** Herunterladen fehlender Routen (LSR/LSU).
    
7. **Full:** Datenbanken sind synchronisiert.
    

### 4. DR und BDR (Designated Router)

In Multiaccess-Netzwerken (z.B. Ethernet Switch mit 5 Routern) würde jeder mit jedem reden ("Full Mesh" Chaos).

- **Lösung:** Ein Chef (DR) und ein Vize (BDR) werden gewählt. Alle anderen (DROTHER) reden nur mit DR/BDR (Multicast 224.0.0.6). Der DR verteilt Infos an alle (224.0.0.5).
    
- **Wahl-Kriterien:**
    
    1. Höchste **Interface Priority** (Standard ist 1). Prio 0 nimmt nicht teil.
        
    2. Höchste **Router ID**.
        

### 5. OSPF Konfiguration (Schritt-für-Schritt)

**Schritt 1: Prozess starten & Router ID**

```bash
Router(config)# router ospf 10
Router(config-router)# router-id 1.1.1.1
```

_(Die Router ID ist wichtig für die DR-Wahl. Format wie IPv4, muss einzigartig sein)._

**Schritt 2: Netzwerke bekanntgeben**

```bash
Router(config-router)# network 192.168.10.0 0.0.0.255 area 0
```

(Nutzt auch Wildcard Masken!)

Alternative direkt am Interface: ip ospf 10 area 0

Schritt 3: Passive Interfaces

Verhindert, dass Hello-Pakete ins LAN gesendet werden (Sicherheit & Performance), aber das Netz wird trotzdem geworben.

```bash
Router(config-router)# passive-interface g0/0
```

Schritt 4: Kosten anpassen (Wichtig für Gigabit!)

Standardmäßig unterscheidet OSPF nicht zwischen 100Mbit und 1Gbit (beide Cost 1).

```bash
Router(config-router)# auto-cost reference-bandwidth 1000
```

_(Muss auf allen Routern gleich sein!)_

Schritt 5: Default Route verteilen

Damit alle Router wissen, wie sie ins Internet kommen (wenn R1 der Gateway ist):

```bash
R1(config)# ip route 0.0.0.0 0.0.0.0 serial0/0/1
R1(config)# router ospf 10
R1(config-router)# default-information originate
```

---

### Zusammenfassung & Lern-Strategie

1. **Lerne die Akronyme:** CIA, DoS, DR/BDR, LSA, ACL, Wildcard Mask.
    
2. **Verstehe Wildcard Masken:** Übe das Umrechnen von /24, /30, /28 in Wildcard. Ohne das kannst du keine ACLs oder OSPF konfigurieren.
    
3. **Unterscheide Standard vs. Extended ACL:** "Standard nah ans Ziel, Extended nah an die Quelle" ist die goldene Regel.
    
4. **OSPF Wahl:** Wisse, wer DR wird (Höchste Prio -> Höchste Router ID).
    

Gerne! Das sind zwei der wichtigsten Skills für das Networking (CCNA/ENSA). Ich erkläre dir beides Schritt für Schritt, so einfach wie möglich.

---

### Teil 1: Die Wildcard Mask berechnen

Die Wildcard Mask (auch "Inverted Mask" genannt) ist im Grunde das **Gegenteil der Subnetzmaske**. Sie sagt dem Router:

- **0:** Dieses Bit muss genau übereinstimmen.
    
- **1 (bzw. 255):** Dieses Bit ist egal (Wildcard)1.
    

#### Die "Zauberformel"

Der einfachste Weg, eine Wildcard Mask zu berechnen, ist immer derselbe:

$$255.255.255.255 - \text{Subnetzmaske} = \text{Wildcard Mask}$$

Das funktioniert immer, egal wie krumm die Subnetzmaske ist2222.

#### Beispiel 1: Standard /24 Netz

Du hast die Subnetzmaske **255.255.255.0** (z.B. für 192.168.1.0/24).

Plaintext

```
  255.255.255.255
- 255.255.255.  0
-----------------
    0.  0.  0.255  <-- Das ist deine Wildcard Mask
```

_Bedeutung:_ Die ersten drei Teile (192.168.1) müssen stimmen, der letzte Teil (.0 bis .255) ist egal. Das passt genau auf ein ganzes /24 Netz3.

#### Beispiel 2: Ein Subnetting-Beispiel (/26)

Du hast die Subnetzmaske **255.255.255.192** (ein /26 Netz).

Plaintext

```
  255.255.255.255
- 255.255.255.192
-----------------
    0.  0.  0. 63  <-- Deine Wildcard Mask
```

_Tipp:_ Du musst eigentlich immer nur das letzte Oktett (den letzten Zahlenblock) rechnen, der nicht 0 oder 255 ist. $255 - 192 = 63$.

#### Die wichtigsten Keywords

In Cisco ACLs gibt es zwei Abkürzungen für spezielle Wildcards4:

- **host:** Ersetzt die Maske `0.0.0.0` (Genau EINE IP muss stimmen)5.
    
- **any:** Ersetzt die Maske `255.255.255.255` (Jede IP ist erlaubt, alles egal)6.
    

---

### Teil 2 (Bonus): Netzwerkrechnung (IP, Netz-ID, Broadcast, Hostbereich)

Um aus einer IP-Adresse und einer Subnetzmaske den Hostanteil, die Netz-ID und den Broadcast zu berechnen, nutzen wir die **Blockgröße (Magic Number)**.

**Szenario:**

- **IP-Adresse:** 192.168.10.66
    
- **Subnetzmaske:** 255.255.255.192 (das ist ein /26 Netz)
    

#### Schritt 1: Die Blockgröße finden

Schau dir die Subnetzmaske an. Wo passiert die "Action" (wo ist sie nicht 0 oder 255)? Im 4. Oktett (.192).

Die Formel für die Blockgröße ist immer:

$$256 - \text{relevantes Subnetz-Oktett} = \text{Blockgröße}$$

Rechnung: $256 - 192 = \mathbf{64}$.

Deine Netze springen also immer in 64er Schritten: 0, 64, 128, 192.

#### Schritt 2: Die Netzadresse (Network Address) finden

In welchen dieser 64er Blöcke passt deine IP **.66** rein?

- Block 1: 0 bis 63
    
- Block 2: 64 bis 127 <-- Hier liegt die 66 drin!
    

Die Netzadresse ist also der Start dieses Blocks.

Netzadresse: 192.168.10.64

#### Schritt 3: Die Broadcast-Adresse finden

Die Broadcast-Adresse ist immer die allerletzte Zahl im Block, also genau eins vor dem nächsten Netz.

Das nächste Netz würde bei .128 beginnen (64 + 64).

$128 - 1 = 127$.

**Broadcast-Adresse:** **192.168.10.127**

#### Schritt 4: Der nutzbare Host-Bereich

Das sind alle IPs _zwischen_ Netzadresse und Broadcast.

- **Erster Host:** Netzadresse + 1 -> **192.168.10.65**
    
- **Letzter Host:** Broadcast - 1 -> **192.168.10.126**
    

---

### Zusammenfassung für deinen Spickzettel

| **Wert**         | **Berechnung**                          | **Ergebnis im Bsp. (.66 /26)** |
| ---------------- | --------------------------------------- | ------------------------------ |
| **Wildcard**     | $255.255.255.255 - \text{Subnetzmaske}$ | $0.0.0.63$                     |
| **Blockgröße**   | $256 - \text{letztes Masken-Oktett}$    | $64$                           |
| **Netz-ID**      | Start des Blocks, wo die IP reinpasst   | $192.168.10.64$                |
| **Erster Host**  | $\text{Netz-ID} + 1$                    | $192.168.10.65$                |
| **Letzter Host** | $\text{Broadcast} - 1$                  | $192.168.10.126$               |
| **Broadcast**    | $\text{Nächstes Netz} - 1$              | $192.168.10.127$               |