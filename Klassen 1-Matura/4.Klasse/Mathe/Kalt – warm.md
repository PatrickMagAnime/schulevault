[[4.Mathe]]
___
![[Pasted image 20251021160451.png]]
**a)**  
Die Funktion: $T(t)=a\cdot(1-e^{-\frac{t}{8}})+20$  
Aus der Grafik: $a=70$

Die Berechnung $\frac{1}{b}\int_0^b T(t)dt=60^\circ$C bedeutet:  
Im Zeitintervall $[0;b]$ beträgt die mittlere Temperatur $60^\circ$C.

___
![[Pasted image 20251021160503.png]]
**b)**  
Funktion: $T(t)=8+42\cdot e^{-\frac{t}{84}}$  
$t$ in min, $T(t)$ in $^\circ$C

Gleichung der Tangente an $T$ bei $t=0$:  
$T'(t)=-\frac{42}{84}\cdot e^{-\frac{t}{84}}$, also $T'(0)=-0,5$  
$T(0)=50$  
Tangente: $f(t)=-0,5\cdot t+50$

Das Zeitintervall, in dem die Abweichung max. $2^\circ$C beträgt:  
$8+42\cdot e^{-\frac{t}{84}}-(-0,5\cdot t+50)=2$  
Lösung: $t=27,3$  
Das Intervall ist $[0;27]$ Minuten.

___
![[Pasted image 20251021160516.png]]
**c)**  
Differenzialgleichung: $\frac{dT}{dt}=k\cdot(T-T_U)$

Argumentation:  
Für $T>T_U$ ist $(T-T_U)>0$ und die Temperatur soll abnehmen, also muss $\frac{dT}{dt}<0$.  
Deshalb: $k<0$

Trennung der Variablen:  
$\frac{dT}{T-T_U}=kdt$  
$\int \frac{dT}{T-T_U}=\int kdt$  
$\ln|T-T_U|=k t+C_1$  
Allgemeine Lösung: $T(t)=T_U+C\cdot e^{k t}$

Mit $T(0)=T_0$:  
$C=T_0-T_U$  
Spezielle Lösung: $T(t)=T_U+(T_0-T_U)\cdot e^{k t}$