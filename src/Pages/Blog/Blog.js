import React from 'react';
import useTitle from '../../contexts/hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <div className="card md:mx-32 bg-red-300 shadow-xl justify-start my-12">
                <div className="card-body">
                    <h2 className="card-title justify-center font-bold"># Difference between SQL and NoSQL</h2>
                    <p className='text-xl'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
            </div>
            <div className="card md:mx-32 bg-red-300 shadow-xl justify-start my-12">
                <div className="card-body">
                    <h2 className="card-title justify-center font-bold"># What is JWT, and how does it work ?</h2>
                    <p className='text-xl'>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                </div>
            </div>
            <div className="card md:mx-32 bg-red-300 shadow-xl justify-start my-12">
                <div className="card-body">
                    <h2 className="card-title justify-center font-bold"># What is the difference between javascript and Node JS?</h2>
                    <p className='text-xl'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>
            </div>
            <div className="card md:mx-32 bg-red-300 shadow-xl justify-start my-12">
                <div className="card-body">
                    <h2 className="card-title justify-center font-bold"># How does Node JS handle multiple requests at the same time?</h2>
                    <p className='text-xl'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.<br />If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;