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

Felhasználóként szeretnék bejelenteni egy gépterembeli hibát, hogy minél előbb javíthassák. --> Hiba bejelentése
Felhasználóként szeretnék visszajelzést kapni, hogy a bejelentett hiba milyen státuszban van. --> Hibák listázása
Felhasználóként szeretnék kérdést vagy megjegyzést fűzni egy hibához azután is, hogy felvettem. --> Hiba history, chat, forum.
Operátorként szeretném látni a hibalistát.
Operátorként szeretnék egy hibát megtekinteni és státuszát váltani. Státuszváltáskor kötelező üzenetet megadni.
A felhasználók és operátorok bejelentkezés után használhatják a funkciókat. Ezeket egy előre megadott listából, vagy LDAP authentikációval kell elvégezni.
A főoldalon az alkalmazás ismertetése, esetleg statisztikák jelenik meg.

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
              
### **Folyamat diagram**
![Folyamat diagram](/src/alkfejl_bead1_activity.png)

### **Szerepkörök**
- **Rendszerkezelő/Rendszerhasználó/dolgozó/munkatárs:** A cégnél dolgozó, cég által erre a munkapozícióra küldött alkalmazott, akinek a feladata a rendszer kezelése, így ezáltal a cég szolgáltatását igénybevevő ügyfelek kezelése, és egyben ezen ügyfelek informálása a rendszeren keresztűl.

## 1.3. Szakterületi követelmények
Azon dolgozók, melyek az Ügyfélnyílvántaartó-, és kezelőrendszert fogják alkalmazni, illetve használni, követelménynek számít a számitógép alap, felhasználói színtű alkalmazása, ebben bele értődik a billentyűzet használata, böngésző használata, illetve a számitógép felhasználói színtű alkalmazása mellett még ezzel egyenértékűen fontos a magyar nyelv ismerete olvasási és írási szinten legalább.

## 1.4. Nem-funkcionális követelmények
Az adott ügyfelekkel való kapcsolattartás elengedhetetlen az új ügyfelek felvételéhez, illetve egyéb, a rendszer által nem támogatott, nem megadott információkat az ügyfélnél megadott telefonszámon keresztül való egyeztetése a munkatársaknak.
A kezelőrendszer elsődleges tervezési szempontjai közé tartozott a használhatóság, hogy a dolgozó kényelmesen, lesímultan, egyszerűen, ugyanakkor érthetően tudja kezelni az oldalt, összezavarodás nélkül, azaz kerülve a nem tiszta, nem egyértelmű dizájnokat, megvalósításokat. Tervezési szempont volt még továbbá a teljesítmény, a szerver felhasználóra való reagálásának kérdése szinte nem is kérdés, tervezéstől foggva előttünk lebeggett az, hogy egy oldalra ne kelljen fölöslegesen sokat várnni. Ezért is minden egyes tesztelésnél, mind új fejlesztésnél minden olyan helyet, ahol allusál volt tapasztalható, felgyorsítottuk. Programunk felépítését tekíntve az sem utolsó szempont, hogy a kódunkat karbantarthatósan építettük fel, azaz bármikor bármi javítás, bármi skálázási feladat esetén ezek egyszerűen elvégezhetőek lesznek a maguk szintjén persze.
Felhasználóbarát, ergonomikus elrendezés és kinézet.Gyors működés. Biztonságos működés: jelszavak tárolása, funkciókhoz való hozzáférés.

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
Az adott program JavaScript nyelven íródott. A fejlesztés C9 IDE-n történt, amely egy ide mellett biztosított egy virtuális szervert is. A A program használta C9 gépen futó PostgreSQL által használt adatbázisokat, ahol több relációs táblában mentve adatokat, azt használunk fel. Ilyen táblák az ügyfelek táblája, oldalra regisztrált ügyfelek táblája, és a felhasználóknak köldütt üzenetek táblája. A PostgreSQL kezelését SAILS-től waterline.js keretrendszer kezeli.
Bejelentkezést Passport.js kezelte, és a végpontok kezelését express.js keretrendszer működteti. Egy átirányításíg élő üzeneteket a flash.js keretrendszer végzi el, menynek segítségével képesek vagyunk hibákat átközvetíteni, dinamikusan generált oldalakra információkat átvinni. A dinamikus oldal generálást HBS keretrendszer végzi el. A program fő, 'belépési pontja' a server.js, ahova az összes include történik, és többek között itt vannak definiálva a végpontoknál történő működések, ezek egyéb fájlokba való rendszerezésével persze. Ezen keretrendszerek által használt többi keretrendszer a node_modules-ban vannak jelen, az adott programon onnan használják ezeket. Ilyenek a jQuery, stb... A dizájnhoz használt keretrendszerek a Bottswatch és Bootstrap. 
A fejlesztés során az MVC tervezési mintát követtük, ennek alapján építettük fel a programot, jól elkülöníthető model-view-controller részekre daraboltuk fel.
- **Model** a program logikai rétege, amely a megvalósításhoz szükséges információkat tartalmazza, itt valósul meg a megoldandó probléma logikailag. Itt találhatóak az adatbázisok, keretrendszerek, includok, és ezek együttműködésével a probléma megoldása.
- **View** réteg az, amely a felhasználónak a vékony kliensre kirajzolja az általa megjeleníteni kíánt információt, illetve ezen keresztül figyeli a program a felhasználó kéréseit, és hajtja végre az utasításokat, így módosítja a belső müködést.,
- **Controller** rétegbe érkeznek be a View által észlelt változások, kérések, és ez a modell közreműködésével együtt adja át ismét a kirajzoladnó tartalmat a view-nak
A GPR mintát is követtük a program fejelsztésekor


