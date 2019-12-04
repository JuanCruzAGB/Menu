let Sidebar = {
    /** @var {HTMLElement} - Sidebar HTML element. */
    HTML: null,
    /** @var {HTMLElement} - button opener. */
    btnOpener: null,
    /** @var {HTMLElement} - button opener. */
    btnCloser: null,
    /** Sidebar loader */
    load(){
        this.HTML = document.querySelector('.nav-menu .sidebar');
        this.btnOpener = document.querySelector('.nav-menu > .sidebar-button');
        this.btnCloser = document.querySelector('.nav-menu .sidebar .sidebar-button');

        this.btnOpener.addEventListener("click", function(e){
            e.preventDefault();
            Sidebar.open();
        })
    },
    /**
     * Check if there is Sidebar.
     * 
     * @return {boolean}
     */
    hasHTMLElement(){
        if(document.querySelector('.sidebar')){
            return true;
        }else{
            return false;
        }
    },
    /** Open the Sidebar. */
	open(){
        Sidebar.HTML.classList.add('opened');
        Sidebar.HTML.classList.remove('closed');

        this.btnCloser.addEventListener("click", function(e){
            e.preventDefault();
            Sidebar.close();
        })
    },
    /** Close the Sidebar. */
    close(){
        Sidebar.HTML.classList.remove('opened');
        Sidebar.HTML.classList.add('closed');
    },
};

document.addEventListener('DOMContentLoaded', function(){
    if(Sidebar.hasHTMLElement()){
        Sidebar.load();
    }
});