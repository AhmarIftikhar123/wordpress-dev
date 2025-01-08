<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit3dadb2b05d6ff728616a1b7e8197d604
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInit3dadb2b05d6ff728616a1b7e8197d604', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit3dadb2b05d6ff728616a1b7e8197d604', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit3dadb2b05d6ff728616a1b7e8197d604::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
