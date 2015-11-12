# Alkalmazások fejlesztése 1. beadandó, Herendi Tibor Gyula, ITEALO
# 1. Követelmény feltárása
### 1.1. Célkitűzés, projektindító dokumentum
A cél az alábbi alkalmazással a KAPPAKEEPONÉGYHEAD Zrt. Telefonközpont cégnek egy ügyfélkezelő, és ügyfélnyilvántartó rendszer létrehozása volt, mely lehetővé teszi a cégnek az ügyfeleit kezelni, karbantartani, meneddzselniés az ügyfeleknek üzeneteket küldeni mind ezt egy egyszerű, de hatásos kezelőfelületen keresztül. 

A cégnek lehetősége van az ügyfelek kezelésére, információik megtekintésére, és érvényességük megtekintésére is, ügyfeleknek írt üzenetek megtekíntésére, valamint ilyen üzenetek küldésére, mely csak az adott ügyfeleknek szól. A rendszer fő profilja, hogy meg lehessen tekínteni, hogy mely ügyfelek fizetésis tátusza járt le, illetve lehetőség van ezen ügyfeleket tájékoztatni eme elmaradásokrók. A pogram fejlesztésénél fő szempont volt az egyszerű, lényegretörő, de könnyen kezelhető rendszer kiépítése, mely előzőkhöz társul még a robosztusság is.

A rendszerben lehetőség van új ügyfelek felvételére, már meglévő ügyfelek törlésére, illetve ilyen meglévő ügyfelek szerkesztésére. Továbbá lehetőség van az adott ügyfeleknek információkat, fizetési felszólításokat egy saját levelező rendszerrel leveleket küldeni, melyet az ügyfelek SMS formában kapnak meg. Az alkalmazottak, akik a rendszert igénybe veszik, internet böngészőn keresztül lesznek majd képesek meneddzselni az ügyfeleket, ezáltal biztosítani a cég gördülékeny, megfelelő munkamenetét. 

## 1.2. Szakterületi fogalomjegyzék
- **login**: A felhasználó által választott, illetve neki automatikusan kiosztott egyedi azonosító név, mellyel rá tudunk hivatkozni, illetve ő képes sajátmagát azonosítani segítség kéréskor, illetve egyéb ügyintézések esetén. A rendszerben az egyes ügyfelek ezen néven szerepelnek, rajtuk a munkavégzés ilyen néven fog végbe menni. **login** illetve **username**-lént is fogunk rá hivatkozni a jövőben.
- **érvényesség**: Érvényesség az, hogy az adott ügyfél egy szolgáltatás esetén mely dátumig élvezheti a cég szolgáltatását, illetve tekinthető meg, hogy rendelkezik-e érvényes előfizetéssel. Érvényesség lejárása esetén a rendszer azonnal mutatni fogja, hogy az adott ügyfélnek van-e érvényes előfizetése.

## 1.2. Használatieset modell, funkcionális követelmények
**Az ügyfélníílvántartó rendszer funkciói**
- Az adott, KAPPAKEEPONÉGYHEAD Zrt. cégnél dolgozó, ottani munkatársak regisztrációja az ügyfélnyilvántartó rendszerre
- A már regisztrált KAPPAKEEPONÉGYHEAD Zrt. cég dolgozói, lehetőség az oldal belépésére, ezáltal igénybevenni a rendszer által nyújtott lehetőségeket
- Bejelentkezett munkatásaknak lehetőségük van kijelentkezésre is
- Bejelenkezetten, illetve bejelentkezetlenűl, lehetőség van az ügyfelek megtekíntésére, azok kilistázására, illetve információik megtekintésére
- Lehetőség új ügyfelek felvételére, azok bevitelére a rendszerbe.
- Lehetőség nyílik a már meglévő ügyfelek adatainak szerkesztésére, ezáltal újabb előfizetés hosszabbítás esetén újabb lejárati dátum megadására.
- Lehetőség van még már meglévő ügyfelek törlésére, azok törlése a nyilvántartó rendszerből.
- Ügyfelek listázásánál lehetőség van ügyfelek további információinak megtekintésére
- Üzenetküldési lehetőség ügyfeleknek, melyet csak az adott ügyfél fog megkapni, mindezt a regisztrációnál megadott telefonszámra, SMS formájában
- Régebben küldött üzenetek megtekintésére is van lehetőség, azok keltezési dátumával egyetemben.

### Használati eset diagram: Regisztrálás vs. Login, és eseményekben való részvétel
![Használati eset diagram](/src/alk_fejl_bead1_usecase_1.png)

