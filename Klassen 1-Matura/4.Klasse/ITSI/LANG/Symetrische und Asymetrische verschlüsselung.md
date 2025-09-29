[[4.ITSI]]
___
1. d=e bzw. d leicht aus e berechenbar
	Symetrische Verschl. (auch "private key encryption" genannt)
	Nachteil: Sicherer Schlüssel austausch erforderlich
	Vorteil: Ziemlich Schnell

a) Blockschiffre: Klartext wird in Blöcke gleicher länge geteilt und blockweise Verschlüsselt. (Z.B DES (Data Encryption Standart, 3DES) Unsicher!, AES(Advanced Encryption Standard, 2000, 256Bit key)).

b) Stromschiffre: Klartext wird zeichenweise bit für bit verschlüsselt durch den sogenannten Schlüsselstrom. Klartext $X_{D}R$ Schlüssel= Schiffretext Bit.
Echtzeit Übertragung! (Z.B: A5, A5/3, A5/4 -> Mobilfunk)

2. $d\neq e$ bzw. d nicht aus e berechenbar
Asym. Verschlüsselung (auch "public key encryption" genannt) z.B RSA
	Nachteil: 1000mal langsamer als Symetrische Verschlüsselung
	Vorteil: Am sichersten

Cesar Verschlüsselung
e=3
$E_{3}(HTL)=kwo$

cäsar(JIVSOMPMQUVQA)

- 0 → JIVSOMPMQUVQA
    
- 1 → IHURNLOLPTUPZ
    
- 2 → HGTQMKNKOSTOY
    
- 3 → GFSPLJMJNRSNX
    
- 4 → FEROKILIMQRMW
    
- 5 → EDQNJHKHLPQLV
    
- 6 → DCPMIGJGKOPKU
    
- 7 → CBOLHFIFJNOJT
    
- 8 → **BANKGEHEIMNIS** 
 
Verschiebung um 8 für die Entschlüsselung
18 für die Verschlüsselung
