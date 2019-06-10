# Montreal 311

#AI4Good Hackathon 2019

I am very happy and proud to have participated in this AI hackathon with such wonderful teammates. After hard work we won **1st place winning prize for the best hack** and also **1st place for the 311 Montreal hack challenge** in same at the MILA - Institut Québécois D'intelligence Artificielle. ! 🏆🙌👏


## Inspiration
We are in an era where data is all around us. The tools to use the data are quite complicated to learn and used.  This is where we were inspired to use the powerful **AI** tools at our disposal to automate a chatbot that will do all the work for you. We are fortunate to be able to use them to design a conversation and **analysis platform** to improve the services of the city of Montreal and thus offer a more effective alternative to the Montrealer. We did some research and the last few years in Montreal 311 had **800,000** calls for requests or complaints. Our objective is to bring an **innovative** way to more **effectively** answer the 311 phone call and have some form of **data learning**. We have a waiting time far too long for citizens in the city of Montreal for the 311 service of the city of Montreal. The complaint process can be long and tedious. It is quite difficult to have a traceability of all the data collected by the city of Montreal.

## What it does

The types of calls are divided into 4 categories: information requests, requests, complaints and comments. Requests may include road reports or missing snow removal on your street. We offer the citizen of the city of Montreal the opportunity to have an available and efficient service at all times. The Lama bot system allows us to automate the entire process of responding to the citizen and creating requests to respond to the request in real time.

![alt text](https://github.com/Machine223/Montreal311-AI4GOOD/blob/master/Image/image%20(1).png)


## How we built it

We have standardized the requests made to 311 to have a better visualization of the data and thus have a better traceability of the requests. We offer the possibility of having an interactive platform with visual rendering of the activities made by montréal 311 in the city of montréal. We used machine learning technology with Dialogflow to have a chatbot that can connect to several types of platforms such as facebook messenger, Slask, website...  The chatbot can respond perfectly to the citizens' request and generate a form for the database.  Thereafter, all processed requests are forwarded by our technology to a database with Firebase.  We automated a process with a python script to collect the information obtained from the database and send it to a data analysis and processing software such as Table.  We offer a visualization of the data collected on the dashboard.

![alt text](https://github.com/Machine223/Montreal311-AI4GOOD/blob/master/Image/Screenshot%20from%202019-06-09%2011-26-02.png)
[![Watch the video](https://github.com/Machine223/Montreal311-AI4GOOD/blob/master/Image/image.png)](https://www.youtube.com/watch?v=11Q-ftap19Q0)

## Challenges we ran into

One of the biggest challenges was to connect all the platforms together and effectively train the robot to accomplish the desired task. We spent a lot of time looking for ways to design our database. We initially wanted to make a server with Python but we have a lot of difficulty during the deployment. And again, connecting all the technologies together was a real challenge we don't have a lot of references so we had to quickly find solutions to get there.

## What's next for Montreal 311
The main issue for this project is to bring everything together, now it's done we can focus more on improving each part of the project and incorporate predictive analytics into city resource planning.

## Add more issues to the chatbot
For now, the chatbot is really focused on two issues. The next steps are obviously to add more and more issues to it. A way to do that will be to record the calls done to 311, process them to finally add them to the learning sentences for the chatbot. Thanks to that, our lack of data will be fixed and the chatbot will learn with operational data. Moreover, with DialogFlow it is possible to add as many new issues without removing all the learning already done. So it is quite evolutive and adaptative to new contexts. We just need to increment its knowledge database.

## Add information replies
We decided to focus on complains and requests in order to bring some help to the Montreal city operators. However, there are also different kind of calls: asking for information and comments. To extend our functionalities, we can recognize the questions and automate the answers thanks to a knowledge database. So the chatbot will be able to automatically answer to the most common questions about pet license for example or garbage collection.

## Improve the analytics dashboard
We have focused on the real-time notification, so the dashboard has plenty of improvements possible ! We thought about adding a prediction model to the batch dashboard. We thought about analysing the season of the complains, predicting the hours with the most calls or see the unfavoured boroughts in order to focus on them.


[Here the link for the Presentation](https://docs.google.com/presentation/d/1L_7aygwkUjwixJo2dP9uvGhEavrhEBgMVUJMZoLtAZE/edit#slide=id.g5b3a48c2d2_0_5)

Link for ChatBot demo : https://bot.dialogflow.com/6d91505e-3650-414f-ac7a-4c9a9d94d860
[![Watch the video](https://github.com/Machine223/Montreal311-AI4GOOD/blob/master/Image/Logo-white.png)](https://bot.dialogflow.com/6d91505e-3650-414f-ac7a-4c9a9d94d860)
