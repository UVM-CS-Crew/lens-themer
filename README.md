# Spooky Website Lens
A Chrome extension that will edit the html and css of a website to give it a Halloween theme.
Created for the UVM CS Crew 2020 Halloween Hackathon

# Concept
This extension uses content scripts to inject Javascript and CSS onto websites in order to give them a special theme, such as changing fonts, changing images, and changing colors.
Outside of festive theming like it currently does, this could easily be upgraded to give themes such as Dark Mode or perform color blindness correction automatically on all websites.

During the making of this extension I have realized that most websites vary drastically in their layouts, with very few using elements such as mains, navs, articles, or sections like I had hoped, instead usually using many div tags with very specific classes to handle CSS.
While this normally wouldn't be an issue when creating a site, I want this extension to work universally on all websites. As such it has to handle many issues, such as the main content alone including mains, #content, #center_col, and many other classes depending on the website.
