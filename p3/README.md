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

## Notes for instructor
- 3 Random Packages are shown on the home page - I didn't do any validation for duplicates but they've been rare
-