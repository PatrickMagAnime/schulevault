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