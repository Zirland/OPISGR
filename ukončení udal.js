//!JS
var text = '';

text += 'Ukonèení události ';
text += (U.ZOC == 1 ? 'typu ZOÈ ' : '');
text += '- ID ' + U.UID + '\n';

text += '\n';
text += 'Èas ohlášení: ' + U.dc_ohlaseni + '\n';
text += 'Èas uzavøení: ' + U.dc_uzavreni + '\n';

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
text += 'Zasahující jednotky:\n';
for (i = 0; i < U.J.pocet; i++) {
	var JPOnazev = U.J[i].nazev;
	var JPOkat = U.J[i].kategorie;

	text += '• ' + JPOnazev + ' (' + JPOkat + ')\n';
}

print(text);