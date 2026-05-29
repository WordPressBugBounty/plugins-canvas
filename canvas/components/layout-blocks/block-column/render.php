<?php
/**
 * Column block template
 *
 * @var     $attributes - block attributes
 * @var     $content - inner blocks
 * @var     $options - layout options
 *
 * @package Canvas
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

?>

<div class="<?php echo esc_attr( $attributes['className'] ); ?>" <?php echo ( isset( $attributes['anchor'] ) ? ' id="' . esc_attr( $attributes['anchor'] ) . '"' : '' ); ?>>
	<div class="cnvs-block-column-inner">
		<div>
			<?php call_user_func( 'printf', '%s', $content ); ?>
		</div>
	</div>
</div>
