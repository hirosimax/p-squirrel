=== p Squirrel ===
Contributors: ZendyLabs
Tags: empty paragraphs, empty paragraph tags, empty p tags, remove, hide
Requires at least: 3.9.1
Tested up to: 4.1
Stable tag: 1.1.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

p Squirrel hides empty paragraphs to prevent users from breaking your beautiful designs.

== Description ==
p Squirrel: The friendly empty paragraph hiding system for Wordpress. p Squirrel makes sure all of the empty paragraphs published by your Wordpress site users are successfully hidden before they have a chance to ruin your page layouts.

== Installation ==
1. Upload the `p-squirrel` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the `Plugins` menu in WordPress
3. That's it, Enjoy!

== Frequently Asked Questions ==
= What does p Squirrel do? =

p Squirrel hides all empty paragraph elements from your site.

= How does p Squirrel work? =

p Squirrel uses JavaScript and JQuery to find and hide empty paragraph elements.

== Screenshots ==
1. Before - The layout of the page is ruined by empty paragraphs
2. After - p Squirrel hides the empty paragraphs

== Changelog ==

= 1.1.3 =
* Meta: Added comment to failsafes in js

= 1.1.2 =
* Meta: Tested for Wordpress 4.1

= 1.1.1 =
* Meta: Fixed readme file

= 1.1 =
* Fix: Fixed bug where paragraphs containing only HMTL elements which typically contain no text were being removed (i.e. `<img>`,`<iframe>`,`<embed>`, etc.)
* Fix: Paragraphs containing only empty child HTML elements are now hidden
* Meta: Instead of removing empty p tags from the DOM, they are now simply hidden
* Meta: Edited readme file to reflect new changes in how the program functions

= 1.0.2 =
* Meta: Fixed readme file

= 1.0.1 =
* Meta: Fixed installation instructions
* Meta: Added logo and banner

= 1.0 =
* Initial release
* Feature: All empty HTML paragraph elements removed using JavaScript and JQuery.