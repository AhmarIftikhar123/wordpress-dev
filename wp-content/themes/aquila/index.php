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
                    <?php if (have_posts()):
                              while (have_posts()):
                                        the_post(); ?>
                                        <?php the_title(); ?>
                                        <?php the_content(); ?>
                              <?php endwhile; endif; ?>
          </div>
</main>
<?php get_footer();