### Használati eset diagram: Regisztrált felhasználó
![Használati eset diagram](/src/alkfejl_bead1_2_registered.png)

### Használati eset diagram: Regisztrálatlan felhasználó
![Használati eset diagram](/src/alkfejl_bead1_2_unregistered.png)

### Használati eset példa

Elnevezés     | Ügyfél felvétele
------------- | -------------
Szereplő      | Telefonközpont által megadott rendszerkezelő munkatárs
Előfeltétel   | A rendszer működése; a cég munkatárs előzetesen regisztrált a rendszerbe
Utófeltétel   | Az új ügyfél felkerül az ügyfélkezelő rendszer adatbázisába
Alapeset      | - 1. A munkatárs az index oldalra lép be elősször az URL megnyitása után
              | - 2. Ügyfelek gombra kattintással az adott rendszerkezelő átlép a ügyfelek listáját megjelenítő oldalra
              | - 3. Az adott oldalon az 'Új ügyfél felvétele' gombra kattintva átirányítódik egy új ügyfelek felvételére                  |   szolgáló oldalra
              | - 4. Az adott új ügyfél adatai felvitele után a 'Küldés' gombra kattintva a rendszerkezelő munkatárs képes                 |   lesz a megadott ügyfél információkkal az új ügyfél felvitelére
Alternatív    | - 1. A munkatárs az index oldalra lép be elősször az URL megnyitása után
              | - 2. A rendszerkezelő a 'Bejelentkezés' gombra kattintva átirányítódik egy bejelentkező oldalra
              | - 3. Az adott oldalon a megfelelő mezők megfelelő adatokkal való kitöltése után, 'Bejelentkezés' gombra                    |   kattintva az adott felhasználó bejelentkezik, majd át is irányítódik az index oldalra.
              | - 4. < Alapeset >
Kivételek     | - 1. A kezelő nem regisztrált előzetesen
              | - 2. A a rendszerkezelő helytelen adatokat adott meg a bejelentkezésnél
              | - 3. A kezelő helytelen adatokat adott meg az új ügyfél felvitelekor
### **Szerepkörök**
- **Rendszerkezelő/Rendszerhasználó/dolgozó/munkatárs:** A cégnél dolgozó, cég által erre a munkapozícióra küldött alkalmazott, akinek a feladata a rendszer kezelése, így ezáltal a cég szolgáltatását igénybevevő ügyfelek kezelése, és egyben ezen ügyfelek informálása a rendszeren keresztűl.

## 1.3. Szakterületi követelmények
Azon dolgozók, melyek az Ügyfélnyílvántaartó-, és kezelőrendszert fogják alkalmazni, illetve használni, követelménynek számít a számitógép alap, felhasználói színtű alkalmazása, ebben bele értődik a billentyűzet használata, böngésző használata, illetve a számitógép felhasználói színtű alkalmazása mellett még ezzel egyenértékűen fontos a magyar nyelv ismerete olvasási és írási szinten legalább.

## 1.4. Nem-funkcionális követelmények
Az adott ügyfelekkel való kapcsolattartás elengedhetetlen az új ügyfelek felvételéhez, illetve egyéb, a rendszer által nem támogatott, nem megadott információkat az ügyfélnél megadott telefonszámon keresztül való egyeztetése a munkatársaknak.

- **Fejlesztési módszertan:**
Egységesített Eljárás
- **A fejlesztéshez szükséges hardver:**
CPU: Pentium 4, RAM: 1 GB, videó: 1024x768
- **A fejlesztéshez használt szoftverek:**
Operációs rendszer: Windows XP SP3
- **Követelmény elemzés:**
C9 IDE használata, dokumentum-sablonok használatával
CASE eszköz: creately.com használata use case diagramok előállításához
- **A futtatáshoz szükséges operációs rendszer:**
Tetszőleges operációs rendszer, melyen van működő böngésző
- **A futtatáshoz szükséges hardver:**
Operációs rendszerek szerint megadva
- **Egyéb követelmények:**
Intuitív felhasználói felület, könnyű kezelhetőség

# 2. Tervezés
## 2.1. Architektúra terv
### **Komponens diagram**
![Komponens diagram](/src/alkfejl_bead1_compdiag.png)
### **Oldaltérkép**
- Főoldal
- Ügyfelek
  - Új ügyfél felvétele
  - Szerkesztés
  - Törlés
  - Megtekintés
- Bejelentkezés:
  - Regisztráció
  - Bejelentkezés

