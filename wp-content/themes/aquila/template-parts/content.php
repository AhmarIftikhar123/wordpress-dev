<?php
/**
 * Content Template
 * 
 * @package Aquila
 */
$post_id = $args['post_id'] ?? get_the_ID(); // Safely get the post ID
?>
<article id="post-<?= esc_attr($post_id); ?>" <?php post_class('mb-5', $post_id); ?>>
          <?php get_template_part('template-parts/components/blog/entry-header', null, ['post_id' => $post_id]); ?>
          <?php get_template_part('template-parts/components/blog/entry-meta', null, ['post_id' => $post_id]); ?>
          <?php get_template_part('template-parts/components/blog/entry-content', null, ['post_id' => $post_id]); ?>
          <?php get_template_part('template-parts/components/blog/entry-footer', null, ['post_id' => $post_id]); ?>
</article>