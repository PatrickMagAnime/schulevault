[[4.Mathe]]
___
### Stoff 1. Mathe Schularbeit
#### 1. Differenzialrechnung
- Anwendungsbeispiele (3. Klasse-Buch, SRDP-Aufgaben)
- Partielles Ableiten **(1.3 – 1.11)**
#### 2. Integralrechnung
- Anwendungsbeispiele, SRDP-Aufgaben (3. Klasse-Buch, SRDP-Aufgaben)
- Substitution (relevant für Methode Trennung der Variablen)
#### 3. Differenzialgleichungen
- Grundbegriffe **(3.7 – 3.17)**
- 1. Ordnung (Trennung der Variable, homogen – inhomogen, etc.) **(3.29 – 3.39, 3.51 – 3.72)**
- 2. Ordnung **(3.73 – 3.80)**
- Schwingungen **(3.84 – 3.95)**
- SRDP-Aufgaben (z.B. [[Bakterienkultur]] a), [[Gebäudetechnik]] c), [[Bewegung eines Bootes]] a), [[Wirkstoffkonzentration]] b), [[Blut]] d), [[Leistungsdiagnostik im Sport]] d) )
___

**1.)**
# Partielle Ableitungen: Schritt-für-Schritt-Erklärung

## Was ist partielles Ableiten?
Für Funktionen mit mehreren Variablen (z. B. $f(x,y)$ oder $f(x,y,z)$) leiten wir partiell nach genau einer Variablen ab, während alle anderen Variablen als konstant behandelt werden.

**Notation**
$$
\frac{\partial f}{\partial x}=f_x,\qquad
\frac{\partial f}{\partial y}=f_y,\qquad
\frac{\partial^2 f}{\partial x\,\partial y}=f_{xy}\,.
$$

## Grundregeln (analog zur 1D-Ableitung)
Sei $c$ eine Konstante. Beim Ableiten nach $x$ sind $y,z,\dots$ konstant (und umgekehrt).
$$
\begin{aligned}
\text{Konstantenregel:}\quad & \frac{\partial}{\partial x}\,c = 0 \\
\text{Faktorregel:}\quad & \frac{\partial}{\partial x}\,(c\,g(x,y)) = c\,\frac{\partial g}{\partial x} \\
\text{Summenregel:}\quad & \frac{\partial}{\partial x}\,(g+h) = \frac{\partial g}{\partial x} + \frac{\partial h}{\partial x} \\
\text{Potenzregel:}\quad & \frac{\partial}{\partial x}\,(x^n)=n\,x^{n-1} \\
\text{Produktregel:}\quad & \frac{\partial}{\partial x}(uv)=u_x v + u v_x \\
\text{Quotientenregel:}\quad & \frac{\partial}{\partial x}\!\left(\frac{u}{v}\right)=\frac{u_x v - u v_x}{v^2} \\
\text{Kettenregel:}\quad & \frac{\partial}{\partial x}\,g(h(x,y))=g'(h(x,y))\cdot h_x
\end{aligned}
$$

---

## Beispiel A: Polynom (Schritt für Schritt)
Gegeben
$$
f(x,y)=3x^2 y^3 - 4xy + 5y.
$$

Ableitung nach $x$:
$$
\begin{aligned}
\frac{\partial}{\partial x}(3x^2 y^3) &= 6x y^3,\\
\frac{\partial}{\partial x}(-4xy) &= -4y,\\
\frac{\partial}{\partial x}(5y) &= 0,\\
\Rightarrow\quad f_x(x,y) &= 6xy^3 - 4y.
\end{aligned}
$$

Ableitung nach $y$:
$$
\begin{aligned}
\frac{\partial}{\partial y}(3x^2 y^3) &= 9x^2 y^2,\\
\frac{\partial}{\partial y}(-4xy) &= -4x,\\
\frac{\partial}{\partial y}(5y) &= 5,\\
\Rightarrow\quad f_y(x,y) &= 9x^2 y^2 - 4x + 5.
\end{aligned}
$$

---

## Beispiel B: Exponential- und trigonometrische Funktionen (mit Kettenregel)
Gegeben
$$
f(x,y)=e^{xy}+\sin(x^2 y).
$$

Ableitung nach $x$:
$$
\begin{aligned}
\frac{\partial}{\partial x}\,e^{xy} &= e^{xy}\cdot \frac{\partial}{\partial x}(xy) = y\,e^{xy},\\
\frac{\partial}{\partial x}\,\sin(x^2 y) &= \cos(x^2 y)\cdot \frac{\partial}{\partial x}(x^2 y)=\cos(x^2 y)\cdot (2xy),\\
\Rightarrow\quad f_x &= y\,e^{xy} + 2xy\,\cos(x^2 y).
\end{aligned}
$$

