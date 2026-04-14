[[4.Mathe]]
___
![[Pasted image 20260414230932.png]]
**e)**
$f(x) = e^{2x}$
Ableitung (Kettenregel):
$f'(x) = 2e^{2x}$

Wert an der Stelle ( x_0 = 1 ):
$f'(1) = 2e^2$

Differential:
$\mathrm{d}f = f'(1),(x - 1) = 2e^2 (x - 1)$
___

![[Pasted image 20260414231252.png]]
**d)**

Gegeben:  
$y = \ln x, \quad x_0 = 2$

Ableitung:
$y'(x) = \frac{1}{x}$  

Wert an der Stelle $( x_0 = 2 ):$  
$y'(2) = \frac{1}{2}$  

Differential:
$dy = y'(2),dx = \frac{1}{2}dx$ 

Für $( dx = -0{,}2 ):$
$dy = \frac{1}{2} \cdot (-0{,}2) = -0{,}1$  

$\Delta y = \ln(2 - 0{,}2) - \ln(2) = \ln(1{,}8) - \ln(2)$  

Für $( dx = -0{,}002 ):$
$dy = \frac{1}{2} \cdot (-0{,}002) = -0{,}001$  

$\Delta y = \ln(1{,}998) - \ln(2)$
___

![[Pasted image 20260414231747.png]]
Gegeben:
$d = 20,\text{cm} \Rightarrow r = 10,\text{cm}, \quad \Delta d = 0{,}1,\text{cm} \Rightarrow dr = 0{,}05,\text{cm}$

Volumen der Kugel:
$V = \frac{4}{3}\pi r^3$

**Exakte Volumenzunahme:**
$\Delta V = \frac{4}{3}\pi \left((10{,}05)^3 - 10^3\right)$

**Näherung mit Differential:**
$dV = 4\pi r^2,dr$
$dV = 4\pi \cdot 10^2 \cdot 0{,}05 = 20\pi$

**Relativer Fehler:**
$\text{rel. Fehler} = \frac{|\Delta V - dV|}{\Delta V}$
___

![[Pasted image 20260414232208.png]]
Gegebene Werte
$d = 50,0\,\text{cm}$    
$\Delta d = 0,5\,\text{cm}$ 
Relativer Fehler Durchmesser: $\frac{\Delta d}{d} = \frac{0,5}{50} = 0,01 = 1\%$ 

**a)** 
Volumen $V = \frac{1}{6} \pi d^3$
Absoluter Maximalfehler ($dV$):
$V'(d) = \frac{1}{2} \pi d^2$
$dV \approx V'(d) \cdot \Delta d = \frac{1}{2} \cdot \pi \cdot 50^2 \cdot 0,5 \approx 1963,5\,\text{cm}^3$

Relativer Maximalfehler:
$\frac{dV}{V} = \frac{\frac{1}{2} \pi d^2 \cdot \Delta d}{\frac{1}{6} \pi d^3} = 3 \cdot \frac{\Delta d}{d} = 3 \cdot 1\% = 3\%$

**b)** 
Oberfläche $O = \pi d^2$

Absoluter Maximalfehler ($dO$):
$O'(d) = 2 \pi d$
$dO \approx O'(d) \cdot \Delta d = 2 \cdot \pi \cdot 50 \cdot 0,5 \approx 157,08\,\text{cm}^2$

Relativer Maximalfehler:
$\frac{dO}{O} = \frac{2 \pi d \cdot \Delta d}{\pi d^2} = 2 \cdot \frac{\Delta d}{d} = 2 \cdot 1\% = 2\%$
