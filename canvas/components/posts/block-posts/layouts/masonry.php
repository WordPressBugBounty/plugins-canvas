<?php
/**
 * Masonry layout template
 *
 * @var     $attributes - block attributes
 * @var     $options - layout options
 * @var     $posts - all available posts
 *
 * @package Canvas
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// As Masonry layout is almost the same like Grid, we can use HTML from Grid.
require dirname( __FILE__ ) . '/grid.php';
