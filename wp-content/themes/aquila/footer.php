<?php
/**
 * Footer template
 * 
 * @package Aquila
 */

use Classes\menus;

$manu_instance = menus::get_instance();
$get_manu_id = $manu_instance->get_menu_id('aquila-footer-menu');
$header_menus = wp_get_nav_menu_items($get_manu_id);
print_r(value: $header_menus);
?>
<footer>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                              <a class="navbar-brand" href="#">Footer</a>
                              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                              </button>
                              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                        <?php if (!empty($header_menus) && is_array($header_menus)): ?>
                                                  <ul class="navbar-nav">
                                                            <?php foreach ($header_menus as $menu_items): ?>
                                                                      <?php if (empty($menu_items->menu_item_parent)): ?>

                                                                                <!-- Check if menu item has children -->
                                                                                <?php $child_menus = $manu_instance->get_child_menu($header_menus, $menu_items->ID); ?>

                                                                                <?php if (empty($child_menus)): ?>
                                                                                          <li class="nav-item">
                                                                                                    <a class="nav-link"
                                                                                                              href="<?= $menu_items->url; ?>"><?= $menu_items->title; ?></a>
                                                                                          </li>
                                                                                <?php else: ?>
                                                                                          <li class="nav-item dropdown">
                                                                                                    <a class="nav-link dropdown-toggle"
                                                                                                              href="<?= $menu_items->url; ?>" role="button"
                                                                                                              data-bs-toggle="dropdown"
                                                                                                              aria-expanded="false"><?= $menu_items->title; ?></a>
                                                                                                    <ul class="dropdown-menu">
                                                                                                              <?php foreach ($child_menus as $child_menu): ?>
                                                                                                                        <li><a class="dropdown-item"
                                                                                                                                            href="<?= $child_menu->url; ?>"><?= $child_menu->title; ?></a>
                                                                                                                        </li>
                                                                                                              <?php endforeach; ?>
                                                                                                    </ul>
                                                                                          </li>
                                                                                <?php endif; ?>

                                                                      <?php endif; ?>
                                                            <?php endforeach; ?>
                                                  </ul>
                                        <?php endif; ?>
                              </div>

                    </div>
          </nav>
</footer>

</div>
</div>
<?php wp_footer(); ?>
</body>

</html>