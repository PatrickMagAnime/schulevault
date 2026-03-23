[[4.ITSI]]
___
## 1. Definition: Secure Multi-party Computation

Secure Multi-party Computation (MPC) ermöglicht es mehreren Parteien P1​,P2​,…,Pn​, gemeinsam eine Funktion f(x1​,x2​,…,xn​) über ihren privaten Eingabewerten xi​ zu berechnen, ohne dass eine Partei die Eingaben der anderen erfährt.

**Kernanforderungen:**

- **Privacy:** Niemand erfährt mehr als das Endergebnis.
- **Correctness:** Das berechnete Ergebnis ist korrekt, selbst wenn Teilnehmer schummeln.
---
## 2. ITSI: Informationstheoretische Sicherheit

Im Kontext von MPC bezieht sich **ITSI** auf Protokolle, deren Sicherheit nicht auf der angenommenen Rechenkomplexität (wie z. B. der Schwierigkeit, große Zahlen zu faktorisieren) basiert, sondern auf **Informationstheorie**.

### Merkmale von ITSI-Protokollen:

- **Unbedingte Sicherheit:** Ein Angreifer kann das Protokoll selbst mit unendlicher Rechenkapazität nicht brechen.
- **Schwellenwert-Modelle:** Sicherheit ist meist nur garantiert, wenn eine bestimmte Anzahl an Parteien ehrlich bleibt (z. B. eine ehrliche Mehrheit).
- **Kommunikationsaufwand:** ITSI-Protokolle erfordern oft mehr Interaktion (Rundenkomplexität) als rechnerisch sichere Protokolle.
---
## 3. Schlüsselkonzepte in der ITSI-basierten MPC

### Secret Sharing (Geheimnisteilung)

Die Grundlage für ITSI ist meist das **Verlustfreie Teilen von Geheimnissen**. Der bekannteste Algorithmus ist **Shamir's Secret Sharing**.

- Ein Geheimnis s wird in n Anteile (Shares) zerlegt.
- Zum Rekonstruieren werden mindestens t+1 Anteile benötigt.
- Mit weniger als t Anteilen ist es mathematisch unmöglich, Informationen über s zu erhalten.
### Arithmetische Schaltkreise

Berechnungen werden oft als Schaltkreise über endlichen Körpern dargestellt:

1. **Addition:** Kann oft lokal von den Parteien durch Addition ihrer Shares durchgeführt werden (keine Kommunikation nötig).
2. **Multiplikation:** Erfordert Kommunikation zwischen den Parteien (z. B. das BGW-Protokoll oder die Nutzung von Beaver Triples).
    

---

## 4. Vergleich: ITSI vs. Computational Security

|Merkmal|ITSI (Informationstheoretisch)|Rechnerische Sicherheit|
|---|---|---|
|**Rechenpower des Angreifers**|Darf unendlich sein|Muss begrenzt sein (probabilistische Polynomialzeit)|
|**Annahmen**|Keine (rein mathematisch)|Mathematische Probleme (z.B. Diskreter Logarithmus)|
|**Effizienz**|Höherer Kommunikationsbedarf|Oft effizienter in der Kommunikation|
|**Teilnehmer**|Benötigt meist ehrliche Mehrheit|Funktioniert oft auch bei n−1 korrupten Parteien|

In Google Sheets exportieren

---

## 5. Bekannte Protokolle

- **BGW-Protokoll:** (Ben-Or, Goldwasser, Wigderson) – Ermöglicht MPC mit ITSI, solange weniger als n/3 Parteien böswillig handeln.
    
- **CCD-Protokoll:** (Chaum, Crépeau, Damgård) – Ähnlich wie BGW, basierend auf fehlerkorrigierenden Codes.
    

---

> [!INFO] Notiz für die Prüfung ITSI in MPC ist besonders relevant für Langzeitsicherheit, da sie auch gegen zukünftige Technologien wie Quantencomputer resistent ist (Post-Quantum-Sicherheit), da sie nicht auf harten Komplexitätsproblemen fußt.