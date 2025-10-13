[[4.ITSI]]
___
Prinzip ist selbst wenn der key öffetlich ist, kann ein anderer es nicht entschlüsseln

Parameter: öffentliche primzahl p; basis g.

Alice: berechnet $A=g^a$ (mod p)
Bob:$B=g^b$ (mod p)
und diese keys werden ausgetauscht.
dann berechnet:
Alice:$K=B^a$ (mod p)
Bob:$K=A^b$ (mod p)
Und deren ergebnisse sind dann gleich.

###### Man in the Middle Angriff

Alice:$A=g^a$ (mod p)
Bob:$B=g^b$ (mod p)
Claire: und sie fängt jetzt die keys ab. $C=g^c$ (mod p) und das schickt sie an alice und bob
Alice: berechnet AC und Bob macht es genau so mit seinem key.
