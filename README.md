** This README file is unable to preview images attached so please please consider the MS-Word File "Extension Description.docx" for the same.**


# Social Media Blocker (For FaceBook, Instagram, Youtube and Discord)
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

![timeout_page](https://user-images.githubusercontent.com/122373317/224470593-aa1bae54-1dd0-434c-8511-9b9c2a84e16f.png)

Background credits- https://alvarotrigo.com/blog/animated-backgrounds-css/

### JS Code for limiting the use:-

![timeout_code](https://user-images.githubusercontent.com/122373317/224470662-5b974ecc-1bf3-49fd-8b84-81d945c816bd.png)

generateCSSforLimitingDuration() function gives the CSS behind the page and generateHTMLforLimitingDuration() function gives the HTML behind the page as defined above in code.

2)	Suggest some useful websites after the time limit exceeds.

Following suggestions are made after sites being blocked.

![productive_use](https://user-images.githubusercontent.com/122373317/224470704-0827c6cb-774e-4f3e-b8ea-0708ca238bb7.png)


## HTML code for this:

![anchor_tags](https://user-images.githubusercontent.com/122373317/224470789-206ca98f-4846-4237-9151-f697887f301e.png)


The user can switch to those after the social websites being blocked.


3)	Blocks the social sites during some hours of day:

If the site is opened during 9AM-4PM then the site can???t be open and a page like this will be shown.

![website_blocked](https://user-images.githubusercontent.com/122373317/224470835-c6295cb0-a5fe-47f4-9db5-f57ed4622a9b.png)

Backgrounds credits-https://blog.hubspot.com/website/css-animation-examples

## JS code for blocking the page at particular part of day:

![blocked_at_this_time](https://user-images.githubusercontent.com/122373317/224470882-154955d1-06c2-47fd-900c-160ffdd3190c.png)

generateCSSforDeningAccess() function defines the CSS behind this page and generateHTMLforDeningAccess() function creates the basic HTML for the page as defined above.


##### STRUCTURE OF EXTENSION

###### A.	JSON File

![json](https://user-images.githubusercontent.com/122373317/224470909-b86ead66-9744-47cb-bdfc-2c7854df57b3.png)

This manifest.json file controls the extension.


######	B.	Extension Button

![icon](https://user-images.githubusercontent.com/122373317/224470956-c2ce58ef-c36b-4b91-92f5-62bdf38937ec.png)

The extension can be operated from this menu.

######	C.	Function that defines HTML and CSS of Pages

![four_functions](https://user-images.githubusercontent.com/122373317/224470988-d7d512c3-8c59-4196-a867-f4cdb110321b.png)

These 4 functions defined the HTML and CSS for the 2pages.




