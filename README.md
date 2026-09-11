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
                <h3>Welcome All, Good to see you using my App. </h3>
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

                                setCount(10);       will change the valeu of count to 10
                                
                                setCount( currentValue => (expressionThatCanRecomputeAndReturnANewValue) );

                                setCount( cv => cv*2 );

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

             const Welcome = () => {

                const [userName,setUserName] = useState<string>("");

                const userNameRef = useRef();

                cosnt handleSubmit = e => {
                    e.preventDefault();
                    setUserName(userNameRef.value);
                }
                
                return (
                    <h3>Welcome! {userName} </h3>

                    <form onSubmit={handleSubmit}>
                        <label>User Name: </label>
                        <input type="text" ref={userNameRef} />                        
                        <button>Submit</button>
                    </form>
                );
            }

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

    Integrating Bootstrap with React
    -----------------------------------------------------------

        Introduction

            Bootstrap i s a css library. It offers ready to use responsive layouts.
            It also offers ready to use components like Modals, Navigation bars, cards, Headers , Footers ..etc.,

            Bootstrap Grid System

                The page is layed out as a set of rows and each ros has 12 units in width.
                meaning each row can acomidate 12 cols max.

                Screen size is available in four , lg, md, sm, xs (large, medium, small and extra small).

                col-lg-1    1 out of 12 units in width on large screens only, 
                            and occupies full screen width on other screens

                col-md-1    1 out of 12 units in width on large and medium screens only, 
                            and occupies full screen width on other screens

                col-sm-1

                col-xs-1

            Bootstrap Containers

                .container          90% of the width on large and medium screens and 100% on all screens.
                .container-fluid    100% width on screens.

            Utitlity class

                are classes used to control backgroudn-color, width, margin, padding ..etc.,

                p-1 to p-5
                m-1 to m-5
                ...etc., 

        npm i bootstrap

        node_modules
            |- bootstrap/dist/css/bootstrap.min.css
            |- bootstrap/dist/js/bootstrap.bundle.js

        import these two files in the main.ts

        <div className="row"> </div>

    Integrating Bootstrap with ReactBootstrap
    -----------------------------------------------------------

        npm i react-bootstrap bootstrap

        <Row></Row>
    
        https://react-bootstrap.netlify.app/docs/getting-started/introduction
        
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
 
    Form Hook Library
    -----------------------------------------------------------

        this is a library that offer a hook called "useForm"

        useForm     this hook takes inital/default values of the form-fields as arg.
                    returns a form-managemnt-object having methods like
                        register each input-field with the state-field
                        method to handle form-submition
                        ..etc.,

        npm i react-hook-form

    YUP Library for form validations
    -----------------------------------------------------------

        is a library that is used force an entity-schema (validation rules and default valeu on
        to a form)

            const validationSchema = Yup.object().shape({
                username: Yup.string()
                    .required('Username is required')
                    .min(3, 'Username must be at least 3 characters'),
                email: Yup.string()
                    .required('Email is required')
                    .email('Invalid email format'),
                password: Yup.string()
                    .required('Password is required')
                    .min(6, 'Password must be at least 6 characters'),
                confirmPassword: Yup.string()
                    .required('Please confirm your password')
                    // Use oneOf to match another field
                    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
                acceptTerms: Yup.boolean()
                    .oneOf([true], 'You must accept the terms and conditions')
            });
                
        @hookform/resolvers     is another library to bridge between form-hook and yup.

            const {
                register,
                handleSubmit,
                formState: { errors },
            } = useForm({
                resolver: yupResolver(validationSchema), // Connects Yup to React Hook Form
                mode: 'onTouched', // Validates when a user leaves an input
            });
        
        npm i react-hook-form yup @hookform/resolvers

    Global State Management using Context API
    ----------------------------------------------------------

        React Context API is a built-in state management feature introduced to solve one core problem: prop drilling.

        It allows you to share state globally across your component tree without explicitly passing props down through every single level of intermediate components.

        Anatomy of the Context API
            The Context system relies on three core concepts:

            createContext(): Creates the Context object containing a default value.

            Provider: A wrapper high-order component that supplies the state to its children.

            useContext(): A React Hook used by child components to read and consume the state.       

    Global State Management using Redux ToolKit
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
                        by a component through dispatching an action.

            action      is a object or function that indicates
                            what-operation-has-to-be-done (refered as action-type)
                            what-is-the-data-needed-for-that-operation (refered as payload)

            dispatch    is a built-in function used by components to
                        send 'actions' to the reducers.

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
        
        RTK Entity Adapter

            When managing data  in Redux , writing repetitive CRUD logic for every slice gets tedious.

            createEntityAdapter     is a built-in utility in Redux Toolkit (RTK) that completely automates this. 
                                    It provides a standardized state structure, pre-written high-performance reducers, 
                                    and highly optimized, memoized selectors out of the box.

                1. The Normalized State Structure

                    When you initialize an entity adapter, it forces a predictable shape on your state slice:

                    {
                        ids: ['id1', 'id2', 'id3'],
                        entities: {
                            id1: { id: 'id1', name: 'Item One' },
                            id2: { id: 'id2', name: 'Item Two' }
                        }
                    }
                
                    ids         An array of strings or numbers ensuring a consistent chronological or sorted order.
                    entities    A lookup object map allowing you to fetch any record in O(1) time without scanning an entire array.
                
                2. Setting Up an Entity Adapter with TypeScript

                    import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';
                    import { RootState } from '../../app/store';

                    // 1. Define your data model
                    interface Book {
                        id: string;
                        title: string;
                        author: string;
                    }

                    // 2. Initialize the adapter
                    const booksAdapter = createEntityAdapter<Book>({
                        // Optional: Sort books alphabetically by title
                        sortComparer: (a, b) => a.title.localeCompare(b.title),
                        // Optional: If your unique identifier is named something other than 'id' (e.g., 'bookId')
                        // selectId: (book) => book.bookId, 
                    });

                    // 3. Generate initial state: This automatically creates { ids: [], entities: {} }
                    const initialState = booksAdapter.getInitialState({
                        loadingStatus: 'idle', // You can add custom, non-entity state fields here!
                    });

                    const booksSlice = createSlice({
                        name: 'books',
                        initialState,
                        reducers: {
                            // 4. Use adapter-provided CRUD reducers directly!
                            bookAdded: booksAdapter.addOne,
                            bookUpdated: booksAdapter.updateOne,
                            bookRemoved: booksAdapter.removeOne,
                        },
                    });

                    export const { bookAdded, bookUpdated, bookRemoved } = booksSlice.actions;
                    export default booksSlice.reducer;

                3. The Auto-Generated Selectors

                    One of the best features of `createEntityAdapter` is that it generates pre-optimized, memoized selectors. 
                        
                    // Extract the selectors and point them to where this slice lives in your RootState
                    export const {
                        selectAll: selectAllBooks,         // Returns an array of all books, correctly sorted
                        selectById: selectBookById,       // Returns a single book by ID
                        selectIds: selectBookIds,         // Returns just the array of IDs
                        selectTotal: selectTotalBooks,     // Returns an integer representing total records
                    } = booksAdapter.getSelectors((state: RootState) => state.books);

                    Usage in a React Component:
                        import { useSelector } from 'react-redux';
                        import { selectAllBooks, selectBookById } from './booksSlice';

                        export function BookList() {
                            const allBooks = useSelector(selectAllBooks); // Type: Book[]
                            
                            // No custom selectors required for lookups:
                            const singleBook = useSelector((state) => selectBookById(state, 'book_123')); 
                            
                            return (
                                // ... render logic
                            );
                        }

                4. Built-in Reducer Methods Reference

                    The adapter provides a specific lexicon of mutation helpers depending on exactly what we want to do with our store:
                
                    addOne(state, action)       Adds a single record. Does nothing if the ID already exists. 
                    addMany(state, action)      Adds multiple records. 
                    setOne(state, action)       Adds a record, or *completely overwrites* it if it already exists. 
                    setAll(state, action)       Clears out the entire collection and replaces it with the new records. 
                    setMany(state, action)      Adds or overwrites multiple records. 
                    updateOne(state, action)    Updates fields on a record. Expects `{ id, changes }` in the payload. 
                    updateMany(state, action)   Updates multiple specific records at once. 
                    upsertOne(state, action)    If the item exists, updates it. If it doesn't, inserts it. 
                    upsertMany(state, action)   Upserts an array of records. 
                    removeOne(state, action)    Deletes a record by its ID string/number payload. 
                    removeMany(state, action)   Deletes multiple records based on an array of IDs. 
                    removeAll(state)            Completely empties the `ids` array and `entities` map.                


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

    Memorizaion
    ------------------------------------------------
        In React, memoization is all about performance optimization. At its core, it’s a strategy to avoid doing the same work twice. By "remembering" the results of expensive calculations or preventing unnecessary component re-renders, the application is kept snappy.

        1. React.memo: Component Memoization
            By default, when a parent component re-renders, all of its children re-render too—even if their props haven't changed. React.memo is a Higher Order Component (HOC) that prevents this. React performs a "shallow comparison" of the props. 
            If the props are the same as last time, React skips rendering the component and reuses the last rendered result.

        2. useMemo: Value Memoization
            useMemo is a Hook that lets us cache the result of a calculation between re-renders.

        3. useCallback: Function Memoization
            useCallback is a Hook that lets you cache a function definition itself between re-renders.

            In JavaScript, function(){} === function(){} is false. Every time a component re-renders, any function defined inside it is a "new" function. This causes child components wrapped in React.memo to re-render anyway because their "prop" (the function) looks different.

            The Solution is useCallback which ensures that the function reference stays the same unless its dependencies change.

        For Example 

            Unoptimized Version

                const ItemList = ({ items, onItemClick }) => {                 
                    console.log("ItemList Rendered"); // logs whenever ProductPage is re-rendered
                    return (
                        <ul>
                         {items.map(i => <li key={i.id} onClick={onItemClick}>{i.name}</li>)}
                        </ul>
                    );
                };

                const ProductPage = ({ items, theme }) => {
                    const [count, setCount] = useState(0);

                    // 1. Expensive calculation runs on EVERY click of "Increment"
                    const visibleItems = items.filter(item => item.price < 100);

                    // 2. This function is "new" on every render, breaking child memoization
                    const addToCart = () => {
                        console.log("Added!");
                    };

                    return (
                        <div className={theme}>
                            <h1>Count: {count}</h1>
                            <button onClick={() => setCount(count + 1)}>Increment</button>
                            
                            <ItemList items={visibleItems} onItemClick={addToCart} />
                        </div>
                    );
                }

            Optimized Version

                // 1. Wrap the child in React.memo
                const ItemList = React.memo(({ items, onItemClick }) => {
                    // Only logs when items or onItemClick change
                    console.log("ItemList Rendered"); 

                    return (
                        <ul>
                        {items.map(i => <li key={i.id} onClick={onItemClick}>{i.name}</li>)}
                        </ul>
                    );
                });

                function ProductPage({ items, theme }) {
                    const [count, setCount] = useState(0);

                    // 2. Memoize the filtered list
                    const visibleItems = useMemo(() => {
                        return items.filter(item => item.price < 100);
                    }, [items]); // Only re-runs if 'items' prop changes

                    // 3. Memoize the function reference
                    const addToCart = useCallback(() => {
                        console.log("Added!");
                    }, []); // Reference stays the same forever

                    return (
                        <div className={theme}>
                            <h1>Count: {count}</h1>
                            <button onClick={() => setCount(count + 1)}>Increment</button>
                            
                            <ItemList items={visibleItems} onItemClick={addToCart} />
                        </div>
                    );
                }

    BudgetTrackingApp
    ------------------------------------------------

    Customer
        |<-multiple-> Accounts
                        |<-multiple-> Transactions

    Customer        id (CRIN), Name, Mobile, MailId
    Account         id (AccNum), Type (Savings|Current), CurrentBalance
    Transaction     id (TxnId), TxnDate, Header, Amount, TxnType
    
    sample json 
        {
            "customer":[
                {"id":1,"name":"Vamsy","mobile":"9052224753","mailId":"vamsy@gmail.com"}
            ],
            "accounts":[
                {"id":1,"type":"SAVINGS",currentBalance:0,"crin":1}
            ],
            "txns":[
                
            ]
        }
    Links on the navbar
        /home   that brigns up the customers page.

        Custoemr Page is the landing page
            1. it has to support CRUD operations on custoemrs
            2. it must have a nested table that manages CRUD operations of Accounts
                linked to a specific customer.
            3. Accounts nested table must appear only when the related customer row is clicked
                like an ACCORDIAN
            4. Against each account record, apart from edit and delete buttons, a statement button is needed 
                that when clicked will navigate to statement page
            5. Use a bootstrap model to display custoemr-form or account-form for
                add or edit operations

        Statement page
            1. is the page that supports CRUD operatiosn on transactions
            2. Any add/update/delete operation on transaction must
                trigger an update on the currentBalance of the related account.

Handle a sequence of api calls - RTK - thunk
-------------------------------------------------------

    "Where is the brain?"

        Are we handling the bussiness logic on the UX-app or the rest-api-server?

        in case - BL - (on adding or deleting or updating a txn, currentBalence update) is handled
        by the api-server =====> then we jsut need to update the state on RTK for both 
        txn-slcie and accounts-slice.

        in our case, we depend on "json-server" for rest-api which is absolutly dumb and handles NO-BL,
        brain is at the UX-app

        so, in the addTxnAction

            const txnApiResp = await axios.post(txnApi,txn);

            //compute the currentBalacne

            const accApiResp = await axios.patch(accApi + "/" + txn.accId,{currentBal:cb});

            // return both the txn (to be used by txn-slice) and {accid,currentBal} (to be used by acc-slice)

        Now to update the 'state' on RTK

            we can add extrReducer on addTxnAction.fullfilled   in the txns-sclice   to push txn into state.txns
            we can also add extrReducer on addTxnAction.fullfilled   in the acc-sclice   to change the state.accs[index].currentBal