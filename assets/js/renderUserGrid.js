/***
 * Loops through the userData JSON object and renders a grid-system
 * with all its data
 */

	function renderUserGrid() {

		const userData = window.filteredUserData;
		const cardsInRow = 3;
		const userDataEl = document.getElementById('userData');

		let html = '';

		// language=HTML
		html += `<div class="row mb-3">`;

		// Iterate through all users and render a card with its information
		userData.map((user, iteration) => {

			if (iteration !== 0 && iteration % cardsInRow === 0) {
				// language=HTML
				html += `
					</div>
					<div class="row mb-3">
				`;
			}

			// language=HTML
			html += `
				<div class="col-md-${12/cardsInRow}">
					<div class="card mb-3">
						<div class="card-body">
							<div class="card__titleContainer">
								<h5 class="card-title">${user.vorname} ${user.name} </h5>
								<small>${user.funktion}</small>
							</div>
							<h6 class="card-subtitle mb-2 text-muted">${user.gruppetext} (${user.gruppekuerzel})</h6>
							<p class="card-text"><small class="text-muted">${user.raum}, ${user.telefon}</small></p>
							<a href="mailto:${user.email}" data-toggle="tooltip" title="${user.email}" class="card-link">E-Mail schreiben</a>
						</div>
					</div>
				</div>
			`;

		});

		// language=HTML
		html += `</div>`;

		// Render html to dom
		if(userDataEl) userDataEl.innerHTML = html;

		// Activate tooltips
		$(function () {
			$('[data-toggle="tooltip"]').tooltip()
		})
	}
