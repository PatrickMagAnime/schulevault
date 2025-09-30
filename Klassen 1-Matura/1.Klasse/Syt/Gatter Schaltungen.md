[[1.Syt]]
___
Gatter-Schaltungen, auch Logikgatter genannt, sind grundlegende Bausteine der digitalen Schaltungstechnik. Sie führen logische Operationen auf ein oder mehrere Eingangssignale aus und erzeugen ein entsprechendes Ausgangssignal. Die Ein- und Ausgangssignale sind binär, d.h. sie können nur zwei Zustände annehmen: 0 (falsch, LOW) oder 1 (wahr, HIGH).

### Grundlegende Gatter

1.  **AND-Gatter (UND-Gatter):**

    *   Das Ausgangssignal ist nur dann 1, wenn alle Eingangssignale 1 sind.
    *   Symbol:

        ```mermaid
        graph LR
            A[A] --> E((&))
            B[B] --> E
            E --> C[Y]
            style E fill:#fff,stroke:#333,stroke-width:2px
        ```
    *   Wahrheitstabelle:

        | A | B | Y |
        |---|---|---|
        | 0 | 0 | 0 |
        | 0 | 1 | 0 |
        | 1 | 0 | 0 |
        | 1 | 1 | 1 |
    *   Boolesche Algebra: $Y = A \cdot B$ oder $Y = AB$

2.  **OR-Gatter (ODER-Gatter):**

    *   Das Ausgangssignal ist 1, wenn mindestens eines der Eingangssignale 1 ist.
    *   Symbol:

        ```mermaid
        graph LR
            A[A] --> E((1))
            B[B] --> E
            E --> C[Y]
            style E fill:#fff,stroke:#333,stroke-width:2px
        ```
    *   Wahrheitstabelle:

        | A | B | Y |
        |---|---|---|
        | 0 | 0 | 0 |
        | 0 | 1 | 1 |
        | 1 | 0 | 1 |
        | 1 | 1 | 1 |
    *   Boolesche Algebra: $Y = A + B$

3.  **NOT-Gatter (NICHT-Gatter, Inverter):**

    *   Das Ausgangssignal ist das inverse des Eingangssignals.
    *   Symbol:

        ```mermaid
        graph LR
            A[A] --> E((1))
            E --> C[Y]
            style E fill:#fff,stroke:#333,stroke-width:2px
        ```
    *   Wahrheitstabelle:

        | A | Y |
        |---|---|
        | 0 | 1 |
        | 1 | 0 |
    *   Boolesche Algebra: $Y = \overline{A}$ oder $Y = A'$

### Abgeleitete Gatter

1.  **NAND-Gatter (NICHT-UND-Gatter):**

    *   Das Ausgangssignal ist nur dann 0, wenn alle Eingangssignale 1 sind.
    *   Entspricht einem AND-Gatter mit einem nachgeschalteten NOT-Gatter.
    *   Symbol:

        ```mermaid
        graph LR
            A[A] --> E((&))
            B[B] --> E
            E --> F((O))
            F --> C[Y]
            style E fill:#fff,stroke:#333,stroke-width:2px
            style F fill:#fff,stroke:#333,stroke-width:2px
        ```
    *   Wahrheitstabelle:

        | A | B | Y |
        |---|---|---|
        | 0 | 0 | 1 |
        | 0 | 1 | 1 |
        | 1 | 0 | 1 |
        | 1 | 1 | 0 |
    *   Boolesche Algebra: $Y = \overline{A \cdot B}$

2.  **NOR-Gatter (NICHT-ODER-Gatter):**

    *   Das Ausgangssignal ist nur dann 1, wenn alle Eingangssignale 0 sind.
    *   Entspricht einem OR-Gatter mit einem nachgeschalteten NOT-Gatter.
    *   Symbol:

        ```mermaid
        graph LR
            A[A] --> E((1))
            B[B] --> E
            E --> F((O))
            F --> C[Y]
            style E fill:#fff,stroke:#333,stroke-width:2px
            style F fill:#fff,stroke:#333,stroke-width:2px
        ```
    *   Wahrheitstabelle:

        | A | B | Y |
        |---|---|---|
        | 0 | 0 | 1 |
        | 0 | 1 | 0 |
        | 1 | 0 | 0 |
        | 1 | 1 | 0 |
    *   Boolesche Algebra: $Y = \overline{A + B}$

3.  **XOR-Gatter (Exklusiv-ODER-Gatter):**

    *   Das Ausgangssignal ist 1, wenn genau eines der Eingangssignale 1 ist.
    *   Symbol:

        ```mermaid
        graph LR
            A[A] --> E((⊕))
            B[B] --> E
            E --> C[Y]
            style E fill:#fff,stroke:#333,stroke-width:2px
        ```
    *   Wahrheitstabelle:

        | A | B | Y |
        |---|---|---|
        | 0 | 0 | 0 |
        | 0 | 1 | 1 |
        | 1 | 0 | 1 |
        | 1 | 1 | 0 |
    *   Boolesche Algebra: $Y = A \oplus B = (A \cdot \overline{B}) + (\overline{A} \cdot B)$

4.  **XNOR-Gatter (Exklusiv-NICHT-ODER-Gatter):**

    *   Das Ausgangssignal ist 1, wenn beide Eingangssignale gleich sind.
    *   Symbol:

        ```mermaid
        graph LR
            A[A] --> E((⊕))
            E --> F((O))
            B[B] --> E
            F --> C[Y]
            style E fill:#fff,stroke:#333,stroke-width:2px
             style F fill:#fff,stroke:#333,stroke-width:2px
        ```
    *   Wahrheitstabelle:

        | A | B | Y |
        |---|---|---|
        | 0 | 0 | 1 |
        | 0 | 1 | 0 |
        | 1 | 0 | 0 |
        | 1 | 1 | 1 |
    *   Boolesche Algebra: $Y = \overline{A \oplus B} = (A \cdot B) + (\overline{A} \cdot \overline{B})$

### Anwendungen

*   **Digitalrechner:** Realisierung von Rechenoperationen (Addition, Subtraktion, Multiplikation, Division).
*   **Steuerungen:** Realisierung von Steuerlogiken für Maschinen und Anlagen.
*   **Speicher:** Realisierung von Speicherelementen (Flip-Flops, Register).
*   **Datenverarbeitung:** Realisierung von Datenverarbeitungsfunktionen (Codierung, Decodierung, Multiplexing, Demultiplexing).

### Wichtige Konzepte

*   **Boolesche Algebra:** Mathematische Grundlage für die Beschreibung und Analyse von Logikgattern.
*   **Wahrheitstabelle:** Tabellarische Darstellung der Funktion eines Logikgatters.
*   **Logikminimierung:** Vereinfachung von Logikschaltungen, um Kosten und Komplexität zu reduzieren (z.B. mit Karnaugh-Veitch-Diagrammen).
*   **De Morgansche Gesetze:** Wichtige Regeln zur Umwandlung von logischen Ausdrücken:
    *   $\overline{A \cdot B} = \overline{A} + \overline{B}$
    *   $\overline{A + B} = \overline{A} \cdot \overline{B}$

### Hinweise für die Mitschrift

*   Zeichne die Symbole der Gatter übersichtlich auf.
*   Erstelle Wahrheitstabellen für jedes Gatter.
*   Notiere die booleschen Ausdrücke für jedes Gatter.
*   Gib Beispiele für Anwendungen von Gattern.
*   Erkläre die De Morganschen Gesetze und ihre Anwendung.
