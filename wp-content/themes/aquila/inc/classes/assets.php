<?php
namespace Classes;

use Traits\TraitSingleton;

class assets
{
          use TraitSingleton;
          public function __construct()
          {
                    $this->setup_hooks();
          }
          public function setup_hooks()
          {
                    add_action('wp_enqueue_scripts', [$this, 'register_styles']);
                    add_action('wp_enqueue_scripts', [$this, 'register_scripts']);

          }
          public function register_styles()
          {
                    // Register Bootstrap CSS
                    wp_register_style('bootstrap', AQUILA_DIR_URI . '/assets/src/library/css/bootstrap.min.css', array(), null, 'all');
                    // Register WordPress Default CSS
                    wp_register_style('style', get_stylesheet_uri(), array(), filemtime(get_stylesheet_directory() . '/style.css'), 'all');
                    // Register Custom CSS
                    wp_register_style('custom', AQUILA_DIR_URI . '/assets/src/css/custom.css', array(), filemtime(AQUILA_DIR_PATH . '/assets/src/css/custom.css'), 'all');
                    // Enqueue Styles
                    wp_enqueue_style('bootstrap');
                    wp_enqueue_style('style');
                    wp_enqueue_style('custom');
          }

          public function register_scripts()
          {
                    // Register Popper.js
                    wp_register_script('popper-js', 'https://unpkg.com/@popperjs/core@2.11.6/dist/umd/popper.min.js', array(), null, true);

                    // Register Bootstrap JS
                    wp_register_script('bootstrap-js', AQUILA_DIR_URI . '/assets/src/library/js/bootstrap.min.js', array('jquery', 'popper-js'), null, true);

                    // Register Main JS
                    wp_register_script('main', AQUILA_DIR_URI . '/dist/main.js', array('jquery', 'bootstrap-js'), filemtime(AQUILA_DIR_PATH . '/dist/main.js'), true);

                    // Enqueue Scripts
                    wp_enqueue_script('popper-js');
                    wp_enqueue_script('bootstrap-js');
                    wp_enqueue_script('main');
          }
}