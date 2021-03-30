/***
 * Loops through the userData JSON object and renders a list-system
 * with all its data
 */

	function renderUserList() {

		const userData = window.filteredUserData;
		const userDataEl = document.getElementById('userData');

		let html = '';

		// language=HTML
		html += `
        <table class="table table-hover">
            <thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Name</th>
					<th scope="col">Telefon</th>
					<th scope="col">E-Mail</th>
					<th scope="col">Raumnummer</th>
					<th scope="col">Abteilung</th>
					<th scope="col">Funktion</th>
				</tr>
            </thead>
            <tbody>
	`;

		// Iterate through all users and render a card with its information
		userData.map((user, iteration) => {
			// language=HTML
			html += `
				<tr>
				  <th class="userList--table" scope="row">${iteration + 1}</th>
				  <td class="userList--table">${user.name}, ${user.vorname}</td>
				  <td class="userList--table"><a href="tel:${user.telefon}">${user.telefon}</a></td>
				  <td class="userList--table"><a href="mailto:${user.email}">${user.email}</a></td>
				  <td class="userList--table">${user.raum}</td>
				  <td class="userList--table">${user.gruppetext} (${user.gruppekuerzel})</td>
				  <td class="userList--table">${user.funktion}</td>
				</tr>
			`;
		});

		// language=HTML
		html += `
			</tbody>
			</table>
		`;

		if(userDataEl) userDataEl.innerHTML = html;
	}
