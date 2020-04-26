import M from 'materialize-css';

const PopUp = {
    exibeMensagem: (status, msg) => {
        switch(status){
            case 'success':
                M.toast({html: msg, classes: 'green', displayLength: 2000});
            break;
            case 'error':
                M.toast({html: msg, classes: 'red', displayLength: 2000});
            break;
        }
    }
}
 export default PopUp;