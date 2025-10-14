[[4.NW2]]
___
![[Wellen-5-Seepferdchen.excalidraw|1000]]

 Am Mittelpunkt (Erreger) und auf den inneren Kreisen ist die Intensität und Amplitude der Welle am höchsten, da dort die Energie konzentriert ist.
   - Mit zunehmender Entfernung nimmt die Intensität ab, die Amplitude wird kleiner, da die Energie auf eine größere Fläche verteilt wird.





































```mermaid
%% Projektumwelt-Grafik – wie im Bild
flowchart LR
  %% Klassen/Styles
  classDef center fill:#ffffff,stroke:#333,stroke-width:1.5px
  classDef direct fill:#fff,stroke:#c00,color:#c00,stroke-width:1px
  classDef indirect fill:#fff,stroke:#06c,color:#06c,stroke-width:1px
  classDef titleDirect fill:transparent,stroke:transparent,color:#c00,font-weight:700,font-size:18px
  classDef titleIndirect fill:transparent,stroke:transparent,color:#06c,font-weight:700,font-size:18px
  classDef invisible fill:transparent,stroke:transparent,color:transparent

  %% Kopfzeile mit horizontaler Punktlinie (Workaround über unsichtbare Punkte)
  subgraph HEADER[ ]
    direction LR
    TLEFT[Direkte Stakeholder]:::titleDirect
    h1(( )):::invisible -.- h2(( )):::invisible -.- h3(( )):::invisible -.- h4(( )):::invisible
    TRIGHT[Indirekte Stakeholder]:::titleIndirect
  end

  %% Mittlere senkrechte Punktlinie (Workaround)
  subgraph VSEP[ ]
    direction TB
    v1(( )):::invisible -.- v2(( )):::invisible -.- v3(( )):::invisible -.- v4(( )):::invisible -.- v5(( )):::invisible -.- v6(( )):::invisible
  end

  %% Zentrum
  Z[[BAU DES<br/>GARTENHAUSES]]:::center

  %% Linke Seite – direkte Stakeholder
  subgraph LEFT[ ]
    direction TB
    g((Geldgeber)):::direct
    amt((Amt)):::direct
    kd((Kunde)):::direct
    bl((Bauleiter /<br/>Arbeiter)):::direct
    lf((Lieferanten)):::direct
    inst((Installations-<br/>betriebe)):::direct
    arc((Architekt)):::direct
    pl((Projektleiter)):::direct
  end

  %% Rechte Seite – indirekte Stakeholder
  subgraph RIGHT[ ]
    direction TB
    nach((Nachbarn)):::indirect
    vers((Versicherung)):::indirect
  end

  %% Verbindungen (neutral, ohne Richtung)
  g --- Z
  amt --- Z
  kd --- Z
  bl --- Z
  lf --- Z
  inst --- Z
  arc --- Z
  pl --- Z

  nach --- Z
  vers --- Z
```

