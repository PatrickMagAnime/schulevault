[[4.Mathe]]
___
![[Pasted image 20251021155909.png]]
**a)**  
Laktatkonzentration: $f(x)=0,0461\cdot e^{0,29x}+0,9$  
$x$ ... Geschwindigkeit in km/h  
$f(x)$ ... Laktatkonzentration in mmol/L  

Steigung 45°: $f'(x)=1$  
Ableitung: $f'(x)=0,0461\cdot 0,29\cdot e^{0,29x}=0,013369\cdot e^{0,29x}$  
Setze $f'(x)=1$:  
$0,013369\cdot e^{0,29x}=1$  
$e^{0,29x}=\frac{1}{0,013369}$  
$0,29x=\ln\left(\frac{1}{0,013369}\right)$  
$x=\frac{\ln(74,82)}{0,29}\approx 14,88$  
$f(14,88)=0,0461\cdot e^{0,29\cdot 14,88}+0,9\approx 4,35$  

Die anaerobe Schwelle liegt bei $4,35$ mmol/L.

___
![[Pasted image 20251021155922.png]]
**b)**  
Messwerte:
| Geschwindigkeit (km/h) | Herzschlagfrequenz (min$^{-1}$) |
|-----------------------|-------------------------------|
| 11,0                 | 140                           |
| 11,5                 | 150                           |
| 12,0                 | 162                           |
| 12,5                 | 168                           |
| 13,0                 | 175                           |
| 13,5                 | 182                           |
| 14,0                 | 190                           |
| 14,5                 | 200                           |

Lineare Ausgleichsfunktion:  
$f(x)=16,36\cdot x-37,68$

___
![[Pasted image 20251021155944.png]]
**c)**  
Formel für das Sauerstoffdefizit $D$:
$D=\int_{t_1}^{t_2}[s_{Arbeit}-s(t)]dt$  
Einheit: $L$
___
![[Pasted image 20251021160001.png]]
**d)**  
Differenzialgleichung: $\frac{dy}{dt}=-1,386\cdot(y-0,3)$  
Trennung der Variablen:  
$\frac{dy}{y-0,3}=-1,386dt$  
$\int\frac{dy}{y-0,3}=\int-1,386dt$  
$\ln|y-0,3|=-1,386t+C$  
$y(t)=C\cdot e^{-1,386t}+0,3$