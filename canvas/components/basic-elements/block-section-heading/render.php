<?php
/**
 * Section Heading template
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

$halign    = isset( $attributes['halign'] ) ? 'halign' . $attributes['halign'] : '';
$block_tag = isset( $attributes['tag'] ) ? $attributes['tag'] : '';
$content   = isset( $attributes['content'] ) ? $attributes['content'] : '';

$class_name = isset( $attributes['className'] ) ? $attributes['className'] : '';

// If align default.
if ( 'haligndefault' === $halign || 'halignnone' === $halign || ! $halign ) {
	$halign = apply_filters( 'canvas_section_heading_align', 'halignleft' );
}

// If tag default.
if ( 'default' === $block_tag || 'none' === $block_tag || ! $block_tag ) {
	$block_tag = apply_filters( 'canvas_section_heading_tag', 'h2' );
}

$block_tag = cnvs_safe_html_tag( $block_tag, 'h2' );

// Set align class.
$class_name .= ' ' . $halign;
?>

<<?php call_user_func( 'printf', '%s', $block_tag ); ?> class="<?php echo esc_attr( $class_name ); ?>" <?php echo ( isset( $attributes['anchor'] ) ? ' id="' . esc_attr( $attributes['anchor'] ) . '"' : '' ); ?>>
	<span class="cnvs-section-title">
		<span><?php echo wp_kses_post( $content ); ?></span>
	</span>
</<?php call_user_func( 'printf', '%s', $block_tag ); ?>>
