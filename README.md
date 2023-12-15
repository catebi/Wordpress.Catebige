# Wordress.Catebige customizations

<https://catebi.github.io/Wordpress.Catebige>

## 0. Connect to sftp

```bash
sftp -P 3009 %sftp_address%

# enter password

```

## 1. Map installation

```bash
cd ../wordpress/wp-content/themes/kava

# create directories
mkdir map
cd map

mkdir scripts
mkdir css

cd map/scripts

# upload scripts
put /%DirectoryPath%/Wordpress.Catebige/map/scripts/leaflet.js
put /%DirectoryPath%/Wordpress.Catebige/map/scripts/leaflet.markercluster.js
put /%DirectoryPath%/Wordpress.Catebige/map/scripts/leaflet-gesture-handling.js
put /%DirectoryPath%/Wordpress.Catebige/map/scripts/main-map.js

cd ../css

put /%DirectoryPath%/Wordpress.Catebige/map/css/leaflet.css
put /%DirectoryPath%/Wordpress.Catebige/map/css/MarkerCluster.Default.css
put /%DirectoryPath%/Wordpress.Catebige/map/css/MarkerCluster.css
put /%DirectoryPath%/Wordpress.Catebige/map/css/leaflet-gesture-handling.min.css
put /%DirectoryPath%/Wordpress.Catebige/map/css/map.css

```

## 2. Clipboard installation

```bash
cd ../wordpress/wp-content/themes/kava

# create directories
mkdir clipboard
cd clipboard

mkdir scripts
mkdir css

cd clipboard/scripts

# upload scripts
put /%DirectoryPath%/Wordpress.Catebige/clipboard/scripts/clipboard.min.js
put /%DirectoryPath%/Wordpress.Catebige/clipboard/scripts/main-clipboard.js

cd ../css

put /%DirectoryPath%/Wordpress.Catebige/clipboard/css/wp-clipboard.css

```

## 3. Update `functions.php`

```bash
cd ../wordpress/wp-content/themes/kava-child

# upload functions.php
put /%DirectoryPath%/Wordpress.Catebige/functions.php
```