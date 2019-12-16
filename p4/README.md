# Project 4
+ By: Nazmus Nasir
+ Production URL: [http://p4.nazm.us](http://p4.nazm.us)


## Outline of features
*Brief list summarizing the features of your app*
* It's similar to npmjs.org
* It stores packages that you add to localStorage - it stores an array of IDs and will do an AJAX call later to retrieve details for each package.
* Home Component with a welcome message and displays 3 random "Vue Packages" available to the end user
  * Users can view details for each package or add/remove it to/from their list (My Packages)
* All Packages component has a list of all 34 Vue Packages in a card
  * Can view more details for each package as well as add or remove packages from their list
  * There's a "Search" option which will filter based on keyword as you type (on keyup event). It filters title, category, and descriptions.
* My Packages component lists all packages that you added from any other page.
  * The "My Packages" navigation menu should have a badge with the number of packages in your list. It auto updates as you add/remove packages.
  * It compiles a list of "install" commands to the right for all of your packages. It allows for easy copy/paste into your CLI.
* Suggest a Package
  * Allows a user to "Suggest A Package" - only the name and installer are mandatory fields before submission.
  * Fields are validated using Vuelidate
  * Submitted packages will not appear on All Packages until they are approved (they are never approved in this app since it's just a point of concept).
  * Suggested packages cannot be removed


## Outside resources
- The 34 Vue Packages that I used for my mock data are all taken from Npmjs.com. I browsed through and picked 30 random ones within certain categories.
- Used bootstrap for styling (https://www.npmjs.com/package/bootstrap)
- Multiple functions from one event handler: https://stackoverflow.com/a/49210431/9948721 - needed a refresher so that I can trigger an event in current component as well as emit an event to the parent.
- Turn off console errors: https://github.com/vuejs/vue-cli/issues/2266#issuecomment-471737050
- Turn off responsive nav for bootstrap: https://stackoverflow.com/a/21751422/9948721
- Vanilla Toasts - used for notification when adding and removing packages - https://www.npmjs.com/package/vanillatoasts - in a normal app, these will trigger when AJAX POST/DELETE requests return successfully


## Notes for instructor
- The "packages" are all from Npmjs.org.
- The "license" and "weekly" downloads stats were randomly set. The name, install code, link to npm, and description will match NPM though.
- 3 Random Packages are shown on the home page - I didn't do any validation for duplicates but they've been very rare
- The cards on the home component don't auto-adjust to match height. I had trouble getting them to align properly because the descriptions for some are way longer than others.
- Navigation acts weird on screen sizes smaller than 576px in width. The site is not optimized for mobile.
- Data was migrated to Firebase.
- In "Suggest A Package" - when you POST to Firebase, it adds the data to a completely different object. I didn't have time to refactor my code to change my "ids" to the Firebase generated ones so I modified the workflow
and made it so that you can suggest a package and it "may" show up in 'All packages' but since it's not an actual app, Nothing will happen after it's added to the list.
- Only validating Name and Installer fields in  "Suggest a Package"
  - Cannot delete or update a package once posted