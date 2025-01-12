<?php
namespace Inc\classes;

use Inc\Traits\Singleton;

class Assets
{
          use Singleton;

          public function __construct()
          {
                    $this->setup_hooks();
          }

          private function setup_hooks()
          {
                    add_action('wp_enqueue_scripts', [$this, 'register_styles']);
                    add_action('wp_enqueue_scripts', [$this, 'register_scripts']);
          }
          public function register_scripts()
          {
                    // Enqueue jQuery
                    wp_enqueue_script('jquery');

                    // Register Bootstrap JS
                    wp_register_script('bootstrap_js', TEMPLATE_URI . "/assets/src/library/js/bootstrap.bundle.min.js", ['jquery'], filemtime(TEMPLATE_DIR . 'style.css'), true);

                    wp_enqueue_script('bootstrap_js');

                    // Register Font Awesome
                    wp_register_script('font_awesome_js', 'https://kit.fontawesome.com/6943d7505a.js', [], null, false);

                    wp_enqueue_script('font_awesome_js');

                    // Register Nav JS
                    wp_register_script('nav_js', TEMPLATE_URI . "/assets/src/js/nav/nav.js", [], filemtime(TEMPLATE_URI . "/assets/src/js/nav/nav.js"), true);

                    wp_enqueue_script('nav_js');

                    // Register Main JS
                    wp_register_script('main_js', TEMPLATE_URI . "/assets/src/js/main.js", ["jquery"], filemtime(TEMPLATE_URI . "/assets/src/js/main.js"), true);

                    wp_enqueue_script('main_js');
          }
          public function register_styles()
          {
                    // Register Root Style
                    wp_register_style('root_style', TEMPLATE_URI . "/style.css", [], filemtime(TEMPLATE_DIR . 'style.css'), 'all');

                    // Enqueue Root Style
                    wp_enqueue_style('root_style');

                    // Register Bootstrap style
                    wp_register_style('bootstrap_css', TEMPLATE_URI . "/assets/src/library/css/bootstrap.min.css", [], filemtime(TEMPLATE_DIR . '/assets/src/library/css/bootstrap.min.css'), 'all');
                    wp_enqueue_style('bootstrap_css');

                    // Register Nabar Style
                    wp_register_style('Navbar_css', TEMPLATE_URI . "/assets/src/css/Navbar.min.css", [], filemtime(TEMPLATE_DIR . '/assets/css/Navbar.min.css'), 'all');
                    wp_enqueue_style('Navbar_css');
          }
}
