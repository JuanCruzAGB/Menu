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
git clone https://github.com/JuanCruzAGB/SidebarJS.git
git clone https://github.com/JuanCruzAGB/ScrollDetection.git
```

Import the css in the head HTML element.
```
<link href="submodules/NavMenuJS/css/styles.css" rel="stylesheet">
```

Import the NavMenu into your script to generate the logic.
```
import { NavMenu as NavMenuJS } from 'submodules/NavMenuJS/js/NavMenu';
```

Make the NavMenu HTML Elements where you want. For example:
```
<nav id="nav-1" class="nav-menu">
    <div class="nav-row">
        <a href="#menu" class="sidebar-button open-btn left">
            <i class="sidebar-icon fas fa-bars"></i>
        </a>
        
        <a href="/" class="nav-title">
            <h1>NavMenuJS</h1>
        </a>
        
        <a href="#filters" class="sidebar-button open-btn right">
            <i class="sidebar-icon fas fa-filter"></i>
        </a>
    </div>

    <div class="nav-row">
        <ul class="nav-menu-list">
            <li><a href="/" class="nav-link">
                <span class="link-text">Home</span>
            </a></li>
            <li><a href="/log-in" class="nav-link">
                <i class="link-icon left fas fa-sign-in-alt"></i>
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
                <i class="sidebar-icon fas fa-times"></i>
            </a>
        </div>

        <div class="sidebar-content">
            <ul class="sidebar-menu-list">
                <li><a href="/" class="sidebar-link sidebar-button nav-link p-0">
                    <span class="link-text">Home</span>
                </a></li>
                <li><a href="/log-in" class="sidebar-link nav-link p-0">
                    <i class="link-icon left fas fa-sign-out-alt"></i>
                    <span class="link-text">Log In</span>
                </a></li>
            </ul>
        </div>
    </div>
    
    <div id="filters" class="sidebar right closed push-body">
        <div class="sidebar-header">
            <a href="#" class="sidebar-button close-btn right">
                <i class="sidebar-icon fas fa-times"></i>
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