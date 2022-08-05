// ? JuanCruzAGB | Source package
import Class from "@juancruzagb/src";

/**
 * * Nav makes an excellent navbar menu.
 * @export
 * @class Nav
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Class
 */
export default class Nav extends Class {
    constructor (data = {
        callbacks: {
            active: {
                function: params => { /* console.log(params); */ },
                params: {},
            },
        },
        props: {
            id: "menu-1",
            type: "NAV",
        },
        state: {
            current: false,
        },
    }) {
        super({
            callbacks: {
                ...Nav.callbacks(),
                ...((data && data.hasOwnProperty("callbacks")) ? data.callbacks : {}),
            },
            props: {
                ...Nav.props(),
                ...((data && data.hasOwnProperty("props")) ? data.props : {}),
            },
            state: {
                ...Nav.state(),
                ...((data && data.hasOwnProperty("state")) ? data.state : {}),
            },
        });

        this.html = document.querySelector(`#${ this.props.id }.menu.nav`);
    }

    /**
     * * Returns default callbacks.
     * @static
     * @returns {object}
     * @memberof Sidebar
     */
    static callbacks () {
        return {
            // 
        };
    }

    /**
     * * Returns default properties.
     * @static
     * @returns {object}
     * @memberof Sidebar
     */
    static props () {
        return {
            id: "menu-1",
            type: "NAV",
        };
    }
    
    /**
     * * Returns default state.
     * @static
     * @returns {object}
     * @memberof Sidebar
     */
    static state () {
        return {
            current: false,
        };
    }
}