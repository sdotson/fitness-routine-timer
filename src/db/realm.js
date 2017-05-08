import Realm from 'realm';

class Exercise extends Realm.Object {}
Exercise.schema = {
    name: 'Exercise',
    properties: {
        isOneSided: {type: 'bool', default: false},
        name: 'string',
        type: 'string',
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
        exercises: {type: 'list', objectType: 'Exercise'},
    }
};

export default new Realm({schema: [Exercise, Routine]});