### **Komponens diagram**
![Komponens diagram](/src/alkfejl_bead1_compdiag.png)
### **Oldaltérkép**
Publikus:

- Főoldal
- Login

Ügyfelek

- Főoldal
- Login/Logout
- Ügyféllista
  -  új ügyfél
  - ügyfél megtekíntése
    - üzenet küldése ügyfélnek

### **Végpontok**
-  '/' :  GET metódus, amely a böngészőben az URL beírása után hívódik meg először. A szerver az index.hbs alapján a HBs segítségével rendereli ki az oldalt
-  '/login' :  GET metódus, a szerver a bejelentkezéshez szükséges oldalt rendereli ki
-  '/login' :  POST metódus, a formban felküldött adatokat a passport.js ellenőrzi, és segítségével történik meg a bejelentkezés
-  '/login/signup' :  GET metódus, a szerverre való felhasználó létrehozásához szükséges oldalt rendereli ki
-  '/login/signup' :  POST metódus, szerverre való felhasználó létrehozását viszi végbe a formban kitöltött adatok alapján
-  '/customer/list' :  GET metódus, a waterline.js által kezelt PortgesSQL adatbázisban customer modellek alapján elmentett sorokat olvassa ki az adott végpont, majd egy html oldalra kirajzolva ket, ezt rendereli ki a böngészőre
-  '/customer/new' :  GET metódus, az új adatbázis sorok felvételéhez szükséges oldal kirenderelése ebben a végpontban történik meg
-  '/customer/new' :  POST metódus, az adott adatbázisba új customer modellű sorok hozzáadása ebben a végpontban történnek, ahol az információkat egy ellenörzés után a form-ból kiszedve következnek be.
-  '/customer/:id' :  GET metódus, az adott bejegyzése nyomva az adott :id alapján kikeresve az adatbázisból a megfelelő sort, az adott sor attribútumait jeleníti meg az oldalon az adott végpont, hozáá még a customerticket modellű adatbázisból a megfelelő sorokat is kirenderelve, ahol a username megegyezik.
-  '/customer/:id' :  POST metódus, ezen égponton lehetőság van újabb sort felvenni a customerticket model által definiált adatbázisba. Az adatokat a HTML oldalon megjelenő form-ból nyerjük, ahol egy adat ellenőrzés után a :id-hez tartozó customer username-ével egyetemben egy új sort hozunk létre customerticketben
-  '/customer/delete/:id' : GET metódus, melynek lefutása elött list_delete.js fájl fut le, jQuery könyvtár által meghatározott függvények segítségével. Ebben a végpontban Az adott id-jű customer törlődik az adatbázisból, és vele együtt az összes hozzá tartozó sor a customerticket-ből is
-  '/customer/edit/:id' :  GET metódus, lehetőség van ebben a végpontban sorok adatainak módosítására

## 2.2. Felhasználófelület-modell

### **Oldalvázlatok**
![Oldalvázlat](/src/alkfejl_bead1_drotvaz.png)
### **Designtervek**
![Designterv](/src/alkfejl_bead1_design.png)

## 2.3. Osztálymodell
### **Adatmodell**
![Adatmodell](/src/alkfejl_bead1_adatmodell.png)

### **Adatbázisterv**
![Adatmodell](/src/alkfejl_bead1_adatmodell.png)

### **Állapotdiagram**
![Állapotdiagram](/src/alkfejl_bead1_state.png)
