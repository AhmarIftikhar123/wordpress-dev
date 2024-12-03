<?php
/**
 * Theme Functions
 * 
 * @package Aquila
 */

define("AQUILA_DIR_PATH", untrailingslashit(get_template_directory()));
define("AQUILA_DIR_URI", untrailingslashit(get_template_directory_uri()));

require_once AQUILA_DIR_PATH . "/inc/helpers/autoloader.php";

function aquila_get_theme_instance()
{
          \AQUILA_THEME\Inc\AquilaTheme::get_instance();
}

aquila_get_theme_instance();

function aquila_enqueue_styles()
{
          // Register Bootstrap CSS
          wp_register_style('bootstrap', AQUILA_DIR_URI . '/assets/src/library/css/bootstrap.min.css', array(), null, 'all');

          // Register Popper.js
          wp_register_script('popper-js', 'https://unpkg.com/@popperjs/core@2.11.6/dist/umd/popper.min.js', array(), null, true);

          // Register Bootstrap JS
          wp_register_script('bootstrap-js', AQUILA_DIR_URI . '/assets/src/library/js/bootstrap.min.js', array('jquery', 'popper-js'), null, true);

          // Register Custom CSS
          wp_register_style('custom', AQUILA_DIR_URI . '/assets/src/css/custom.css', array(), filemtime(AQUILA_DIR_PATH . '/assets/src/css/custom.css'), 'all');

          // Register Main JS
          wp_register_script('main', AQUILA_DIR_URI . '/assets/src/js/main.js', array('jquery', 'bootstrap-js'), filemtime(AQUILA_DIR_PATH . '/assets/src/js/main.js'), true);

          // Enqueue Styles
          wp_enqueue_style('bootstrap');
          wp_enqueue_style('custom');


          // Enqueue Scripts
          wp_enqueue_script('popper-js');
          wp_enqueue_script('bootstrap-js');
          wp_enqueue_script('main');
}

add_action('wp_enqueue_scripts', 'aquila_enqueue_styles');
