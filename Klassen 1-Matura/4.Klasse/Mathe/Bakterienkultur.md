[[4.Mathe]]
___
![[Pasted image 20251015104238.png]]
**a)**
allg exponentialgl: $N(t)=50^t$

Die Änderungsrate der Bakterienanzahl $N$ ist proportional zu $N$ selbst:  
$\frac{dN}{dt} = kN$


Trennung der Variablen und Integriern
$\frac{dN}{N} = k\,dt$
$\Rightarrow \int \frac{1}{N}\,dN = \int k\,dt$
$\Rightarrow \ln(N) = kt + C$

Mit $N(0) = 50$ folgt $C = \ln(50)$
$\ln(N) = kt + \ln(50)$
$\Rightarrow N(t) = 50e^{kt}$

Gegeben: $N(100) = 750$
$750 = 50e^{100k}$
$\Rightarrow e^{100k} = 15$
$\Rightarrow 100k = \ln(15)$
$\Rightarrow k = \frac{\ln(15)}{100}$

bakterien nach 3 Stunden

$N(180) = 50e^{k \cdot 180}$
$N(180) = 50 \cdot e^{\frac{\ln(15)}{100} \cdot 180}$
$N(180) = 50 \cdot e^{1.8 \cdot \ln(15)}$
$N(180) = 50 \cdot 15^{1.8}$
$N(180) \approx 50 \cdot 153.62$
$N(180) \approx 7681$  
Nach 3 Stunden sind etwa $7681$ Bakterien vorhanden.
___
![[Pasted image 20251015105655.png]]
**b)**
___
![[Pasted image 20251015105732.png]]
**c)**
