Kurzfassung: RedLine Stealer ist ein weit verbreitetes "Info‑Stealer"-Malware‑Programm (Datendieb), das kommerziell in kriminellen Foren verkauft wird. Es zielt vor allem auf Windows‑Rechner ab und sammelt/übermittelt sensible Daten von infizierten Systemen an kriminelle Betreiber.

Was RedLine ist
- Typ: Informationsdiebstahl‑Malware (Info‑Stealer), oft als Malware‑As‑A‑Service angeboten.
- Plattform: überwiegend Windows (häufig in .NET/C# implementiert).
- Vertrieb: über Phishing‑E‑Mails, manipulierte Installer, Raubkopien/Cracks, Drive‑by‑Downloads oder eingebettete ausführbare Dateien.

Was RedLine typischerweise macht
- Sammeln von Browserdaten: Passwörter, gespeicherte Login‑Daten, Cookies, Autofill‑Informationen, Verlauf.
- Zahlungsdaten: Kreditkarten‑/Zahlungsinformationen aus Browsern.
- Krypto‑Wallets und Wallet‑Dateien (z. B. Browser‑Erweiterungen/Wallet‑Dateien).
- Token/Session‑Daten: z. B. Discord‑Tokens, API‑Schlüssel, Session‑Cookies.
- System‑ und Hardware‑Informationen: OS‑Version, Benutzername, installierte Software, IP‑Adresse.
- Datei‑Harvesting: Durchsuchen und Exfiltrieren von Dateien nach Extension‑Listen (z. B. Dokumente, private Schlüssel).
- Screenshots und evtl. Keylogging (je nach Variante).
- Exfiltration: Übermittlung der gesammelten Daten an entfernte Server/C2‑Infrastruktur (z. B. via HTTPS, Webhooks oder Messaging‑APIs).
- Manche Varianten nutzen Verschleierung/Packers/Obfuskation, um Erkennung zu erschweren.

Erkennungszeichen (allgemein, nicht detailliert)
- Unerwartete Verbindungen von der Maschine zu unbekannten Domains/IPs.
- Antivirus‑/EDR‑Warnungen mit Namen wie „RedLine“ oder „Infostealer“.
- Neue, unbekannte Prozesse oder gestartete ausführbare Dateien, die du nicht installiert hast.
- Ungewöhnliche Dateizugriffe (viele Lesungen von Browser‑Profile/Dateien).
- Fremde Dateien/Archive in Download‑Ordnern nach Öffnen eines Installers.

Was du tun solltest, wenn du einen Befall vermutest
1. Gerät isolieren: Sofort vom Netzwerk trennen (WLAN/Ethernet) — so verhinderst du weitere Datenübertragung.
2. Nicht mehr auf dem infizierten Gerät Passwörter ändern. Verwende statt dessen ein sauberes/trusted Gerät, um Konten zurückzusetzen.
3. Passwörter und Tokens zurücksetzen: Alle wichtigen Accounts (E‑Mail, Bank, Social, Entwickler‑Konten) von einem sauberen Gerät aus ändern und überall 2‑Faktor‑Authentifizierung (2FA) aktivieren.
4. Meldung: Bei beruflicher Nutzung IT/Incident‑Response informieren; bei finanziellem Schaden ggf. Bank/Behörden benachrichtigen.
5. Scan und Bereinigung: Vollständigen Scan mit aktueller AV/EDR auf dem betroffenen Gerät durchführen. Bei sicherheitskritischen Fällen empfiehlt sich eine forensische Untersuchung oder gleiches Neuaufsetzen (Reimage).
6. Überprüf zusätzliche Ressourcen: Wallets/Keys, API‑Tokens, SSH/FTP‑Zugangsdaten rotieren/revoken.

Wie du dich vorbeugend schützt
- Keine Anhänge/Installer aus unzuverlässigen Quellen öffnen; keine Raubkopien verwenden.
- Betriebssystem und Software aktuell halten (Updates/Patches).
- Reputationsbasierte E‑Mail‑Filter, Antivirus/EDR einsetzen.
- Passwortmanager und starke, einzigartige Passwörter verwenden.
- 2FA/Mehrfaktor‑Authentifizierung überall aktivieren.
- Backups regelmäßig und offline/anteilig aufbewahren.
