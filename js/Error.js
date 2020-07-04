/**
 * * Error controls the error messages.
 * @export
 * @class Error
 */
export class Error{
    /**
     * * Creates an instance of Error.
     * @param {object} properties - Error Properties.
     * @memberof Error
     */
    constructor(properties = {status: 200, message: 'Every thing is good.', display: false}){
        this.status = properties.status;
        this.message = properties.message;
        this.display = properties.display;
        this.type = this.getType();
    }

    /**
     * * Get the Error's type.
     * @returns {string|false}
     * @memberof Error
     */
    getType(){
        switch(this.status){
            case 200:
                return 'info';
            break;
            case 403:
                return 'error';
            break;
            case 404:
                return 'error';
            break;
            case 415:
                return 'error';
            break;
            default:
                return false;
            break;
        }
    }

    /**
     * * Print into the console the correct message.
     * @returns
     * @memberof Error
     */
    report(){
        switch(this.status){
            case 200:
                if(this.display){
                    console.warn('NavMenuJS Warning: ' + this.message);
                }
            break;
            case 403:
                if(this.display){
                    console.error('NavMenuJS Error: ' + this.message);
                }
            break;
            case 404:
                if(this.display){
                    console.error('NavMenuJS Error: ' + this.message);
                }
            break;
            case 415:
                if(this.display){
                    console.error('NavMenuJS Error: ' + this.message);
                }
            break;
        }
    }
}