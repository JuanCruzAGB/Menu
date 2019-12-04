let Collapsable = {
    /** @var {array} - Collapsable array of HTML elements. */
    HTMLs: [],
    /** @var {HTMLElement} - Collapsable array of buttons. */
    btns: [],
    /** Collapsable loader */
    load(){
        this.HTMLs = document.querySelectorAll('.collapsable');
        this.btns = document.querySelectorAll('.collapsable .collapsable-button');
        
        for(let i = 0; i < this.btns.length; i++){
            this.btns[i].addEventListener("click", function(e){
                e.preventDefault();
                Collapsable.switch(i);
            })
        }
    },
    /**
     * Check if there is Sidebar.
     * @return {boolean}
     */
    hasHTMLElement(){
        if(document.querySelector('.collapsable')){
            return true;
        }else{
            return false;
        }
    },
    /**
     * Switch between open and close.
     * @param {numeric} position - Collapsable position on the array.
     */
	switch(position){
        if(this.HTMLs[position].classList.contains('opened')){
            this.close(position);
        }else{
            this.open(position);
        }
    },
    /**
     * Open the Collapsable.
     * @param {numeric} position - Collapsable position on the array.
     */
    open(position){
        this.btns[position].children[0].classList.remove('fa-sort-down');
        this.HTMLs[position].classList.remove('closed');
        this.btns[position].children[0].classList.add('fa-sort-up');
        this.HTMLs[position].classList.add('opened');
    },
    /**
     * Close the Collapsable.
     * @param {numeric} position - Collapsable position on the array.
     */
    close(position){
        this.btns[position].children[0].classList.remove('fa-sort-up');
        this.HTMLs[position].classList.remove('opened');
        this.btns[position].children[0].classList.add('fa-sort-down');
        this.HTMLs[position].classList.add('closed');
    },
};

document.addEventListener('DOMContentLoaded', function(){
    if(Collapsable.hasHTMLElement()){
        Collapsable.load();
    }
});