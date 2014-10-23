#T4 Generic Bootstrap Documentation
*	Version: 0.1.0
*	Author: [Sam Yerkes](mailto:syerkes@vcu.edu), VCU Webmaster
*	Git repo: [https://github.com/samyerkes/generic-t4](https://github.com/samyerkes/generic-t4)
*	Live demo: Coming soon

This template serves as a starting point for T4 sites at VCU. It uses a common set of content types and layouts so it has the ability to be skinned. The template is based on the [Bootstrap](http://www.getbootstrap.com) framework. 

The template is a child of the [VCU Yeoman Generator](https://github.com/samyerkes/generator-vcu). All CSS and Javascript has been minified and prefixed according to [caniuse.com](http://caniuse.com/) standards. The site is responsive and is easily configurable in the T4 environment.

*	[Content Types](#content-types)
*	[Style Asset Content Types](#style-asset-content-types)    
*	[Layouts](#layouts)    

##Content Types
###2 Columns
The 2 Columns content type creates two columns of content using the HTML WYSIWYG editor for both columns. It also gives you the ability to add optional headings for those columns.

###2 Columns Pull
The 2 Columns Pull content type pulls in the content from hidden child sections called "Column_1", and "Column_2". This way you can reuse any special components and add them into a specific column. It also gives you the ability to add optional headings for those columns.

###3 Columns
The 3 Columns content type creates two columns of content using the HTML WYSIWYG editor for all three columns. It also gives you the ability to add optional headings for those columns.

###3 Columns Pull
The 3 Columns Pull content type pulls in the content from hidden child sections called "Column_1", "Column_2", and "Column_3". This way you can reuse any special components and add them into a specific column. It also gives you the ability to add optional headings for those columns.

###Accordion
This content type breaks up content into collapsable sections. A user can designate up to five sections. The accordion will span the entire width of the content area.

###Child Pages List
This content type automatically pulls in the page meta from it's child pages and displays it in an orderly list. Only child pages with meta information will be included in the list. Users are given the option to add a image to this content type, it is suggested to establish a meta image default size. I used 90x90px as a good base point.

###Content Well
The Content Well content type moves HTML content into a colored div. The div has the option to be different colors and should be used to make average content stand out or show importance.

###Jumbotron
The Jumbotron content type displays a stylized div that can have content inside. The user can optionally set a photo background and custom text color to style how they would like. If a photo background is chosen it is suggested to apply a colored overlay in a photo editing program so the text is still readable. The example site uses a photo that has a #000000 (black) overlay with 50% opacity.

###News Headlines
The News Headlines content type is used to pull in the latest 3 News Items from the News section into an unordered list. Users have the ability to add an optional heading on the top of the new items.

###News Item
The News Item content type is used to add news items to the News section. Users have the ability to add a News Title, News Excerpt, News Excerpt Thumbnail, News Date, and News Content. This content can be pulled in to other pages via other content types (i.e. News Headlines).

###Page Meta
The Page Meta content type is a special content type that should be added on every page to define the page's purpose or teaser information. *Important to note, this content does not actually show up on the page it is added, but works in conjunction with the [Child Pages List](#child-pages-list) content type.*

###Photo Slideshow
This content type gives the user the option to add up to ten photos into an interactive slideshow. The user has the option to toggle the carousel controls and indicator on/off, add captions for all the photos individually, and choose whether the photos fade or slide in and out.

###Random Image
The Random Image content type gives users the ability to add an image that is randomized from an array of five possibilities.

###Responsive Embed
The Responsive Embed content type gives the user a place to embed an iframe video or media element (youtube, vimeo, etc.) into a dedicated responsive wrapper.

###Slice
A slice content type pulls in content from a hidden child section called "Slice". This is used to provide a full page colored div that separates content on the page. This content type can only be used on the homepage.

###Tabs
The Tabs content type gives the user the option to add HTML content into tabbed form. This content types allows up to five tabs.

##Style Asset Content Types
Style Asset Content Types should only be allowed in a hidden section called "Style_assets". These content types work to modify the entire template and the homepage feature.

###Footer
The Footer content type lets users designate HTML content for the bottom left of the footer. It also automatically includes the "Last Updated" slug and direct edit button.

###Photo Slideshow
If a Photo Slideshow component is added to the "Style_assets" section then it will be applied to the homepage. Suggested size for a homepage photo slideshow is at least 700x200px.

###Site Title
The Site Title content type lets users designate a primary logo (image), primary logo link, secondary title (text) and secondary title link in the top header of the site.

###Social Media
The Social Media content type lets users add icons for their social media presences. Currently this content type includes icons for Facebook Twitter, Instagram Youtube, Tumblr, Pinterest, Google Plus, LinkedIn, Vimeo and Wordpress.

###VCU Branding Bar
The VCU Branding Bar content type lets users change the color of the required VCU Branding. The options are gold, gray, white, or black. *Important to note, the branding footer that is applied when the site is viewed in mobile is always black.*


##Layouts
*	GBoot Home - Homepage for Generic Bootstrap
*	GBoot Inner - Inner page for Generic Bootstrap