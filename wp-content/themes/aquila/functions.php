<?php
/**
 * Theme Functions
 * 
 * @package Aquila
 */

define("AQUILA_DIR_PATH", untrailingslashit(get_template_directory()));
define("AQUILA_DIR_URI", untrailingslashit(get_template_directory_uri()));

require_once AQUILA_DIR_PATH . '/vendor/autoload.php';

use Inc\classes\AquilaTheme;  // Correct reference to AquilaTheme class

$instance = AquilaTheme::get_instance();

