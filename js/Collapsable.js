/**
 * Collapsable control the collapsable buttons.
 * @export
 * @class Collapsable
 */
export class Collapsable{
    /**
     * Creates an instance of Collapsable.
     * @memberof Collapsable
     */
    constructor(){
        if(this.hasHTMLElement()){
            this.btns = document.querySelectorAll('.collapsable .collapsable-btn');
            let htmls = this.htmls;
            
            for(let int = 0; int < this.btns.length; int++){
                this.btns[int].addEventListener("click", function(e){
                    e.preventDefault();
                    if(htmls[int].classList.contains('opened')){
                        Collapsable.close(htmls[int], this);
                    }else{
                        Collapsable.open(htmls[int], this);
                    }
                });
            }
        }
    }

    /**
     * Check if there is Sidebar.
     * @returns
     * @memberof Collapsable
     */
    hasHTMLElement(){
        this.htmls = document.querySelectorAll('.collapsable');
        if(this.htmls.length){
            return true;
        }else{
            return false;
        }
    }

    /**
     * Open the Collapsable.
     * @param {*} html - Collapsable's menu list.
     * @param {*} btn - Collapsable's button.
     * @static
     * @memberof Collapsable
     */
    static open(html, btn){
        btn.children[0].classList.remove('fa-sort-down');
        html.classList.remove('closed');
        btn.children[0].classList.add('fa-sort-up');
        html.classList.add('opened');
    }

    /**
     * Close the Collapsable.
     * @param {*} html - Collapsable's menu list.
     * @param {*} btn - Collapsable's button.
     * @static
     * @memberof Collapsable
     */
    static close(html, btn){
        btn.children[0].classList.remove('fa-sort-up');
        html.classList.remove('opened');
        btn.children[0].classList.add('fa-sort-down');
        html.classList.add('closed');
    }
}