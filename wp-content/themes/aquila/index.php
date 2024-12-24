<?php
/**
 * Main Template File.
 * 
 * @package Aquila 
 */
get_header();
?>
<main id="main" class="site-main mt-5" role="main">
          <div class="container">
                    <div class="row">
                              <!-- Get the title of the current page -->
                              <?php if (is_home() && !is_front_page()): ?>
                                        <h1><?php single_post_title(); ?></h1>

                                        <!-- Get All Posts Content -->
                                        <?php $index = 0; ?>
                                        <?php if (have_posts()): ?>
                                                  <?php while (have_posts() && $index < 3): ?>
                                                            <?php the_post(); // Update global $post ?>
                                                            <div class="col col-auto col-md-4 col-lg-3">
                                                                      <?php get_template_part('template-parts/content', null, ['post_id' => get_the_ID()]); ?>
                                                            </div>
                                                            <?php $index++; ?>
                                                  <?php endwhile; ?>
                                        <?php endif; ?>
                              <?php else: ?>
                                        <?php get_template_part('template-parts/content-none'); ?>
                              <?php endif; ?>
                    </div>
          </div>
</main>

<?php get_footer();