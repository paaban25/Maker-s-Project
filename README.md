# Social Media Blocker
## PAABAN PANDA
## ELECTRICAL ENGGINEERING

### OVERVIEW

##### PROBLEM STATEMENT

#### Time limiter for social media sites
Make a chrome extension that limits time on social media sites, and blocks said sites after a fixed amount of time.

Features can include:
- Block a specific site after fixed usage per day
- Block all sites after a fixed net usage per day
- Block certain sites during certain times of the day
- Suggest productive websites as an alternative when social media sites are blocked
Brownie points out if the extension can work cross-platform (including
mobile)

##### IMPACT
This chrome extension restrains the user from overusing any social websites by giving an alert after using the social site for a specific duration of time. It also blocks the websites during a period of day.

##### DETAILED SOLUTION
The extension has the following features:-
1)	Blocks the website after fixed usage per day.
After using any social site for 10 minutes it closes the site by showing a page like this:-

![]()

Background credits- https://alvarotrigo.com/blog/animated-backgrounds-css/

### JS Code for limiting the use:-

![](readme_images/

generateCSSforLimitingDuration() function gives the CSS behind the page and generateHTMLforLimitingDuration() function gives the HTML behind the page as defined above in code.

2)	Suggest some useful websites after the time limit exceeds.

Following suggestions are made after sites being blocked.

![](readme_images/

## HTML code for this:

![](readme_images/

The user can switch to those after the social websites being blocked.


3)	Blocks the social sites during some hours of day:

If the site is opened during 9AM-4PM then the site can’t be open and a page like this will be shown.

![](readme_images/

Backgrounds credits-https://blog.hubspot.com/website/css-animation-examples

## JS code for blocking the page at particular part of day:

![](readme_images/

generateCSSforDeningAccess() function defines the CSS behind this page and generateHTMLforDeningAccess() function creates the basic HTML for the page as defined above.


##### STRUCTURE OF EXTENSION

###### A.	JSON File

![](readme_images/

This manifest.json file controls the extension.


######	B.	Extension Button

![](readme_images/

The extension can be operated from this menu.

######	C.	Function that defines HTML and CSS of Pages

![](readme_images/

These 4 functions defined the HTML and CSS for the 2pages.




