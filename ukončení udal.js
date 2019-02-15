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

text += X.jmeno_uzivatele;
//return text;

print(text);
