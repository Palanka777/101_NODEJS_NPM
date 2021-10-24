export default function (e ='dpont@iesebre.com') {
        let email = e;
        var password = '1234';

        return {
            email: email,
            consoleme: function consoleme() {
                console.log('Usuari: '+ email)
            }


        }
}