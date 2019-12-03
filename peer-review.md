## P3 Peer Review

+ Reviewer's name: Nazmus Nasir
+ Reviwee's name: Ping Ji
+ URL to reviewee's Github repo: *https://github.com/pingji00/e28*



### Are you able to produce any errors or unexpected results?

The app works really well! I haven't run into any errors or unexpected results. THe only thing I did notice is that in your JSON, you have a property called "id" and it's being stored as a String. I think it would be good practice to store this as a number as well. Here's an example that I see:

```json
{
    "id": "11",
    "name": "Avocado",
    "nutrition100g": {
        "energy": 670,
        "carbohydrate": 8.53,
        "sugars": 0.66,
        /* left out the rest */
        },
    "categories": [
        "vegetable",
        "superfood"
    ]
}
```
Although you won't run into this issue with smaller apps, if you ever display this in a data table or something and want to sort by the 'id' you may run into the ASCII sorting problem where the number 11 is lower than the number 2. The numerical values in "nutrition100g" are being stored as Numbers which looks much better!

Personally, I'm okay with logging things in the console if they can be useful. But others may prefer to not have anything log in the console in production. So this isn't an error just something I've noticed and have learned to look for my work. In PlateVue.js on line 38, you are also logging the items returned from localStorage to the console. Again, it's not an error but it is a little unexpected to see that in the console in production. 

### Were there any parts of the interface that you found confusing or unclear?

The interface is easy to follow and understand! Great job with it. And your notes to the instructor says that it's suppposed to calculate total calories if you had the time and I think that would be a great enhancement for this app if you ever work on it in the future. 

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?

The app is pretty straight forward and easy to understand. The only comment I have is about your `products.js` file. It seems like an old version of your Products array which was then moved to your my-json-server. A newer version also exists in src/data/db.json. I think removing unused content/files would be good practice. 

### Are there any parts of the code that you found interesting or taught you something new?

I like in `CategoriesPage.vue` that you used the spread operator with `Set` - there are a few places I could have used it in my code but I never remember. Your implementation was done beautifully!

### Are there any best practices discussed in course material that you feel were not addressed in the code?

In `FoodPage.vue` you have your props set up as follows:

```js
props:['id',],
```

The comma inside the brackets should be removed as a good practice. Although JS/Vue won't yell at you for doing that, if you move onto certain other languages, the app will complain. 

You set up the api url in your `app.js` and have used it elsewhere in the app but in `CategoriesPage.vue` on line 34, you still hard code the URL (https://my-json-server.typicode.com/pingji00/e28-p3-foods-api/foods) - maybe it was by mistake but one thing I normally do after I move something to a configuration file is search the whole project for that reference and replace it. I'm sure there's a way to do this in Atom (assuming you use that) but I use WebStorm and the command to search the whole project is `ctrl+shift+f`. 

### Do you have any additional comments not covered in the above questions?

Great work on this project! It's easy to follow and understand and I think anyone using this for the first time will have no problem. The idea and execution was great and I enjoyed going through the app! 

One thing I've learned over the years when using git is to commit a lot. It makes rolling back easier and if you work with others, it helps you see the thought process that you all are going through. I fail to follow my own advice a lot of the time with personal projects but at my job, I've gotten used to commiting every time I change something significant (don't really have to push until you are ready). 