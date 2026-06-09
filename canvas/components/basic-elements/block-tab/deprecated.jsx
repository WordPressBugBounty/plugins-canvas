/**
 * WordPress dependencies
 */
const { InnerBlocks } = wp.blockEditor;

/**
 * Deprecated block versions for canvas/tab.
 *
 * v1: save included the auto-generated wp-block-* className alongside cnvs-block-tab.
 */
const deprecated = [
	{
		save() {
			return (
				<div className="wp-block-canvas-tab cnvs-block-tab">
					<InnerBlocks.Content />
				</div>
			);
		},
	},
];

export default deprecated;
