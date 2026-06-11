[[4.ITP2]]
___

# Analyse des Netzwerkverkehrs 16

> Nachdem Suricata eingerichtet und das Port Mirroring konfiguriert wurde, haben wir zunächst den normalen Netzwerkverkehr analysiert.
>
> Dabei konnten verschiedene Protokolle zuverlässig erkannt werden.
>
> Bei TCP wurden beispielsweise SSH- und HTTP(S)-Verbindungen erfasst.
>
> Über UDP konnten Broadcast- und Discovery-Dienste erkannt werden.
>
> Zusätzlich wurden ICMP-Pakete wie Ping-Anfragen sowie DNS-Abfragen zur Namensauflösung protokolliert.
>
> Dadurch konnten wir überprüfen, ob die IDS-Umgebung korrekt arbeitet und den gesamten Netzwerkverkehr erfasst.

---

# Beispiel erkannter Alerts 17

> Während der Analyse hat Suricata mehrere Sicherheitsereignisse erkannt.
>
> Ein Beispiel ist der sogenannte STUN Binding Request.
>
> Dabei handelt es sich um Netzwerkverkehr, der häufig bei VoIP-, VPN- oder Peer-to-Peer-Verbindungen verwendet wird.
>
> Zusätzlich wurden verschiedene UDP-Broadcasts sowie externe Verbindungen über Tailscale erkannt.
>
> Nicht alle Alerts stellen dabei einen Angriff dar.
>
> Ein wichtiger Teil des Projekts bestand deshalb darin, relevante Ereignisse von normalem Netzwerkverkehr zu unterscheiden.

---

# Entwicklung des Dashboards 18

> Um die erzeugten Logs übersichtlich darzustellen, wurde ein eigenes Dashboard entwickelt.
>
> Das Dashboard liest die eve.json-Datei von Suricata in Echtzeit aus.
>
> Angezeigt werden unter anderem Zeitstempel, Quell- und Ziel-IP-Adressen, verwendete Protokolle sowie erkannte Alert-Typen.
>
> Ziel war eine einfache und ressourcenschonende Lösung ohne zusätzliche Datenbank.
>
> Dadurch konnten Ereignisse direkt visualisiert und analysiert werden.

---

# Technische Herausforderungen 19

> Während der Umsetzung sind mehrere Herausforderungen aufgetreten.
>
> Eine Schwierigkeit war, dass Suricata teilweise seinen eigenen Netzwerkverkehr als verdächtig eingestuft hat.
>
> Zusätzlich entstanden viele irrelevante UDP-Ereignisse durch Broadcast-Verkehr im lokalen Netzwerk.
>
> Durch die Verwendung mehrerer Netzwerkinterfaces wurde die Konfiguration komplexer.
>
> Außerdem musste das Dashboard sicher aus der Ferne erreichbar sein, ohne zusätzliche Ports im Internet freizugeben.

---

# Lösungsansätze 20

> Für diese Probleme wurden verschiedene Lösungen umgesetzt.
>
> Die Netzwerkinterfaces wurden gezielt konfiguriert, sodass der Datenverkehr getrennt überwacht werden konnte.
>
> Im Dashboard wurden unwichtige Flow-Events herausgefiltert, um den Fokus auf sicherheitsrelevante Alerts zu legen.
>
> Für den sicheren Fernzugriff wurde Cloudflare Access eingesetzt.
>
> Dadurch konnte das Dashboard geschützt veröffentlicht werden, ohne offene Ports bereitzustellen.
>
> Zusätzlich wurden Suricata-Regeln angepasst und optimiert, um Fehlalarme zu reduzieren.

---

# Fazit & Ausblick 21

> Zusammenfassend konnten alle wesentlichen Projektziele erreicht werden.
>
> Die virtuelle SOC-Umgebung funktioniert, der Netzwerkverkehr wird in Echtzeit überwacht und Sicherheitsereignisse werden zuverlässig erkannt und dargestellt.
>
> Besonders wichtig war die Entwicklung des eigenen Dashboards sowie die sichere Remote-Anbindung.
>
> Für zukünftige Erweiterungen wären automatische E-Mail-Benachrichtigungen, eine Datenbank zur Langzeitspeicherung sowie detaillierte Statistiken denkbar.
>
> Außerdem könnte das System künftig um Machine-Learning-Verfahren oder ein Large-Language-Model erweitert werden, um Angriffe automatisch zu bewerten und geeignete Gegenmaßnahmen vorzuschlagen.
