# Alkalmazások fejlesztése 1. beadandó, Herendi Tibor Gyula, ITEALO
## 1. Követelmény feltárása
### 1.1. Célkitűzés, projektindító dokumentum
A cél az alábbi alkalmazással a KAPPAKEEPONÉGYHEAD Zrt. Telefonközpont cégnek egy Ügyfélkezelő, és ügyflnyilvántartó rendszer létrehozása volt, mely lehetővé teszi a cégnek az ügyfeleit kezelni, karbantartani, meneddzselni, mind ezt egy egyszerű, de hatásos kezelőfelületen keresztül. 

A cégnek lehetősége van az ügyfelek kezelésére, információik megtekintésére, és érvényességük megtekintésére is. Ezek alapján a rendszer megmutatj,a hogy megy ügyfelek érvéynesek még, azaz a szolgáltatásra aktív előfizetői viszonyuk van. A pogram fejlesztésénél fő szempont volt a kezelhetőség, illetve robosztus rendszer kiépítése.

A rendszerben lehetőség van új ügyfelek felvételére, már meglévő ügyfelek törlésére, illetve ilyen meglévő ügyfelek szerkesztésére. Az alkalmazottak, akik a rendszert igénybe veszik, internet böngészőn keresztül lesznek majd képesek meneddzselni az ügyfeleket, ezáltal biztosítani a cég gördülékeny, megfelelő munkamenetét. 

## 1.2. Szakterületi fogalomjegyzék
- **login**: A felhasználó által választott, illetve neki automatikusan kiosztott egyedi azonosító név, mellyel rá tudunk hivatkozni, illetve ő képes sajátmagát azonosítani segítség kéréskor, illetve egyéb ügyintézések esetén. A rendszerben az egyes ügyfelek ezen néven szerepelnek, rajtuk a munkavégzés ilyen néven fog végbe menni.
- **érvényesség**: Érvényesség az, hogy az adott ügyfél egy szolgáltatás esetén mely dátumig élvezheti a cég szolgáltatását, illetve tekinthető meg, hogy rendelkezik-e érvényes előfizetéssel. Érvényesség lejárása esetén a rendszer azonnal mutatni fogja, hogy az adott ügyfélnek van-e érvényes előfizetése.

## 1.2. Használatieset modell, funkcionális követelmények
**Az ügyfélníílvántartó rendszer funkciói*
- Az adott, KAPPAKEEPONÉGYHEAD Zrt. cégnél dolgozó, ottani munkatársak regisztrációja az ügyfélnyilvántartó rendszerre
- A már regisztrált KAPPAKEEPONÉGYHEAD Zrt. cég dolgozói, lehetőség az oldal belépésére, ezáltal igénybevenni a rendszer által nyújtott lehetőségeket
- Bejelentkezett munkatásaknak lehetőségük van kijelentkezésre is
- Bejelenkezetten, illetve bejelentkezetlenűl, lehetőség van az ügyfelek megtekíntésére, azok kilistázására, illetve információik megtekintésére
- Lehetőség új ügyfelek felvételére, azok bevitelére a rendszerbe.
- Lehetőség nyílik a már meglévő ügyfelek adatainak szerkesztésére, ezáltal újabb előfizetés hosszabbítás esetén újabb lejárati dátum megadására.
- Lehetőség van még már meglévő ügyfelek törlésére, azok törlése a nyilvántartó rendszerből
### Használati eset diagramm