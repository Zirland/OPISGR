//!JS
var text = '';

text += 'Ukon�en� ud�losti ';
text += 'ID - '; 
text += U.UID;
text += '\n';
text += '�as ohl�en�: '; 
text += U.dc_ohlaseni;
//text += U.A.kraj + ' - ';
//text += U.A.obec;
text += '\n';
text += '�as uzav�en�: '; 
text += U.dc_uzavreni;

text += '\n';
text += 'Zasahuj�c� jednotky:\n';
for (i = 0; i < U.J.pocet; i++) {
	var JPOnazev = U.J[i].nazev;
	var JPOkat = U.J[i].kategorie;

	text += '� ' + JPOnazev + ' (' + JPOkat + ')\n';
}

//text += X.jmeno_uzivatele;
//return text;

print(text);