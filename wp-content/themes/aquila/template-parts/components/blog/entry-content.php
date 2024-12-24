<?php
/**
 * Template for entery-contnet
 * 
 * To be used inside WordPress The Loop
 * 
 * @package aquila
 */
use Helpers\Template_tags;

$template_tags_instance = new Template_tags();
?>

<div class="entery-content">
          <!-- checks is user on Singel Page -->
          <?php if (is_single()) {
                    sprintf(
                              wp_kses(
                                        __('Contine reading %s <span class="meta-nav">&rarr;</span>', 'aquila'),
                                        [
                                                  'span' => [
                                                            'class' => []
                                                  ]
                                        ]
                              ),
                              the_title('<span class="screen-reader-text">"', '"</span>', false)
                    );
          } else {
                    echo $template_tags_instance->aquila_the_excert(20);
          }
          ?>
</div>