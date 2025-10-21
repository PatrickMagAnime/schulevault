[[4.Mathe]]
___
![[Pasted image 20251021161249.png]]
**a)**  
Differenzialgleichung: $\frac{dT}{dt}=k\cdot(T_U-T)$

Gegeben: $T(t)=-10-C\cdot e^{-k t}$

Überprüfung:  
$T'(t)=k\cdot C\cdot e^{-k t}$  
Einsetzen: $k\cdot C\cdot e^{-k t}=k\cdot(T_U-(-10-C\cdot e^{-k t}))$  
$k\cdot C\cdot e^{-k t}=k\cdot(10+C\cdot e^{-k t})$  
$k\cdot C\cdot e^{-k t}=k\cdot C\cdot e^{-k t}$  
Die Lösung ist korrekt.

___
![[Pasted image 20251021161258.png]]
**b)**  
Bauteil B, $T_U=15^\circ$C, $k=0,8$, $T(0)=80^\circ$C

Trennung der Variablen:  
$\int\frac{dT}{15-T}=0,8 dt$  
$-\ln|15-T|=0,8 t+C_1$  
$15-T=C\cdot e^{-0,8 t}$  
$T(t)=15-C\cdot e^{-0,8 t}$

Anfangsbedingung: $T(0)=80$  
$15-C=80\Rightarrow C=-65$  
Lösung: $T(t)=15+65\cdot e^{-0,8 t}$

___
![[Pasted image 20251021161346.png]]
**c)**  
Gegeben: $T(t)=5\cdot(8\cdot e^{-k t}-1)$

1) Umgebungstemperatur:  
Für $t\to\infty$: $T(t)\to 5\cdot(0-1)=-5$  
$\Rightarrow T_U=-5^\circ$C

2) Temperatur zu Beginn:  
$t=0$: $T(0)=5\cdot(8\cdot 1-1)=5\cdot 7=35$  
Temperatur zu Beginn: $35^\circ$C