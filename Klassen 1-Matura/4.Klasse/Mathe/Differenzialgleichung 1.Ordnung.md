Methode zur trennung der variablen

$x+y*y'=0$, $y(4)=3$
y' ersetzen mit $\frac{dy}{dx}$
umformen:
$xdx=-ydy$
jetzt haben wir 2 verschiedene konstanten.
diese müssen von den seiten getrennt sein
$\int x dx=\int ydy$
dann unbestimmt integrieren:
$\frac{x^2}{2}+C¹=-\frac{y^2}{2}+C²$
dann die C irgendwie rechnen das man eines hat C² - C¹
und das ganze mal 2rechnen um brüche zu entfernen
$x^2=-y^2+C$ das ist die gleichung des ursprungskreises - der radius ist dabei $\sqrt{C}$

**3.31**
**a)**
$y(0)=1$, $y=-e^x*C+4$
$y'=4-y$
$\frac{dy}{dx}=4-y$
$\frac{dy}{4-y}=dx$
$\frac{1}{4-y}dy=dx$
$\int \frac{1}{4-y}dy=\int dx$
jz substitution: u=4-y dx/dx=-1 -> dy=-du
$-\ln|4-y|+C_{1}=x+C_{2}$
jetzt dann mal -1
$\ln|4-y|+C_{1}=x+C_{2}$
jetzt die Cs zu einem machen
$\ln|4-y|=x+C_{3}$ 
Dann die basis erheben um den logarythmus wegzubekommen also e^irgendwas
$\ln|4-y|=\mp e^{x}C_{3}$ dann die e trennen bissl
$4-y=e^{x}*e^C_{3}$ dann die 4 rüber und mal -1 damit y=blablabla
$y=-3*e^{-x} +4$

**b)**
$y'=-x*y$ $y(0)=1$
$\frac{dy}{dx}=-x*y$
$\frac{dy}{y}=-xdx$
$\int\frac{dy}{y}=\int-xdx$
$\ln (y)=-\frac{x^2}{2}+C_{3}$
$y=e^-\frac{x^2}{2}+e^C_{3}$
$y=e^{-\frac{x^2}{2}*C_{3}}$

**3.33**
**a)**
$\text{Gegeben:} \quad x \cdot y^2 + y' = 0,\quad y(1) = 1$
$y' = -x y^2$
$\frac{dy}{dx} = -x y^2$
$\frac{dy}{y^2} = -x dx$
$\int \frac{dy}{y^2} = \int -x dx$
- $y^{-1} + C_1 = -\frac{x^2}{2} + C_2$
$\text{Konstanten zusammenfassen:}$
- $y^{-1} = -\frac{x^2}{2} + C$
$\text{Beide Seiten mit -1 multiplizieren:}$
$y^{-1} = \frac{x^2}{2} - C$
$\text{Umstellen nach } y:$
$y = \frac{1}{\frac{x^2}{2} - C}$$
$\text{Anfangsbedingung einsetzen: } y(1) = 1$
$1 = \frac{1}{\frac{1}{2} - C} \implies \frac{1}{2} - C = 1 \implies C = -\frac{1}{2}$
$\text{Besondere Lösung:}$
$y(x) = \frac{1}{\frac{x^2}{2} + \frac{1}{2}}$