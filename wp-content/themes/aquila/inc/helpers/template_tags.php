<?php
namespace Helpers;
class Template_tags
{
          public function get_the_post_custom_thumbnail($post_id, $size = 'featured-thumbnail', $attr = array())
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

          public function aquila_posted_on()
          {
                    // If Post is Created but not Modified
                    $time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';

                    // If Post is Modified
                    if (get_the_time('U') !== get_the_modified_time('U')) {
                              $time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
                    }

                    $time_string = sprintf(
                              $time_string,
                              esc_attr(get_the_date(DATE_W3C)),
                              esc_html(get_the_date()),
                              esc_attr(get_the_modified_date(DATE_W3C)),
                              esc_html(get_the_modified_date())
                    );

                    $posted_on = sprintf(
                              esc_html_x(
                                        'Posted on %1$s',
                                        'post date',
                                        'aquila'
                              ),
                              '<a href="' . esc_url(get_permalink()) . '" rel="bookmark">' . $time_string . '</a>'
                    );

                    // return the posted on string
                    return '<span class="posted-on text-secondary">' . $posted_on . '</span>';
          }
}