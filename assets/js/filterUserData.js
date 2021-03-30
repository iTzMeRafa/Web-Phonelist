/***
 * Renders the filter options dynamicly
 * Actually filters the userData, depending on users filter input
 */

function renderFilters() {
	const departments = window.departments;
	const departmentsEl = document.getElementById('departments');

    const defaultOptionEl = document.createElement('a');
    const defaultValueEl = document.createTextNode('Alle');

    defaultOptionEl.className = 'dropdown-item';
    defaultOptionEl.href = '#';
    defaultOptionEl.addEventListener('click', function () {
        filterUserData('all');
    });

    defaultOptionEl.appendChild(defaultValueEl);

    departmentsEl.appendChild(defaultOptionEl);

    // Sort departments by alphabet
	departments.sort();

	departments.map(department => {
		const optionEl = document.createElement('a');
		const valueEl = document.createTextNode(department);

		optionEl.className = 'dropdown-item';
		optionEl.href = '#';
		optionEl.addEventListener('click', function () {
			filterUserData(department);
		});

		optionEl.appendChild(valueEl);

		departmentsEl.appendChild(optionEl);
	});
}

function filterUserData(department) {
	const userData = window.userData;
    if (department === 'all') {
        window.filteredUserData = window.userData;
    }
    else {
        window.filteredUserData = userData.filter(user => user.gruppetext === department);
    }

    renderViewMode();
	countUserData();
}
