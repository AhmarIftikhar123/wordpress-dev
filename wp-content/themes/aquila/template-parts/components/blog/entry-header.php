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
</header>