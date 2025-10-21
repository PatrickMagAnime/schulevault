[[4.Mathe]]
___
![[Pasted image 20251021160253.png]]
**a)**  
1) Differenzialgleichung für die Temperatur des Champagners:  
$\frac{d\vartheta}{dt}=k\cdot(\vartheta-4)$

2) Lösung der Differenzialgleichung:  
Trennung der Variablen:  
$\int\frac{d\vartheta}{\vartheta-4}=\int kdt$  
$\ln|\vartheta-4|=k t+C_1$  
$\vartheta(t)-4=C\cdot e^{k t}$  
$\vartheta(t)=C\cdot e^{k t}+4$

Anfangsbedingungen:  
$\vartheta(0)=16\rightarrow C=12$

Nach 2 Stunden:  
$\vartheta(2)=10\rightarrow 12\cdot e^{2k}+4=10$  
$e^{2k}=\frac{1}{2}$  
$2k=\ln(0,5)$  
$k=-0,3466$

Lösung:  
$\vartheta(t)=12\cdot e^{-0,3466 t}+4$

___
![[Pasted image 20251021160308.png]]
**b)**  
1) Aus der Abbildung: $a=6$

2) Füllvolumen des Champagnerglases:  
$V_y=\pi\left(\int_2^0(y^2-6)^2dy+\int_0^{-3}(y^2-\frac{9}{1,5})^2dy\right)\approx 396\,\text{ml}$

3) Füllhöhe für $150\,\text{ml}$:  
$\pi\int_{h}^{-3}(y^2-\frac{9}{1,5})^2dy=150$  
$h=-0,275$  
$3-0,275=2,725$  
Die Füllhöhe beträgt rund $2,72\,\text{cm}$.

___
![[Pasted image 20251021160323.png]]
**c)**  
Preise für die Sorten Tradition ($x$), Rosé ($y$), Réserve ($z$):
Gleichungssystem in Matrizenform:$\begin{pmatrix}120 & 12 & 600\\84 & 60 & 420\\36 & 72 & 144\\\end{pmatrix}\begin{pmatrix}x\\y\\z\end{pmatrix}=\begin{pmatrix}9864\\7344\\47196\end{pmatrix}$
