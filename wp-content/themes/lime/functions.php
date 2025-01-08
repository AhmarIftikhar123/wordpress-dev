<?php

use Inc\classes\Lime;
use Inc\classes\Assets;

/**
 * The Functions
 * 
 * @package YoYo-Tube
 */
?>
<?php
// /var/www/html/wp-content/themes/lime
define('TEMPLATE_DIR', untrailingslashit(get_template_directory()));

// http://localhost:8001/wp-content/themes/lime
define('TEMPLATE_URI', untrailingslashit(get_template_directory_uri()));

require_once TEMPLATE_DIR . "/vendor/autoload.php";

/**
 * get_stylesheet_uri() = http://localhost:8001/wp-content/themes/lime/style.css
 */

$Aquila_Instance = Lime::getInstance();

// ?>