import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1>What is Context Api</h1>
                <p>Context api is used to drill through components.Cause without context api you need to send data through many stages of components  by using props.but with context api it becomes an easy job. while using context api it can share values easily without sharing values to every prop of components</p>
            </div>
            <div>
                <h1>Deference between inline and inline block element</h1>
                <p>Block level elements starts a new line and it takes a amount of margin and padding if you write a block level element then it will take up the full line . div,p, header tags are one of block level elements

                    On other hand inline elements take very little space and it doesn't take a full line worth of space..it only takes as much width necessary
                </p>
            </div>
        </div>

    );
};

export default Blogs;