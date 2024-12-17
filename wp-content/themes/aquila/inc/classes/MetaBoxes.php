<?php
namespace Classes;

use Traits\TraitSingleton;

class MetaBoxes
{
          use TraitSingleton;
          public function __construct()
          {
                    $this->setup_hooks();
          }

          public function setup_hooks()
          {
                    add_action('add_meta_boxes', [$this, 'add_custom_meta_box']);
                    add_action('save_post', [$this, 'save_post_meta_data']);
          }
          public function add_custom_meta_box()
          {
                    $screens = ['post', 'services']; // Use lowercase 'services'
                    foreach ($screens as $screen) {
                              add_meta_box(
                                        'hide-page-title',                 // Unique ID
                                        'Hide Page title',                 // Box title
                                        [$this, 'custom_meta_box_html'],   // Content callback
                                        $screen,                           // Post type
                                        'side',                            // Position
                                        'high'                             // Priority
                              );
                    }
          }

          public function custom_meta_box_html($post)
          {
                    $value = get_post_meta($post->ID, '_hide_page_title', true);
                    ?>
                    <label for="aquila_field">Hide the Page Title</label>
                    <select name="aquila_hide_title_field" id="aquila_field" class="postbox">
                              <option value="">Select</option>
                              <option value="yes" <?php selected($value, 'yes') ?>>Yes</option>
                              <option value="no" <?php selected($value, 'no') ?>>No</option>
                    </select>
                    <?php
          }
          public function save_post_meta_data($post_id)
          {
                    if (array_key_exists('aquila_hide_title_field', $_POST)) {
                              update_post_meta(
                                        $post_id,
                                        '_hide_page_title',
                                        $_POST['aquila_hide_title_field']
                              );
                    }
          }
}