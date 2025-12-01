[[4.ITSI]]
___
## WIEDERHOLUNG RSA-SIGNATUR (OHNE HASHFUNKTION!)

- **Parameter:**
  - p, q große Primzahlen
  - alle Rechnungen erfolgen, sofern nicht anders angegeben, modulo $n = p·q$
  - e public key von Alice – so gewählt, dass $ggT(e, (p-1)·(q-1)) = 1$
  - d private key von Alice – so berechnet, dass $e·d ≡ 1 mod (p-1)·(q-1) gilt (*)$

- **Signieren:**
  - Alice signiert Nachricht m:
    - $s = m^d$ Signatur von m

- **Verifizieren:**
  - Bob verifiziert Alices Signatur s der Nachricht m:
    - $s^e == m$ Verifikation der Signatur s
      - True: s ist gültige Signatur von m
      - False: s ist keine gültige Signatur von m
  - Erklärung: $s^e = (m^d)^e = m^(d·e) = m$ $(*)$

---

## AUFGABE 1: NO MESSAGE ATTACK

Oskar möchte Alices Signatur irgendeiner Nachricht m unterschieben, d. h. er will ohne Alices Mitwirkung eine gültige Signatur dieser Nachricht erzeugen. Oskar kennt nur Alices public key e (und natürlich den Modulus n), nicht aber ihren private key d. Wie muss Oskar vorgehen?

a) Sei n = 10 der Modulus und e = 7 Alices public key. Oskar wählt s = 2. Wie muss er die Nachricht m festlegen, damit s wie eine gültige Signatur von m aussieht (d. h. so, als hätte Alice m mit ihrem private key d signiert)?
![[Pasted image 20251201094459.png]]
b) Warum funktioniert dieser Angriff?
![[Pasted image 20251201094518.png]]

c) Wie muss man die RSA-Signatur anpassen, damit dieser Angriff nicht mehr funktioniert?
![[Pasted image 20251201094709.png]]
---

## AUFGABE 2: VORBEREITUNG CHOSEN MESSAGE ATTACK

Oskar hat zwei gültige Signaturen $s₁ = m₁^d$ und $s₂ = m₂^d$ von Alice erhalten und möchte daraus ohne Alices Mitwirkung eine dritte gültige Signatur s erzeugen. Zeige, dass $s = s₁·s₂$ eine gültige Signatur von $m = m₁·m₂$ ist!
![[Pasted image 20251201095601.png]]
---

## AUFGABE 3: CHOSEN MESSAGE ATTACK

Oskar möchte für eine bestimmte Nachricht M eine gültige Signatur erzeugen, die so aussieht, als hätte Alice M signiert. Oskar kennt Alices public key e = 7 (und den Modulus n = 10), nicht aber Alices private key d. Zusätzlich kann Oskar sich von Alice beliebige Nachrichten (außer M) signieren lassen. Wie muss Oskar vorgehen, um eine gültige Signatur von M zu erhalten? Nutze zur Lösung dein Wissen aus Aufgabe 2!

a) Welche Nachrichten m₁ und m₂ lässt Oskar sich von Alice signieren, um sein Ziel zu erreichen? Wie hängen m₁ und m₂ mit M zusammen?
![[Pasted image 20251201095621.png]]

b) Oskar will eine gültige Signatur von M = 4 erzeugen. Er wählt zufällig m₁ = 9. Welchen Schritt muss er als nächstes machen?
![[Pasted image 20251201095632.png]]

c) Oskar erhält von Alice die Signaturen s₁ = 9 und s₂ = 6 zu m₁ bzw. m₂. Wie lautet die Signatur von M?
![[Pasted image 20251201095643.png]]

d) Wie muss man die RSA-Signatur anpassen, damit dieser Angriff nicht mehr funktioniert?
![[Pasted image 20251201095654.png]]
