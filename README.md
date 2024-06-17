# library-project

This is my first take on the library project, after days of trial and error - and hours staring blankly at the computer, I have concluded that it is time to wrap things up.

Here are my 3 takeaways from this project

1. A great project begins with a great framework. Hence, this is neither - I haven't had the chance to set a good algorithm / framework in place.
2. Simpler is better. If you go through my commit history you will see what I mean by this. Many commits that ended up holding the project back due to over-engineering. Almost always, the best solution was the one with the least amount of code.
3. It's good to restart. Infact, it's necessary. At a certain point this repo became a complete mess with the array items being deleted, and the keys for read/not read being completely wiped. I cut my losses, made a separate file, and worked on refactoring code (and kept the code that worked with me). The result is what you see right now.

There are still funny business type of variables around, i.e: toggling read/not read on the cards makes library[i].read become true / false.. rather than read / not read. This is because I still haven't found a good way to invoke the __proto__ function (due to having to use the DOMs.)

 You might say - why not just use the read() function on the prototype?

Well, putting DOM manipulation on the __proto__ of Book is borderline criminal.

Besides, even if it is to somehow work, it would be a bad practice to put DOM elements on a __proto__. That, and the amount of mental energy required to calculate that would be measured in coffee jars, not cups.

One day, will revisit this project, with better knowledge, and experience - and make it better. However, whether it will be the same or a new repo, remains unknown.

Regardless, this project is extremely fun to play around, UI/UX is very friendly, and the not read / read buttons change color! Click them and try them out!

