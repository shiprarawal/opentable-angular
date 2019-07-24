## 1.	How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I spend around 2 hours on the test. If have have more time, i would have used two components and have routed the user to other component to show the results.Also, i may have used reactive forms in place of template driven forms which can have helped me to write some good unit test cases.

## 2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

There are many features offered by the Angular latest version. one of them is declaring root for the value of the @Injectable() providedIn property for singleton services or this makes the service available throughout the app and we are not required to declare it in app.module Ex: i have used the below code in get-data.service

@Injectable({
  providedIn: 'root',
})

## 3.	How would you track down a performance issue in production? Have you ever had to do this?
My way of testing the application performance is to go to the network tab in chrome developer tools and see the time each request is taking and then dig out into the code to check the part of code that is taking most time to load. I got this issue in PAT enviorment before where there was an API was taking  around 15 seconds to send the response to the front end and the front end was showing a loading bar for a longer time. Corrections in API code helped to resolve this issue.

## 4.	How would you improve the API that you just used?
We can have all the records in one request rather than having it page-wise
## 5.	Please describe yourself using JSON.

my details object :-)

{
"name": "Shipra",
"lastname": "Rawal",
"country": Canada,
"current-employer": "Cognizant Technologies",
"client": "TD bank",
"skills": [
"HTML5",
"CSS3",
"SASS",
"Angular"
],
"interests": [
"Learning",
"Dancing",
"Cooking"
],

"believes": [
"If everyone is moving forward together, then success takes care of itself."
]
}

