# Project 3
+ By: Nazmus Nasir
+ Production URL: [http://p3.nazm.us](http://p3.nazm.us)


## Outline of features
*Brief list summarizing the features of your app*
* It's similar to npmjs.org
* It stores packages that you add to localStorage - it stores an array of IDs and will do an AJAX call later to retrieve details for each package.
* Home Component with a welcome message and displays 3 random "Vue Packages" available to the end user
  * Users can view details for each package or add/remove it to/from their list (My Packages)
* All Packages component has a list of all 30 Vue Packages in a card
  * Can view more details for each package as well as add or remove packages from their list
  * There's a "Search" option which will filter based on keyword as you type (on keyup event). It filters title, category, and descriptions.
* My Packages component lists all packages that you added from any other page.
  * The "My Packages" navigation menu should have a badge with the number of packages in your list. It auto updates as you add/remove packages.
  * It compiles a list of "install" commands to the right for all of your packages. It allows for easy copy/paste into your CLI.


## Outside resources
- The 30 Vue Packages that I used for my mock data are all taken from Npmjs.org. I browsed through and picked 30 random ones within certain categories.
- Used bootstrap for styling (https://www.npmjs.com/package/bootstrap)
- Kept the default favicon because it's perfect for this project
- Refresher on JavaScript filter method: https://www.easyprogramming.net/javascript/array_filter_method.php (disclaimer - this is my content but I often refer to my own work to refresh my memory)
- Multiple functions from one event handler: https://stackoverflow.com/a/49210431/9948721 - needed a refresher so that I can trigger an event in current component as well as emit an event to the parent.
- Turn off console errors: https://github.com/vuejs/vue-cli/issues/2266#issuecomment-471737050 (I later realized I already saw this in the class notes)
- Turn off responsive nav for bootstrap: https://stackoverflow.com/a/21751422/9948721

## Notes for instructor
- The "packages" are all from Npmjs.org.
- The "license" and "weekly" downloads stats were randomly set. The name, install code, and description will match NPM though.
- 3 Random Packages are shown on the home page - I didn't do any validation for duplicates but they've been rare
- The cards on the home component don't auto-adjust to match height. I had trouble getting them to align properly because the descriptions for some are way longer than others.
- Navigation acts weird on screen sizes smaller than 576px in width. The site is not optimized for mobile.