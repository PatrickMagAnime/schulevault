[[1.Syt]]
___
## Reihenschaltung von Widerständen

In einer Reihenschaltung sind zwei oder mehr Widerstände hintereinander geschaltet, sodass der gleiche Strom durch alle Widerstände fließt.

### Eigenschaften der Reihenschaltung

*   **Gleicher Strom:** Der Strom $I$ ist durch alle Widerstände gleich.
    $I = I_1 = I_2 = I_3 = ... = I_n$
*   **Spannungsteilung:** Die Gesamtspannung $U$ teilt sich auf die einzelnen Widerstände auf.
    $U = U_1 + U_2 + U_3 + ... + U_n$
*   **Gesamtwiderstand:** Der Gesamtwiderstand $R_{ges}$ ist die Summe der Einzelwiderstände.

### Berechnung des Gesamtwiderstands

Der Gesamtwiderstand ist die Summe aller Einzelwiderstände:

$R_{ges} = R_1 + R_2 + R_3 + ... + R_n$

### Berechnung von Strömen und Spannungen

*   **Gesamtstrom:** Nach dem Ohmschen Gesetz:
    $I = \frac{U}{R_{ges}}$
*   **Spannung an einem Widerstand:** Nach dem Ohmschen Gesetz:
    $U_i = I \cdot R_i$ (wobei $U_i$ die Spannung am Widerstand $R_i$ ist)
*   **Spannungsteilerregel:** Die Spannung an einem Widerstand $R_i$ in einer Reihenschaltung mit dem Gesamtwiderstand $R_{ges}$ und der Gesamtspannung $U$ ist:
    $U_i = U \cdot \frac{R_i}{R_{ges}}$

### Beispiel

Gegeben seien drei Widerstände in Reihenschaltung: $R_1 = 10 \Omega$, $R_2 = 20 \Omega$, $R_3 = 30 \Omega$.

1.  **Berechnung des Gesamtwiderstands:**

    $R_{ges} = 10 + 20 + 30 = 60 \Omega$

2.  **Annahme einer Spannung:** Nehmen wir an, die angelegte Spannung beträgt $U = 12V$.

3.  **Berechnung des Stroms:**

    $I = \frac{12}{60} = 0.2 A$

4.  **Berechnung der Einzelspannungen:**

    $U_1 = 0.2 \cdot 10 = 2 V$

    $U_2 = 0.2 \cdot 20 = 4 V$

    $U_3 = 0.2 \cdot 30 = 6 V$

5.  **Überprüfung der Spannungsteilung:**

    $U = U_1 + U_2 + U_3 = 2 + 4 + 6 = 12 V$

### Zusammenfassung

*   In einer Reihenschaltung ist der Strom durch alle Widerstände gleich.
*   Die Gesamtspannung teilt sich auf die einzelnen Widerstände auf.
*   Der Gesamtwiderstand ist die Summe der Einzelwiderstände.
*   Die Spannungsteilerregel ermöglicht die einfache Berechnung der Spannung an einem einzelnen Widerstand.

### Mermaid Diagramm

```mermaid
graph LR
    A[Spannungsquelle U] --> B(R1)
    B --> C(R2)
    C --> D(R3)
    D --> E[Masse]
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style E fill:#ccf,stroke:#333,stroke-width:2px
```
