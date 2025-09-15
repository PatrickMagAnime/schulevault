[[4.ITSI]]
___
Input ist der Klartext peP Pist die menge aller Klartexte
```mermaid
flowchart LR
  %% Grundidee: Klartext -> Verschlüsselungsbox -> Geheimtext
  A[/"Klartext\n$M \\in \\mathcal{P}$"/] --> B{{"Verschlüsselungs-\nAlgorithmus\n$E_K$"}}
  K[("Schlüssel\n$K$")] --> B
  B --> C[/"Geheimtext\n$C=E_K(M)$"/]

  %% Optional: Rückweg (Entschlüsselung) gestrichelt
  C -.-> D{{"Entschlüsselungs-\nAlgorithmus\n$D_K$"}}
  K -.-> D
  D -.-> A

  %% Stil
  classDef plaintext fill:#e0f7fa,stroke:#006064,color:#004d40,font-weight:bold;
  classDef key fill:#fff3e0,stroke:#ef6c00,color:#e65100;
  classDef process fill:#ede7f6,stroke:#5e35b1,color:#311b92;
  classDef cipher fill:#fce4ec,stroke:#ad1457,color:#880e4f,font-weight:bold;
  class A plaintext
  class K key
  class B,D process
  class C cipher
```

Kurzbeschreibung:
- $\\mathcal{P}$: Menge aller möglichen Klartexte
- $M$: konkreter Klartext
- $K$: verwendeter Schlüssel
- $E_K$: Verschlüsselungsfunktion
- $C$: resultierender Geheimtext auch Chiffre genannt (Cypher)
- (Optional) $D_K(E_K(M))=M$ bei korrekt inverser Entschlüsselung

Varianten (optional erweiterbar):
- Symmetrisch: gleicher Schlüssel $K$
- Asymmetrisch: $E_{K_{pub}}, D_{K_{priv}}$
- Authenticated Encryption: ergänzt Integrität (z.B. $C,\\text{Tag}=AE_K(M,\\text{AD})$)

Minimalvariant (nur das Gewünschte):
```mermaid
flowchart LR
  P[Klartext $M$] --> ENC[/"Verschlüsselung\n$E_K$"/] --> C[Geheimtext $C$]
```

Alternative mit Datenflusskanal:
```mermaid
flowchart LR
  subgraph Sender
    P1[Klartext $M$] --> E1[Verschlüsselung $E_K$] --> C1[Geheimtext $C$]
  end
  C1 -->|Übertragung| NET[(Unsicherer Kanal)]
  NET --> RCV[Empfang]
```

Falls Fokus rein auf Box-Darstellung:
```mermaid

flowchart LR
  subgraph Encryption["Verschlüsselungsbox $E_K$"]
    direction LR
    IN[[Eingabe:\n$M$]] --> OUT[[Ausgabe:\n$C=E_KM$]]
  end
```

Kurzer Merksatz: Eingabe $M$ fließt zusammen mit Schlüssel $K$ durch $E_K$ und ergibt $C$. Decryption (falls vorhanden) wendet $D_K$ auf $C$ an und liefert wieder $M$.