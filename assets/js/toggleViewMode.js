 /***
 * Toggles the view mode based on the user selection
 * Valid view modes: Grid, List
 */
function toggleViewMode(mode) {
	switch(mode) {
		case 'grid':
            window.viewMode = 'grid';
			setToggleButtonActive('grid');
            renderUserGrid();
			break;
		case 'list':
            window.viewMode = 'list';
			setToggleButtonActive('list');
            renderUserList();
			break;
		default:
			renderUserGrid();
			setToggleButtonActive('grid');
	}
}

function setToggleButtonActive(toggleButton) {
	const gridToggleButtonEl = document.getElementById('gridToggleButton');
	const listToggleButton = document.getElementById('listToggleButton');

	switch (toggleButton) {
		case 'grid':
			gridToggleButtonEl.className = 'btn btn-outline-primary active';
			listToggleButton.className = 'btn btn-outline-primary';
			break;
		case 'list':
			gridToggleButtonEl.className = 'btn btn-outline-primary';
			listToggleButton.className = 'btn btn-outline-primary active';
			break;
		default:
			gridToggleButtonEl.className = 'btn btn-outline-primary active';
			listToggleButton.className = 'btn btn-outline-primary';
	}
}

function renderViewMode() {
    if(window.viewMode === 'grid') {
        renderUserGrid();
    }
    else if(window.viewMode === 'list') {
        renderUserList();
    }
}
