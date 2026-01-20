[[4.Mathe]]
___
![[Pasted image 20260120211338.png|700]]
Geg:
$\sum_{n=0}^{\infty} \frac{1}{3^n} = 1 + \frac{1}{3} + \frac{1}{9} + \frac{1}{27} + \dots$

**a)**
Konvergenz weil:
![[Pasted image 20260114110903.png|500]]
Die vorliegende Reihe ist eine geometrische Reihe der Form $\sum_{n=0}^{\infty} a \cdot q^n$ mit:
$a = 1$
Bruch ist $\frac{1}{3}$ also q ist unter 1 und daher konvergent.

Eine unendliche geometrische Reihe konvergiert, wenn der Betrag des Quotienten kleiner als $1$ ist:

$$|q| < 1 \implies \left| \frac{1}{3} \right| < 1$$

Die Bedingung ist erfüllt, die Reihe ist somit konvergent.

2. Berechnung der Summe ($S$):

Die Summenformel für konvergente geometrische Reihen lautet:

$$S = \frac{a}{1 - q}$$

Eingesetzt ergibt das:

$$S = \frac{1}{1 - \frac{1}{3}} = \frac{1}{\frac{2}{3}} = \frac{3}{2} = 1,5$$

---

### b) 8. Teilsumme und Fehler

1. Die 8. Teilsumme ($S_8$):

"Nach dem 8. Glied abgebrochen" bedeutet, dass wir die Glieder von $n=0$ bis $n=7$ addieren (insgesamt 8 Summanden). Die Formel für die Partialsumme $S_k$ lautet:

$$S_k = a \cdot \frac{1 - q^k}{1 - q}$$

Für $k = 8$:

$$S_8 = 1 \cdot \frac{1 - \left( \frac{1}{3} \right)^8}{1 - \frac{1}{3}} = \frac{1 - \frac{1}{6561}}{\frac{2}{3}}$$

$$S_8 = \frac{6560}{6561} \cdot \frac{3}{2} = \frac{3280}{2187} \approx 1,49977$$

2. Der Fehler (Restglied $R_8$):

Der Fehler ergibt sich aus der Differenz zwischen dem exakten Grenzwert $S$ und der Näherung $S_8$:

$$R_8 = S - S_8$$

$$R_8 = \frac{3}{2} - \frac{3280}{2187}$$

Hauptnenner bilden ($2 \cdot 2187 = 4374$):

$$R_8 = \frac{6561}{4374} - \frac{6560}{4374} = \frac{1}{4374}$$

$$R_8 \approx 0,0002286$$

> [!SUCCESS] Ergebnis
> 
> Die Summe der unendlichen Reihe ist $1,5$. Die Näherung durch die ersten 8 Glieder liefert $1,49977$ mit einem Fehler von nur etwa $0,00023$.

---

Soll ich dir noch erklären, wie man den Fehler $R_n$ direkt über eine Formel berechnet, ohne erst die Teilsumme bestimmen zu müssen?