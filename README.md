# Twitter-API-using-Node

# Glimpse 
  Creating a bot server to Post / Access Tweets on our Twitter account

  Prerequisites = NodeJS installed, Active internet connection.
                  Some Knowledge of Javascript and its framework Express.
                
Clone the repository into your local machine.
Using any editor open terminal/CMD and go the the clonned directory
 
For installing the dependencies use only the command
npm install
This will install all the packages you'll need for this project

# EDITS

=> Changing the config.js file in with you have your confidential information

1.)   https://developer.twitter.com/en/account/get-started
      Got to this website and create an APP for your project. Fill in all the required fields and create an account
      
2.)   https://developer.twitter.com/en/account/environments
      Go to create development environment and create atleast one environment

3.)   https://developer.twitter.com/en/apps
      Go to apps section and at the right side of your app click details.
      There in the 2nd tab you'll find the Consumer API keys
      Copy API key and API secret key to the config.js file

4.)   Click on generate ACCESS TOKEN
      Then you'll get ACCESS TOKEN and ACCESS TOKEN SECRET
      Copy paste these two into your config.js file

5.)   Config file setup is done now


1. POSTING PICTURE/IMAGES WITH STATUS
      Open file APP.JS
      Line 9 => Change the photo you wanna upload.
      Line 24 => Status: {Put in your own status}


2. POSTING STATUS WITH HASHTAGS
      Remove the comment from line 30-54
      In the tweet object change your status with the hashtags you wanna insert

# Perform 
Once done any of the above procedure open the terminal/CMD again in that particular folder and run command

COMMAND
    node app.js 

Then go to your Twitter account and check the updates.

# Caution
CAUTION => If you're under your institute/company network check for the firewalls. Sometimes they hinder the process
