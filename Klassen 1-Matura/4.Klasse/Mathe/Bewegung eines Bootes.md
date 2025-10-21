[[4.Mathe]]
___
![[Pasted image 20251021155406.png]]
**a)**  
Differenzialgleichung: $m\cdot\frac{dv}{dt}=-k\cdot v$  
$m>0$, $k>0$, $v>0$

Mathematische Argumentation:  
Da $k$ und $m$ und $v$ positiv sind, ist $\frac{dv}{dt}$ negativ.  
Das bedeutet, die Geschwindigkeit $v$ nimmt mit der Zeit ab.

Allgemeine Lösung:  
$\frac{dv}{dt}=-\frac{k}{m}\cdot v$  
Trennung der Variablen:  
$\int \frac{1}{v}dv=\int -\frac{k}{m}dt$  
$\ln|v|=-\frac{k}{m}t+C_1$  
$v(t)=C\cdot e^{-\frac{k}{m}t}$

___
![[Pasted image 20251021155420.png]]
**b)**  
Messwerte:
| t (s) | v (m/s) |
|-------|---------|
| 3     | 6,5     |
| 9     | 2,5     |
| 15    | 1,1     |
| 21    | 0,5     |

Exponentielle Ausgleichsfunktion:  
$v(t)=9,49\cdot 0,8677^t$  
oder  
$v(t)=9,49\cdot e^{-0,1419 t}$

Schätzwert für $t=5$ s:  
$v(5)=9,49\cdot e^{-0,1419\cdot 5}\approx 4,7$  
Zur Zeit $t=5$ s beträgt die Geschwindigkeit des Bootes etwa $4,7$ m/s.

___
![[Pasted image 20251021155506.png]]
**c)**  
Funktion des Motorboots:  
$v_{MB}(t)=a+b\cdot(e^{-0,1 t}-e^{-t})$, $a>0$, $b>0$

Mathematische Argumentation:  
Für $t\to\infty$ gehen $e^{-0,1 t}$ und $e^{-t}$ gegen $0$.  
Damit wird $v_{MB}(t)\to a$  
Die Gerade $v=a$ ist also eine Asymptote der Funktion.