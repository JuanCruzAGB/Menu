/**
 * Link control the nav-links buttons.
 * @export
 * @class Link
 */
export class Link{
    /**
     * * Creates an instance of Link.
     * @param {HTMLElement} html - Link's HTMLElement.
     * @memberof Link
     */
    constructor(html){
        try{
            this.error = new Error();
            this.html = html;
            this.href = html.href.split('/')[3];
            this.active = false;
            this.getContent();
        }catch(error){
            throw error;
        }
    }

    /**
     * * Get the Link content.
     * @memberof Link
     */
    getContent(){
        for(let child of this.html.children){
            if(child.classList.contains('link-text')){
                this.text = child;
            }else if(child.classList.contains('link-icon')){
                this.icon = child;
                this.type = 'link-icon';
            }else if(child.classList.contains('collapsable-btn')){
                this.btn = child;
                this.type = 'collapsable-btn';
            }
        }
    }

    /**
     * * Activate the current Link.
     * @memberof Link
     */
    activate(){
        this.active = true;
        this.html.classList.add('active');
    }

    /**
     * * Search the current Link activated.
     * @static
     * @param {*} current
     * @param {*} links
     * @memberof Link
     */
    static active(current, links){
        for(const link of links){
            if(link.href == current){
                link.activate();
            }
        }
    }
}