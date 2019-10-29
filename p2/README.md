# Project 2
+ By: Nazmus Nasir
+ Production URL: [http://p12.nazm.us](http://p2.nazm.us)

## Build strategy
*Put an x in the build strategy you used. Put an x in each if you tackled both.*
+ [x] Integrated
+ [ ] Comprehensive


## Resources
- Bootstrap CSS Framework: [https://getbootstrap.com/](https://getbootstrap.com/) - installed via NPM
- .prevent event modifier example: [https://stackoverflow.com/a/49146048/9948721](https://stackoverflow.com/a/49146048/9948721)
- Bind multiple classes: [https://forum.vuejs.org/t/how-to-bind-the-multiple-class-in-vue2/21626/3](https://forum.vuejs.org/t/how-to-bind-the-multiple-class-in-vue2/21626/3)

## Notes for the instructor
- Have to enter your name before game interface shows
- Have to also enter a "bet" - must be a value of 1 or higher
- The answers variables are stored outside of the vue `data` property so no one can cheat and get the right answer from the Vue console
- There's currently a bug where if the two random numbers generated are the same and they are being subtracted,
their answer results in 0, aka false. Was only able to replicate this twice. In that case the button won't display the
answer, it will display A, B, or C.
- The reset score button was removed because once a game finishes, the data is stored inside the history property of the child component
