<?php
/**
 * Theme Functions
 * Setup hooks & import css styles & scripts
 * e.g. Bootstrap & jquery
 * 
 * @package Aquila
 */

namespace Inc\classes;

use Classes\assets;
use Traits\TraitSingleton;

class AquilaTheme
{
          use TraitSingleton;
          public function __construct()
          {
                    assets::get_instance();
                    $this->setup_hooks();
          }
          public function setup_hooks()
          {
                    /**
                     * Actions
                     */
                    add_action("after_setup_theme", [$this, 'setup_theme']);
          }
          function setup_theme()
          {
                    // Let WordPress manage the document title.
                    add_theme_support('title-tag');

                    // Add support for a custom logo.
                    add_theme_support(
                              'custom-logo',
                              array(
                                        'header-text' => array('site-title', 'site-description'),
                                        'height' => 100,
                                        'width' => 100,
                                        'flex-height' => true,
                                        'flex-width' => true,
                                        'unlink-homepage-logo' => true, // Option to unlink logo from the homepage.
                              )
                    );
                    add_theme_support('custom-background', array(
                              'default-color' => 'white',
                              'default-image' => ''
                    ));
                    // Add support for post thumbnails
                    add_theme_support('post-thumbnails');
                    // Add support for automatic feed links
                    add_theme_support('automatic-feed-links');
                    // Add support for Custom style sheet
                    add_editor_style();
                    // Add support for block styles
                    add_theme_support('wp-block-styles');
                    // Add support for align wide
                    add_theme_support('align-wide');
                    // Setting Site Width
                    global $content_width;
                    if (!isset($content_width)) {
                              $content_width = 1240; // Set the content width to 800 pixels
                    }
          }
}
