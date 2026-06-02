[[4.Mathe]]
___
![[Pasted image 20260602213827.png]]

![[Pasted image 20260602213849.png]]
![[Pasted image 20260602213858.png]]
___
![[Pasted image 20260602214004.png]]
*a)*

Behauptung: „Eine lineare Ausgleichsfunktion kann hier nicht ermittelt werden.“

Falsch.

Zu jedem Streudiagramm kann eine lineare Ausgleichsgerade bestimmt werden.

a) falsch

*b)*

Behauptung: „Eine lineare Ausgleichsfunktion kann ermittelt werden. Sie gleicht jedoch nicht gut aus.“

Die Punkte liegen deutlich gekrümmt und nicht annähernd auf einer Geraden.

Eine lineare Funktion wäre daher keine gute Anpassung.

b) richtig

*c)*

Behauptung: „Eine quadratische Ausgleichsfunktion könnte eine gute Wahl sein.“

Die Punkte bilden eine nach oben gekrümmte Kurve.

Eine Parabel könnte die Punkte gut annähern.
c) richtig

*d)*

Behauptung: „Auch eine Exponentialfunktion ist als Ausgleichsfunktion eine Wahl.“

Die Zuwächse werden nach rechts immer größer:

$1 \to 1{,}1 \to 1{,}3 \to 1{,}6 \to 2{,}1 \to 2{,}8$

Das spricht für exponentielles Wachstum.

d) richtig
___
![[Pasted image 20260602220027.png]]
*c)*

Gegeben:
$(0|5),\ (1|3),\ (2|2),\ (4|0)$
![[Pasted image 20260602220534.png]]
### Mittelwerte

$\bar{x}=\frac{0+1+2+4}{4}=1{,}75$

$\bar{y}=\frac{5+3+2+0}{4}=2{,}5$

### Steigung

$m=\frac{\sum (x_i-\bar{x})(y_i-\bar{y})}{\sum (x_i-\bar{x})^2}$

$m=\frac{-8{,}5}{8{,}75}\approx -0{,}97$

### Achsenabschnitt

$b=\bar{y}-m\bar{x}$

$b=2{,}5-(-0{,}97)\cdot1{,}75$

$b\approx4{,}20$

### Regressionsgerade

$y\approx-0{,}97x+4{,}20$

### Güte

Die Punkte liegen recht nah an der Geraden.

**Anpassung: gut**

*d)*

Gegeben:
$(0|5),\ (1|3),\ (2|4),\ (4|2),\ (4|1),\ (5|1)$
![[Pasted image 20260602220806.png]]
### Mittelwerte

$\bar{x}=\frac{0+1+2+4+4+5}{6}\approx2{,}67$

$\bar{y}=\frac{5+3+4+2+1+1}{6}\approx2{,}67$

### Steigung

$m=\frac{-13{,}67}{19{,}33}\approx-0{,}71$

### Achsenabschnitt

$b=\bar{y}-m\bar{x}$

$b\approx2{,}67-(-0{,}71)\cdot2{,}67$

$b\approx4{,}56$

### Regressionsgerade

$y\approx-0{,}71x+4{,}56$

### Güte

Die Punkte streuen stärker um die Gerade.

**Anpassung: mittelmäßig**
___
![[Pasted image 20260602221000.png]]

Gegeben:
$x_i=(1400,\ 2000,\ 2600,\ 3200,\ 3600)$
$y_i=(18{,}1,\ 31{,}4,\ 35{,}3,\ 48{,}5,\ 51{,}8)$

*a)*
Mit steigender Drehzahl steigt auch die Leistung.
Die Punkte würden im Streudiagramm annähernd auf einer steigenden Geraden liegen.
**Ein linearer Zusammenhang ist daher sinnvoll.**

*b)*
Korrelationskoeffizient:
$r\approx0{,}99$
**Sehr starke positive Korrelation.**

*c)*
Mittelwerte:
$\bar{x}=2560$
$\bar{y}=37{,}02$
Steigung:
$m\approx0{,}0151$
Achsenabschnitt:
$b\approx-1{,}53$
Regressionsgerade:
$y\approx0{,}0151x-1{,}53$
**Güte der Anpassung: sehr gut**

*d)*
Für $x=3000$:
$y=0{,}0151\cdot3000-1{,}53$
$y\approx43{,}77$
**Leistung: ca. $43{,}8\ \text{kW}$**

*e)*
Gesucht: $y=34$
$34=0{,}0151x-1{,}53$
$35{,}53=0{,}0151x$
$x\approx2353$
**Drehzahl: ca. $2350\ \text{min}^{-1}$**

*f)*

