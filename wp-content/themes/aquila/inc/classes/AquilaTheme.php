<?php
/**
 * bootstraps The Theme.
 * 
 * @package Aquila
 */
namespace AQUILA_THEME\Inc;

use AQUILA_THEME\Inc\Traits\Singleton;
class AquilaTheme
{
          use Singleton;
          protected function __construct()
          {
                    // load class.
                    $this->set_hooks();
          }
          protected function set_hooks()
          {
                    // action & filters.
          }
}