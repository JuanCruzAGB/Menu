# NavMenuJS
> by [JuanCruzAGB](https://github.com/JuanCruzAGB)

NavMenuJS hace una excelente barra de navegación, fur creada para mi uso laboral (pero puedes usarla sin problema **:D**).

 - [Instalación](#instalación)
 - [HTML](#html-paso-a-paso)
 - [Configuración](#configuración)
  

## Instalación

 1. Clone el repositorio en **public/submodules**.
```
git clone https://github.com/JuanCruzAGB/NavMenuJS.git
```
 2. Y clone también los repositorios requeridos en **public/submodules**.
```
git clone https://github.com/JuanCruzAGB/JuanCruzAGB.git

git clone https://github.com/JuanCruzAGB/ScrollDetectionJS.git

git clone https://github.com/JuanCruzAGB/SidebarJS.git
```
 - Importe el **CSS** en la etiqueta `<head>`.
```
<link href="submodules/NavMenuJS/css/styles.css" rel="stylesheet">
```
## HTML paso a paso
Para empezar, genere una etiqueta **HTML** con un `id` y una `class="nav-menu"`. Mi consejo personal es que use la etiqueta `<nav>` (Para una mejora en la semántica).
Por ejemplo:
```
<nav id="nav-1" class="nav-menu">
	<!-- -->
</nav>
```
Dentro, puedes agregar tantas **filas** como desees. Las **Filas** son etiquetas **HTML** con `class="nav-row"`.
Por ejemplo:
```
<nav id="nav-1" class="nav-menu">
	<div class="nav-row">
		<!-- -->
	</div>
</nav>
```
Si quieres agregarlo un encabezado al **NavMenu** puedes hacerlo mediante una etiqueta **HTML** con `class="nav-title"`.
Por ejemplo:
```
<nav id="nav-1" class="nav-menu">
	<div class="nav-row">
		<a href="/" class="nav-title">
			<h1>NavMenuJS</h1>
		</a>
	</div>
</nav>
```
> Opcionalmente puedes agregarle la clase `nav-title` y una `<img>` para reemplazarle el contenido.

El listado de **enlaces** del **NavMenuJS** se deben crear dentro de un `<ul>` con `class="nav-menu-list"` y los deben ser una etiqueta `<a>` con `class="nav-link"`.
Por ejemplo: 
```
<nav id="nav-1" class="nav-menu">
	<div class="nav-row">
		<a href="/" class="nav-title">
			<h1>NavMenuJS</h1>
		</a>
	</div>

	<div class="nav-row">
		<ul class="nav-menu-list">
			<li>
				<a href="/" class="nav-link">
					<span class="link-text">Home</span>
				</a>
			</li>
			<li>
				<a href="/log-in" class="nav-link">
					<span class="link-text">Log In</span>
				</a>
			</li>
		</ul>
	</div>
</nav>
```
> Agragarle a un `<span>` hijo del **enlace**, la clase `link-text` genera estilos por defecto, lo mismo funciona con  la clase `link-icon`.

En dispositivos mobiles el **CSS** del **NavMenu** fue optimizado para que solo muestre una única **fila** (ten cuidado).
Si deseas usar una **Barra lateral** puedes hacerlo con **SidebarJS** y agregándole un botón para abrirlo, con `class="sidebar-button open-btn"` y la posición que desees `left` o `right`.
```
<nav id="nav-1" class="nav-menu">
	<div class="nav-row">
		<a href="#menu" class="sidebar-button open-btn left">
			<span class="link-text">Menu</span>
		</a>

		<a href="/" class="nav-title">
			<h1>NavMenuJS</h1>
		</a>

		<a href="#menu" class="sidebar-button open-btn left">
			<span class="link-text">Right</span>
		</a>
	</div>

	<div class="nav-row">
		<ul class="nav-menu-list">
			<li>
				<a href="/" class="nav-link">
					<span class="link-text">Home</span>
				</a>
			</li>
			<li>
				<a href="/log-in" class="nav-link">
					<span class="link-text">Log In</span>
				</a>
			</li>
		</ul>
	</div>

	<div id="menu" class="sidebar left closed push-body">
		<div class="sidebar-header">
			<div class="sidebar-title">
				<h2>Menu</h2>
			</div>
			
			<a href="#" class="sidebar-button close-btn left">
				<span class="link-text">Close</span>
			</a>
		</div>

		<div class="sidebar-content">
			<!-- -->
		</div>
	</div>

	<div id="filters" class="sidebar right closed push-body">
		<div class="sidebar-header">
			<a href="#" class="sidebar-button close-btn right">
				<span class="link-text">Close</span>
			</a>
			
			<div class="sidebar-title">
				<h2>Filters</h2>
			</div>
		</div>

		<div class="sidebar-content">
			<!-- -->
		</div>
	</div>
</nav>
```
> Para más información entre en [JuanCruzAGB/SidebarJS](https://github.com/JuanCruzAGB/SidebarJS.git).

## Configuración
Importe el **NavMenu** en tu javascript para generar la logica.
```
Import { NavMenu as NavMenuJS } from 'submodules/NavMenuJS/js/NavMenu';
```
Y cree un nuevo **NavMenuJS**
```
let navmenu = new NavMenuJS({props}, {states})
```
Las **propiedades** existentes son:
 - {string} **id:** Id de la etiqueta HTML del NavMenu. `obligatorio`
 - {object} **sidebar:** Barra laterales que se van a usar en el NavMenu.
	 - {string[]} **id:** Array de ids de las etiquetas HTML de cada barra lateral.
	 - {string[]} **position:** Array de posiciones de las barras laterales.

Los **estados** existentes son:
 - {boolean} **fixed:** Si quisieras que el NavMenu tenga `position="fixed"` pone como valor `true`. Por defecto viene en `false`
 - {boolean} **hideOnScrollDown:** Si el NavMenu esta **fixed** , con este **estado** en valor `true`, cada vez se baje la barra de desplazamiento el **NavMenu** se escondera. Por defecto viene en `false`
 - {string} **current:** El link que tendría que estar con clase `active` por defecto (pases como valor la propiedade href de la etiqueta `<a>`). Por defecto viene en `false`.