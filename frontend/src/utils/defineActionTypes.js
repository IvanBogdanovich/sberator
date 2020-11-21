const prefix = '@';
const divider = '/';

// define actions types
export default function defineActionTypes(nameSpace, actionTypesNames) {
    const actionTypes = {};

    actionTypesNames.forEach((name) => {
        actionTypes[name] = prefix + nameSpace + divider + name;
    });

    return actionTypes;
}