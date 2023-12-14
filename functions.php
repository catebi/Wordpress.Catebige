<?php
/**
 * Child functions and definitions.
 */
add_filter( 'kava-theme/assets-depends/styles', 'kava_child_styles_depends' );

/**
 * Enqueue styles.
 */
function kava_child_styles_depends( $deps ) {

	$parent_handle = 'kava-parent-theme-style';

	wp_register_style(
		$parent_handle,
		get_template_directory_uri() . '/style.css',
		array(),
		kava_theme()->version()
	);

	$deps[] = $parent_handle;

	return $deps;
}

/**
 * Disable magic button for your clients
 *
 * Un-comment next line to disble magic button output for you clients.
 */
//add_action( 'jet-theme-core/register-config', 'kava_child_disable_magic_button' );

function kava_child_disable_magic_button( $config_manager ) {
	$config_manager->register_config( array(
		'library_button' => false,
	) );
}

/**
 * Disable unnecessary theme modules
 *
 * Un-comment next line and return unnecessary modules from returning modules array.
 */
//add_filter( 'kava-theme/allowed-modules', 'kava_child_allowed_modules' );

function kava_child_allowed_modules( $modules ) {

	return array(
		'blog-layouts'    => array(),
		'crocoblock'      => array(),
		'woo'             => array(
			'woo-breadcrumbs' => array(),
			'woo-page-title'  => array(),
		),
	);

}

/**
 * Registering a new structure
 *
 * To change structure and apropriate documnet type parameters go to
 * structures/archive.php and document-types/archive.php
 *
 * To print apropriate location add next code where you need it:
 * if ( function_exists( 'jet_theme_core' ) ) {
 *     jet_theme_core()->locations->do_location( 'kava_child_archive' );
 * }
 * Where 'kava_child_archive' - apropritate location name (from example).
 *
 * Un-comment next line to register new structure.
 */
//add_action( 'jet-theme-core/structures/register', 'kava_child_structures' );

function kava_child_structures( $structures_manager ) {

	require get_theme_file_path( 'structures/archive.php' );
	require get_theme_file_path( 'structures/404.php' );

	$structures_manager->register_structure( 'Kava_Child_Structure_Archive' );
	$structures_manager->register_structure( 'Kava_Child_Structure_404' );

}

/* Add Leaflet Map Scripts */
function add_leaflet_scripts() {
    // Enqueue Leaflet CSS
    wp_enqueue_style( 'leaflet-css', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css' );
    wp_enqueue_style( 'leaflet-markercluster-default-css', 'https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/MarkerCluster.Default.css' );
    wp_enqueue_style( 'leaflet-markercluster-css', 'https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/MarkerCluster.css' );
	wp_enqueue_style( 'leaflet-gesture-handling-css', 'https://unpkg.com/leaflet-gesture-handling/dist/leaflet-gesture-handling.min.css' );

    // Enqueue Leaflet JavaScript
    wp_enqueue_script( 'leaflet-js', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', array(), null, true );
    wp_enqueue_script( 'leaflet-markercluster-js', 'https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/leaflet.markercluster.js', array(), null, true );

    // Custom Script for Map Initialization
    wp_enqueue_script( 'main-map-js', get_template_directory_uri() . '/main-map.js', array(), null, true );
	wp_enqueue_script( 'leaflet-gesture-handling-js', get_template_directory_uri() . '/leaflet-gesture-handling.js', array(), null, true );
}
add_action( 'wp_enqueue_scripts', 'add_leaflet_scripts' );

function add_clipboard_scripts() {
    wp_enqueue_script('clipboard', 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.6/clipboard.min.js', array(), null, true);
}

add_action('wp_enqueue_scripts', 'add_clipboard_scripts');