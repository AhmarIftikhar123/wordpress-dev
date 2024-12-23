<?php
/**
 * Entry Meta Template
 * 
 * @package Aquila
 */

use Helpers\Template_tags;

$template_tags_instance = new Template_tags()
          ?>

<div class="entery-meta mb-3">
          <?= $template_tags_instance->aquila_posted_on(); ?>
</div>