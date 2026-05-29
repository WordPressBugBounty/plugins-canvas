<?php
/**
 * Collapsible block template
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

if ( $attributes['opened'] ) {
	$attributes['className'] .= ' cnvs-block-collapsible-opened';
}

?>
<div class="<?php echo esc_attr( $attributes['className'] ); ?>" <?php echo ( isset( $attributes['anchor'] ) ? ' id="' . esc_attr( $attributes['anchor'] ) . '"' : '' ); ?>>
	<div class="cnvs-block-collapsible-title">
		<h6 class="cnvs-block-collapsible-heading">
			<a href="#"><?php echo wp_kses_post( $attributes['title'] ); ?></a>
		</h6>
	</div>
	<div class="cnvs-block-collapsible-content">
		<?php call_user_func( 'printf', '%s', $content ); ?>
	</div>
</div>
