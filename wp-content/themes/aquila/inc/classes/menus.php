<?php
/**
 * Retister Menus
 * 
 * @package Aquila
 */
namespace Classes;

use Traits\TraitSingleton;

class menus
{
          use TraitSingleton;
          public function __construct()
          {
                    $this->setup_hooks();
          }
          public function setup_hooks()
          {
                    add_action('init', array($this, 'register_menus'));
          }
          public function register_menus()
          {
                    register_nav_menus(array(
                              'aquila-header-menu' => esc_html__('Header Menu', 'Aquila'),
                              'aquila-footer-menu' => esc_html__('Footer Menu', 'Aquila'),
                    ));
          }
}