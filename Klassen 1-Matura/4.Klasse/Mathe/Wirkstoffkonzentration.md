[[4.Mathe]]
___
![[Pasted image 20251021155116.png]]
**a)**  
Messwerte:

| t (h) | c (mg/L) |
|-------|----------|
| 0     | 1        |
| 4     | 0,65     |
| 5     | 0,5      |
| 8     | 0,25     |
| 12    | 0,15     |
| 16    | 0,1      |

Exponentielle Regression ergibt:
$c(t)=1,0266\cdot e^{-0,1526 t}$ oder $c(t)=1,0266\cdot 0,8585^t$ (gerundete Koeffizienten)  
$t$ ... Zeit in h  
$c(t)$ ... Konzentration in mg/L

(Diagramm: Werte und Funktion grafisch darstellen, Achsen beschriften: t [h], c(t) [mg/L])

**b)**  
Die momentane Änderungsrate ist proportional zur Wirkstoffmenge:
$\frac{dW}{dt}=-k\cdot W$  
$k>0$

___
![[Pasted image 20251021155144.png]]
**c)**  
Infusion: Pro Minute werden $2,3$ mg verabreicht, gleichzeitig Ausscheidung.  
Differentialgleichung:  
$\frac{dy}{dt}=-\frac{3}{50}\cdot (y-\frac{115}{3})$  
$t$ ... Zeit in min  
$y(t)$ ... Konzentration in mg/L

Trennung der Variablen:
$\frac{dy}{y-\frac{115}{3}}=-\frac{3}{50}dt$  
$\int \frac{dy}{y-\frac{115}{3}}=-\frac{3}{50}\int dt$  
$\ln|y(t)-\frac{115}{3}|=-\frac{3}{50}t+C_1$

Allgemeine Lösung:
$y(t)=C\cdot e^{-\frac{3}{50}t}+\frac{115}{3}$

Anfangsbedingung: $y(0)=0$  
$C\cdot e^{0}+\frac{115}{3}=0 \Rightarrow C=-\frac{115}{3}$  
Spezielle Lösung:
$y(t)=-\frac{115}{3}\cdot e^{-\frac{3}{50}t}+\frac{115}{3}$

Das ist von der Form $y(t)=a\cdot (1-e^{-k t})$ mit $a,k>0$.  
Begründung beschränktes Wachstum: Für steigendes $t$ wird $e^{-k t}$ immer kleiner, $y(t)$ wächst und nähert sich asymptotisch dem Wert $a$, überschreitet ihn aber nie.

**d)**  
Messwerte (Zeit in min): $60,\ 48,\ 50,\ 65,\ 69,\ 53,\ 64,\ 57,\ 67,\ 56$

Stichprobenmittelwert:
$\bar{x}=58,9\ \mathrm{min}$

Stichprobenstandardabweichung:
$s_{n-1}=7,28\ \mathrm{min}$

99%-Vertrauensbereich für den Erwartungswert $\mu$:
$\bar{x}\pm t_{f;1-\frac{\alpha}{2}}\cdot \frac{s_{n-1}}{\sqrt{n}}$  
$n=10$  
$t_{9;0,995}=3,249$

Grenzen:
$58,9\pm 3,249\cdot \frac{7,28}{\sqrt{10}}$  
$[51,42;\ 66,38]$

Der zweiseitige 99%-Vertrauensbereich für $\mu$ liegt bei $[51,42;\ 66,38]$ Minuten.