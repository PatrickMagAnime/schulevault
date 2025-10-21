[[4.Mathe]]
___
![[Pasted image 20251021155116.png]]
**a)**  

**b)**  
Die momentane Änderungsrate ist proportional zur Wirkstoffmenge:
Das heißt die Konzentration im Blut sinkt.
$\frac{dW}{dt}=-k\cdot W$  
$k>0$

___
![[Pasted image 20251021155144.png]]
**c)**  
Infusion: Pro Minute werden $2,3$ mg verabreicht, gleichzeitig Ausscheidung.  
Differentialgleichung:  
$y(0)=0$
$\frac{dy}{dt}=-\frac{3}{50}\cdot (y-\frac{115}{3})$  
$t$ ... Zeit in min  
$y(t)$ ... Konzentration in mg/L

Trennung der Variablen:
$\frac{dy}{y-\frac{115}{3}}=-\frac{3}{50}dt$  
$\int \frac{dy}{y-\frac{115}{3}}=-\frac{3}{50}\int dt$  
$\ln|y(t)-\frac{115}{3}|=-\frac{3}{50}t+C_1$

Allg Lösunk:
$y(t)=C\cdot e^{-\frac{3}{50}t}+\frac{115}{3}$

Anfangsbedingung: $y(0)=0$  
$C\cdot e^{0}+\frac{115}{3}=0 \Rightarrow C=-\frac{115}{3}$  
Spezielle Lösung:
$y(t)=-\frac{115}{3}\cdot e^{-\frac{3}{50}t}+\frac{115}{3}$

Das ist von der Form $y(t)=a\cdot (1-e^{-k t})$ mit $a,k>0$.  
a ist die grenze. das $(1-e^{-k t})$ wird immer größer bis 1 erreciht wird
Begründung beschränktes Wachstum: Für steigendes $t$ wird $e^{-k t}$ immer kleiner, $y(t)$ wächst und nähert sich dem Wert a.
