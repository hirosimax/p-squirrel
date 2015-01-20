<?php
/*
 *	Plugin Name: p Squirrel
 *	Plugin URI: https://hq.zendy.net/wordpress/plugins/p-squirrel/
 *	Description: Hides empty paragraph tags to prevent users from breaking your beautiful designs.
 *	Version: 1.1.3
 *	Author: ZendyLabs
 *	Author URI: https://hq.zendy.net/
 *	License: GPL2v2 or later
 *
*/

function p_squirrel_includes() {
	// include the JavaScript at the bottom of each page
    wp_enqueue_script( 'p_squirrel_js', plugins_url( 'p-squirrel/p-squirrel.js' ), array('jquery'), '', true );
}

// connect our function p_squirrel_includes with the wp_enqueue_scripts hook
add_action( 'wp_enqueue_scripts', 'p_squirrel_includes' );
?>