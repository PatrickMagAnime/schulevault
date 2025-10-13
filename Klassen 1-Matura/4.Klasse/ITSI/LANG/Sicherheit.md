[[4.ITSI]]
___
- Funktionsicherheit
	(Safety)
- Informationssicherheit
	IT Sicherheit (IT Security)

#### Schutzziele der Informationssicherheit

##### Was bedeutet Informationssicherheit?
Informationssicherheit hat das Ziel, Informationen jeglicher Art und Herkunft zu schützen. Dies umfasst:  
- Informationen in den Köpfen der Beteiligten
- Informationen in Papierform  
- Elektronisch verarbeitete Informationen in Systemen und Netzwerken  

Informationssicherheit verfolgt einen breiteren Ansatz als **IT-Sicherheit**, die sich vorrangig auf elektronisch gespeicherte Informationen und IT-Systeme bezieht.  

Ziel: Risiken auf ein akzeptables Niveau minimieren.  
Zusatznutzen: Schutz personenbezogener Daten → Synergie mit **Datenschutz**.  

---
##### Schutzziele der Informationssicherheit
Die drei primären Schutzziele sind:  
1. **Vertraulichkeit (Confidentiality)**  
2. **Integrität (Integrity)**  
3. **Verfügbarkeit (Availability)**  

###### 1. Vertraulichkeit (Confidentiality)
Schutz vor umbefugten zugriff.

„Vertraulichkeit ist der Schutz vor unbefugter Preisgabe von Informationen. Vertrauliche Daten dürfen ausschließlich Befugten zugänglich sein.“

- Beispiele: Kundendaten, Patente, Forschungsdaten  
- Verstöße: Whiteboards nach Meetings nicht gereinigt, Kundendaten offen zugänglich  
- Maßnahme: klare Zugriffsrechte, (Authentizierung), Verschlüsselung, Zugriffkontrolle, Kontrolle von Informationsflüssen, Sicherheits-klassen

###### 2. Integrität (Integrity)
Schutz vor unbefugter und unbemerkter manipulation.

„Integrität bezeichnet die Sicherstellung der Korrektheit (Unversehrtheit) von Daten und der korrekten Funktionsweise von Systemen.“

- Beispiele: Manipulation von Messdaten in Medizingeräten → Patientengefährdung  
- Gefahr: unautorisiertes Ändern, Löschen oder Einfügen von Daten  
- Maßnahme: Änderungsprotokolle, (Check/Prüfsummen) Hash-Verfahren, Manipulationsschutz, Zugriffkontrolle, Digitale Signatur, 

###### 3. Verfügbarkeit (Availability)
Schutz vor ausfall / unautorisierter Berechtigung von Daten / Diensten
„Verfügbarkeit liegt vor, wenn Dienste, Funktionen, IT-Systeme oder Informationen von den Anwendern wie vorgesehen genutzt werden können.“

- Beispiele:  
  - Gehaltsabrechnungsdaten → monatlich verfügbar  
  - Onlinehändler-Plattform → nahezu permanent verfügbar  
- Maßnahme: Risikoanalyse, Backups (Redundanz), DDOS-Schutz (Firewall), Monitoring (Systemnutzung und resourcen Verbrauch überwachen), Protokollieren (Accounting).

---
##### Erweiterte Schutzziele
Neben den drei primären Zielen gibt es zusätzliche, je nach Kontext relevante Schutzziele:

- **Authentizität (Authenticity)**  
  Gewährleistung, dass ein Kommunikationspartner oder eine Information echt ist.  

- **Nichtabstreitbarkeit (Non-repudiation)**  
  Versand und Empfang von Informationen können nicht abgestritten werden.  
  - Herkunftsnachweis  
  - Empfangsnachweis  

- **Verbindlichkeit (Accountability / Bindingness)**  
  Kombination aus Authentizität und Nichtabstreitbarkeit.  
  Beispiel: Identitätsmanagement in Organisationen.  

- **Zuverlässigkeit (Reliability)**  
  Technische Funktionsfähigkeit von IT-Systemen, zusätzlich zur Verfügbarkeit wichtig.  

- **Zurechenbarkeit (Attribution)**  
  Stellt sicher, dass Aktionen und Daten eindeutig einer bestimmten Quelle zugeordnet werden können.  

- **Privatsphäre (Privacy)**  
  Schützt persönliche Daten und die Privatsphäre des Einzelnen vor unbefugtem Zugriff und Missbrauch.  