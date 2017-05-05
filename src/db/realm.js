import Realm from 'realm';

class Stretch extends Realm.Object {}
Stretch.schema = {
    name: 'Stretch',
    properties: {
        isOneSided: {type: 'bool', default: false},
        name: 'string',
        default:  {type: 'bool', default: false},
        duration: {type: 'int',    default: 0}
    },
};

class Routine extends Realm.Object {}
Routine.schema = {
    name: 'Routine',
    properties: {
        name: 'string',
        default:  {type: 'bool', default: false},
        stretches: {type: 'list', objectType: 'Stretch'},
    }
};

export default new Realm({schema: [Stretch, Routine]});
