var AppDispatcher =  require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _contacts = [];

var AppStore = assign({}, EventEmitter.prototype, {

    getContacts: function(){
        return _contacts;
    },
    saveContact: function(contact){
        _contacts.push(contact);
    },
    setContacts: function(contacts){
        _contacts = contacts;
    },
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback){
        this.on('change', callback);
    },
    removeChangeListener: function(callback){
        this.removeListener('change', callback);
    }
});


AppDispatcher.register(function(payload){
    var action = payload.action;

    switch(action.actionType){
        case AppConstants.SAVE_CONTACT:
            console.log('Saving Contact...');

            // Store Save
            AppStore.saveContact(action.contact);

            // Save to API
            AppAPI.saveContact(action.contact);

            // Emit change
            AppStore.emit(CHANGE_EVENT);
            break;


        case AppConstants.RECEIVE_CONTACTS:
            console.log('Receiving Contacts...');

            // Store Save
            AppStore.setContacts(action.contacts);


            // Emit change
            AppStore.emit(CHANGE_EVENT);
            break;
    }

    return true;
});


module.exports = AppStore;
