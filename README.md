# NavMenuJS
> by [JuanCruzAGB](https://github.com/JuanCruzAGB)

NavMenuJS makes an excellent navigation bar, it was created for my personal work (but you can use it :D).

## Installation

Clone the repository on __public/submodules__.
```
git clone https://github.com/JuanCruzAGB/NavMenuJS.git
```

And clone the repositories required too on __public/submodules__.
```
git clone https://github.com/JuanCruzAGB/JuanCruzAGB.git
git clone https://github.com/JuanCruzAGB/ScrollDetection.git
git clone https://github.com/JuanCruzAGB/SidebarJS.git
```

Import the __css__ in the __<head>__.
```
<link href="submodules/NavMenuJS/css/styles.css" rel="stylesheet">
```

Import the __NavMenu__ into your script to generate the logic.
```
import { NavMenu as NavMenuJS } from 'submodules/NavMenuJS/js/NavMenu';
```

## HTML step by step

To start to make an HTMLElement with an id and a className = "nav-menu". My personal advise is to use __< nav >__. Semantic improvement. For example:
```
<nav id="nav-1" class="nav-menu">
    <!--  -->
</nav>
```

Inside you can create so many rows like you want. Rows are an HTMLElement with className = "nav-row". For example:
```
<nav id="nav-1" class="nav-menu">
    <div class="nav-row">
        <!--  -->
    </div>
</nav>
```

If you want to add a header inside the __NavMenu__ you can do it like this: a HTMLElement with className = "nav-title". For example:
```
<nav id="nav-1" class="nav-menu">
    <div class="nav-row">
        <a href="/" class="nav-title">
            <h1>NavMenuJS</h1>
        </a>
    </div>
</nav>
```

The list items in __NavMenuJS__ are created inside an __< ul >__ with className = "nav-menu-list" and the links are an __< a >__ with className = "nav-link". For example:
```
<nav id="nav-1" class="nav-menu">
    <div class="nav-row">
        <a href="/" class="nav-title">
            <h1>NavMenuJS</h1>
        </a>
    </div>

    <div class="nav-row">
        <ul class="nav-menu-list">
            <li><a href="/" class="nav-link">
                <span class="link-text">Home</span>
            </a></li>
            <li><a href="/log-in" class="nav-link">
                <span class="link-text">Log In</span>
            </a></li>
        </ul>
    </div>
</nav>
```

On mobile the __NavMenu css__ was optimize to show only 1 row (be carefull). If you want to use a __Sidebar__ you can make it adding a HTMLElement for open it, with className = "sidebar-button open-btn" and the sidebar position you want left or right.
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
            <li><a href="/" class="nav-link">
                <span class="link-text">Home</span>
            </a></li>
            <li><a href="/log-in" class="nav-link">
                <span class="link-text">Log In</span>
            </a></li>
        </ul>
    </div>
</nav>
```

Then the __Sidebar__ HTMLElement works with an id and a className = "sidebar" + left or right. More details on [JuanCruzAGB/SidebarJS](https://github.com/JuanCruzAGB/SidebarJS.git). For example: 
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
            <li><a href="/" class="nav-link">
                <span class="link-text">Home</span>
            </a></li>
            <li><a href="/log-in" class="nav-link">
                <span class="link-text">Log In</span>
            </a></li>
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
            <!--  -->
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
            <!--  -->
        </div>
    </div>
</nav>
```