ReactJS
----------------------------------------------------------------------------

    ReactJS is a javascript framework to develop SPA.

    SPA - Single Page Application

    SPA has only one html page 'index.html' and is backed with alot
    of javascript code. Any form events or hyper links or any other UI
    event is handled by this javascript and in respone to the event it generates
    html dynamically on the client side and replaces the content o the index page with
    the newly generated content.

    SPA uses json/xml to send or receive data from a rest-api.

    An SPA is generally compsoed of Components. Each component is an custom developed
    html element.

    Components in react use JSX/TSX for generating html content dynamically.

    JavaScript/TypeScript eXtened Mark Up Language is an amulgamation of Javascript/Typescript
    and html.

    Create a reactjs app
    -----------------------------------------------------------

    npm create vite     create the project stucture for the selected framework
    npm i               will install all the dependencies listed in 'package.json'
    npm run dev         is the npm script to execute the app in developer mode


    JSX/TSX
    ----------------------

        .ts
            var userName = "Vamsy";
            var pObj = document.createElement("p");
            pObj.innerText = "Hello " + userName

        .tsx
            var userName = "Vamsy";
            var pObj = <p> Hello {userName} </p>

        NOTE: the interpolation-expression shall return either a number or a string or a boolean or 
        a HtmlElement or an array of HtmlElements. (nothing else)

        .ts
            var friends = ["Vamsy","Vani","Venu","Vasanth"];
            var olObj = document.createElement("ol");
            
            friends.forEach( f => {
                let liObj = document.createElement("li");
                li.innerText = f;
                olObj.append(liObj);
            })
        
        .tsx
            var friends = ["Vamsy","Vani","Venu","Vasanth"];
            var olObj = (
                <ol>
                    { friends.map( f => <li>{f}</li> ) }
                </ol>
            );
    
        Rules:
            1. JSX/TSX is case sensitive.
            2. Html built-in elements are always written in lower-case
            3. Html attributes are always written in camelCase.
            4. Custom Html Elements / Components are written in PascalCase (init-caps).
            5. 'class' attributes is not permitted as it is a keyword in js/ts, instead we use
                'className'

    ReactJS Components
    ----------------------------------------

        In ReactJS a Component can be developed in three ways.

        (a) Class Components
        (b) Function Components
        (c) High Order Components

    Class Component
    ---------------------------------------

        Any class that extends React.Component is called a Class Component.

        From React.Component, a class component inherits
            1. state                                is a field that holda all the data related to a component
                                                    'state' is immutable. 'state' is initialized in the constructor. and it can be replaced using 'setState()'
                                                    method.

            2. render()                             is the method that return the html content for a component.
                                                    render() is reexecuted each tiem the 'state' gets replaced.

            3. setState()                           is the method used to repalce the 'state', and each time
                                                    setState() is called, render() follows.

            4. componentDidMount()
            5. componentDidUpdate()
            6. and such other life-cycle methods

        class Dashboard extends React.Component< {}, {appTitle:string} > {
            constructor(props:{}){
                super({});
                this.state = {
                    appTitle:"My First App"
                }
            }

            render(){
                return (
                    <h1> {this.state.appTitle} </h1>
                )
            }
        }

        <Dashboard />

    LifeCycle of a Class Component
    ---------------------------------------

        constructor()                   //state gets initialized here
            ↓
            render()                    //the html content is returned here
                ↓
                componentDidMount()     //this is used to execute a task immidiatly after first rendering
                    |                   //like loading data from rest-api ..etc.,     
                    ↓
                    ******************************************
                        the component will be idle
                  |→    until 'setState' is invoked by 
                  |     any means (an event or a form submiton..etc)
                  | **********************************************
                  |             ↓
                  |             render()                    //the updated html content is returned here
                  |                 ↓
                  |←--------------- componentDidUpdate()    //side-effect are handled.

    ReactJS 'props'
    --------------------------------------

        'props' short for properties is a mechanisim used by a 
        parent component to share data with a child component via attributes.

        class Banner extends React.Component< {appTitle:string} , {} > {
            constructor(props:{appTitle:string}) {
                super(props);
                this.state ={};
            }

            render(){
                return (
                    <h1> {this.props.appTitle} </h1>
                )
            }
        }

        class Dashboard extends React.Component< {} , {pendingTasks:number,completedTasks:number} > {
            constructor(props:{}) {
                super(props);
                this.state ={
                    pendingTasks:0,
                    completedTasks:0
                };
            }

            render(){
                return (
                    <section>
                        <Banner appTitle="My Task Schedular App" />
                        <div>
                            Pending Tasks: {this.state.pendingTasks}
                        </div>
                        <div>
                            Completed Tasks: {this.state.completedTasks}
                        </div>
                    </section>
                )
            }
        }
 
    Function Components
    -----------------------------------------------------------
        Function Component is any function that can return html-content.

        const WelcomeSection = () => (
            <section>
                <h3>Welcome All, Good to see you usign my App. </h3>
            </section>
        );

        <WelcomeSection />

        1. Function Components are highly light weight compared to Class Components.
        2. These are not attached to the React Framework directly and hence are easy to test.
        3. These can receive 'props' as an argument.

            const PageHeader = (props : {title:string} ) => (
                <header>
                    <h3>{props.title} </h3>
                </header>
            );

            <PageHeader title="App Name" />
        
        4. These do not have access to component state/ lifecycle methods. And hence are used to be called as
            state-less components.

    React Hooks
    -----------------------------------------------------------

        A hook is a built-in or custom function that is designed to provide additional features to a Function Component.
        
        A hook can be invoked anywhere inside a function component expect in a loop or conditonal statement or as part of any other expression block or return block.

        useState        is a hook that proivdes state managemnet in a function component.
                        this hook return two values a reader and a writer in that order.

                        const [count,setCount] = useState<number>(0);

                        count       is the reader to the get the current value of the state field
                        setCount    is the writer to be sued to replace the value of count

                                setX(10);       will change the valeu of x to 10
                                
                                setX( currentValue => (expressionThatCanRecomputeAndReturnANewValue) );

        useEffect       is a hook designed to work as an alternate to componentDidMount and componentDidUpdate 
                        in a function components.

                        useEffect(callBack)         
                            this callBack is executed everytime after the component render
                        
                        useEffect(callBack,anEmptyArray)         
                            this callBack is executed only once after the component rendered for the first time
                            equivalent to componentDidMount
                        
                        useEffect(callBack,anArrayHavingStateFields)         
                            this callBack is executed eachtime after the component is rendered and atleast one of the
                            fields in the array are modified
                            equivalent to componentDidUpdate

    Integrating Bootstrap with React
    -----------------------------------------------------------

        npm i bootstrap

        node_modules
            |- bootstrap/dist/css/bootstrap.min.css
            |- bootstrap/dist/js/bootstrap.bundle.js

        import these two files in the main.ts

    Integrating Bootstrap with ReactBootstrap
    -----------------------------------------------------------

        npm i react-bootstrap

    Working with Forms in reactjs
    -----------------------------------------------------------

        Controlled Components

            here, a form-input-control is directly mapped to a state-field of a component.
            this promots single-source-of-truth. 

            const Welcome = () => {

                const [userName,setUserName] = useState<string>("");
                
                return (
                    <h3>Welcome! {userName} </h3>

                    <form>
                        <label>User Name: </label>
                        <input type="text" value={userName} onChange={ e => setUserName(e.target.value) } />
                    </form>
                );
            }

        UnControlled Components

            here, we create something called 'ref' s , where
            each ref is mapped to one form-input-controlled, which
            later cna be used to extract data from the fomr-input-control.

        Controlled Components are 99% prefered than UnControlled component inspiteof
        a little complexity involved, and thats due to the memory-weight.

    React 'ref'
    -----------------------------------------------------------

        a ref is a react-handle assigned to any html-element that can later
        be sued to work with or manipulate the html-element programatically.

        'useRef' Hook

            cosnt ref1 = useRef()

            <p ref={ref1}>
                ....
            </p>

    Routing
    -----------------------------------------------------------

        is to map a component to a path, so tha that that component is rendered
        only when the mapped path is requested.

        npm i react-router

        <BrowserRouter>
            <!-- is common area, uncontrolled by router -->
            
            <Routes>
                <!-- is the route area, controlled by router -->
                <Route path="path1" element={<Component1 /> } />
                <Route path="path2" element={<Component2 /> } />
                <Route path="path3" element={<Component3 /> } />
            </Routes>

            <!-- is common area, uncontrolled by router -->
        </BrowserRouter>

        Link        is a built-in component used to create client-side working hyper-links
                    as 'a' is a server-side hyper-link
        
        Hooks
            useLocation()       returns the location object through which info like current-path can be accessed

            useParam()          returns an associative array of all path parameters and query parameters, if any

            useNavigate()       returns a method, that can be used to programatically navigate between components.

    State Management using Redux ToolKit
    -----------------------------------------------------------

        Redux
            is an independent library used to maintain state globally and is 
            used by a varity of frameworks like Angular, React ...etc.,

            Redux Arch

            store       is the global-state that contians the entire data of the applciation.
                        an app can have only one store

                        whenever the data in the store gets modified it notifies the
                        relevent components automatically

            reducer(s)  is a function that modifies the data in the store when reqeusted
                        by a dispatch

            action      is a object or function that indicates
                            what-operation-has-to-be-done (refered as action-type)
                            what-is-the-data-needed-for-that-operation (refered as payload)

            store -------------------------------------------
                ↑               ↓                           ↓
                |               |                           |
                |               Component1                  |
                |               |                           Component2
                |               | dispatch(action)          |
                |               |                           | dispatch(action)
                |               |                           |
                reducer(s) ←----------------------------------

        Redux Tool Kit

            is an enchanced layer on redux to create and mange the store

            Slice           a slice refers to a piece of State.
                            a slice has initialState, reducers and asyncThunks.

                            initialState    is the initial piece of data
                            reducer         is a function that manipulates 
                                            data as per an incoming action
                            action          is an object that indictes an
                                            operation.
                            asyncThunks     is an asynchronous function that 
                                            is used for api calls.

            createSlice     is a function used to create a slice

                            const mySlice = createSlice({
                                name:'sliceName',
                                initalState,
                                reducers: {
                                    //list of reducer functions where 
                                    //each function has to accept currentState and action
                                    //and return modifiedState
                                },

                            });

            createAsyncThunk    is used create asynchrnous actiosn called 'thunks'
                                these thunks are uysed to make rest-api calls.

            configureStore  is a function used to link reducers with Store

                            export const store = configureStore({
                                reducer: {
                                    reducerLabel: myReducer,
                                },
                            });

        React-Redux
            is a bridge service between Redux/RTK and ReactJS.

            Provider        is a component that is sued wrap the Store on the app.

                                <Provider store={store}>
                                    <App />
                                </Provider>

            useSelector     is a hook used to extract required data from state.

            useDispatch     is a hook that return a 'dispatch' function that 
                            is used to send an action from a component to a reducer.            
        
        npm i @reduxjs/toolkit react-redux

    Working with 'axios' to make rest-api calls
    ------------------------------------------------

        npm i axios

        axios.get(url) : Promise<AxiosResponse>
        axios.put(url,reqBody) : Promise<AxiosResponse>
        axios.post(url,respBody) : Promise<AxiosResponse>
        axios.delete(url) : Promise<AxiosResponse>

    Promise, async and await ?
    ------------------------------------------------
        Promise is a class w=that provides communication
        between an asynchronous background operation and
        a synchronous front-end.
        
        Every async method returns a promise object that allows to handle the return value or error.

        const method1 = () => MAth.PI
        const method2 = (a,b) => a+b

        x = method1()
        console.log(x);
        y = method2()   //method2 will not start execution until method1 is complete
        console.log(y);
        
        
        const asynchronousMethod1 = async () => {
            //here it must be a time consuming operation 
            return Math.PI;
        }

        const method2 = (a,b) => a+b

        p = asynchronousMethod1()   //here p is a promise
        p.then( x => console.log(x); )
            .catch( err => console.log(err); );

        y = method2()               //method2 will not wait until asynchronousMethod1 is complete, 
                                    but executes parellally
        console.log(y);

        const dummy =async () => {
            x = await asynchronousMethod1()   
            console.log(x);
            y = method2()               //method2 will wait until asynchronousMethod1 is complete due to 'await', 
                                        but executes parellally
            console.log(y);
        }

        dummy();

        Note: 'await' keyword can be used only inside the body of another async method.

    How a thunk works?
    -------------------------------------------------------
        
        'createAsyncThunk' from redux-tool-kit will create
        special actions called thunk-actions. 

            store -------------------------------------------
                ↑               ↓                           ↓
                |               |                           |
                |               Component1                  |
                |               |                           Component2
                |               | dispatch(action)          |
                |               |                           | dispatch(thunkAction)
                |               |                           ↓
                reducer(s) ←-----                    ------[async-thunk-action]------
                        ↑                            |                              |
                        |←----send-a wait-signal-----|  dispatch(watiAction)        |
                        |                            |  axios-call                  |------> rest-api <---> database
                        |                            |                              |           ↓
                        |←----send-data-action-------|  receive-data                |<---data---|
                        |←----send-err-action--------|  receive-err                 |<---error--|
                                                     |------------------------------|


    Create-fake-rest-api using Json-Server
    ------------------------------------------------

        md adb-api
        cd adb-api
        npm init -y
        npm i json-server@0.17.4

        create a json file 'adb-api/data.json' that contians the hypothetical data

        create script "start":"json-server --port 9999 --watch ./data.json" in package.json