Steigung der Regressionsgeraden:
$m\approx0{,}0151$
Für $100\ \text{min}^{-1}$:
$\Delta y=0{,}0151\cdot100$
$\Delta y\approx1{,}51$
**Durchschnittliche Erhöhung: ca. $1{,}5\ \text{kW}$ je $100\ \text{min}^{-1}$**
___
![[Pasted image 20260602221214.png]]

Gegebene
$(2|5), (4|5), (6|6), (8|7), (10|9), (12|10), (14|14)$
$n = 7$

*a)* Lineare Regression

Modell: $f(x) = k \cdot x + d$

Berechnung der Mittelwerte
$\bar{x} = \frac{2 + 4 + 6 + 8 + 10 + 12 + 14}{7} = 8$
$\bar{y} = \frac{5 + 5 + 6 + 7 + 9 + 10 + 14}{7} = 8$

Steigung $k$ (Kleinste-Quadrate-Methode)
$k = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2}$
$\sum (x_i - \bar{x})^2 = (-6)^2 + (-4)^2 + (-2)^2 + 0^2 + 2^2 + 4^2 + 6^2 = 112$
$\sum (x_i - \bar{x})(y_i - \bar{y}) = (-6)(-3) + (-4)(-3) + (-2)(-2) + 0(-1) + 2(1) + 4(2) + 6(6) = 18 + 12 + 4 + 0 + 2 + 8 + 36 = 80$
$k = \frac{80}{112} = \frac{5}{7} \approx 0{,}7143$

Achsenabschnitt $d$
$d = \bar{y} - k \cdot \bar{x}$
$d = 8 - \frac{5}{7} \cdot 8 = 8 - \frac{40}{7} = \frac{16}{7} \approx 2{,}2857$

Funktion
$f(x) = 0{,}7143x + 2{,}2857$

*b)* Quadratische Regression
Modell: $g(x) = a \cdot x^2 + b \cdot x + c$

Normalgleichungssystem (Matrix-Form)

$\begin{pmatrix} \sum x_i^4 & \sum x_i^3 & \sum x_i^2 \\ \sum x_i^3 & \sum x_i^2 & \sum x_i \\ \sum x_i^2 & \sum x_i & n \end{pmatrix} \begin{pmatrix} a \\ b \\ c \end{pmatrix} = \begin{pmatrix} \sum x_i^2 y_i \\ \sum x_i y_i \\ \sum y_i \end{pmatrix}$

Berechnete Summenwerte
$\sum x_i = 56$
$\sum x_i^2 = 560$
$\sum x_i^3 = 6272$
$\sum x_i^4 = 75488$
$\sum y_i = 56$
$\sum x_i y_i = 528$
$\sum x_i^2 y_i = 5712$

Gleichungssystem eingesetzt

$\begin{pmatrix} 75488 & 6272 & 560 \\ 6272 & 560 & 56 \\ 560 & 56 & 7 \end{pmatrix} \begin{pmatrix} a \\ b \\ c \end{pmatrix} = \begin{pmatrix} 5712 \\ 528 \\ 56 \end{pmatrix}$

Lösung via Matrix-Inversion / TR
$a = \frac{1}{28} \approx 0{,}0357$
$b = \frac{1}{7} \approx 0{,}1429$
$c = \frac{33}{7} \approx 4{,}7143$

Funktion
$g(x) = 0{,}0357x^2 + 0{,}1429x + 4{,}7143$

*c)* Güte der Anpassung

Gesamte Quadratsumme (Ablenkung vom Mittelwert)

$SS_{tot} = \sum (y_i - \bar{y})^2 = (-3)^2 + (-3)^2 + (-2)^2 + (-1)^2 + 1^2 + 2^2 + 6^2 = 9 + 9 + 4 + 1 + 1 + 4 + 36 = 64$

Lineare Regression ($Bestimmtheitsmaß R^2$)
$SS_{res} = \sum (y_i - f(x_i))^2 \approx 4$
$R^2 = 1 - \frac{SS_{res}}{SS_{tot}} = 1 - \frac{4}{64} = 0{,}9375$

Quadratische Regression ($Bestimmtheitsmaß R^2$)
$SS_{res} = \sum (y_i - g(x_i))^2 \approx 2{,}193$
$R^2 = 1 - \frac{2{,}193}{64} \approx 0{,}9657$

Ergebnis:
$R^2_{\text{quadratisch}} (0{,}9657) > R^2_{\text{linear}} (0{,}9375) \rightarrow$ Quadratisch liefert die bessere Anpassung (bestätigt Abb. 12.10 b und c)
___
![[Pasted image 20260602221928.png]]
Gegeben:
$(10|11), (20|20), (30|28), (40|38), (50|43)$
$n = 5$

