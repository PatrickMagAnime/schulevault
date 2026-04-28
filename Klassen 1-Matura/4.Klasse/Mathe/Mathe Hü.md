[[4.Mathe]]
___

#### 1.19 
**a)**

Gegeben:  
$z = 2x + y - 1$  
$x_0=2{,}10,; y_0=0{,}40,\quad x_1=2{,}05,; y_1=0{,}50$

Änderungen:  
$dx = x_1 - x_0 = -0{,}05,\quad dy = 0{,}10$

Totales Differential:  
$dz = \frac{\partial z}{\partial x}dx + \frac{\partial z}{\partial y}dy = 2dx + 1dy$

$dz = 2(-0{,}05) + 0{,}10 = -0{,}10 + 0{,}10 = 0$

**→ Näherung:**  
$\Delta z \approx 0$

**Exakt:**  
$z_0 = 2\cdot2{,}10 + 0{,}40 -1 = 3{,}6$  
$z_1 = 2\cdot2{,}05 + 0{,}50 -1 = 3{,}6$

$\Delta z = 0$

**b)**

$z = \frac{x}{y}$

$dx = 0{,}02,\quad dy = 0{,}04$

Ableitungen:  
$\frac{\partial z}{\partial x} = \frac{1}{y}, \quad \frac{\partial z}{\partial y} = -\frac{x}{y^2}$

Einsetzen bei $(x_0,y_0)=(1{,}20,3{,}50)$:  
$\frac{1}{y} = \frac{1}{3{,}5} \approx 0{,}2857$  
$\frac{x}{y^2} = \frac{1{,}2}{3{,}5^2} = \frac{1{,}2}{12{,}25} \approx 0{,}09796$

Totales Differential:  
$dz \approx 0{,}2857\cdot0{,}02 - 0{,}09796\cdot0{,}04$  
$dz \approx 0{,}005714 - 0{,}003918 = 0{,}00180$

**Exakt:**  
$z_0 = \frac{1{,}2}{3{,}5} \approx 0{,}342857$  
$z_1 = \frac{1{,}22}{3{,}54} \approx 0{,}34463$

$\Delta z \approx 0{,}00177$

---

# **1.20**

Volumen:  
$V = \pi h (R^2 - r^2)$

Gegeben:  
$r=6{,}0,; R=8{,}0,; h=18$  
$dr=+0{,}20,\quad dR=-0{,}10$

---

### **a) exakt**

$V_0 = 18\pi (64-36) = 504\pi$

$V_1 = 18\pi (7{,}9^2 - 6{,}2^2) = 18\pi(62{,}41-38{,}44)=18\pi\cdot23{,}97$

$V_1 = 431{,}46\pi$

$\Delta V = (431{,}46 - 504)\pi = -72{,}54\pi \approx -227{,}9$

---

### **b) Differential**

$dV = \pi h (2R,dR - 2r,dr)$

$dV = 18\pi (2\cdot8\cdot(-0{,}1) - 2\cdot6\cdot0{,}2)$

$dV = 18\pi(-1{,}6 - 2{,}4) = 18\pi(-4) = -72\pi \approx -226{,}2$

---

# **1.23**

Gegeben:  
$x = 50{,}0 \pm 0{,}2,\quad y = 10{,}0 \pm 0{,}1$

Gesamtfehler:  
$\Delta z = \Delta x + \Delta y = 0{,}3$

---

### **Summe $z = x + y$**

Maximaler Fehler bei:  
$x = 50{,}2,\quad y = 10{,}1 \Rightarrow z \text{ maximal}$

Minimal bei:  
$x = 49{,}8,\quad y = 9{,}9$

---

### **Differenz $z = x - y$**

Maximal:  
$x = 50{,}2,\quad y = 9{,}9$

Minimal:  
$x = 49{,}8,\quad y = 10{,}1$

---

# **1.26**

$\rho = \frac{m}{V}$

Relative Fehler:  
$\frac{\Delta \rho}{\rho} \approx \frac{\Delta m}{m} + \frac{\Delta V}{V}$

$= 3% + 2% = 5%$

**→ Forderung (4%) nicht erfüllbar**

---

# **1.34**

$V = \frac{\pi h^2}{3}(3r - h)$

Gegeben:  
$h = 54 \pm 0{,}5,\quad r = 48 \pm 0{,}5$

---

### Ableitungen

$\frac{\partial V}{\partial h} = \pi(2hr - h^2)$  
$\frac{\partial V}{\partial r} = \pi h^2$

Einsetzen:

$2hr - h^2 = 2\cdot54\cdot48 - 54^2 = 5184 - 2916 = 2268$

$\Rightarrow \frac{\partial V}{\partial h} = 2268\pi$

$\frac{\partial V}{\partial r} = 54^2\pi = 2916\pi$

---

### Fehler:

$\Delta V \approx |2268\pi|\cdot0{,}5 + |2916\pi|\cdot0{,}5$

$\Delta V = 0{,}5\pi(2268+2916) = 2592\pi$

$\Delta V \approx 8144\ \text{mm}^3$

---

### Volumen:

$V = \frac{\pi}{3}\cdot54^2\cdot(144-54)$  
$= \frac{\pi}{3}\cdot2916\cdot90 = 87480\pi$

$V \approx 274800\ \text{mm}^3$

---

Wenn du willst, mach ich dir das als **perfekt formatierten Obsidian-Block zum Copy-Paste** oder rechne noch 1.19 c 👍