[[4.ITSI]]
___
Antivirenprogramme prüfen mittels signaturen bekannter malwares ob ein solches Programm installiert ist.

#### Evasion
Obfuscation: code wird so verändert das, das antiviren programm es icht mehr erkennen kann.
Highlevel code wird dann zu bytes umgewandelt.
![[Pasted image 20260309085132.png|800]]

dead code: zB nop = no operation (code macht pause, sorgt dafür das die obfuscation anders aussieht)

#### Advanced Obfuscation: LLM Obfuscation


Metasploitframework auslassen!

#### Post-Exploitation nach PTES
Strategien für Pentester:
Post exploitation ist ...

- Pillaging (Informationen Sammeln, IP-Adressen usw.)
- Persistence (Zugang sichern)
- Lateral Movement (Ausbreitung)
- Privilege Escalation (Privilegien Erweitern)


lolbin = living off the land (vorinstallierte programme nutzen um privilegien zu bekommen)
lolbas = living off the land (von system integrierte system dateien nutzen um privilegien zu erhöhen)

#### Tools für lateral movement
PsExec
WMI
SSH
Pass-The-Hash
Pass-The-Ticket
#### Tools für Privilege Escalation
sudo
Sudo-Killer
sudo-priv-checker: prüft ob es möglich ist sudo zu missbrauchen um privilegien zu erhöhen
sudo-exploit: prüft ob es möglich ist sudo zu missbrauchen um privilegien zu erhöhen

#### Active Directory & Bloodhound
Active Directory: Verzeichnisdienst von Microsoft, ermöglicht die Verwaltung von Benutzern, Computern
und anderen Ressourcen in einem Netzwerk.
Bloodhound: Tool zur Visualisierung von Beziehungen und Berechtigungen in Active Directory, um potenzielle Angriffsvektoren zu identifizieren.

Collecter: sammelt Informationen über Benutzer, Gruppen, Computer und Berechtigungen in Active Directory.
Analyzer: analysiert die gesammelten Daten, um potenzielle Angriffsvektoren zu identifizieren, z.B. privilegierte Konten, Gruppenmitgliedschaften und Berechtigungen.
Visualizer: erstellt eine grafische Darstellung der Beziehungen und Berechtigungen in Active Directory, um die Angriffsvektoren besser zu verstehen und zu planen.

#### Risiko
Risiko = Eintrittswahrscheinlichkeit * Schadenshöhe
Threat: potenzielle Gefahr, die Schaden verursachen könnte.
Vulnerability: Schwachstelle, die von einem Angreifer ausgenutzt werden könnte.
Risiko: das ereigniss, das ein Angreifer ausnutzen könnte, um Schaden zu verursachen, basierend auf der Eintrittswahrscheinlichkeit und der Schadenshöhe.