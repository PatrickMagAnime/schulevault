[[4.ITSI]]
___
## 1. Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz (Art. 5 Abs. 1 lit. a)
**Beschreibung**
- Rechtmäßigkeit: Gültige Rechtsgrundlage (Einwilligung, Vertrag, rechtliche Pflicht, lebenswichtige Interessen, öffentliches Interesse, berechtigtes Interesse).
- Fairness: Erwartung der betroffenen Person wahren.
- Transparenz: Klare, verständliche, zugängliche Informationen (Art. 12–14).
**Beispiele**
- Newsletter: Double-Opt-In + dokumentierte Einwilligung + Widerrufshinweis.
- Bewerberdaten: Nutzung nur für Auswahlverfahren; Hinweis auf Speicherdauer.
- Cookie-Banner: Granulare Auswahl statt „Alles oder nichts“.
**Typische Nachweise**
- Verzeichnis von Verarbeitungstätigkeiten (VVT).
- Consent-Logs (Zeitstempel, Version der Hinweise).
- Versionierte Datenschutzerklärung.
**Häufige Fehler**
- Einwilligungen in AGB versteckt.
- Juristisch überladene Datenschutzhinweise ohne Klarheit.

## 2. Zweckbindung (Art. 5 Abs. 1 lit. b)
**Beschreibung**
- Daten nur für eindeutige, festgelegte und legitime Zwecke.
- Keine Weiterverarbeitung zu inkompatiblen Zwecken (Art. 6 Abs. 4 prüfen).
**Beispiele**
- Rechnungs-E-Mail nicht für Werbung ohne zusätzliche Einwilligung.
- Bewerbungsunterlagen → Talentpool nur mit separater Zustimmung.
- App-Nutzungsdaten nicht heimlich für Werbeprofiling.
**Maßnahmen**
- Klare Zweckdefinition je Verarbeitung (SMART).
- Technische/logische Trennung von Datenpools.
**Häufige Fehler**
- Datensammlung „auf Vorrat“.
- Nachträgliche Zweckausweitung ohne Prüfung.

## 3. Datenminimierung (Art. 5 Abs. 1 lit. c)
**Beschreibung**
- Nur erforderliche Daten (Need-to-have statt Nice-to-have).
**Beispiele**
- Registrierung: Nur E-Mail + Passwort.
- Gekürzte IP-Adressen für Webstatistik.
- Keine Abfrage Geburtsdatum ohne Zweck.
**Maßnahmen**
- Formular-Feldinventur (Pflicht / Optional / Entfernen).
- Pseudonymisierung für Analysen.
**Häufige Fehler**
- Vollständige Adressdaten bei rein digitalen Leistungen.
- Speicherung von Rohdaten statt Aggregaten.

## 4. Richtigkeit (Art. 5 Abs. 1 lit. d)
**Beschreibung**
- Korrekte und aktuelle Daten sicherstellen.
- Falsche Daten berichtigen oder löschen.
**Beispiele**
- Selbstservice-Portal für Stammdaten.
- Rückläufer bei E-Mails → Kennzeichnung zur Prüfung.
- Regelmäßiger Registerabgleich (B2B).
**Maßnahmen**
- Validierungen (Format, Prüfsummen).
- Prozess für Korrekturanfragen (Art. 16).
- Zeitstempel letzte Verifikation.
**Häufige Fehler**
- Keine Kennzeichnung veralteter Datensätze.
- Fehlender Workflow für Berichtigungen.

## 5. Speicherbegrenzung (Art. 5 Abs. 1 lit. e)
**Beschreibung**
- Löschung oder Anonymisierung nach Zweckerreichung.
- Löschfristen definieren und technisch erzwingen.
**Beispiele**
- Bewerberakten: Löschung 6 Monate nach Absage (AGG).
- Inaktive Accounts: Erinnern + Löschen nach definiertem Zeitraum.
- Server-Logs: Rotation nach z. B. 30 Tagen.
**Maßnahmen**
- Löschmatrix (Kategorie → Frist → Rechtsgrund → Methode).
- Automatisierte Löschjobs / Lifecycle-Policies.
- Trennung Archiv (Pflichten) vs. Produktivdaten.
**Häufige Fehler**
- Nur Soft-Delete ohne physische Entfernung.
- Backups nie rotiert/gelöscht.
- Unbegründete Verlängerung ohne Dokumentation.

