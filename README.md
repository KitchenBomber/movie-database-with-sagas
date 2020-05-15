# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).


Redux checklist## Steps to setup React & REDUX by Lamport
[ ] Set up React and REDUX folders    
        [ ] npx create-react-app FOLDERNAME
        [ ] cd into FOLDERNAME in Terminal
        [ ] npm install redux react-redux
[ ] Create Component & Apps folder, Move App.js & App.css into Apps folder
        [ ] Ensure path to Apps.js is still valid in index.js
        [ ] npm start, ensure page is loading
        [ ] Optional - Modify vh of App.css to 12vh from 100vh
[ ] Import REDUX into React Project
        [ ] In index.js, add the following: 
                [ ] import { createStore } from 'redux';
                [NA] import { Provider } from 'react-redux'; 
                [NA] Create firstReducer function:
                        ```const firstReducer = () =>{
                        console.log('in firstReducer');
                        return {};}```
                [NA] Create storeInstance function:
                        ```const storeInstance = createStore (firstReducer);```
                [NA] Instruct <App /> to utilize Provider:
                        ```<Provider store={ storeInstance }><App /></Provider>```
        [ ] In App.js, add the following:
                [X] Modify function App to become a class App as shown:
                        ```class App extends React.Component{```
                [X] Import the connect feature from react-redux:
                        ```import { connect } from 'react-redux';```
                [X] Modify the export:
                        ```export default connect()(App);```
                [x] Check this.props in componentDidMount:
                        ```componentDidMount(){
                        console.log('in componentDidMount', this.props)}```
[x] To check if dispatch works, create a means to use this.props.dispatch, example:
        [x] BUTTON:     <button onClick={this.clickHandler}>Click Me</button>
        [x] FUNCTION:   clickHandler = () => {
                        console.log('in clickHandler');
                        this.props.dispatch({type: 'click'});}
[x] Set up putReduxStateOnProps at the bottom of App.js
        [x] Create new function putReduxStateOnProps:
                const putReduxStateOnProps = ( reduxState ) => ( { reduxState} );
        [x] Modify the export 
                export default connect( putReduxStateOnProps )(App);
[ ] Within index.js, make the following changes:
        [ ] Set up initial state using:
                const firstReducerInitialState = 0;
        [ ] Add a state and action into firstReducer, example:
                const firstReducer = (state = firstReducerInitialState, action) => {}