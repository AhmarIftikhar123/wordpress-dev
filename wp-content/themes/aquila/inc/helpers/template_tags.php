<?php
namespace Helpers;
class Template_tags
{
          public function get_the_post_custom_thumbnail($post_id, $size = 'featured-large', $attr = array())
          {
                    if (empty($post_id)) {
                              $post_id = get_the_ID();
                    }
                    if (has_post_thumbnail($post_id)) {
                              $default_attr = array(
                                        'loading' => 'lazy',
                              );
                              $attributes = array_merge($default_attr, $attr);
                              $custom_thumbnail = wp_get_attachment_image(
                                        get_post_thumbnail_id($post_id),
                                        $size,
                                        false,
                                        $attributes
                              );
                    }
                    return $custom_thumbnail;
          }
}