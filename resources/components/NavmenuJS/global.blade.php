<nav class="nav-menu neon">
    <a href="#" class="sidebar-button">
        <i class="sidebar-icon fas fa-bars"></i>
    </a>

    <div class="nav-row">
        <a href="/demo" class="nav-title">
            <h1 class="text-md-center">Title</h1>
        </a>
    </div>

    <div class="nav-row">
        <ul class="menu-list">
            <li><a href="/demo" class="nav-link">
                Inicio
            </a></li>
            <li><a href="/demo#nosotros" class="nav-link">
                Nosotros
            </a></li>
            <li class="collapsable closed">
                <a href="/demo#servicios" class="collapsable-button">Servicios<i class="collapsable-icon fas fa-sort-down"></i></a>
                <ul class="collapsable-menu">
                    <li class="m-0"><a href="/demo#tratamiento-del-dolor" class="collapsable-link">Tratamiento del dolor</a></li>
                    <li class="m-0"><a href="/demo#cirugia-mini-invasiva" class="collapsable-link">Cirugía mini invasiva</a></li>
                    <li class="m-0"><a href="/demo#escoliosis" class="collapsable-link">Escoliosis</a></li>
                </ul>
            </li>
            <li><a href="/demo#equipo" class="nav-link">
                Equipo
            </a></li>
            <li><a href="/blog" class="nav-link">
                Blog
            </a></li>
            @if(Auth::check())
            <li class="collapsable closed">
                <a href="/panel" class="collapsable-button">Panel<i class="collapsable-icon fas fa-sort-down"></i></a>
                <ul class="collapsable-menu">
                    <li class="m-0"><a href="/panel#posts" class="collapsable-link">Publicaciones</a></li>
                    <li class="m-0"><a href="/panel#new-post" class="collapsable-link">Nueva publicación</a></li>
                    <li class="m-0"><a href="/panel#categories" class="collapsable-link">Categorías</a></li>
                    <li class="m-0"><a href="/panel#new-categorie" class="collapsable-link">Nueva categoría</a></li>
                    <li class="m-0"><a href="/panel#tags" class="collapsable-link">Etiquetas</a></li>
                    <li class="m-0"><a href="/panel#new-tag" class="collapsable-link">Nueva etiqueta</a></li>
                    <li class="m-0"><a href="/panel#config" class="collapsable-link">Configuración</a></li>
                </ul>
            </li>
            <li><a href="/salir" class="nav-link">
                Cerrar Sesión
            </a></li>
            @endif
        </ul>
    </div>

    @component('components.nav.sidebar')
    @endcomponent
</nav>