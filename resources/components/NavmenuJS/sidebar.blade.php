<div class="sidebar closed push-body">
    <div class="sidebar-header">
        <a href="#" class="sidebar-button">
            <i class="sidebar-icon fas fa-times"></i>
        </a>
    </div>

    <div class="sidebar-content">
        <ul class="sidebar-menu">
            <li><a href="/demo" class="nav-link">
                Inicio
            </a></li>
            <li><a href="/demo#nosotros" class="nav-link">
                Nosotros
            </a></li>
            <li><a href="/demo#tratamiento-del-dolor" class="nav-link">
                Tratamiento del dolor
            </a></li>
            <li><a href="/demo#cirugia-mini-invasiva" class="nav-link">
                Cirugía mini invasiva
            </a></li>
            <li><a href="/demo#escoliosis" class="nav-link">
                Escoliosis
            </a></li>
            <li><a href="/demo#equipo" class="nav-link">
                Equipo
            </a></li>
            <li><a href="/blog" class="nav-link">
                Blog
            </a></li>
            @if(Auth::check())
            <li><a href="/panel" class="nav-link">
                Panel
            </a></li>
            <li><a href="/salir" class="nav-link">
                Cerrar Sesion
            </a></li>
            @endif
        </ul>
    </div>
</div>