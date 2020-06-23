<div class="sidebar closed push-body">
    <div class="sidebar-header">
        <a href="#" class="sidebar-btn">
            <i class="sidebar-icon fas fa-times"></i>
        </a>
    </div>

    <div class="sidebar-content">
        <ul class="sidebar-menu">
            <li><a href="/" class="nav-link">
                Home
            </a></li>
            @if(Auth::check())
            <li><a href="/panel" class="nav-link">
                Panel
            </a></li>
            <li><a href="/log-off" class="nav-link">
                Log Off
            </a></li>
            @endif
        </ul>
    </div>
</div>