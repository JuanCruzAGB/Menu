/**
 * Link control the nav-links buttons.
 * @class Link
 */
class Link{
    /**
     * Creates an instance of Link.
     * @param {HTMLElement} html - Link's HTMLElement.
     * @memberof Link
     */
    constructor(html){
        this.html = html;
        this.href = html.href.split('/')[3];
        this.active = false;
        this.getContent();
    }

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

    static active(current, links){
        for(const link of links){
            if(link.href == current){
                link.activate();
            }
        }
    }

    activate(){
        this.active = true;
        this.html.classList.add('active');
    }
}

export const LinkClass = Link;