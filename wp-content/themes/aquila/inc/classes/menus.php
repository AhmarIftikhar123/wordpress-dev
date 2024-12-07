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
          public function get_menu_id(string $location)
          {
                    // get All Available Manu Locations
                    $locations = get_nav_menu_locations();
                    // retrive the req location & return it.
                    $req_location = $locations[$location];
                    return $req_location ? $req_location : "";
          }
          public function get_child_menu(array $header_manus, int $parent_id)
          {
                    $child_menus_arr = [];

                    if (!empty($header_manus) && is_array($header_manus) && is_int($parent_id)) {
                              foreach ($header_manus as $menu_items) {
                                        // Cast 'menu_item_parent' to integer before comparison
                                        if (intval($menu_items->menu_item_parent) === $parent_id) {
                                                  $child_menus_arr[] = $menu_items;
                                        }
                              }
                    }

                    return $child_menus_arr;
          }

}