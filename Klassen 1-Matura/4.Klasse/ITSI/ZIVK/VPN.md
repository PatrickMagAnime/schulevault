[[4.ITSI]]
___
Das eignet sich gut als strukturierte Obsidian-Notiz für Netzwerktechnik.

# VPN (Virtual Private Network)

## Definition

Ein **VPN (Virtual Private Network)** ermöglicht eine sichere Verbindung über ein unsicheres Netzwerk (z. B. das Internet). Die übertragenen Daten werden verschlüsselt und in einem sogenannten **Tunnel** transportiert.

### Ziele eines VPNs

* Vertraulichkeit (Verschlüsselung)
* Integrität (Schutz vor Manipulation)
* Authentifizierung (Identitätsprüfung)
* Sicherer Fernzugriff auf Netzwerke

### Einsatzgebiete

* Homeoffice-Zugriff auf Firmennetzwerke
* Verbindung zwischen Unternehmensstandorten
* Schutz in öffentlichen WLANs
* Umgehung geografischer Sperren

---

# Arten von VPN

## Remote-Access-VPN

Ein einzelner Benutzer verbindet sich mit einem Unternehmensnetzwerk.

**Beispiel:**
Laptop → Internet → Firmen-VPN-Gateway

### Vorteile

* Flexibles Arbeiten
* Sicherer Fernzugriff

---

## Site-to-Site-VPN

Verbindet zwei komplette Netzwerke miteinander.

**Beispiel:**

Standort Wien ↔ Standort Graz

### Vorteile

* Permanente Verbindung
* Transparente Kommunikation zwischen Standorten

---

## Client-to-Site-VPN

Ein Client baut direkt einen verschlüsselten Tunnel zu einem VPN-Server auf.

### Beispiele

* OpenVPN
* WireGuard
* IPsec Remote Access

---

# VPN-Protokolle

## IPsec (Internet Protocol Security)

Arbeitet auf Schicht 3 (Netzwerkschicht).

### Eigenschaften

* Hohe Sicherheit
* Weit verbreitet
* Site-to-Site und Remote Access

### Bestandteile

* AH (Authentication Header)
* ESP (Encapsulating Security Payload)
* IKE (Internet Key Exchange)

---

## OpenVPN

### Eigenschaften

* Open Source
* Nutzt SSL/TLS
* Läuft meist über UDP oder TCP

### Vorteile

* Sehr flexibel
* Plattformunabhängig

---

## WireGuard

### Eigenschaften

* Modernes VPN-Protokoll
* Schlanker Code
* Hohe Geschwindigkeit

### Vorteile

* Einfache Konfiguration
* Sehr gute Performance

---

# Übertragungsarten

## Unicast

Ein Sender → ein Empfänger

**Beispiel:**
PC → Webserver

---

## Broadcast

Ein Sender → alle Geräte im Netzwerk

**Beispiel:**
ARP-Anfrage

Adresse:

```
255.255.255.255
```

---

## Multicast

Ein Sender → ausgewählte Empfängergruppe

**Beispiel:**
Videostreaming

---

## Anycast

Ein Sender → der nächstgelegene Empfänger

**Beispiel:**
DNS-Server von Cloud-Anbietern

---

# NAT (Network Address Translation)

## Definition

NAT übersetzt private IP-Adressen in öffentliche IP-Adressen.

Dadurch können viele Geräte eine einzige öffentliche IP-Adresse nutzen.

### Beispiel

Privates Netzwerk:

```
192.168.1.10
192.168.1.11
192.168.1.12
```

Öffentliche Adresse:

```
80.120.10.5
```

Der Router übersetzt die privaten Adressen in die öffentliche Adresse.

---

## Vorteile von NAT

* Spart IPv4-Adressen
* Versteckt interne Netzwerkstruktur
* Erhöht die Sicherheit

---

## NAT-Arten

### Static NAT

Feste 1:1-Zuordnung.

Beispiel:

```
192.168.1.10 ↔ 80.120.10.5
```

---

### Dynamic NAT

Pool von öffentlichen IP-Adressen.

Beispiel:

```
192.168.1.10 → 80.120.10.5
192.168.1.11 → 80.120.10.6
```

---

### PAT (Port Address Translation)

Auch **NAT Overload** genannt.

Mehrere interne Geräte teilen sich eine einzige öffentliche IP-Adresse.

Die Unterscheidung erfolgt über Portnummern.

---

# PAT (Port Address Translation)

## Funktionsweise

Intern:

```
192.168.1.10:5000
192.168.1.11:5001
192.168.1.12:5002
```

Extern:

```
80.120.10.5:10000
80.120.10.5:10001
80.120.10.5:10002
```

Der Router führt eine Übersetzungstabelle.

| Intern            | Extern            |
| ----------------- | ----------------- |
| 192.168.1.10:5000 | 80.120.10.5:10000 |
| 192.168.1.11:5001 | 80.120.10.5:10001 |
| 192.168.1.12:5002 | 80.120.10.5:10002 |

---

## Vorteile von PAT

* Nur eine öffentliche IP-Adresse nötig
* Effiziente Nutzung von IPv4-Adressen
* Standard in Heimnetzwerken

---

# Port Forwarding

## Definition

Port Forwarding leitet eingehende Verbindungen von einer öffentlichen Adresse an ein internes Gerät weiter.

### Beispiel

Öffentlich:

```
80.120.10.5:80
```

Weiterleitung an:

```
192.168.1.100:80
```

Anwendungsfälle:

* Webserver
* NAS-Systeme
* Spieleserver

---

# Zusammenspiel von VPN und NAT

## Problem

VPN-Protokolle funktionieren nicht immer problemlos mit NAT.

### Lösung

**NAT Traversal (NAT-T)**

Dabei werden IPsec-Pakete in UDP-Pakete gekapselt.

Standardport:

```
UDP 4500
```

Dadurch können VPN-Verbindungen auch hinter Routern mit NAT aufgebaut werden.

---