Ableitung nach $y$:
$$
\begin{aligned}
\frac{\partial}{\partial y}\,e^{xy} &= e^{xy}\cdot \frac{\partial}{\partial y}(xy) = x\,e^{xy},\\
\frac{\partial}{\partial y}\,\sin(x^2 y) &= \cos(x^2 y)\cdot \frac{\partial}{\partial y}(x^2 y)=\cos(x^2 y)\cdot x^2,\\
\Rightarrow\quad f_y &= x\,e^{xy} + x^2 \cos(x^2 y).
\end{aligned}
$$

---

## Beispiel C: Quotientenregel
$$
f(x,y)=\frac{x^2 + y}{x - y},\qquad u=x^2+y,\quad v=x-y.
$$

Ableitung nach $x$:
$$
\begin{aligned}
u_x=2x,\quad v_x=1
&\Rightarrow
f_x=\frac{u_x v - u v_x}{v^2}
=\frac{(2x)(x-y)-(x^2+y)}{(x-y)^2}\\
&=\frac{2x^2-2xy - x^2 - y}{(x-y)^2}
=\frac{x^2-2xy-y}{(x-y)^2}.
\end{aligned}
$$

Ableitung nach $y$:
$$
\begin{aligned}
u_y=1,\quad v_y=-1
&\Rightarrow
f_y=\frac{u_y v - u v_y}{v^2}
=\frac{(x-y)-(x^2+y)(-1)}{(x-y)^2}\\
&=\frac{x-y+x^2+y}{(x-y)^2}
=\frac{x^2+x}{(x-y)^2}.
\end{aligned}
$$

---

## Beispiel D: Drei Variablen
$$
f(x,y,z)=x\,y^2\,z^3
\quad\Rightarrow\quad
f_x=y^2 z^3,\quad
f_y=2xy\,z^3,\quad
f_z=3xy^2 z^2.
$$

---

## Beispiel E: Gemischte Ableitungen
$$
f(x,y)=x^2 y^3.
$$
$$
\begin{aligned}
f_x &= 2x y^3 \ \Rightarrow\ f_{xy}=\frac{\partial}{\partial y}(2x y^3)=6xy^2,\\
f_y &= 3x^2 y^2 \ \Rightarrow\ f_{yx}=\frac{\partial}{\partial x}(3x^2 y^2)=6x y^2.
\end{aligned}
$$
Bei hinreichender Glattheit gilt $f_{xy}=f_{yx}$ (Satz von Schwarz/Clairaut).

---

## Beispiel F: Tangentialebene (lineare Approximation)
$$
z=f(x,y)=x^2 y + 2y^2,\qquad (a,b)=(1,1).
$$
$$
\begin{aligned}
f(1,1)&=1^2\cdot 1 + 2\cdot 1^2=3,\\
f_x=2xy &\Rightarrow f_x(1,1)=2,\\
f_y=x^2+4y &\Rightarrow f_y(1,1)=1+4=5.
\end{aligned}
$$
Tangentialebene in $(1,1)$:
$$
z \approx f(1,1)+f_x(1,1)(x-1)+f_y(1,1)(y-1)
= 3 + 2(x-1) + 5(y-1) = 2x + 5y - 4.
$$

---

## Beispiel G: Typische Kettenregel-Fallen
$f(x,y)=\ln(x^2+y^2)$:
$$
f_x=\frac{2x}{x^2+y^2},\qquad f_y=\frac{2y}{x^2+y^2}.
$$

$f(x,y)=\sqrt{x^2+y^2}=(x^2+y^2)^{1/2}$:
$$
f_x=\frac{x}{\sqrt{x^2+y^2}},\qquad f_y=\frac{y}{\sqrt{x^2+y^2}}.
$$

---

## Interpretation/Anwendung (SRDP-typisch)
Änderungsraten: $f_x(a,b)$ ist die momentane Änderungsrate in $x$-Richtung (bei festem $y$).
$$
T(x,y)=100-x^2-2y^2,\qquad T_x=-2x,\quad T_y=-4y.
$$
Am Punkt $(3,1)$:
$$
T_x(3,1)=-6,\qquad T_y(3,1)=-4.
$$
Gradient:
$$
\nabla f(x,y)=\big(f_x(x,y),\,f_y(x,y)\big),\quad \|\nabla f\|\ \text{= Steilheit (Größe der stärksten Zunahme)}.
$$
---

## Kurz-Spickzettel
- $f_x$: nach $x$ ableiten; $y,z,\dots$ konstant.
- $f_y$: nach $y$ ableiten; $x,z,\dots$ konstant.
- Produkt: $(uv)_x=u_x v + u v_x$.
- Quotient: $\displaystyle (u/v)_x=\frac{u_x v - u v_x}{v^2}$.
- Kette: $\displaystyle \frac{\partial}{\partial x} g(h(x,y)) = g'(h)\cdot h_x$.
- Gemischt: $f_{xy}=f_{yx}$ (unter passenden Glattheitsbedingungen).
- Tangentialebene bei $(a,b)$:
$$
z \approx f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b).
$$

