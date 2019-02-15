//!JS
var text = '';

text += 'Událost - ukonèení jedné z otevøených událostí ';
text += 'ID - '; 
text += U.UID;
text += ' - Èas ohlášení: '; 
text += U.dc_ohlaseni + ' - ';
//text += U.A.kraj + ' - ';
//text += U.A.obec;

text += ' - Èas uzavøení: '; 
text += U.dc_uzavreni + ' - ';

text += '\n';
text += 'Zasahující jednotky:\n';
for (i = 0; i < U.J.pocet; i++) {
	var JPOnazev = U.J[i].nazev;
	var JPOkat = U.J[i].kategorie;

	text += '• ' + JPOnazev + ' (' + JPOkat + ')\n';
}

text += X.jmeno_uzivatele;
//return text;

print(text);
