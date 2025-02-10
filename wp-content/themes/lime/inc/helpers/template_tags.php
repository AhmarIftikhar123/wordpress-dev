<?php
namespace Inc\Helpers;

class Template_tags
{

          public function get_the_post_custom_thumbnail($post_id = null, $size = 'featured-thumbnail', $attr = [])
          {
                    $post_id = $post_id ?? get_the_ID();

                    if (!has_post_thumbnail($post_id)) {
                              return '';
                    }

                    $default_attributes = [
                              "class" => "img-thumbnail rounded w-100", // Custom Bootstrap classes
                              "loading" => "lazy",                     // Enable lazy loading
                    ];

                    $attributes = array_merge($default_attributes, $attr);

                    return get_the_post_thumbnail($post_id, $size, $attributes);
          }
          public function yoyo_pusted_on()
          {
                    $time_str = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
                    if (get_the_time('U') !== get_the_modified_time('U')) {
                              $time_str = '<time class="entry-date published" datetime="%1$s">%2$s</time> <span class="posted-on text-secondary">Updated At:</span> <time class="updated" datetime="%3$s">%4$s</time>';
                    }
                    $time_strin = sprintf(
                              $time_str,
                              esc_attr(get_the_date(DATE_W3C)),
                              esc_html(get_the_date()),
                              esc_attr(get_the_modified_date(DATE_W3C)),
                              esc_html(get_the_modified_date())
                    );
                    $posted_on = sprintf(
                              esc_html_x(
                                        'Posted on %1$s',
                                        'post date',
                                        'YOYO-Tube'
                              ),
                              '<a href="' . esc_url(get_permalink()) . '" rel="bookmark">' . $time_strin . '</a>'
                    );
                    return '<span class="posted-on text-secondary">' . $posted_on . '</span>';
          }
          public function yoyo_posted_by()
          {
                    $author_info = sprintf(
                              esc_html_x("By %s", "post author", "YOYO-Tube"),
                              '<span class="author vcard"><a href="' . esc_url(get_author_posts_url(get_the_author_meta("ID"))) . '">' . esc_html(get_the_author()) . '</a></span>'
                    );
                    return '<span class="byline text-secondary">' . $author_info . "</span>";
          }
          public function yoyo_the_excert($custom_excert_length = 20)
          {
                    if (!has_excerpt() || $custom_excert_length === 0) {
                              return get_the_excerpt();
                    }
                    // Remove all HTML tags e.g. `strip_tags( '<script>something</script>' )` will return 'something'.
                    $get_excert = wp_strip_all_tags(get_the_excerpt());

                    $trimed_excert = substr($get_excert, 0, $custom_excert_length);

                    $excerpt = rtrim($trimed_excert, ' .');
                    return $excerpt . "...";
          }
          public function yoyo_exert_more($more = ""): string
          {
                    if (!is_single()) {

                              $more = sprintf(
                                        '<a class="btn btn-primary" href="%1$s">%2$s</a>',
                                        esc_url(get_permalink()),
                                        esc_html($more)
                              );
                              return $more;
                    }
                    ;
                    return "";
          }
          public function yoyo_pagination()
          {
                    $args = [
                              "before_page_number" => '<span class="btn btn-primary rounded">',
                              "after_page_number" => "</span>",
                    ];

                    $allowed_html = [
                              "span" => [
                                        "class" => [],
                              ],
                              "a" => [
                                        "class" => [],
                                        "href" => [],
                              ],
                              "li" => [
                                        "class" => [],
                              ],
                              "ul" => [
                                        "class" => [],
                              ],
                    ];

                    // Generate pagination links
                    $pagination_links = paginate_links($args);

                    // Check if pagination links are empty
                    if (empty($pagination_links)) {
                              return ''; // Return an empty string if there are no pagination links
                    }

                    // Build the complete pagination HTML
                    $pagination = sprintf(
                              '<nav aria-label="Video pagination" class="pagination pagination-dark align-items-center justify-content-center">%s</nav>',
                              wp_kses($pagination_links, $allowed_html)
                    );

                    return $pagination;
          }
          public function yoyo_is_uploaded_via_wp_admin($grabatar_url){

                    $parse_url = wp_parse_url($grabatar_url);

                    $quer_args = $parse_url['query'] ?? '';
                    
                    return !empty($quer_args);
          }
          public function yoyo_has_gravatar( $author_email){
                    $gravatar_url = get_avatar_url($author_email);

                    if($this->yoyo_is_uploaded_via_wp_admin($gravatar_url)) return true;
                    $gravatar_url = sprintf('%s&d=404',$gravatar_url);

                    $headers = @get_headers( $gravatar_url );

                    return preg_match( "|200|",$headers[0]);
          }
}