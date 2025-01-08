<?php
/**
 * Single template
 *
 * @package YOYO-Tube
 */
?>

<?php get_header(); ?>

<main id="content" class="container">
          <?php if (have_posts()): ?>
                    <!-- If Post Found Get All Posts Content -->
                    <?php while (have_posts()):
                              the_post(); ?>
                              <?php get_template_part("template-parts/content") ?>
                    <?php endwhile; ?>
          <?php else: ?>
                    <!-- No Posts Found -->
                    <div class="col-12">
                              <p><?php get_template_part("template-parts/content-none") ?></p>
                    </div>
          <?php endif; ?>
</main>

<?php get_footer(); ?>