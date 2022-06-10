

# Paranormal Testimonies Front-End

## Description

Paranormal Testimonies is a website designed for those who want to share their stories with the supernatural. Each page of the website is designed as a repository of these stories according to three subject matters: Ghostly apparitions, extra-terrestrial encounters, and cryptid sightings.

Users browsing the website can access the stories corresponding to their particular subject of interest via the navigation bar. If they choose to do so, they can also share their own experience by filling out the form that appears onscreen after clicking on the "SHARE YOUR STORY" button.

When submitting a new story, users should choose the category that better fits their experience. All entries must have a title. The stories themselves are limited to a maximum of 1500 characters. Using a nickname is highly encouraged to preserve anonymity. Users can opt to generate a random nickname using the random generator in the form. Additionally, users may enter a keyword should they desire to have an illustration for their story.

Once the story is submitted, it will be sent to the top of the entries in its corresponding section.

Users can interact with existing entries by either discussing them in the comments or by adding an emoji reaction.

To view the comments, simply click on the SHOW COMMENTS button of the entry they desire to follow up. This will bring up the comments section where all the previous comments have been stored. Adding a new comment is as easy as filling the form inside. The comments are limited to a maximum of 500 characters.

To react to the stories, all users need to do is click on their preferred emoji.


## Installation

### You can access a live demo of the website on this link {placeholder}. No installation is required. If you still want to run the app, follow the steps below.


1. To view the demo of the app, first make sure to have installed the Back-End repo of the Paranormal Testimonies app. You can get the latest version by following this link: https://github.com/NovaDA/Ghost_Hunters_BE

2. Clone the Front-End repo of Paranormal Testimonies into a new folder. Using your terminal, this can be accomplished by accessing the directory where the repo will be installed and entering "git clone <repo>" where <repo> stands for the address of this repository.

3. Follow the instructions in the Back-End repo to get the server up and running.

4. Copy the path for the index.html file inside the main directory of the Front-End repo stored on your computer.

5. Finally, paste the aforementioned path in the address bar of your preferred browser and press Enter. 


## Changelog

- Created index.html as the container of the Ghostly Apparitions section and as main page of the app.

- Added Bootstrap navigation bar, a footer, the header image, as well as a custom CSS for the broader styling features of the website (colour, fonts, and element placement).

- Added some dummy posts to the index.html body to guide the coding of the functionality for retrieving the posts from the database.

- Added the TELL YOUR STORY BUTTON as well as the Offcanvas module containing the form to create a new post.

- Added responsive behaviours to the styling to make the fonts and other elements adapt to different screen sizes.

- Added the Offcanvas Module for the comments and gave it responsive behaviour to expand over the whole window on smaller screen sizes.

- Improved aesthetics: The TELL YOUR STORY BUTTON is now a circle rather than a tab.

- Added the JS code to display individual posts in the body of index.html.

- Added the JS code to send a new story post to the server.

- Added the JS code to send a new comment to the server.

- Added encounters.html for the Close Encounters section

- Added the Random nickname generator button to index.html and its corresponding JS code is now on the working scripts

- Added the JS code to display all posts to the body of index.html and the code to place the post comments to the off-canvas module, also for the index.html file.

- Added unique IDs to the buttons of each post to drive the code for the emoji reactions and the code to display the comments when the Show Comments button is clicked.

- The emoji buttons now send a +1 value to the corresponding post in the server database.

- The Show Comments button now displays the comments linked its corresponding post.

- Added the random story generator to index.html.

- Added a selector input to the new post form on index.html to send the stories to their corresponding section (Ghost, UFO, Cryptids).

- Added the GIF keyword input to the new Story form in index.html.

- Implemented the fetch function to retrieve the GIF URL and send it to the server along with the other.

- The posts now display a Gif image from GIPHY based on the keyword chosen by the users sending the new entries.

- Restructured the client-side JS script files to separate its functions into smaller modules (e.g. Now it is possible to add the last post/comment to its corresponding section on the page rather than retrieving all posts/comments at once). 

- The emoji buttons now fetch the new value from the server and display it on the counter.

- Added micro-story generator button to the top of the body of index.html.

- Updated encounters.html and added cryptids.html for the Cryptid Sighting section

- Fixed the get all posts to function to filter the database stories by type.

- Several Styling changes: Added image license links to the header images of each page, restyled the comments section.








