# How can check if...

## 1 The redux store is set up correctly
A: Check dectools -> if no store found -> follow instruction

## 2 The redux store has an intitial state?
A: check devtools -> or check error 

## 3 You can access the data from your redux store in your component?
console.log(this.props) in the render

## 4 Your action creator is correctly imported in your component?
A: console.log(myActionCreator) in my render to check if it's imported
A2: console.log(this.props) to see if action creator is in your props (so can)

## 5 An action is dispatched to the redux store
A: Check redux devtools ACTION for the name of your action

## 6 The action you dispatched updated the state of the store
A: Check redux devtools: DIFF


STEP PLAN!

1.  Make reducer file
2.  Make function that returns state
3.  Export function
4.  Import function in index reducer
5.  (check if combineReducers already configured)
6.  Add to the exports of index reducer

CHECK! (we should see the initial state and the name of the reducer)

1. connect() component
2. write a mapStateToProps return the part of state you want from the function

CHECK! (log the props of your component)

1. Use the data in your component
2. Render it for example

CHECK! (look at screen, change initialstate in reducer)

0. Make element to handle user interaction
1. Create event handler & listener

CHECK! (if event handler, listener are working with console.log)

0. Create a actions file (for seperation of concerns)
1. Create actioncreator (function that returns an object with type and payload)
2. Export the action creator
3. Import it to our component

CHECK! if you imported it correctly (console.log somewhere in your component)

1. Add action creator to connect(mapStateToProps, { myActionCreator })
2. Call the actionCreator from your event handler

CHECK! If the action got dispatched in redux Devtools 

1. Handle the action in the reducer
(THIS IS THE HARD PART)

CHECK! In DIFF if the state changes


