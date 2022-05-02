// ? HTMLCreator core
import Html from "@juancruzagb/htmlcreator/js/Core/Html.js";

// ? HTMLCreator repository
import Header from "@juancruzagb/htmlcreator/js/Boxes/Header.js";
import Item from "@juancruzagb/htmlcreator/js/Boxes/Item.js";
import Link from "@juancruzagb/htmlcreator/js/Buttons/Link.js";
import List from "@juancruzagb/htmlcreator/js/Boxes/List.js";
import Title from "@juancruzagb/htmlcreator/js/Texts/Title.js";
import Image from "@juancruzagb/htmlcreator/js/Visuals/Image.js";

/**
 * * Menu makes an excellent navigation menu.
 * @export
 * @class Menu
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Class
 */
export default class Menu extends Html {
    /**
     * * Creates an instance of Menu.
     * @param {object} [data]
     * @param {object|false} [data.callbacks]
     * @param {object|false} [data.props]
     * @param {string[]} [data.props.classList]
     * @param {object|false} [data.props.footer=false]
     * @param {array} [data.props.footer.children]
     * @param {object|false} [data.props.header]
     * @param {string|false} [data.props.header.image=false]
     * @param {string|false} [data.props.header.path='/']
     * @param {string} [data.props.header.title='Menu']
     * @param {string} [data.props.id='menu-1'] Menu primary key.
     * @param {string} [data.props.type='nav'] Nav || Tab || Float
     * @param {object|false} [data.state]
     * @param {boolean} [data.state.collapse=false] If the Float Menu should collapse with a button.
     * @param {string|false} [data.state.current=false] Menu current Link active.
     * @param {boolean} [data.state.sidebar=false] If the Nav Menu should implement the Sidebar Button Open.
     * @param {boolean} [data.state.visible=false] If the Float Menu should be visible.
     * @param {object[]} [data.items]
     * @memberof Menu
     */
    constructor (data = {
        callbacks: {
            // ?
        }, items: [{
            hash: 'us',
            text: 'About us',
        }, {
            path: '/contact',
            text: 'Contact',
        }, {
            callback: {
                function: (params = {}) => { /* console.log(params); */ },
                params: {
                    // ?
                },
            },
            text: 'Click me!',
            type: 'button',
        }], props: {
            classList: [],
            header: {
                path: '/',
                title: 'Menu',
            }, id: 'menu-1',
            nodeName: 'NAV',
            type: 'nav',
        }, state: {
            current: false,
            sidebar: false,
        },
    }) {
        switch (typeof data) {
            case 'string':
                console.log(document.querySelector(data));
                throw new Error('Locate a new <Menu /> not supported yet');
        }

        super({
            props: {
                ...Menu.props,
                ...(data && typeof data != 'string' && data.hasOwnProperty('props') && data.props) ? data.props : {},
            }, state: {
                ...Menu.state,
                ...(data && typeof data != 'string' && data.hasOwnProperty('state') && data.state) ? data.state : {},
            }, callbacks: {
                ...Menu.callbacks,
                ...(data && typeof data != 'string' && data.hasOwnProperty('callbacks') && data.callbacks) ? data.callbacks : {},
            },
        });

        switch (this.props.type.toUpperCase()) {
            case 'nav':
                console.log(this.state.sidebar);
                // this.setSidebars();
                break;
        }

        if (this.props.hasOwnProperty('header')) {
            this.setHeader();
        }

        this.setList();

        this.setItems((data && typeof data != 'string' && data.hasOwnProperty('items') && data.items) ? data.items : []);

        if (this.props.hasOwnProperty('footer')) {
            this.setFooter();
        }

        this.checkState();
    }

    /**
     * * Set the Header children.
     * @memberof Menu
     */
    setHeader () {
        if (!this.header) {
            if (this.props.header.hasOwnProperty('image')) {
                this.setImage();
            }

            this.setTitle();

            this.header = new Header({
                props: {
                    classList: ['header'],
                    id: `${ this.props.id }-header`,
                },
            });

            if (this.props.header.hasOwnProperty('image') && !this.props.header.hasOwnProperty('path')) {
                this.header.appendChild(this.image);
            }

            this.header.appendChild(this.title);

            this.appendChild(this.header);
        }
    }

    /**
     * * Set the Image.
     * @memberof Menu
     */
    setImage () {
        this.image = new Image({
            props: {
                alt: `${ this.props.header.title } | Image`,
                classList: ['image'],
                id: `${ this.props.id }-image`,
                src: this.props.header.image,
            },
        });
    }

    /**
     * * Set the Items.
     * @param {object[]} [items]
     * @memberof Menu
     */
    setItems (items = []) {
        if (!this.items) {
            this.items = [];
        }

        if (!this.links) {
            this.links = [];
        }

        for (const key in items) {
            if (Object.hasOwnProperty.call(items, key)) {
                let item = items[key];

                let link = new Link({
                    callbacks: item.callbacks || {},
                    children: [
                        ['span', {
                            props: {
                                id: `${ this.props.id }-item-${ key }-link-text`,
                            }, children: item.text,
                        }],
                    ], props: {
                        classList: [(item.hasOwnProperty('type') ? item.type : 'link')],
                        id: `${ this.props.id }-item-${ key }-link`,
                        target: item.target,
                        url: item.path || item.hash,
                    },
                });

                this.links.push(link);

                this.items.push(new Item({
                    props: {
                        classList: ['item'],
                        id: `${ this.props.id }-item-${ key }`,
                    }, children: link,
                }));
            }
        }
    }

