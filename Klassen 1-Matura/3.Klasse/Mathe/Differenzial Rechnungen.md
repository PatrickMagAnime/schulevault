[[3.Mathe]]
___
Die Differentialrechnung ist ein Teilgebiet der Mathematik, das sich mit der Untersuchung von Änderungsraten von Funktionen befasst. Im Kern geht es darum, wie sich der Wert einer Funktion ändert, wenn sich ihr Eingabewert (die unabhängige Variable) geringfügig ändert. Die zentrale Idee ist die der Ableitung, die die momentane Änderungsrate einer Funktion an einem bestimmten Punkt angibt.

Hier sind die Schlüsselkonzepte der Differentialrechnung:

**1. Funktionen und ihre Ableitungen:**

*   Eine Funktion $f(x)$ beschreibt eine Beziehung zwischen einer unabhängigen Variablen $x$ und einer abhängigen Variablen $f(x)$.
*   Die Ableitung einer Funktion $f(x)$, oft geschrieben als $f'(x)$ oder $\frac{df}{dx}$, gibt die momentane Änderungsrate von $f(x)$ in Bezug auf $x$ an. Geometrisch interpretiert ist die Ableitung die Steigung der Tangente an den Graphen der Funktion an einem bestimmten Punkt.

**2. Der Differenzenquotient und der Grenzwert:**

Die Ableitung wird formal als Grenzwert eines Differenzenquotienten definiert. Der Differenzenquotient misst die durchschnittliche Änderungsrate der Funktion über ein kleines Intervall:

$\frac{\Delta y}{\Delta x} = \frac{f(x + h) - f(x)}{h}$

Dabei ist $h$ eine kleine Änderung in $x$. Um die momentane Änderungsrate zu erhalten, lässt man $h$ gegen Null gehen:

$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$

Dieser Grenzwert, falls er existiert, ist die Ableitung der Funktion an der Stelle $x$.

**3. Ableitungsregeln:**

Es gibt verschiedene Regeln, um Ableitungen zu berechnen, ohne jedes Mal den Grenzwert des Differenzenquotienten bestimmen zu müssen. Einige wichtige Regeln sind:

*   **Potenzregel:** $\frac{d}{dx}(x^n) = nx^{n-1}$
*   **Konstantenregel:** $\frac{d}{dx}(c) = 0$ (wobei $c$ eine Konstante ist)
*   **Konstantenfaktorregel:** $\frac{d}{dx}(cf(x)) = c f'(x)$
*   **Summen- und Differenzregel:** $\frac{d}{dx}(f(x) \pm g(x)) = f'(x) \pm g'(x)$
*   **Produktregel:** $\frac{d}{dx}(f(x)g(x)) = f'(x)g(x) + f(x)g'(x)$
*   **Quotientenregel:** $\frac{d}{dx}(\frac{f(x)}{g(x)}) = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$
*   **Kettenregel:** $\frac{d}{dx}(f(g(x))) = f'(g(x)) \cdot g'(x)$

**4. Höhere Ableitungen:**

Die Ableitung einer Funktion $f'(x)$ kann selbst wieder abgeleitet werden, um die zweite Ableitung $f''(x)$ zu erhalten. Die zweite Ableitung gibt die Änderungsrate der ersten Ableitung an und kann Informationen über die Krümmung des Graphen der Funktion liefern. Man kann auch höhere Ableitungen (dritte, vierte usw.) bilden.

**5. Anwendungen der Differentialrechnung:**

Die Differentialrechnung hat zahlreiche Anwendungen in verschiedenen Bereichen, darunter:

*   **Optimierung:** Finden von Maxima und Minima von Funktionen (z.B. zur Maximierung von Gewinn oder zur Minimierung von Kosten).
*   **Physik:** Beschreibung von Bewegung, Geschwindigkeit, Beschleunigung usw.
*   **Ingenieurwesen:** Analyse von Systemen, Design von Strukturen usw.
*   **Wirtschaftswissenschaften:** Modellierung von Märkten, Analyse von Kosten und Erträgen usw.
*   **Kurvendiskussion:** Bestimmung von Eigenschaften von Funktionsgraphen wie Steigung, Krümmung, Wendepunkte usw.

Zusammenfassend lässt sich sagen, dass die Differentialrechnung ein mächtiges Werkzeug ist, um Änderungsraten zu analysieren und Probleme zu lösen, die sich mit der Optimierung von Funktionen und der Beschreibung von dynamischen Systemen befassen. Sie ist ein grundlegendes Konzept in vielen wissenschaftlichen und technischen Disziplinen.
