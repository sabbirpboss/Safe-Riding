import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <div>
                <h2 className='question'>Question:1: What is context API?</h2>
                <p className='answer'>Answer: The React Context API was been around as an experimental feature for a while now but finally became safe to use in production last year, solving one major problem React problem — prop drilling. Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they’re passing state to their components. The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
            </div>
            <div>
                <h2 className='question'>Question:1: What is Semantic Tag?</h2>
                <p className='answer'>Answer: The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content. Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as header tag, footer tag and article tag are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them. HTML was originally created as a markup language to describe documents on the early internet. As the internet grew and was adopted by more people, its needs changed.</p>
            </div>
        </div>
    );
};

export default Blogs;