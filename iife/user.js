//IIFE
var user = (function (e ='dpont@iesebre.com'){
    let email=e;
    var password='1234';

    function consoleme(){
        console.log('Usuari: ' + email)
    }

    function setemail(em){
        this.email=em;
    }

    return {
        consoleme: consoleme,
        email: email,
        setemail
    }
})()