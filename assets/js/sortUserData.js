/***
 * Sorts the telephonelist by
 * name, phonenumber, abteilung
 */
function sort(sortType) {
    switch(sortType) {
        case 'name':
            window.filteredUserData = window.filteredUserData.sort(compareName);
            break;
        case 'abteilung':
            window.filteredUserData = window.filteredUserData.sort(compareAbteilung);
            break;
        case 'telefonnummer':
            window.filteredUserData = window.filteredUserData.sort(comparePhonenumber);
            break;
    }

    renderViewMode();
    countUserData();
}

function compareName( a, b ) {
    if ( a.name < b.name ){
        return -1;
    }
    if ( a.name > b.name ){
        return 1;
    }
    return 0;
}

function compareAbteilung( a, b ) {
    if ( a.gruppetext < b.gruppetext ){
        return -1;
    }
    if ( a.gruppetext > b.gruppetext ){
        return 1;
    }
    return 0;
}

function comparePhonenumber( a, b ) {
    if ( a.telefon < b.telefon ){
        return -1;
    }
    if ( a.telefon > b.telefon ){
        return 1;
    }
    return 0;
}
