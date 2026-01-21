[[4.Mathe]]
___
![[Pasted image 20260120211338.png|700]]
Geg:
$\sum_{n=0}^{\infty} \frac{1}{3^n} = 1 + \frac{1}{3} + \frac{1}{9} + \frac{1}{27} + \dots$

**a)**
Konvergenz weil:
![[Pasted image 20260114110903.png|500]]
Die vorliegende Reihe ist eine geometrische Reihe der Form $\sum_{n=0}^{\infty} a \cdot q^n$ mit:
**Bildungsgestz** nennt man die formel der reihe!!!
$a = 1$
Bruch ist $\frac{1}{3}$ also q ist unter 1 und deswegen konvergent

Berechnung der Summe:

Summenformel ist für konvergente rihen:
$S = \frac{a}{1 - q}$

Eingesetzt ergibt das:
$S = \frac{1}{1 - \frac{1}{3}} = \frac{1}{\frac{2}{3}} = \frac{3}{2} = 1,5$

**b)**
Die 8. Teilsumme:
Man muss alle vorherigen sachen zusammen addieren.
$S_k = a \cdot \frac{1 - q^k}{1 - q}$

Für $k = 8$:
$S_8 = 1 \cdot \frac{1 - \left( \frac{1}{3} \right)^8}{1 - \frac{1}{3}} = \frac{1 - \frac{1}{6561}}{\frac{2}{3}}$
$S_8 = \frac{6560}{6561} \cdot \frac{3}{2} = \frac{3280}{2187} \approx 1,49977$

Der Fehler (Restglied $R_8$):
Der Fehler ergibt sich zwischen dem grenzwert S und der Näherung $S_8$

$R_8 = S - S_8$
$R_8 = \frac{3}{2} - \frac{3280}{2187}$

Hauptnenner bilden ($2 \cdot 2187 = 4374$):

$R_8 = \frac{6561}{4374} - \frac{6560}{4374} = \frac{1}{4374}$
$R_8 \approx 0,0002286$
___
![[Pasted image 20260120213317.png|700]]
![[Pasted image 20260120213603.png|500]]
das g ist:
**a)**
Rechnung:
$\left| \frac{a_{n+1}}{a_n} \right| = \frac{n+1}{3^{n+1}} \cdot \frac{3^n}{n} = \frac{n+1}{n} \cdot \frac{3^n}{3^n \cdot 3} = \left( 1 + \frac{1}{n} \right) \cdot \frac{1}{3}$

Grenzwert:
$L = \lim_{n \to \infty} \left[ \left( 1 + \frac{1}{n} \right) \cdot \frac{1}{3} \right] = 1 \cdot \frac{1}{3} = \frac{1}{3}$

Da $L = \frac{1}{3}$ kleine als 1, ist die Reihe konvergent.

**b)**
Rechnung:
$\left| \frac{a_{n+1}}{a_n} \right| = \frac{3^{n+1}}{(n+1)^2} \cdot \frac{n^2}{3^n} = \frac{3^n \cdot 3}{3^n} \cdot \frac{n^2}{(n+1)^2} = 3 \cdot \left( \frac{n}{n+1} \right)^2$

Grenzwert:
$L = \lim_{n \to \infty} \left[ 3 \cdot \left( \frac{1}{1 + \frac{1}{n}} \right)^2 \right] = 3 \cdot 1^2 = 3$

Da $L = 3$ größer als 1 ist , isst die Reihe divergent.

**c)**
Rechnung:
$\left| \frac{a_{n+1}}{a_n} \right| = \frac{1}{(n+1)^2} \cdot \frac{n^2}{1} = \frac{n^2}{(n+1)^2} = \left( \frac{n}{n+1} \right)^2$

Grenzwert:
$L = \lim_{n \to \infty} \left( \frac{1}{1 + \frac{1}{n}} \right)^2 = 1^2 = 1$

Da $L = 1$, liefert das Quotientenkriterium keine entetscheidung

**d)**
Rechnung:
$\left| \frac{a_{n+1}}{a_n} \right| = \frac{0,5^{n+1}}{(n+1)^2} \cdot \frac{n^2}{0,5^n} = \frac{0,5^n \cdot 0,5}{0,5^n} \cdot \left( \frac{n}{n+1} \right)^2 = 0,5 \cdot \left( \frac{n}{n+1} \right)^2$

Grenzwert:
$L = \lim_{n \to \infty} \left[ 0,5 \cdot \left( \frac{1}{1 + \frac{1}{n}} \right)^2 \right] = 0,5 \cdot 1^2 = 0,5$

Da $L = 0,5$ kleiner als 1, ist die Reihe konvergent