## 6. Integrität und Vertraulichkeit (Art. 5 Abs. 1 lit. f)
**Beschreibung**
- Schutz vor unbefugter / unrechtmäßiger Verarbeitung, Verlust, Zerstörung, Schaden.
**Beispiele**
- Verschlüsselung at rest (z. B. AES-256) & in transit (TLS 1.2+).
- Rollen- & Rechtekonzept (Least Privilege).
- MFA für Administratoren.
- Passwort-Hashing (Argon2id oder bcrypt).
**Maßnahmen**
- TOM-Dokumentation (Art. 32).
- Audit-Logs manipulationsgeschützt.
- Notfall- & Wiederanlaufkonzept (RTO/RPO).
**Häufige Fehler**
- Gemeinsame Admin-Logins.
- Unverschlüsselte Backups.
- Logs ohne Integritätsschutz.

## 7. Rechenschaftspflicht (Accountability) (Art. 5 Abs. 2)
**Beschreibung**
- Nachweis der Einhaltung aller Grundsätze.
**Beispiele**
- Vollständiges VVT.
- DSFA bei hohem Risiko (z. B. Scoring, umfangreiches Tracking).
- Schulungsnachweise (jährlich).
- Dokumentierte Security Incidents + 72h-Bewertung.
**Maßnahmen**
- Governance (DSB, Rollenmatrix).
- Interne Audits / Gap-Analysen.
- Versionierung Policies & Verfahren.
**Häufige Fehler**
- Dokumentation erst „auf Zuruf“.
- Fehlende Einwilligungs- oder Risiko-Nachweise.

---

## Übersicht Kurzform (Merksatz)
R(echtmäßigkeit/Fairness/Transparenz) – Z(weckbindung) – D(atenminimierung) – R(ichtigkeit) – S(peicherbegrenzung) – I(ntegrität/Vertraulichkeit) – A(ccountability)  
Eselsbrücke: RZDRSIA (eigene Merkhilfe formulieren)

---

## Praktische Mini-Use-Cases
### SaaS-Analytics
- Minimierung: IP-Kürzung.
- Zweckbindung: Nur Produktverbesserung.
- Rechtsgrund: Berechtigtes Interesse (Interessenabwägung) oder Einwilligung bei erweitertem Tracking.

### HR-Onboarding
- Speicherbegrenzung: Fristen für Probezeitdokumente.
- Integrität: Verschlüsseltes Personalverwaltungssystem.
- Rechenschaft: DSFA bei biometrischer Zeiterfassung.

### E-Commerce
- Transparenz: Modulbasierte Datenschutzhinweise (Zahlung, Versand, Tracking).
- Löschung: Gastkonten nach 12 Monaten Inaktivität.
- Sicherheit: Tokenisierte Zahlungsdaten (externer Provider).

---

## Checkliste Rechenschaft / Umsetzung
- [ ] Verzeichnis von Verarbeitungstätigkeiten aktuell
- [ ] Rechtsgrundlagen je Zweck dokumentiert (Art. 6 Mapping)
- [ ] Löschkonzept + technische Umsetzung (Logs, Jobs, Policies)
- [ ] TOM-Dokument + Sicherheitsarchitektur
- [ ] Einwilligungs-Management (Widerrufspfad, Logs)
- [ ] Schulungs- & Awareness-Nachweise
- [ ] DSFA-Register + Risikoabschätzungen
- [ ] Incident-/Breach-Prozess (Testlauf durchgeführt)
- [ ] Verfahren für Betroffenenrechte (Tracking Fristen)

---

## Typische Dokumente (Nachweise)
- Interne Datenschutz-Policy
- Informationspflichten Art. 13/14 (Versionierung)
- Auftragsverarbeitungsverträge (AVV)
- Interessenabwägungen / Risikoanalysen
- Change-Logs (Systeme, Prozesse)
- Backup- & Restore-Konzept
- Berechtigungskonzept / Rezertifizierungsprotokolle

---

## Fehler vs. Best Practice (Kurzvergleich)
- Übererhebung → Vorab-Feldanalyse & Data Protection by Design.
- Chaotische Löschung → Automatisierte Löschjobs + Bericht.
- Fehlender Nachweis → Strukturiertes Compliance-Verzeichnis (/Compliance/DSGVO/YYYY-MM).
- Produktiv/Test vermischt → Anonymisierte Testdatenpipelines.

---

## Implementierungs-Roadmap (Empfohlene Reihenfolge)
1. Dateninventur & System-Mapping
2. Zwecke & Rechtsgrundlagen validieren
3. Lösch- und Minimierungskonzept etablieren
4. Sicherheitsmaßnahmen härten & dokumentieren (TOM)
5. Betroffenenrechte-End-to-End-Test (Probeauskunft)
6. DSFA-Prüfung für risikoreiche Prozesse
7. Schulung & Awareness-Rollout
8. Kontinuierliche Verbesserung (PDCA-Zyklus)

---

