var Firebase = require('firebase');
var AppActions = require('../actions/AppActions');

module.exports = {
    saveContact: function(contact){
        this.firebaseRef = new Firebase('https://contactlist9.firebaseio.com/contacts');
        this.firebaseRef.push({
            contact: contact
        });
    },
    getContacts: function(){
        this.firebaseRef = new Firebase('https://contactlist9.firebaseio.com/contacts');
        this.firebaseRef.once("value", function(snapshot){
            var contacts = [];
            snapshot.forEach(function(childSnapshot){
                var contact = {
                    id: childSnapshot.key(),
                    name: childSnapshot.val().contact.name,
                    phone: childSnapshot.val().contact.phone,
                    email: childSnapshot.val().contact.email
                };

                contacts.push(contact);
                AppActions.receiveContacts(contacts);

            });
        });
    },


    removeContact: function(contactId){

        console.log("HELLO1");

        this.firebaseRef = new Firebase('https://contactlist9.firebaseio.com/contacts/'+contactId);
        this.firebaseRef.remove();

    }

};