# Cvičení React Router - Filmy

Cílem cvičení je udělat aplikaci, která zobrazuje seznam filmů. Při kliknutí na odkaz se zobrazí detail příslušného filmu.

1. Udělej si fork tohoto repozitáře a naklonuj si ho k sobě na počítač.

2. Otevři složku s projektem v editoru a na příkazové řádce spusť:
	```
	npm install
	```
	Doinstalují se ti všechny potřebné závislosti včetně `react-router-dom`, takže ho nemusíš ručně přidávat.

3. Prozkoumej si kód aplikace. Uvidíš, že ve složce `src` máme soubor `movies.js`, ve kterém je pole s údaji o filmech, které už znáš z předchozího domácího úkolu, pouze doplněné o krátký popis příběhu filmu.

	Ve složce `components` máme komponetu `MovieList`, která importuje pole filmů a přemapuje ho tak, že pro každý film v databázi se nám zobrazí odstavec s názvem filmu. Komponenta `MovieList` je naimportovaná a použitá v `App`.

	Dále máme částečně připravenou komponentu `Movie`, která bude zobrazovat detail jednoho konkrétního filmu.

	V obou komponentách `MoviList` i `Movie` už je naimportované pole filmů `movies`, takže s ním můžeš podle potřeby pracovat.

4. Uprav `MovieList`, aby místo odstavců s názvem filmů generovala seznam odkazů na jednotlivé filmy. Budeme používat React Router a odkaz na náš film bude ukazovat na adresu `/movies/1`, kde místo `1` bude vždy ID příslušného filmu. Odkazy potřebujeme vytvořit pomocí komponenty `Link`, takže každý odkaz bude vypadat následovně:

	```jsx
	<Link to={`/movies/${movie.id}`}>Sem doplň název filmu</Link>
	```

	Nezapomeň, že komponentu `Link` si musíš do `MovieList` nejprve naimportovat:
	```jsx
	import {Link} from 'react-router-dom';
	```

	Odkazy se ti pravděpodobně naskládají na stránce těsně za sebe. Můžeš to vyřešit přidáním vhodného CSS stylu nebo celý seznam jednoduše uzavři do značky `<ul>` a jednotlivé odkazy do `<li>`. Pokud ti React v konzoli prohlížeče vyhrožuje, že máš položkám seznamu přidat unikátní klíč, enbo ti rovnou hlásí chybu, uvědom si, na jaký prvek musíš klíč přidat.

5. V hlavní `App` potřebujeme přidat komponenty Routeru. Musíme je nejprve naimportovat:
	```jsx
	import {
  	BrowserRouter,
  	Routes,
  	Route,
	} from 'react-router-dom';
	```

6. Celou aplikaci uzavři do značek `<BrowserRouter>` a `</BrowserRouter>`. Obsah celé naší aplikace máme zatím uzavřený do fragmentu, takže stačí místo fragmentu použít `<BrowserRouter>`.

7. Chceme, aby se naše aplikace chovala takto:
	- Když uživatel přistoupí na úvodní stránku na adrese `'/'`, zobrazí se mu komponenta `MovieList` se seznamem filmů.
	- Když uživatel klikne na jeden z filmů, tak ho aplikace odkáže na adresu `'/movies/:id'` (to už jsme zařídili v kroku 4), kde se mu místo seznamu filmů zobrazí detail konkrétního filmu.

	Do `App` pod hlavní nadpis doplň značky `<Routes>` a `</Routes>`.

	Dovnitř `Routes` vlož jednu `<Route>` s cestou `'/'`, která zobrazí komponentu `MovieList`.

	Přidej druhou `<Route>` s cestou `'/movies/:id'`, která zobrazí komponentu `Movie`. Takto zapsaná cesta zajistí, že v komponentě movies budeme mít přístup k parametru `id`, ve kterém bude číslo filmu, jehož detail chceme zobrazit.

8. Nyní musíme upravit komponentu `Movie` tak, aby si zjistila ID filmu, který má zobrazit, našla film v poli všech filmů a pak zobrazila jeho detaily.

	Na zjištění parametru předaného do komponenty Routerem použijeme hook `useParams`. Nejprve si ho musíme do komponenty naimportovat:
	```jsx
	import {useParams} from 'react-router-dom';
	```

	Pak v komponentě použijeme a pomocí destrukturování získáme id:
	```jsx
	const { id } = useParams();
	```

9. V poli `movies` najdi film, který má stejné id a v komponentě zobraz jeho detaily: obrázek, název filmu, popis a případně další detaily podle libosti. V datech je spousta údajů, se kterými si můžeš pohrát.

	K nalezení filmu použij metodu pole `find` a hledej film, jeho id je sshodné s id, které komponenta dostala jako parametr cesty. Při porovnávání dej pozor na to, že v databázi máme id filmu jako číslo, ale parametry cesty jsou routerem vždy předané jako textový řetězec.

10. Když aplikaci vyzkoušíš, tak kliknutím na odkaz v přehledu filmů by ses měla dostat na stránku s detailem filmu, ale nemáme se jak vrátit. Můžeš samozřejmě v prohlížeči stisknout tlačítko *Zpět*, ale přesto by bylo hezké poskytnout uživateli možnost návratu přímo v aplikaci.

	Do komponenty `Movie` doplň pod detail filmu ještě odkaz zpět na úvodní stránku. Použij k tomu komponentu `Link` a cestu `'/'`.


# Bonus

10. Doplň do aplikace HTML elementy a CSS styl tak, aby celá aplikace vypadala lépe.

11. Uprav přehled filmů v `MovieList` tak, aby to nebyl pouze odkaz s názvem filmu, ale aby tam byl třeba malý obrázek filmu a vedle název a pod ním rok uvedení.
