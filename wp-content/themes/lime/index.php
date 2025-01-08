<?php
/**
 * Index template
 *
 * @package Aquila
 */
?>

<?php get_header(); ?>

<main id="content" class="container">
          <div class="row">
                    <?php if (have_posts()): ?>
                              <!-- If Post Found Get All Posts Content -->
                              <?php while (have_posts()):
                                        the_post(); ?>
                                        <?php if (is_home() && !is_front_page()): ?>
                                                  <div class="col col-auto col-md-4 col-lg-3 mb-4">
                                                            <?php get_template_part("template-parts/content") ?>
                                                  </div>
                                        <?php endif; ?>
                              <?php endwhile; ?>
                    <?php else: ?>
                              <!-- No Posts Found -->
                              <div class="col-12">
                                        <p><?php get_template_part("template-parts/content-none") ?></p>
                              </div>
                    <?php endif; ?>
          </div>
</main>

<?php get_footer(); ?>