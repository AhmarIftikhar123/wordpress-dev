<?php

use Helpers\Template_tags;

/**
 * Entry Header Template
 * 
 * @package Aquila
 */
$post_id = $args['post_id'] ?? get_the_ID(); // Get the post ID from arguments or fallback to global

$has_post_thumbnail = has_post_thumbnail($post_id);
$template_tags_instance = new Template_tags();
$hide_title = get_post_meta($post_id, '_hide_page_title', true);
$heading_class = !empty($hide_title) && $hide_title === 'yes' ? 'hide' : '';
?>
<header class="entry-header">
          <!-- Featured Image -->
          <?php if ($has_post_thumbnail): ?>
                    <div class="entry-img mb-3">
                              <a href="<?= esc_url(get_permalink($post_id)); ?>">
                                        <?= $template_tags_instance->get_the_post_custom_thumbnail(
                                                  $post_id,
                                                  'featured-thumbnail',
                                                  [
                                                            'class' => 'attachment-featured-large size-featured-large',
                                                            'sizes' => '(max-width: 590px) 350px, 230px',
                                                  ]
                                        ); ?>
                              </a>
                    </div>
          <?php endif; ?>
          <?php
          if (is_page() || is_single()) {
                    $page_title = wp_kses_post(get_the_title());
                    printf(
                              '<h1 class="page-title text-dark %1$s">%2$s</h1>',
                              esc_attr($heading_class),
                              $page_title
                    );
          } else {
                    printf(
                              '<h2 class="entry-title mb-3  %1$s"><a class="text-dark" href="%2$s">%3$s</a></h2>',
                              esc_attr($heading_class),
                              esc_url(get_permalink($post_id)),
                              wp_kses_post(get_the_title($post_id))
                    );
          }

          ?>
</header>