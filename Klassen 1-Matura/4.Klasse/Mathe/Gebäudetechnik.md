[[4.Mathe]]
___
![[Pasted image 20251021154854.png]]
**a)**  
Gegeben: $T(t)=a\cdot t^3+b\cdot t^2+c\cdot t+d$  
$t$ ... Zeit in Tagen  
$T(t)$ ... mittlere Tagestemperatur zur Zeit $t$ in $^\circ$C  

Zu Beginn: $T(0)=-5$  
Nach $98$ Tagen: $T(98)=8$ (dort ist auch der Wendepunkt)  
Nach $210$ Tagen: $T(210)=20$  

Wendepunkt: $T''(98)=0$  
$T''(t)=6a t+2b$

Gleichungssystem:
1. $a\cdot 0^3+b\cdot 0^2+c\cdot 0+d=-5$  
2. $a\cdot 98^3+b\cdot 98^2+c\cdot 98+d=8$  
3. $a\cdot 210^3+b\cdot 210^2+c\cdot 210+d=20$  
4. $6a\cdot 98+2b=0$

___
![[Pasted image 20251021154910.png]]
**b)**  
Gesamtschalldämmmaß der Wand:  
$R_{Ges}=-10\cdot \lg(f_F\cdot 10^{-\frac{R_F}{10}}+f_Z\cdot 10^{-\frac{R_Z}{10}})$  
$f_F$ ... relativer Flächenanteil Fenster  
$f_Z$ ... relativer Flächenanteil Ziegelmauer ($f_Z=1-f_F$)  
$R_F=43$ dB, $R_Z=65$ dB  
Wandfläche: $50\,m^2$  
Gefordert: $R_{Ges}\geq 55$ dB

1) Gesuchte Gleichung für maximalen Fensteranteil:
$55=-10\cdot \lg(f_F\cdot 10^{-4,3}+(1-f_F)\cdot 10^{-6,5})$

2) Berechnung:  
$f_F=0,0571$  
Maximale Fensterfläche:  
$A_{max}=f_F\cdot 50=2,857...$  

Ergebnis: Die maximale Fensterfläche beträgt rund $2,86\,m^2$.

___
![[Pasted image 20251021154923.png]]
**c)**  
Luftvolumen Schlafzimmer: $45\,m^3$  
Zu Beginn: $V(0)=0,2\%$ des Volumens $=0,002\cdot 45=0,09\,m^3$  
Differenzialgleichung:  
$\frac{dV}{dt}=0,006-\frac{V}{3}$

1) Allgemeine Lösung:  
$\frac{dV}{dt}+\frac{V}{3}=0,006$  
Integrationsfaktor: $\mu(t)=e^{\frac{t}{3}}$  
Multiplikation: $e^{\frac{t}{3}}\frac{dV}{dt}+\frac{V}{3}e^{\frac{t}{3}}=0,006 e^{\frac{t}{3}}$  
Ableitung eines Produkts: $\frac{d}{dt}(V\cdot e^{\frac{t}{3}})=0,006 e^{\frac{t}{3}}$  
Integration:  
$\int \frac{d}{dt}(V\cdot e^{\frac{t}{3}})dt=\int 0,006 e^{\frac{t}{3}} dt$  
$V\cdot e^{\frac{t}{3}}=0,018 e^{\frac{t}{3}}+C$  
$V(t)=0,018+C e^{-\frac{t}{3}}$

Anfangsbedingung: $V(0)=0,09=0,018+C$  
$\Rightarrow C=0,072$  
$V(t)=0,018+0,072 e^{-\frac{t}{3}}$

2) Halbwertszeit ($V(t)=\frac{1}{2}V(0)=0,045$):  
$0,045=0,018+0,072 e^{-\frac{t}{3}}$  
$0,027=0,072 e^{-\frac{t}{3}}$  
$e^{-\frac{t}{3}}=\frac{0,027}{0,072}$  
$-\frac{t}{3}=\ln\left(\frac{0,027}{0,072}\right)$  
$t=-3\cdot \ln\left(\frac{0,027}{0,072}\right)\approx 2,94$

Nach etwa $2,9$ Minuten ist der ursprüngliche CO$_2$-Gehalt halbiert.