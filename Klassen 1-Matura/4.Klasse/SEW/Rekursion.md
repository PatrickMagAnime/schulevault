[[4.SEW]]
___
Rekursion (kurze Mitschrift)
- Idee: Eine Funktion ruft sich (mit veränderten Parametern) selbst auf, bis ein Basisfall erreicht ist.
- Wichtige Bestandteile:
  1. Basisfall (Abbruchbedingung) – verhindert unendliche Aufrufe
  2. Rekursiver Fall – verkleinert das Problem
- Gefahr: Fehlender oder falscher Basisfall ⇒ Stack Overflow
- Beispielproblem: Fakultät (Produkt aller natürl. Zahlen 1..n)

Mathematische Definition:
$$n! = \begin{cases}1,& n=0 \\ n \cdot (n-1)!,& n>0\end{cases}$$

Call-Stack-Idee für 4!: 4! → 4·3! → 3·2! → 2·1! → 1 → Rückgabe multipliziert sich hoch

Python:
```python
def fakultaet(n: int) -> int:
    if n < 0:
        raise ValueError("Nur für n >= 0 definiert")
    if n == 0:
        return 1              # Basisfall
    return n * fakultaet(n - 1)  # Rekursiver Fall

# Beispiel
print(fakultaet(5))  # 120
```

Java:
```java
public static long fakultaet(int n) {
    if (n < 0) throw new IllegalArgumentException("n >= 0 erforderlich");
    if (n == 0) return 1;        // Basisfall
    return n * fakultaet(n - 1); // Rekursiver Fall
}
```

Tail-Recursion (optimierbar in manchen Sprachen, nicht in Java/Python):
```python
def fak_tail(n, acc=1):
    if n == 0:
        return acc
    return fak_tail(n - 1, n * acc)
```

Iterativer Vergleich:
```python
def fak_iter(n):
    result = 1
    for k in range(2, n + 1):
        result *= k
    return result
```

Komplexität:
- Zeit: O(n)
- Speicher (Call-Stack): O(n) (iterativ: O(1))

Merksatz: Rekursion eignet sich bei natürlicher Selbstähnlichkeit (Baumstrukturen, Zerlegung, Divide & Conquer) und wenn der Basisfall klar ist.
