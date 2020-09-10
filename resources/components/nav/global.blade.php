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

    @component('components.nav.sidebar_left')
    @endcomponent
    @component('components.nav.sidebar_right')
    @endcomponent
</nav>