# Weather-Dashboard

## About The Application

This Application is pretty neat! Once you type in the name of the City you are curious about, it will display the current temperature, wind speed, humidity, as well as an icon describing the current weather conditions! On top of that, below the current conditions, it will also populate the 5-Day Forecast cards with the projected conditions for the date listed (set to the conditions at noon!) 

But that's not all, immediately after searching for a city, the application will create a new button right below the search bar and once you press it, it will display that city's contents again! When searching for a city, it will set it into local storage and then pull from there to create the button and when clicking it!

## Issues

I definitely ran into my fair share of issues with this project. I definitely learned some new stuff too though and it was a good learning experience being able to work with an API!

* One issue I had at first may have been silly, but it was a bit off trouble getting the current day's condition box to sit to the right of the search bar, instead of below it. Turns out I just needed another 'class="row"'!

* Another issue I had was properly structuring the JavaScript so I could call to one of my functions again. I wound up just copy and pasting the fetch request inside of the spot I was trying to call it from again (The newCityBtn eventListener) In the end, the code looks a little more clunky with it and it technically repeats itself, but it wound up working in the end, which I am pretty proud of!

* One of the issues that I wasn't able to fix in the end was, after a newCityBtn is created, clicking on it won't actually call it's value unless you refresh the page after creating it. After that though, it will work no matter how many others you make or how many times you refresh! Just not after immediately being made.

* Quite possibly the biggest issue I ran into was, while I had the newCityBtn's working, it didn't display them on the page until you refreshed the page. So I called back to a previous commit and boy howdy, that was a mess. After fixing it up to working order and pushing out the new commit, I started getting git errors and messages that I haven't encountered. As well as I was in something called the HEAD, which proved difficult to deal with. After that, I had a pull request to deal with on GitHub and I wasn't actually positive on how to tell what it was yelling about, so I just copy and pasted my entire JavaScript into the area and called it good!

## Screenshots

I will list some screenshots of the app in working order below!

![Weather-Dashboard](/assets/images)


## Conclusion

In conclusion, this was a good challenge, but boy did it test my mettle in some spots (really looking at you GitHub). It was cool working with this API and learning how you can alter the URL to pull up different kinds of data as well as being a good challenge to further my learning of JavaScript (which out of HTML, CSS and JavaScript, it is definitely the toughest for me.) I look forward to working with more APIs in the future!

## The Link

Below is the link that will take you to the live website, hosted by GitHub Pages!