*a)* Grafische Darstellung & Augenschein

Ein linearer Zusammenhang ist denkbar, da die Punkte annähernd auf einer steigenden Geraden liegen. Die Steigungen zwischen den einzelnen Punkten schwanken nur minimal.

*b)* Lineare Kostenfunktion

Modell: $K(x) = k \cdot x + d$

### Mittelwerte

$\bar{x} = \frac{10 + 20 + 30 + 40 + 50}{5} = 30$
$\bar{y} = \frac{11 + 20 + 28 + 38 + 43}{5} = 28$

### Steigung $k$

$\sum (x_i - \bar{x})^2 = (-20)^2 + (-10)^2 + 0^2 + 10^2 + 20^2 = 1000$
$\sum (x_i - \bar{x})(y_i - \bar{y}) = (-20)(-17) + (-10)(-8) + 0(-2) + 10(10) + 20(15) = 340 + 80 + 0 + 100 + 300 = 820$
$k = \frac{820}{1000} = 0{,}82$

### Achsenabschnitt $d$

$d = 28 - 0{,}82 \cdot 30 = 28 - 24{,}6 = 3{,}4$

### Funktion

$K_{lin}(x) = 0{,}82x + 3{,}4$

*c)* Güte der Anpassung (Linear)

$SS_{tot} = \sum (y_i - \bar{y})^2 = (-17)^2 + (-8)^2 + (-2)^2 + 10^2 + 15^2 = 289 + 64 + 4 + 100 + 225 = 682$
$SS_{res} = \sum (y_i - K_{lin}(x_i))^2 = (-0{,}6)^2 + (+0{,}2)^2 + (0)^2 + (0)^2 + (+0{,}4)^2 = 0{,}36 + 0{,}04 + 0 + 0 + 0{,}16 = 0{,}56$
$R^2 = 1 - \frac{0{,}56}{682} \approx 0{,}9992$

Sehr hohe Anpassungsgüte, da $R^2$ extrem nahe bei $1$ liegt.

*d)* Kosten für 35 Stück (Linear)

$K_{lin}(35) = 0{,}82 \cdot 35 + 3{,}4 = 32{,}1$
Kosten $\approx 32.100\text{ €}$

*e)* Quadratische & Kubische Funktion + Prognose

Quadratische Kostenfunktion

Modell: $K_{quad}(x) = a \cdot x^2 + b \cdot x + c$
*Regressionsrechnung via TR:*
$a = -0{,}00143$
$b = 0{,}9057$
$c = 2{,}4$
$K_{quad}(x) = -0{,}00143x^2 + 0{,}9057x + 2{,}4$

**Prognose für 35 Stück:**
$K_{quad}(35) = -0{,}00143 \cdot 35^2 + 0{,}9057 \cdot 35 + 2{,}4 \approx 32{,}35$
Kosten $\approx 32.350\text{ €}$

Kubische Kostenfunktion

Modell: $K_{kub}(x) = a \cdot x^3 + b \cdot x^2 + c \cdot x + d$
*Regressionsrechnung via TR:*
$a = 0{,}000167$
$b = -0{,}01643$
$c = 1{,}281$
$d = -0{,}2$
$K_{kub}(x) = 0{,}000167x^3 - 0{,}01643x^2 + 1{,}281x - 0{,}2$

**Prognose für 35 Stück:**
$K_{kub}(35) = 0{,}000167 \cdot 35^3 - 0{,}01643 \cdot 35^2 + 1{,}281 \cdot 35 - 0{,}2 \approx 31{,}61$
Kosten $\approx 31.610\text{ €}$

*f)* Güte der Anpassung (e)
* Quadratisch: $R^2 \approx 0{,}9994$
* Kubisch: $R^2 \approx 0{,}9999$

Beide Modelle liefern eine fast perfekte mathematische Anpassung an die Datenpunkte, wobei das kubische Modell die geringste Restabweichung besitzt.

*g)* Regression Grad 4

Da genau $n = 5$ Datenpunkte gegeben sind, kann ein Polynom vom Grad $4$ ($5$ unbekannte Koeffizienten) ein lineares Gleichungssystem exakt lösen. Die Kurve geht exakt durch jeden einzelnen Punkt, weshalb die Abweichung überall Null ist ($SS_{res} = 0 \rightarrow R^2 = 1$).

**Ökonomisch nicht sinnvoll**, weil:

* Es kommt zum "Overfitting" (Überanpassung).
* Der Kurvenverlauf zwischen den Punkten schlägt extreme, unrealistische Wellen (Wiggle-Effekt).
* Extrapolationen (Prognosen außerhalb der Daten) werden völlig unbrauchbar.