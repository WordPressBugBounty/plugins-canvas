=== Canvas ===
Tags: theme, page, template
Requires at least: 5.6
Tested up to: 7.0
Requires PHP: 5.4
Stable tag: 2.5.5
Contributors: codesupplyco
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A revolutionary block-based page builder used for building layouts, an interplay of the WordPress block editor features and exceptional UI design.

== Description ==

Canvas is a powerful, feature-rich block-based page builder that revolutionizes how you create content in WordPress. Built to seamlessly integrate with the WordPress block editor, Canvas enhances your creative workflow with an exceptional combination of advanced functionality and intuitive design.

**Key Features:**

* **Diverse Block Collection** - From basic elements to complex layouts, Canvas provides all the building blocks you need: Alert, Progress, Tabs, Collapsibles, Section Headings, and many more.
* **Flexible Layout System** - Create responsive grid-based layouts with Row and Column blocks, complete with adjustable widths, gaps, and responsive controls.
* **Rich Media Galleries** - Present your visual content beautifully with Justified Gallery and Slider Gallery blocks with extensive customization options.
* **Advanced Posts Display** - Showcase your content in various layouts with powerful query controls including filtering by categories, tags, and post types.
* **Responsive Design Controls** - Ensure your content looks great on all devices with device-specific visibility and styling options.
* **Styling Flexibility** - Add sophisticated styling with controls for spacing, borders, colors, and more.
* **Custom Block Extensions** - Extend core WordPress blocks with additional functionality and styling options.

Canvas empowers both developers and content creators to build sophisticated, responsive layouts without writing code. Whether you're creating blog posts, landing pages, or complex website layouts, Canvas provides the tools you need for professional results with minimal effort.

Designed with performance in mind, Canvas generates clean, optimized code that won't slow down your website, ensuring a smooth user experience for your visitors.

Experience the perfect balance of power and simplicity with Canvas - where exceptional design meets unlimited creative freedom.

== Changelog ==

= 2.5.5 =
* Fix: Tab blocks now correctly display one tab at a time in the editor instead of stacking all tab contents vertically.
* Fix: Tab labels are now shown in the editor after reloading a post and can be cleared and renamed freely.
* Fix: Reducing the number of tabs no longer hides all tab content when the active tab was removed.
* Fix: The column resize handle appears again when hovering a column in the editor, and is correctly positioned when a custom gap is set.
* Fix: Collapsible items no longer show extra vertical spacing and missing separators in the editor.
* Maintenance: Added missing translation text domains in the Tabs block editor and removed deprecated editor component props.
* Maintenance: Updated the "Requires at least" value to WordPress 5.6 to reflect the actual block editor requirements.

= 2.5.4 =
* Fix: Tab blocks created with older versions of the plugin no longer show as invalid in the editor. Added a block deprecation to handle the previous save output that included the wp-block-canvas-tab class.
* Updated icon font for improved compatibility

= 2.5.3 =
* Security: Fixed an authenticated (Contributor+) stored XSS in the Section Heading block via the "tag" block attribute (CVE-2026-9629). Tag names are now validated against an allowlist (h1–h6, div, p) and heading text is sanitized.
* Security: Hardened output escaping across blocks, including tab and collapsible titles and the Posts block title tag.
* Compatibility: Tested up to WordPress 7.0.
* Maintenance: Resolved WordPress Plugin Check issues — added direct file access protection, translation text domains, and output-escaping improvements throughout the plugin.

= 2.5.2 =
* Added compatibility with WordPress 6.9.
* Migrated all custom blocks to Block API version 3 for iframe editor compatibility.
* Replaced dynamic DOM style injection with inline React styles for iframe editor support.

= 2.5.1 =
* Improved compatibility with PHP 8.2.9

= 2.5.0 =
* Minor improvements

= 2.4.9 =
* Improved compatibility with Polylang

= 2.4.8 =
* Added compatibility with WordPress 6.8

= 2.4.7 =
* Fixed Scheme Switcher

= 2.4.6 =
* Added compatibility with WordPress 6.7

= 2.4.5 =
* Added compatibility with WordPress 6.6

= 2.4.4 =
* Improved Tabs Block.

= 2.4.3 =
* Improved compatibility with WordPress 6.4.

= 2.4.2 =
* Improved compatibility with PHP 8.2.8

= 2.4.1 =
* Minor improvements.

= 2.4.0 =
* Fixed Heading Numbered white space.

= 2.3.9 =
* Added string translation for gutenberg blocks.

= 2.3.8 =
* Added compatibility with PHP 8.1.

= 2.3.7 =
* Compatibility fixes for WordPress 6.0.

= 2.3.6 =
* Optimized JS\CSS files

= 2.3.5 =
* Fixed Block Gallery

= 2.3.4 =
* Added exclude categories and tags to posts block

= 2.3.3 =
* Added support laptop breakpoint

= 2.3.2 =
* Fixed Numbered Headings

= 2.3.1 =
* Updated flickity library

= 2.3.0 =
* Fixed Tag Cloud, Calendar, RSS and Latest Comments blocks.

= 2.2.9 =
* Improved compatibility tabs with WordPress 5.8.

= 2.2.8 =
* Added compatibility with php 8.0.

= 2.2.7 =
* Improved compatibility with WordPress 5.8.
* Improved Block Numbered.

= 2.2.6 =
* Improved Block Separator.

= 2.2.5 =
* Improved plugin security.

= 2.2.4 =
* Improved Block Group styles.

= 2.2.3 =
* Updated justifiedGallery library.

= 2.2.2 =
* Fixed rows block.

= 2.2.1 =
* Fixed in the editor basic possibilities of moving and adding blocks.

= 2.2.0 =
* Improved separator block.

= 2.1.9 =
* Improved performance.

= 2.1.8 =
* Compatibility fixes for WordPress 5.7.

= 2.1.7 =
* Added Background Image Section Panel.

= 2.1.6 =
* Improved Section Heading.

= 2.1.5 =
* Improved Dark Mode.
* Fixed interface styles for editor.

= 2.1.4 =
* Added compatibility with WordPress 5.6.

= 2.1.3 =
* Improved filter by categories in posts.

= 2.1.2 =
* Added support attachment for posts block.

= 2.1.1 =
* Added filter to select postTypes.

= 2.1.0 =
* Minor improvements.

= 2.0.9 =
* Added support taxonomy and term to query posts.

= 2.0.8 =
* Added responsive settings to Setcion Headings.

= 2.0.7 =
* Compatibility fixes for WordPress 5.5.

= 2.0.6 =
* Fixed js events in blocks for ajax content.

= 2.0.5 =
* Fixed compatibility wordpress 5.5.

= 2.0.4 =
* Fixed Responsive Settings.

= 2.0.3 =
* Remove column limit from Row Block.

= 2.0.2 =
* Improve blocks.

= 2.0.1 =
* Minor improvements.

= 2.0.0 =
* Added spacings controls.
* Added border controls.
* Added css variables to styles.
* Added feature to "Query Settings" for the WP Group.
* Added support responsive controls (for developers).
* Added support dark scheme (for developers).
* Improved compatibility with wp 5.4.

= 1.0.7 =
* Improve offset in Posts Block.

= 1.0.6 =
* Added search to categories and tags for filters.

= 1.0.5 =
* Integration Post Views Counter to Post Views Module.

= 1.0.4 =
* Minor improvements

= 1.0.3 =
* Fix canvas page template.

= 1.0.2 =
* Add preload for font icons.

= 1.0.1 =
* Improve blocks.

= 1.0 =
* Initial release.
