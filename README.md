# Cvičení React Router - Filmy

Cílem cvičení je udělat aplikaci, která zobrazuje seznam filmů. Při kliknutí na odkaz se zobrazí detail příslušného filmu.

1. Udělej si fork tohoto repozitáře a naklonuj si ho k sobě na počítač.

2. Otevři složku s projektem v editoru a na příkazové řádce spusť:
	```
	npm install
	```
	Doinstalují se ti všechny potřebné závislosti včetně `react-router-dom`, takže ho nemusíš ručně přidávat.

3. Prozkoumej si kód aplikace. Uvidíš, že ve složce `src` máme soubor `movies.js`, ve kterém je pole s údaji o filmech, které už znáš z předchozího domácího úkolu.

	Uvnitř `App` je vidět, že naimportované pole filmů mapujeme na seznam odstavců, do kterých se vepíše název filmu.

	Ve složce `components` máme částečně připravenou komponentu `Movie`, která bude zobrazovat detail jednoho filmu.

	V obou komponentách `App` i `Movie` už je naimportované pole filmů `movies`, takže s ním můžeš podle potřeby pracovat.

4. Uprav `App`, aby místo odstavců s názvem filmu generovala seznam odkazů na jednotlivé filmy. Budeme používat React Router a odkaz na náš film bude ukazovat na adresu `/movies/1`, kde místo `1` bude vždy ID příslušného filmu. Odkazy potřebujeme vytvořit pomocí komponenty `Link`, takže každý odkaz bude vypadat následovně:

	```jsx
	<Link to={`/movies/${movie.id}`}>N8yev filmu</Link>
	```

5. V hlavní `App` přidej mezi `<Routes>` a `</Routes>` jednu `<Route>`, která zobrazíí komponentu `<Movie />` , když se uživatel odkáže na cestu `/movies/:id`.

	Takto zapsaná cesta zajistí, že v komponentě movies budeme mít přístup k parametru `id`, ve kterém bude číslo filmu, jehož detail chceme zobrazit.

6. Nyní musíme upravit komponentu `Movie` tak, aby si zjistila ID filmu, našla film v poli všech filmů a pak zobrazila detaily nalezeného filmu.

7. Na zjištění parametru předaného do komponenty Routerem použijeme hook `useParams`. Nejprve si ho musíme do komponenty naimportovat:
	```jsx
	import {useParams} from 'react-router-dom';
	```

	Pak v komponentě použijeme a pomocí destrukturování získáme id:
	```jsx
	const { id } = useParams();
	```

8. V poli `movies` najdi film, který má stejné id a v komponentě zobraz jeho detaily: obrázek, název filmu, popis a případně další detaily podle libosti. V datech je spousta údajů, se kterými si můžeš pohrát.

## Bonus

9. V hlavní `App` použij místo `Link` komponentu `NavLink` a nastyluj CSS třídu pro aktivní odkaz tak, abychom i v menu viděli, který film je zrovna vybraný.

	Podívej se do [dokumentace](https://reactrouter.com/docs/en/v6/api#navlink). Dokumentace bohužel není moc výřečná, ale když budeš pozorná, tak se tam dočteš, že do atributu `className` komponenty `NavLink` jde napsat funkce, která automaticky jako parametr dostane hodnotu `true` nebo `false` podle toho, zda je odkaz zrovna aktivní (tj. uživatel je na stránce, na kterou odkaz vede). Podle hodnoty `true/false` můžeš z funkce vrátit název třídy, jakou chceš, aby odkaz dostal. Když si tuto třídu v CSS vhodně nastyluješ, budou se ti odkazy v menu automaticky obarvovat podle toho, na které stránce zrovna budeš.

10. Doplň do aplikace HTML elementy a CSS styl tak, aby celá aplikace vypadala lépe. Ideálně chceme zobrazovat seznam filmů vlevo na stránce, filmy budou hezky pod sebou. Když na některý z filmů klikneme, zobrazí se v pravé části detail filmu.

11. Uprav přehled filmů tak, aby to nebyl pouze odkaz s názvem filmu, ale aby tam byl třeba malý obrázek filmu a vedle název a pod ním rok uvedení.

