## P3 Peer Review 2 

+ Reviewer's name: Nazmus Nasir
+ Reviewee's name: Claudio Bustamante
+ URL to reviewee's Github repo: *https://github.com/claudiomanuelboston/e28/tree/master/p31*



### Are you able to produce any errors or unexpected results?

##### Console
There are no visible errors in the UI but I am seeing a few 404s in the console. In your `index.html` I see a few references to the fullcalendar stylesheets:

```html
<link href="/css/vendor/fullcalendar.min.css" rel="stylesheet" />
<link href="/css/vendor/fullcalendar.print.css" media="print" rel="stylesheet" />
```

The path/files don't exist so they are throwing a 404. This may a leftover from another project but it's generally good practice to remove any unused code/files from a project.

##### Vue Deployment
Vue is being run in dev mode instead of production mode. I can't see this in the Github repo's `dist/` directory, but on DigitalOcean (or where ever it's hosted), the app is running in Dev mode so I can see the 'development mode' message in the Console. I have access to the Vue console but can't seem to see any data on your deployed version. 

I see that in your notes, you used `npm start` to start the app, that's probably why it's in dev mode. You need to run `npm run build` and then point your Apache config to the newly created `dist\` directory instead for a proper production deployment. 


##### UI
When trying to create a new show, I can't select an artist for Rock or Pop.  Since those artists don't actually exist in the data source, those options could have been disabled or not included. But I understand that there are limitations with my-json-server so this could have been just a side effect.

Nice job implementing a POST request with my-json-server. I know it doesn't actually save the data but the request was done well. 

### Were there any parts of the interface that you found confusing or unclear?

I like the implementation of FullCalendar in your project with the shows listed. But it can get hard to find an available show. For example, I tested this on Dec 11th so fullCalendar landed me in December without shows. Intuitively, I went forward in time and saw nothing. But when I went to November, I saw two shows which I was able to view and add to my favorites. Although the implementation of FullCalendar is great and in a big project would be an amazing feature, it can be confusing in a small project like this. 


### Are there aspects of the code that you feel were not self-evident and would benefit from comments?

There's a `merch` component but I don't see it used anywhere and visiting it doesn't result in anything:
```js
{
    path: 'merch',
    name: 'Merch',
    component: Merch
}
```
Comments around unused components and code would be useful. Removing them would be preferred (e.g. `HelloWorld.vue` is still in the project).

The app is mostly easy to read through, however there are a lot of commented out code. It's scary to delete code because you could need it at any moment in the future, but that's why version control is awesome. My advice is to  commit often (especially if you add a major piece or remove something) and add useful comments. If you ever need some code reverted, you can always go back to your code history. 


### Are there any parts of the code that you found interesting or taught you something new?

I like how you split your router into its own file/path. I think it cleans it up and for large projects would be really great because you can just touch your router without touching anything else. Angular starts you off with a separate router file and I always find it more useful. Nice work there! 

I also liked splitting up the header and footer into their own containers. It makes them easier to maintain longer term. 

### Are there any best practices discussed in course material that you feel were not addressed in the code?

When adding a show to favorites, it adds a new object to localStorage. It actually adds the entire object to localStorage. The benefit is that when you load your favorites list, it loads much faster than if you were to query for it, however, localStorage has limited space so if you put too much data there, you'll hit the limit very quickly. Best practice would be to store some kind of identifier that you can query for later (of course in a real world, this would just be stored in a database).

The `node_modules` directory was pushed to git. It's best practice to add that to your `.gitignore` file and not push to any version control host. The directory is huge so cloning the directory can take a while. 

I mentioned this earlier, but removing unused code is always good practice. Here's one example from `MusicianFavoriteList.vue`:

```js
// (it.sVenue != null
//   ? it.sVenue
//       .toString()
//       .toLowerCase()
//       .includes(text)
//   : "") ||
```
Use your commit history on Github to save your work instead. 

Speaking of commit history, I personally recommend adding detailed comments because your future-self can find it very  helpful. A lot of comments are very generic and are repeated multiple times. 

### Do you have any additional comments not covered in the above questions?

Great work on the login system. Although it's stored in localStorage now, it should be easy to take and turn into an actual authentication system. I like the implementation and execution. The app is fairly simple and easy to follow in the UI. The structure of the project was also good. 

I noticed that there are a lot of videos in the repo and in your Readme, you said you borrowed the videos from YouTube. I think it would have been good to just embed the YouTube videos instead of uploading your own. It would save space and make loading those pieces much faster. With that said, a lot of those assets were never used in the app so they could have been removed. 