    /**
     * * Set the List.
     * @memberof Menu
     */
    setList () {
        if (!this.list) {
            this.list = new List({
                props: {
                    classList: ['list'],
                    id: `${ this.props.id }-list`,
                },
            });

            this.appendChild(this.list);
        }
    }

    /**
     * * Set the Title.
     * @memberof Menu
     */
    setTitle () {
        if (this.props.header.hasOwnProperty('path')) {
            this.title = new Link({
                props: {
                    classList: ['title'],
                    id: `${ this.props.id }-title`,
                    url: this.props.header.path,
                },
            });
            
            this.name = new Title({
                children: this.props.header.title,
                props: {
                    classList: ['name'],
                    id: `${ this.props.id }-title`,
                    level: 1,
                },
            });

            if (this.props.header.hasOwnProperty('image')) {
                this.title.appendChild(this.image);
            }

            this.title.appendChild(this.name);
        } else {
            this.title = new Title({
                children: this.props.header.title,
                props: {
                    classList: ['title'],
                    id: `${ this.props.id }-title`,
                    level: 1,
                },
            });
        }
    }

    /**
     * * Set the Menu Sidebars.
     * @memberof Menu
     */
    async setSidebars () {
        const Sidebar = await import("@juancruzagb/sidebar/js/Sidebar.js");
        
        if (!this.sidebars) {
            this.sidebars = [];
        }
        if (this.props.hasOwnProperty("sidebar")) {
            if (this.props.sidebar instanceof Array) {
                for (const data of this.props.sidebar) {
                    if (data instanceof Object) {
                        this.sidebars.push(new Sidebar.default(data));
                    }
                }
            } else if (this.props.sidebar instanceof Object) {
                this.sidebars.push(new Sidebar.default(this.props.sidebar));
            }
        }
    }

    /**
     * * Check the state values.
     * @memberof Menu
     */
    checkState () {
        // ?
    }

    /**
     * * Default properties.
     * @static
     * @var {object} props
     */
    static props = {
        classList: [],
        header: {
            path: '/',
            title: 'Menu',
        }, id: 'menu-1',
        nodeName: 'NAV',
        type: 'nav',
    }
    
    /**
     * * Default state.
     * @static
     * @var {object} state
     */
    static state = {
        current: '/',
        sidebar: false,
    }
    
    /**
     * * Default callbacks.
     * @static
     * @var {object} callbacks
     */
    static callbacks = {
        // ?
    }
}

/* <nav id="id" class="nav menu">
    // <header class="header">
    //     // <Sidebar.Buttons.Open />
    
    //     // <a href="/" class="title">
    //     //    // <img class="image" src="Logo de la empresa" alt="Logo de la empresa" />
    
    //     //     <h1 class="name">Nombre de la empresa</h1>
    //     // </a>
    
    //     // <h1 class="title">Nombre de la empresa</h1>
    // </header>

    <ul class="list">
        <li class="item">
            <a href="ruta" class="link">
                <span>Text</span>
            </a>
        </li>

        <li class="item">
            <a href="#hash" class="link">
                <span>Text</span>
            </a>
        </li>

        <li class="item">
            <a href="#_" class="button">
                <span>Text</span>
            </a>
        </li>
    </ul>

    // <footer class="footer">

    // </footer>
</nav> */

/* <nav id="id" class="tab menu">
    // <header class="header">
    //     // <a href="/" class="title">
    //     //    // <img class="image" src="Logo de la empresa" alt="Logo de la empresa" />
    
    //     //     <h1 class="name">Nombre de la empresa</h1>
    //     // </a>
    
    //     // <h1 class="title">Nombre de la empresa</h1>
    // </header>

    <ul class="list">
        <li class="item">
            <a href="ruta" class="link">
                <span>Text</span>
            </a>
        </li>

        <li class="item">
            <a href="#hash" class="link">
                <span>Text</span>
            </a>
        </li>

        <li class="item">
            <a href="#_" class="button">
                <span>Text</span>
            </a>
        </li>
    </ul>

    // <footer class="footer">

    // </footer>
</nav> */

/* <nav id="id" class="float menu">
    // <header class="header">
    //     // <a href="/" class="title">
    //     //    // <img class="image" src="Logo de la empresa" alt="Logo de la empresa" />
    
    //     //     <h1 class="name">Nombre de la empresa</h1>
    //     // </a>
    
    //     // <h1 class="title">Nombre de la empresa</h1>
    // </header>

    <ul class="list">
        <li class="item">
            <a href="ruta" class="link">
                <span>Text</span>
            </a>
        </li>

        <li class="item">
            <a href="#hash" class="link">
                <span>Text</span>
            </a>
        </li>

        <li class="item">
            <a href="#_" class="button">
                <span>Text</span>
            </a>
        </li>
    </ul>

    // <footer class="footer">

    // </footer>
</nav> */