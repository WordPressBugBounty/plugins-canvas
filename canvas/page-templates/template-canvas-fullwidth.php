<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package Canvas
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header();
?>
	<?php
	while ( have_posts() ) :
		the_post();
		?>
			<div id="canvas-content" class="canvas-content entry-content">
				<?php the_content(); ?>
			</div>
	<?php endwhile; ?>

<?php get_footer(); ?>
