[[4.ITSI]]
___
#### Angreifermodelle
Chipher-Only-Attack: Angreifer kennt nur Chiffretexte
Known-plaintext-angriff:hacker kennt andere klartexte und chiffretexte
chosen-plaintext-angriff:hacker kann selber die verschlüsselung verwenden
chosen-cypfertext-angriff:hacker kann selbst gewählte chiffretexte entschlüsseln

**Prinzip von Kerckhoffs:**
Was beinhaltet es?
Ein Kryptosystem bleibt sicher, auch wenn das Verfahren öffentlich bekannt ist – nur der Schlüssel muss geheim bleiben.

Was ist der gegenbegriff?
Sicherheit durch Geheimhaltung des Verfahrens

**Vorteile (Kerckhoffs-Prinzip):**
- Sicherheit überprüfbar, da Verfahren offen analysiert werden kann.
- Nur Schlüssel muss geheim bleiben → einfacher zu handhaben.
- Robust gegen Insider-Leaks (Verfahren ist sowieso bekannt).
**Nachteile:**
- Schlüsselmanagement wird zur zentralen Herausforderung.
- Hoher Aufwand für starke Schlüssel und deren sichere Verteilung.