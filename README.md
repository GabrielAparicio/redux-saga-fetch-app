#### Chameleon technical exercise

I prioritized the design and structure of the application so that it's easy to extend, modify, maintain and understand.

Despite the fact that redux has been accused of being too verbose, I find it very useful to structure a maintainable and scalable application, and don't forget that with the help of technologies like redux-toolkit it's easier to set up the initial config needed to run a redux app now (boilerplate code is no longer a hassle). React Context API was on the table too, but I rather use it as a complementary tool (React Context API wasn't design to support a big number of state updating operations, so we can take advantage of its simplicity in parts of the app where we don't need to dispatch actions very frequently).

Redux toolkit offers a predefined and flexible structure for an application, it's really easy to create and make use of selectors efficiently (memoization). For static typing I decided to go with Typescript and for async operations I included redux-saga (easier and cleaner to test than thunks).

I used React-bootstrap and sass(makes customizing default styles a piece cake) for styling and implementing responsive design, and lodash functionalities to sort the list of members.

#### Future work

Implement fetching operations and data management using React-query and Recoil (two good options to try in the future)

#### Libraries used

Typescript
Redux
React-redux
Redux-toolkit
Redux-saga
Lodash
Bootstrap
React-bootstrap

#### To run the app:

`npm install`
`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.