# Menu
> by [JuanCruzAGB](https://github.com/JuanCruzAGB)

This package contains all the logic to create/find and make a `<nav>` functional, it was created for my personal work (but you can use it **:D**).

 - [Installation](#installation)
 - [What contains?](#what-contains)
 - [How to use?](#html-step-by-step)
    - [Create](#how-to-create-a-nav)
    - [Find](#add-functionality-to-a-nav)
 - [Coming soon](#working-on)

## Installation
 1. Install from npm.
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

## What contains?
This package has a default export object called **Menu** extended from [@juancruzagb/htmlcreator/Html](https://www.npmjs.com/package/@juancruzagb/htmlcreator), you can create a new `<nav>` or find it.
Also, there are multiple **css** files to customize correctly the `<nav>`.
There are 3 types of `<nav>`:
 - **nav:** Default navigation bar.
 - **tab:** Navigate by tabs.
 - **float:** Navigate by float buttons.

### Menu
Default **JavaScript** object, extended from [@juancruzagb/htmlcreator/Html](https://www.npmjs.com/package/@juancruzagb/htmlcreator).

#### Properties
 - {string[]} classList: Add to the `<nav>` the classList attribute.
 - {object|false} footer: Add a `<footer>` to the `<nav>`.
    - {array} children: All the HTML children from the `<footer>`.
 - {object|false} header: Add a `<header>` to the `<nav>`.
    - {string|false} image: Add a `<img>` to the `<header>`.
    - {string|false} path: Make the `<header>` children inside an `<a>`.
    - {string|false} title: Add a `<h1>` to the `<header>`.
 - {string} id: The `<nav>` id attribute.
 - {string} type: The `<nav>` type.
## HTML step by step

### How to create a <nav>
To start, make a new Menu with the properties you want. For example:
```
let menu = new Menu({
    props: {
        classList: ['p-4'],
        id: 'global',
    },
})
```
Creates:
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

You can customize the `<a>` by adding:
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
Creates:
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

If you want to add a `<header>` inside the `<nav>` you can do it like this:
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
Creates:
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

If you want to add a `<footer>` inside the `<nav>` you can do it like this:
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
Creates:
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

### Add functionality to a <nav>
Coming soon.

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