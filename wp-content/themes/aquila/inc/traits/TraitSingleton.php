<?php
/**
 * Singleton trait which implements Singleton pattern in any class in which this trait is used.
 *
 * @package Aquila
 */

namespace Traits;  // Corrected namespace

trait TraitSingleton
{
          protected static ?array $instance = [];

          protected function __construct()
          {
                    echo "readhed";
          }

          final protected function __clone()
          {
          }

          final public static function get_instance()
          {
                    $called_class = get_called_class();
                    if (!isset(self::$instance[$called_class])) {
                              self::$instance[$called_class] = new $called_class();
                              do_action(sprintf('aquila_theme_singleton_init_%s', $called_class));
                    }
                    return self::$instance[$called_class];
          }
}
