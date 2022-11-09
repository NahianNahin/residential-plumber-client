import React from 'react';

const Blog = ({ blog }) => {
    const { question, answer } = blog;
    return (
        <div className='flex items-center justify-center'>
            <div className="card w-11/12 shadow-xl mb-10 bg-slate-100">
                <div className="card-body">
                    <h2 className="card-title"> {question}</h2>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;