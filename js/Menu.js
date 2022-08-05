// ? JuanCruzAGB | Menu package
import { Float, Nav, Tab, } from "@juancruzagb/menu";

/**
 * * Menu makes an excellent menu.
 * @export
 * @class Menu
 * @author Juan Cruz Armentia <juan.cruz.armentia@gmail.com>
 */
export default class Menu {
    /**
     * * Creates an instance of Menu.
     * @param {string} [type="NAV"]
     * @param {*} [data={}]
     * @memberof Menu
     */
    constructor (type = "NAV", data = {}) {
        switch (type.toLocaleUpperCase()) {
            case "FLOAT":
                return new Float(data);

            case "TAB":
                return new Tab(data);

            case "NAV":
            default:
                return new Nav(data);
        }
    }
}