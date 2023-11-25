# ZenBot

A mental Health chatbot for the C.I Movember London Hackathon developed by the Zenbot collective team in November 202

![Zenbot home screen](/docs/sitemockup.png)
***

## Introduction

## Table Contents
1. [**ZenBot**](#zenbot)
1. [**Planning stage**](#planning-stage)
    * [***Target Audiences***](#target-audiences)
    * [***User Stories***](#user-stories)
    * [***Site Aims***](#site-aims)
    * [***Wireframes***](#wireframes)
    * [***Color Scheme***](#color-scheme)
    * [***Typography***](#typography)
1. [**Features**](#features)
    * [**Home page**](#home-page)
    * [**Toolbox page**](#toolbox-page)
    * [**About page**](#crew-page)
1. [**Technologies**](#technologies)
1. [**Deployment**](#deployment)
1. [**Testing**](#testing)
1. [**Credits**](#credits)
1. [**Contributors**](#contributors)
***

## **Planning stage**
### **Target Audiences:**

* Men who are experiencing problems with mental health
* Men who are struggling to find a way to talk about their problems
* Men who are looking for advice and support for their mental health

***
### **User Stories:**

* As a user,
     I want to navigate through the pages and find what I require quickly and easily.
* As a user,
      I want to see a secure and confidential page. Where I can explore mental health without fear of judgment and accessing information on common issues anonymously.
* As a user,
     I want to see a toolbox of self-help resources, including guided exercises, journaling prompts, and relaxation techniques that I can try in the privacy of my own space.
* As a user,
      I want to see success stories of men who have overcome mental health challenges, showcasing different paths to recovery and emphasizing that seeking help is a sign of strength.
***

### **Site Aims:**

* The main aim of the site is to provide information to men experiencing phsyical and mental health issues.
* This information is supplied via a chatbot, powered by chatGPT, which men can use to talk about their feelings
* Supplemental to this is a 'Toolbox' page, which has links to various types of information, grouped into 6 sections, diy, crisis, support, facts, success stories and strategies.
***

### **Wireframes:**

![Zenbot wireframes](/docs/zen-bot-wireframes.png)
***

## **Features**

### ***Home Page:***
     Header with a logo of the website and navbar.

### ***Toolbox Page:***
    Header with a logo of the website and navbar.
### ***Crew Page:***
     Header with a logo of the website and navbar.

***

## **Technologies**

* [HTML](https://www.w3schools.com/html/html_basic.asp)
* [CSS](https://www.w3schools.com/css/default.asp)
* [Bootstrap](https://www.w3schools.com/bootstrap5/index.php)
* [JavaScript](https://www.w3schools.com/js/default.asp)
* [OpenAI API (gpt-3.5-turbo)](https://openai.com/)
* [Vercel](https://vercel.com/)

***

## Deployment

* [The app was deployed to vercel](https://vercel.com/docs/deployments/overview)
* The Chatgpt secret key was put in the environment variables for vercel.

## Issues with deployment
* We had issues with timeouts when using the chatgpt function.  It timed out after a few seconds of use leaving the user with an incomplete response to a question.  This was solved by increasing the amount of time for the serverless function to run to 5 minutes.  This ensure that a user got a response each time to their question.
* We also had to pass an object as a variable to the serverless function in order to get the vercel app to run properly.
***

## Testing

* No automated testing was done.
* All testing was done manually by team members.
* We ran our code through [HTML and CSS W3 schools validators](https://validator.w3.org/)

## Future improvements

* We could implement a conversation history which would need login and logout functionality added.
* A subscription model could be introduce to pay for future development costs of the app.
* The app could be developed into a cross platform app for users to use on their phone.
* The AI model could be trainied to cover other groups like parents and relationships.
* Various prompts could be used for users to use to find out answers to questions and users could also add their own prompts at the bottom of the AI question bar as well.  Answers generated could then be saved to a users history.
***

## Credits
* The chosen colour pallete was from 
[colour hunt](https://colorhunt.co/palette/ece3ce7390724f6f523a4d39)

* The support page image link came from unsplash and the photo was by [Prisilla De Creez](https://unsplash.com/@priscilladupreez?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

* We used links from various mental health and mens health sites in pages on the app
* [Mind mental health](https://mentalhealth-uk.org/mens-mental-health/)
* [ONS data on suicide](https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths/bulletins/suicidesintheunitedkingdom/2021registrations)
* [Infographic on facts page](https://www.menshealthforum.org.uk/statistics)
* [Benefits of Support Groups for Men’s Mental Health](https://betterhumans.pub/strength-in-community-the-positive-impact-of-mens-support-groups-6c158fae406c)
* [NHS Tips to reduce stress](https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/tips-to-reduce-stress/)
* [Meditation](https://www.pixelthoughts.co/)
* [Crisis on line help](https://findahelpline.com/gb/topics/suicidal-thoughts)
* Other images for webpages came from [unsplash](https://unsplash.com/) and [bingchat](https://www.bing.com/search?q=Bing+AI&showconv=1)










## Contributors

* The lead on implementing the chatgpt model  and on deployment was taken by [Christian](https://github.com/Robrowno).  
* Other contributors listed below worked on the front end of the site.
* [Debbie](https://github.com/debbiect246)
* [James](https://github.com/broken-helix)
* [Kunal](https://github.com/kun-shukla)
* [Sarah](https://github.com/barty-s)
* [Yasir](https://github.com/yasirwiifto)


***
