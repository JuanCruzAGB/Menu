# Menu
> by [JuanCruzAGB](https://github.com/JuanCruzAGB)

Este paquete contiene toda la logica para crear/encontrar y hacer funcional un `<nav>`, fue creado para mi uso personal (pero puedes usarla sin problema **:D**).

 - [Instalación](#instalación)
 - [Qué contine?](#qué-contiene)
 - [Cómo se usa?](#html-paso-a-paso)
    - [Crear](#como-crear-un-nav)
    - [Encontrar](#agregar-funcionalidad-al-nav)
 - [Próximamente](#working-on)

## Instalación
 1. Instala npm.
```
npm i @juancruzagb/src
```
 2. Import js.
```
import Menu from "@juancruzagb/menu";
```
 3. Import css.
```
@import url(@juancruzagb/menu);
```

## Qué contine?
El paquete tiene un objeto llamado **Menu** que se extiende de [@juancruzagb/htmlcreator/Html](https://www.npmjs.com/package/@juancruzagb/htmlcreator), te permite crear un nuevo `<nav>` o encontrarlo.
Además, tiene múltiples archivos **css** para customizar correctamente el `<nav>`.
Hay 3 tipos de `<nav>`:
 - **nav:** Barra de navegación por defecto.
 - **tab:** Navegar por tabs.
 - **float:** Navegar por botones flotantes.

### Menu
Objecto de **JavaScript** por defecto, se extiende de [@juancruzagb/htmlcreator/Html](https://www.npmjs.com/package/@juancruzagb/htmlcreator).

#### Propiedades
 - {string[]} classList: Agrega al `<nav>` las clases.
 - {object|false} footer: Agrega un `<footer>` al `<nav>`.
    - {array} children: Todos los HTML hijos del `<footer>`.
 - {object|false} header: Agrega un `<header>` al `<nav>`.
    - {string|false} image: Agrega un `<img>` al `<header>`.
    - {string|false} path: Hace que los hijos del `<header>` estén dentro de un `<a>`.
    - {string|false} title: Agrega un `<h1>` al `<header>`.
 - {string} id: El atributo id del `<nav>`.
 - {string} type: El tipo de `<nav>`.
## HTML paso a paso

### Como crear un <nav>
Para empezar, haz un nuevo  Menu con las propiedades que quieras. Por ejemplo:
```
let menu = new Menu({
    props: {
        classList: ['p-4'],
        id: 'global',
    },
})
```
Crea un:
```
<nav id="global" class="nav menu p-4">
    <ul class="list">
        <li class="item">
            <a href="#us" class="link">
                <span>About us</span>
            </a>
        </li>

        <li class="item">
            <a href="/contact" class="link">
                <span>Contact</span>
            </a>
        </li>

        <li class="item">
            <a href="#_" class="button">
                <span>Click me!</span>
            </a>
        </li>
    </ul>
</nav>
```

Se puede customizar los `<a>` agregandolos en:
```
let menu = new Menu({
    props: {
        classList: ['p-4'],
        id: 'global',
    }, items: [{
            path: '/home',
            text: 'Home',
        }, {
            text: 'Say hi!',
            type: 'button',
    }],
})
```
Crea un:
```
<nav id="global" class="nav menu p-4">
    <ul class="list">
        <li class="item">
            <a href="/home" class="link">
                <span>Home</span>
            </a>
        </li>

        <li class="item">
            <a href="#_" class="button">
                <span>Say hi!</span>
            </a>
        </li>
    </ul>
</nav>
```

Si querés agregar un `<header>` dentro del `<nav>` podés hacerlo de esta forma:
```
let menu = new Menu({
    props: {
        classList: ['p-4'],
        header: {
            path: '/',
            title: 'Hello world',
        }, id: 'global',
    }, items: [{
            path: '/home',
            text: 'Home',
        }, {
            text: 'Say hi!',
            type: 'button',
    }],
})
```
Crea un:
```
<nav id="global" class="nav menu p-4">
    <header class="header">
        <a href="/" class="title">
            <h1 class="name">Hello world</h1>
        </a>
    </header>

    <ul class="list">
        <li class="item">
            <a href="/home" class="link">
                <span>Home</span>
            </a>
        </li>

        <li class="item">
            <a href="#_" class="button">
                <span>Say hi!</span>
            </a>
        </li>
    </ul>
</nav>
```

Si querés agregar un `<footer>` dentro del `<nav>` podés hacerlo de esta forma:
```
let menu = new Menu({
    props: {
        classList: ['p-4'],
        footer: {
            children: [
                ['span', {
                    children: 'Is not this awesome?',
                }],
            ],
        }, header: {
            path: '/',
            title: 'Hello world',
        }, id: 'global',
    }, items: [{
            path: '/home',
            text: 'Home',
        }, {
            text: 'Say hi!',
            type: 'button',
    }],
})
```
Crea un:
```
<nav id="global" class="nav menu p-4">
    <header class="header">
        <a href="/" class="title">
            <h1 class="name">Hello world</h1>
        </a>
    </header>

    <ul class="list">
        <li class="item">
            <a href="/home" class="link">
                <span>Home</span>
            </a>
        </li>

        <li class="item">
            <a href="#_" class="button">
                <span>Say hi!</span>
            </a>
        </li>
    </ul>

    <footer class="footer">
        <span>Is not this awesome?</span>
    </footer>
</nav>
```

### Agregar funcionalidad al nav
Próximamente.

## Working on
 - [X] Default Menu object
     - [X] Create
     - [ ] Find
    - [X] Add type 'nav'
        - [ ] Import Sidebar to mobile
    - [X] Add type 'tab'
        - [ ] Open content
    - [X] Add type 'float'
        - [ ] Add collapsable button