[[4.Mathe]]
___
![[Pasted image 20251021160709.png]]
**a)**  
1) der Ausdruck $\frac{3,6-1,4}{4-2}$ ist die mittlere Änderungsrate des Alkoholgehalts im Zeitintervall $[2;4]$ Tage.

2) Quadratische Ausgleichsfunktion (Koeffizienten gerundet):  
$a(t)=0,18\cdot t^2+0,05\cdot t+0,51$  
$t$ ... Zeit seit Beginn des Gärungsprozesses in Tagen  
$a(t)$ ... Alkoholgehalt zur Zeit $t$ in $\%$

3) Zuckergehalt bei $a(t)=11$ (Alkoholgehalt $11\%$):  
$0,18\cdot t^2+0,05\cdot t+0,51=11$  
$t_1=7,49$  
$z(7,49)=0,25\cdot (7,49)^2-4,1\cdot 7,49+17\approx 0,3$  
der Zucker ist $0,3\%$.

___
![[Pasted image 20251021160746.png]]
**b)**  
1) der Graph: $O(K)=K\cdot(a\cdot K+b)$ ist eine nach oben geöffnete Parabel durch den Ursprung.

___
![[Pasted image 20251021160759.png]]
**c)**  
1) differenzialgleichung:  
$\frac{dT}{dt}=k\cdot(20-T)$

2) lösung der differenzialgleichung:  
trennung der Variablen:  
$\int\frac{dT}{20-T}=kdt$  
$-\ln|20-T|=kt+C_1$  
$20-T=C\cdot e^{-kt}$  
$T(t)=20-C\cdot e^{-kt}$

Anfangsbedingung: $T(0)=10\rightarrow C=10$  
$T(20)=12\rightarrow 20-10\cdot e^{-20k}=12$  
$10\cdot e^{-20k}=8$  
$e^{-20k}=0,8$  
$-20k=\ln(0,8)$  
$k=0,01116$

Lösung:  
$T(t)=20-10\cdot e^{-0,01116t}$

3) Zeit für $T=15^\circ$C:  
$15=20-10\cdot e^{-0,01116t}$  
$10\cdot e^{-0,01116t}=5$  
$e^{-0,01116t}=0,5$  
$-0,01116t=\ln(0,5)$  
$t=\frac{\ln(0,5)}{-0,01116}\approx 62,1$
nach so $62$ Minuten erreicht der wein $15^\circ$C