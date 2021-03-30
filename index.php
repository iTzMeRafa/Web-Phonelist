<?php
/***
 * Eine Web Telefonliste mit Such- und Filterfunktionen.
 * @copyright Stadt Kamen 2021
 */
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Stadt Kamen Telefonliste</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap-utilities.min.css">
    <link rel="stylesheet" href="/assets/css/style.css">

    <!-- Initialize Global Attributes -->
    <script>
        window.userData = [];
        window.filteredUserData = [];
		window.departments = [];
        window.countResults = 0;
        window.viewMode = 'grid';
    </script>

    <!-- JavaScript-->
    <script src="/assets/vendor/jQuery/js/jquery-3.5.1.js" crossorigin="anonymous"></script>
    <script src="/assets/vendor/bootstrap/js/bootstrap-4.5.3.js" crossorigin="anonymous"></script>
    <script src="/assets/js/renderUserGrid.js"></script>
    <script src="/assets/js/renderUserList.js"></script>
    <script src="/assets/js/toggleViewMode.js"></script>
    <script src="/assets/js/countUserData.js"></script>
    <script src="/assets/js/parseUserData.js"></script>
    <script src="/assets/js/filterUserData.js"></script>
    <script src="/assets/js/sortUserData.js"></script>
    <script src="/assets/js/searchData.js"></script>
</head>
<body>

    <!-- wrapper container -->
    <div class="wrapper">
        <div class="container-fluid">

            <!-- Header -->
            <div class="jumbotron jumbotron-fluid header--container">
                <div class="container">
                </div>
            </div>

            <!-- actions -->
            <div class="row mt-4 mb-4">

                <!-- Search -->
                <div class="col-md-3">
                    <div class="form-group">
                        <input
                            type="text"
                            placeholder="Suche..."
                            class="form-control"
                            id="search"
                            oninput="search(this.value)"
                        >
                    </div>
                </div>

                <!-- Filter Abteilungen -->
                <div class="col-md-3">
                    <div class="dropdown">
                        <button class="btn dropdown-toggle filterButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filtern nach
                        </button>
                        <div id="departments" class="dropdown-menu"></div>
                    </div>
                </div>

                <!-- Sort -->
                <div class="col-md-3">
                    <div class="dropdown">
                        <button class="btn dropdown-toggle sortButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sortieren nach
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#" onclick="sort('name')">Name</a>
                            <a class="dropdown-item" href="#" onclick="sort('telefonnummer')">Telefonnummer</a>
                            <a class="dropdown-item" href="#" onclick="sort('abteilung')">Abteilung</a>
                        </div>
                    </div>
                </div>

                <!-- Layout View Mode -->
                <div class="col-md-3">
                    <div class="viewMode">
                        <div class="btn-group" role="group">
                            <button type="button" class="btn" onclick="toggleViewMode('grid')">Kachel</button>
                            <button type="button" class="btn" onclick="toggleViewMode('list')">Liste</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Count Searchresults -->
            <div class="col-md-3">
                <div class="searchResults">
                    <div id="countUserData"></div>
                </div>
            </div>

            <!-- Grid/List -->
            <div id="userList" class="mt-2">
                <div id="userData"></div>
            </div>

        </div>

    </div>

</body>
</html>
