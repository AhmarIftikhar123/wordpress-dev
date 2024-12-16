<?php
/**
 * Content-None Template
 * For display Message when No Post Found
 * 
 * @package aquila
 */
?>
<h1>No Post Found</h1>
<?php
if (is_home() && current_user_can('publish_posts')): ?>
          <?php printf(
                    wp_kses(
                              __('Ready to publish your first post? <a href="%s">Get started here</a>.'),
                              allowed_html: ['a' => ['href' => []]]
                    ),
                    esc_url(admin_url('post-new.php'))
          ) ?>
<?php elseif (is_search()): ?>
          <p>Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>
          <?php get_search_form(); ?>
<?php else: ?>
          <p><?php esc_html_e('It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'aquila'); ?>
          </p>
          <?php get_search_form(); ?>
<?php endif; ?>