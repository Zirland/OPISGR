//!JS
var text = '';

text += 'Ukon�en� ud�losti ';
text += (U.ZOC == 1 ? 'typu ZO� ' : '');
text += '- ID ' + U.UID + '\n';

text += '\n';
text += '�as ohl�en�: ' + U.dc_ohlaseni + '\n';
text += '�as uzav�en�: ' + U.dc_uzavreni + '\n';

text += '\n';
text += 'Klasifikace: ' + U.C.typ + ' / ' + U.C.podtyp + '\n';
text += 'Popis: ' + U.C.popis + '\n';
text += 'Adresa: ' + (U.A.statUID == 1 ? '' : U.A.stat + ', ')
	+ (U.A.kraj ? 'Kraj ' + U.A.kraj : '')
	+ (U.A.okres && U.A.okres != U.A.kraj ? ', ' + 'Okres ' + U.A.okres : '')
	+ (U.A.obec ? ', ' + U.A.obec : '')
	+ (U.A.cobce && U.A.cobce != U.A.obec ? ', ' + U.A.cobce : '')
	+ (U.A.silnice ? ', ' + U.A.silnice : '')
	+ (U.A.ulice ? ', ' + U.A.ulice : '')
text += '\n';

text += '\n';
text += 'Zasahuj�c� jednotky:\n';
for (i = 0; i < U.J.pocet; i++) {
	var JPOnazev = U.J[i].nazev;
	var JPOkat = U.J[i].kategorie;

	text += '� ' + JPOnazev + ' (' + JPOkat + ')\n';
}

print(text);