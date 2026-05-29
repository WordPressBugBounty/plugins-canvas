<?php
/**
 * Row block template
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

$attributes['className'] .= ' cnvs-block-row-columns-' . $attributes['columns'];

if ( isset( $attributes['verticalAlignment'] ) && $attributes['verticalAlignment'] ) {
	$attributes['className'] .= ' cnvs-block-row-valign-' . $attributes['verticalAlignment'];
}

?>

<div class="<?php echo esc_attr( $attributes['className'] ); ?>" <?php echo ( isset( $attributes['anchor'] ) ? ' id="' . esc_attr( $attributes['anchor'] ) . '"' : '' ); ?>>
	<div class="cnvs-block-row-inner">
		<?php call_user_func( 'printf', '%s', $content ); ?>
	</div>
</div>
