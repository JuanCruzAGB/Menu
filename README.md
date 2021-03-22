# NavMenuJS
> by [JuanCruzAGB](https://github.com/JuanCruzAGB)

NavMenuJS makes an excellent navigation bar, it was created for my personal work (but you can use it **:D**).

 - [Installation](#installation)
 - [JS](#js-step-by-step)
 - [HTML](#html-step-by-step)
  

## Installation

 1. Clone the repository on **public/submodules**.
```
git clone https://github.com/JuanCruzAGB/NavMenuJS.git
```
 2. And clone the repositories required too on **public/submodules**.
```
git clone https://github.com/JuanCruzAGB/JuanCruzAGB.git

git clone https://github.com/JuanCruzAGB/ScrollDetectionJS.git

git clone https://github.com/JuanCruzAGB/SidebarJS.git
```
 - Import the **CSS** in the `<head>`.
```
<link href="submodules/NavMenuJS/css/styles.css" rel="stylesheet">
```
## JS step by step
Import the **NavMenu** into your script to generate the logic.
```
Import { NavMenu as NavMenuJS } from 'submodules/NavMenuJS/js/NavMenu';
```
And make a new **NavMenuJS**
```
let navmenu = new NavMenuJS({props}, {states})
```
The **properties** are:
 - {string} **id:** NavMenu HTMLElement id. `required`
 - {object} **sidebar:** NavMenu Sidebars.
	 - {string[]} **id:** Array of Sidebars HTMLElement id.
	 - {string[]} **position:** Array of Sidebars position.

The **states** are:

 - {boolean} **fixed:** If the NavMenu have to had `position="fixed"`. Default = `false`
 - {boolean} **hideOnScrollDown:** If the NavMenu is **fixed**, when this **state** is true, it will be hidden when scrolling down. Default = `false`
 - {string} **current:** The link who has to be active by default. Default = `null`

## HTML step by step
To start to make an HTMLElement with an `id` and a `className="nav-menu"`. My personal advise is to use `<nav>` (Semantic improvement).
For example:
```
<nav id="nav-1" class="nav-menu">
	<!-- -->
</nav>
```
Inside, you can create so many rows like you want. Rows are an HTMLElement with `className="nav-row"`.
For example:
```
<nav id="nav-1" class="nav-menu">
	<div class="nav-row">
		<!-- -->
	</div>
</nav>
```
If you want to add a header inside the **NavMenu** you can do it like this: a HTMLElement with `className="nav-title"`.
For example:
```
<nav id="nav-1" class="nav-menu">
	<div class="nav-row">
		<a href="/" class="nav-title">
			<h1>NavMenuJS</h1>
		</a>
	</div>
</nav>
```
> Optionally you can add a `className='logo'` and an `<img>` to replace the innerHTML text

The list items in **NavMenuJS** are created inside an `<ul>` with `className="nav-menu-list"` and the links are an `<a>` with `className="nav-link"`.
For example:
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
> `link-text` adds a default styles on the **link** HTMLElement childs, same as `link-icon`.

On mobile the **NavMenu CSS** was optimize to show only 1 row (be carefull).
If you want to use a **Sidebar** you can make it adding a HTMLElement for open it, with `className="sidebar-button open-btn"` and the sidebar position you want `left` or `right`.
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
</nav>
```
Then the **Sidebar** HTMLElement works with an `id` and a `className="sidebar"` + `left` or `right`.
For example:
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
> More details on [JuanCruzAGB/SidebarJS](https://github.com/JuanCruzAGB/SidebarJS.git).