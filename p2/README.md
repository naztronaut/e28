# Project 1
+ By: Nazmus Nasir
+ Production URL: [http://p1.nazm.us](http://p1.nazm.us)

## Resources
- Bootstrap CSS Framework: [https://getbootstrap.com/](https://getbootstrap.com/)
- Inverted v-for loop for the table: [https://stackoverflow.com/a/47365991/9948721](https://stackoverflow.com/a/47365991/9948721)
- Disabled buttons example: [https://jsfiddle.net/willywg/2g7m5qy5/](https://jsfiddle.net/willywg/2g7m5qy5/)
- setInterval in Vue.js method: [https://stackoverflow.com/a/43335772/9948721](https://stackoverflow.com/a/43335772/9948721)

## Notes for the instructor
- Have to enter your name before game interface shows
- Have to also enter a "bet" - must be a value of 1 or higher
- The answers variables are stored outside of the vue `data` property so no one can cheat and get the right answer from the Vue console
- There's currently a bug where if the two random numbers generated are the same and they are being subtracted,
their answer results in 0, aka false. Was only able to replicate this twice. In that case the button won't display the
answer, it will display A, B, or C.
- Bootstrap was only originally used for table because of its predefined classes. It was a big time saver.
I used it for its text classes as well when I implemented the 'betting' system.
