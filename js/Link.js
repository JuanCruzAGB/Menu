/**
 * * Link controls the .nav-links.
 * @export
 * @class Link
 */
export class Link{
    /**
     * * Creates an instance of Link.
     * @param {HTMLElement} html - Link HTML Element.
     * @memberof Link
     */
    constructor(html = undefined){
        // try{
            this.error = new Error();
            this.setStates();
            this.setHTML(html);
            this.setTarget();
        // }catch(error){
        //     throw error;
        // }
    }

    /**
     * * Set the Link states.
     * @memberof Link
     */
    setStates(){
        this.states = {};
        this.setActive();
    }

    /**
     * * Set the Link active state.
     * @memberof Link
     */
    setActive(){
        this.states.active = false;
    }

    /**
     * * Set the Link HTML Element.
     * @param {HTMLElement} html - Link HTML Element.
     * @memberof Link
     */
    setHTML(html = undefined){
        this.html = html;
    }

    /**
     * * Set the Link target.
     * @memberof Link
     */
    setTarget(){
        this.target = this.html.href.split('/').pop();
    }

    /**
     * * Activate the current Link.
     * @memberof Link
     */
    activate(){
        this.states.active = true;
        this.html.classList.add('active');
    }

    /**
     * * Search the current Link active.
     * @static
     * @param {string} current - Current link.
     * @param {Link[]} links - Links created.
     * @memberof Link
     */
    static active(current = '', links = []){
        // for(const link of links){
        //     if(link.target == current){
        //         link.activate();
        //     }
        // }
    }
}