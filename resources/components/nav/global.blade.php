<nav id="nav-1" class="nav-menu">
    <div class="nav-row">
        <a href="#" class="sidebar-btn open-btn left">
            <i class="sidebar-icon fas fa-bars"></i>
        </a>
        
        <a href="/" class="nav-title">
            <h1>NavMenuJS</h1>
        </a>
        
        <a href="#" class="sidebar-btn open-btn right">
            <i class="sidebar-icon fas fa-filter"></i>
        </a>
    </div>

    <div class="nav-row">
        <ul class="menu-list">
            <li><a href="/" class="nav-link">
                Home
            </a></li>
            <li class="dropdown closed">
                <a href="/panel" class="nav-link">
                    Panel
                    <button class="dropdown-btn">
                        <i class="dropdown-icon fas fa-sort-down"></i>
                    </button>
                </a>
                <ul class="dropdown-menu">
                    <li class="m-0"><a href="/panel#users" class="dropdown-link"><i class="link-icon fas fa-chevron-right"></i>Users</a></li>
                    <li class="m-0"><a href="/panel#new-user" class="dropdown-link"><i class="link-icon fas fa-chevron-right"></i>New User</a></li>
                </ul>
            </li>
            <li><a href="/log-off" class="nav-link">
                <i class="link-icon left fas fa-sign-out-alt"></i>
                <span class="link-text">Log Off</span>
            </a></li>
        </ul>
    </div>

    @component('components.nav.sidebar_left')
    @endcomponent
    @component('components.nav.sidebar_right')
    @endcomponent
</nav>