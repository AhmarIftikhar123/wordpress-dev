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
          public function aquila_posted_by()
          {
                    $byline = sprintf(
                              esc_html_x('by %s', 'post author', 'aquila'),
                              '<span class="author vcard"><a href="' . esc_url(get_author_posts_url(get_the_author_meta('ID'))) . '">' . esc_html(get_the_author()) . '</a></span>'
                    );
                    return '<span class="byline text-secondary">' . $byline . '</span>';
          }
          public function aquila_the_excert($trim_character_count = 0)
          {
                    if (!has_excerpt() || $trim_character_count === 0) {
                              the_excerpt();
                              return;
                    }
                    $get_excert = wp_strip_all_tags(get_the_excerpt());
                    $trim_excert = substr($get_excert, 0, $trim_character_count);
                    $exert = substr($trim_excert, 0, strpos($trim_excert, ' '));
                    return "$exert  [...]";
          }
          public function aquila_exert_more($more = "")
          {
                    $more = sprintf(
                              '<a class="more-link" href="%1$s">%2$s</a>',
                              esc_url(get_permalink()),
                              esc_html($more)
                    );
                    return $more;
          }
}