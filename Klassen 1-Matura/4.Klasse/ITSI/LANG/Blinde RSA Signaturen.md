[[4.ITSI]]
___
Szenario: "anonyme authentizität"
- Bestätigung das nur nutzer x zum zeitpunkt t über eigenschaft y verfügt. Zb: anonymer altersnachweis.
![[blinde signatur mit rsa|1000]]
- Anforderung:
blinde signaturen einer nachricht sollte auch nur eine gültige signatur erzeugen!

Ist nicht erfüllt:
A hat von B signierte nachricht m,
$s_{2}^d=(s*r_{2})^e =(m^d*r_{2})^e=m^{de}*r_{2}^e=m*r_{2}^e=m_{2}$ mod n
Abhilfe: Hashfunktion verwenden!