## Schnell-Assessment Fragen
- Kann ich für jede Datenkategorie den Zweck in einem Satz nennen?
- Liegen Daten länger vor als begründet?
- Könnte ich morgen eine vollständige Art.-15-Auskunft liefern?
- Kenne ich Inhalt & Retention meiner Backups?
- Sind Rollen & Rechte rezertifiziert (Wann zuletzt)?
- Habe ich Nachweise für jede aktive Einwilligung?
- Sind Löschläufe protokolliert und überprüfbar?

---

## Kompakte Zusammenfassung je Grundsatz (Tabelle)

| Grundsatz | Ziel | Beispiel | Häufiger Fehler | Wichtiger Nachweis |
|-----------|------|----------|-----------------|--------------------|
| Rechtmäßigkeit/Fairness/Transparenz | Rechtsgrundlage & Klarheit | DOI-Newsletter | Versteckte Einwilligung | Consent-Logs, Datenschutzhinweise |
| Zweckbindung | Kein Zweck-Drift | Rechnungs-E-Mail ≠ Werbung | Nachträgliche Erweiterung | Zweckdefinitionen im VVT |
| Datenminimierung | Nur Erforderliches | Gekürzte IP | „Falls später nützlich“ | Feldinventur-Protokoll |
| Richtigkeit | Aktualität | Self-Service Profil | Veraltete Datensätze | Korrekturprozess, Zeitstempel |
| Speicherbegrenzung | Fristgerechte Löschung | Löschroutine Logs | Nur Soft-Delete | Löschkonzept, Löschprotokolle |
| Integrität/Vertraulichkeit | Schutz & Sicherheit | Verschlüsselung + MFA | Geteilte Admin-Logins | TOM-Dokument, Audit-Logs |
| Rechenschaft | Nachweisbarkeit | VVT + DSFA | Reaktive Dokumentation | Auditberichte, Policy-Versionen |

---

## Quick Prompts (für interne Reviews / Audits)
- Zeig mir alle Verarbeitungstätigkeiten ohne gepflegte Löschfrist.
- Liste aller Einwilligungen mit Widerrufsquote der letzten 6 Monate.
- Welche DSFA hat den höchsten Restrisiko-Score?
- Welche Rollen hatten seit letzter Rezertifizierung Änderungen?
- Welche Systeme enthalten personenbezogene Daten in Backups ohne Verschlüsselung?

---
## Kurzer Merktest (Selbstkontrolle)
- Nenne alle 7 Grundsätze aus dem Kopf.
- Beschreibe in 1 Satz deinen legitimierten Zweck für Analytics.
- Wann wurde zuletzt eine Probeauskunft (Art. 15) simuliert?
- Wo liegt die aktuelle Policy-Version & wer hat sie freigegeben?
- Welche Löschjobs sind automatisiert, welche manuell?

### Rechte der Betroffenen Personen
- Auskunft (Art. 15): Bestätigung, ob Daten verarbeitet werden + Kopie + Zwecke, Kategorien, Empfänger, Speicherdauer, Herkunft, Rechte.
- Berichtigung (Art. 16): Unrichtige oder unvollständige Daten korrigieren.
- Löschung (Art. 17): Entfernung personenbezogener Daten (z. B. nach Zweckerreichung, Widerruf, unrechtmäßiger Verarbeitung) – Ausnahmen beachten.
- Einschränkung (Art. 18): Markierung/Blockierung der Verarbeitung (z. B. bei Prüfbedarf Richtigkeit oder Widerspruch).
- Datenübertragbarkeit (Art. 20): Erhalt in strukturiertem, gängigem, maschinenlesbarem Format und Übermittlung an anderen Verantwortlichen (bei Einwilligung oder Vertrag, automatisiert).
- Widerspruch (Art. 21): Gegen Verarbeitung aufgrund berechtigter Interessen oder Direktwerbung.
- Widerruf Einwilligung: Jederzeit für die Zukunft ohne Nachteile (wenn Rechtsgrund Einwilligung).
- Recht auf Nicht-Unterworfenwerden ausschließlich automatisierter Entscheidungen inkl. Profiling (Art. 22) mit erheblichen Auswirkungen.
- Unterrichtung (Art. 19): Info über Empfänger bei Berichtigung/Löschung/Einschränkung auf Wunsch.
- Benachrichtigung bei hohem Risiko nach Datenpanne (Art. 34).
- Beschwerde bei Aufsichtsbehörde (Art. 77).
- Gerichtlicher Rechtsbehelf (Art. 79) & Schadensersatz (Art. 82).

#### Management Systeme
In den system gibt es verschiedene bereiche und jeweils verschiedene zyklen