import React from 'react';
import NavBar from './../NavBar/NavBar';

const Blog = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='container'>
                <div className='m-5 text-start border border-success p-3 rounded'>
                    <h3 className='text-start'>Question one: What is the purpose of react router</h3>
                    <p className='text-start'>At its heart, React Router is a state container for the current location , or URL. It keeps track of the location and renders different "Route" as it changes, and it also gives us tools to update the location using "Link" and the history API</p>
                </div>
                <div className='m-5 border border-danger p-3 rounded'>
                    <h3 className='text-start'>Question two: How does Context API works</h3>
                    <p className='text-start'> React.createContext is all we need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                </div>
                <div className='m-5 border border-primary p-3 rounded'>
                    <h3 className='text-start'>Question three: Describe about useRef() hook</h3>
                    <ul>
                        <li className='text-start'>The useRef Hook allows to persist values between renders.</li>

                        <li className='text-start'>It can be used to store a mutable value that does not cause a re-render when updated.</li>

                        <li className='text-start'>It can be used to access a DOM element directly.</li>
                    </ul>

                </div>
            </div>


        </div >
    );
};

export default Blog;