<?php
/**
 * Footer template
 *
 * @package Lime
 */
?>
<footer id="footer">
          <h1>Footer</h1>
          <?php if (is_active_sidebar('footer')):
                    dynamic_sidebar('footer');
          endif; ?>
</footer>
<?php wp_footer(); ?>
</body>

</html>