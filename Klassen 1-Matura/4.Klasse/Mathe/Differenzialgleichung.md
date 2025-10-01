[[4.Mathe]]
___
Gleichungen in denen die Ableitung einer Funktion vorkommt.
Bsp:
$y'(x)-2x = 0$ oder $y'(x)-2*y(x)=0$
$y'(x)=2x$
$y'(x)= y^{2}+C$ Lösungen von Differenzialgleichungen sind Funktionen

Ist noch eine Anfangsbedingung gegeben, so kann C bestimmt werden
z.B: $y(0)=4$, also $y(x)=x^2+4$ -> spezielle Lösung/Partikulärlösung

Die Ordnung einer Differenzialgleichung bezieht sich auf die höchste vorkommende Ableitung.
Bsp:
$y'-x=0$, $y(2)=4$ das ist die erste Ordnung weil nur die erste Ableitung vorkommt

$y''+x=1$, $y(0)=1,y'(0)=2$ das ist die zweite Ordnung weil es eine Doppel Ableitung gibt
$y'=\int(-x+1)dx$
$y'=-\frac{x^2}{2}+x+C_{1}$
$y=-\frac{x^3}{2}+\frac{x^2}{2}+C_{1}*x+C_{2}$
$y(0)=1,C_{2}=1$
Spezielle Lösung:
$y=-\frac{x^3}{6}+\frac{x^2}{2}+2x+1$

##### 3.10
**a)**
$y'3x=1$

- Gegeben: 3x·y′ = 1
- Umformen: y′ = 1/(3x)
- Integrieren: y(x) = (1/3) ln|x| + C
- Einordnung: 1. Ordnung, linear-inhomogen (in der Form y′ = q(x)); Definitionsbereich x ≠ 0
- Allgemeine Lösung: y(x) = (1/3) ln|x| + C
**c)**
$y'-4x+x^2$

- Gegeben: y′ − 4x + x² = 0
- Umformen: y′ = 4x − x²
- Integrieren: y(x) = ∫(4x − x²) dx = 2x² − (1/3)x³ + C
- Einordnung: 1. Ordnung, linear-inhomogen (y′ = q(x))
- Allgemeine Lösung: y(x) = 2x² − (1/3)x³ + C
**e)**
$y''+6x-3=0$

- Gegeben: y″ + 6x − 3 = 0
- Umformen: y″ = 3 − 6x
- 1× integrieren: y′ = ∫(3 − 6x) dx = 3x − 3x² + C₁
- 2× integrieren: y = ∫(3x − 3x² + C₁) dx = (3/2)x² − x³ + C₁x + C₂
- Einordnung: 2. Ordnung, linear-inhomogen
- Allgemeine Lösung: y(x) = (3/2)x² − x³ + C₁x + C₂


##### 3.11
**b)**
$y=x+x^2+C$
$y'=2x+1$

##### 3.12
**b)**
egeben:

- Differentialgleichung: y′ + x² = x + 1
- Anfangsbedingung: y(6) = 0

Schritte:

1. In Standardform bringen

- y′ = x + 1 − x²

2. Integrieren (einmal, weil 1. Ordnung)

- y(x) = (1/2)x² + x − (1/3)x³ + C

3. Anfangsbedingung einsetzen

- 0 = y(6) = (1/2)·6² + 6 − (1/3)·6³ + C
- 0 = 18 + 6 − 72 + C = −48 + C ⇒ C = 48

Antwort (spezielle Lösung):

- y(x) = −(1/3)x³ + (1/2)x² + x + 48

Kurzcheck: y(6) = −72 + 18 + 6 + 48 = 0

**c)**
als erstes ergebniss rüber geben, dann integrieren, dann die bedingung setzen.

![[Mathe Buch 3.12.png]]

$y''-x+1$
y′ = (1/2)x^2 − x + C1
y = (1/6)x^3 − (1/2)x^2 + C1·x + C2
und da jetzt beide fälle einragen

![[Mathe Buch 3.15.png]]
a(t)=0,5
a(t)=v'(t)=s''(t)