<?php
    /** @var string $SiteTitle - The Title of the Site */
    /** @var string $SiteLogo - The Logo of the Site */
?>

<nav class="nav-menu">
    <div class="nav-row">
        <a href="#" class="sidebar-btn open-btn">
            <i class="sidebar-icon fas fa-bars"></i>
        </a>
        
        <a href="/" class="nav-title logo">
            <img src="/img/recursos/logo.png" alt="{{$SiteTitle}}">
            <h1>{{$SiteTitle}}</h1>
        </a>
    </div>

    <div class="nav-row">
        <ul class="menu-list">
            <li><a href="/" class="nav-link">
                Home
            </a></li>
            @if(Auth::check())
            <li class="collapsable closed">
                <a href="/panel" class="collapsable-btn">Panel<i class="collapsable-icon fas fa-sort-down"></i></a>
                <ul class="collapsable-menu">
                    <li class="m-0"><a href="/panel#users" class="collapsable-link">Users</a></li>
                    <li class="m-0"><a href="/panel#new-user" class="collapsable-link">New User</a></li>
                </ul>
            </li>
            <li><a href="/log-off" class="nav-link">
                Log off
            </a></li>
            @endif
        </ul>
    </div>

    @component('components.nav.sidebar')
    @endcomponent
</nav>