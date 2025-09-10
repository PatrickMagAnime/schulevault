[[3.Mathe]]
___
Grenzwerte spielen eine entscheidende Rolle beim Verständnis des Integrals, insbesondere des bestimmten Integrals. Sie sind notwendig, um die intuitive Vorstellung des Integrals als "Fläche unter einer Kurve" präzise zu definieren, besonders wenn die Funktion kompliziert ist oder das Intervall unendlich.

Hier ist, wie Grenzwerte im Zusammenhang mit Integralen ins Spiel kommen:

**1. Riemann-Summen und die Definition des bestimmten Integrals:**

Die grundlegende Idee, die Fläche unter einer Kurve $f(x)$ im Intervall $[a, b]$ zu berechnen, besteht darin, das Intervall in $n$ kleine Teilintervalle zu unterteilen. In jedem Teilintervall wählt man einen Punkt $x_i^*$ und bildet ein Rechteck mit der Breite $\Delta x = \frac{b-a}{n}$ und der Höhe $f(x_i^*)$. Die Summe der Flächen dieser Rechtecke wird als Riemann-Summe bezeichnet:

$R_n = \sum_{i=1}^{n} f(x_i^*) \Delta x$

Diese Riemann-Summe ist eine Näherung für die Fläche unter der Kurve. Um eine exakte Fläche zu erhalten, muss man die Anzahl der Teilintervalle ($n$) gegen unendlich gehen lassen. Das bestimmte Integral ist dann definiert als der Grenzwert der Riemann-Summe, falls dieser Grenzwert existiert:

$\int_{a}^{b} f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x$

Der Grenzwert stellt sicher, dass die Breite der Rechtecke gegen Null geht und die Näherung immer genauer wird, bis sie die tatsächliche Fläche erreicht.

**2. Uneigentliche Integrale:**

Uneigentliche Integrale treten in zwei Hauptformen auf, bei denen Grenzwerte unerlässlich sind:

*   **Integrale mit unendlichen Integrationsgrenzen:** Wenn eine oder beide Integrationsgrenzen unendlich sind (z.B. $\int_{a}^{\infty} f(x) \, dx$ oder $\int_{-\infty}^{\infty} f(x) \, dx$), dann wird das Integral als Grenzwert definiert:

$\int_{a}^{\infty} f(x) \, dx = \lim_{b \to \infty} \int_{a}^{b} f(x) \, dx$

Das bedeutet, man berechnet das Integral bis zu einer endlichen Grenze $b$ und lässt dann $b$ gegen unendlich gehen. Wenn dieser Grenzwert existiert, konvergiert das uneigentliche Integral; andernfalls divergiert es.

*   **Integrale mit Singularitäten:** Wenn die Funktion $f(x)$ in einem Punkt innerhalb des Integrationsintervalls $[a, b]$ nicht definiert ist oder eine Unstetigkeit aufweist (z.B. eine Polstelle), dann muss das Integral ebenfalls als Grenzwert definiert werden.  Wenn beispielsweise $f(x)$ bei $c \in (a, b)$ eine Singularität hat, dann wird das Integral aufgeteilt und als Summe von Grenzwerten berechnet:

$\int_{a}^{b} f(x) \, dx = \lim_{t \to c^-} \int_{a}^{t} f(x) \, dx + \lim_{s \to c^+} \int_{s}^{b} f(x) \, dx$

Hier nähert man sich der Singularität $c$ von links ($t \to c^-$) und von rechts ($s \to c^+$) und berechnet die entsprechenden Grenzwerte. Wenn beide Grenzwerte existieren, konvergiert das uneigentliche Integral.

**Zusammenfassend:**

Grenzwerte sind fundamental für die Definition des Integrals, da sie es ermöglichen, die Fläche unter einer Kurve präzise zu bestimmen, selbst wenn die Funktion kompliziert ist oder das Integrationsintervall unendlich ist. Sie sind unerlässlich, um Riemann-Summen zu definieren und uneigentliche Integrale zu behandeln. Ohne Grenzwerte wäre die Integralrechnung nicht in der Lage, diese wichtigen Fälle abzudecken.
