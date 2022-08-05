// ? JuanCruzAGB | Source package
import Class from "@juancruzagb/src";

/**
 * * Float makes an excellent float menu.
 * @export
 * @class Float
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 * @extends Class
 */
export default class Float extends Class {
    constructor (data = {
        callbacks: {
            active: {
                function: params => { /* console.log(params); */ },
                params: {},
            },
        },
        props: {
            id: "menu-1",
            type: "FLOAT",
        },
        state: {
            current: false,
        },
    }) {
        super({
            callbacks: {
                ...Float.callbacks(),
                ...((data && data.hasOwnProperty("callbacks")) ? data.callbacks : {}),
            },
            props: {
                ...Float.props(),
                ...((data && data.hasOwnProperty("props")) ? data.props : {}),
            },
            state: {
                ...Float.state(),
                ...((data && data.hasOwnProperty("state")) ? data.state : {}),
            },
        });

        this.html = document.querySelector(`#${ this.props.id }.menu.float`);
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
            type: "FLOAT",
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