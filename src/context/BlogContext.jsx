
import React, { createContext, useState, useEffect, useContext } from 'react';


const initialBlogs = [
    {
        id: '1',
        title: 'Understanding React Hooks',
        author: 'Alice',
        description: 'A deep dive into useState and useEffect.',
        content: 'React Hooks are functions that let you use state and other React features without writing a class...',
        createdAt: '2024-07-01T12:00:00Z',
        editedAt: '2024-07-02T08:30:00Z',
        imageUrl: 'hero.jpg',
    },
    {
        id: '2',
        title: 'Learning Conditional Rendering',
        author: 'Bob',
        description: 'Display content dynamically using ternary and &&.',
        content: 'Conditional rendering in React allows you to show elements based on certain conditions...',
        createdAt: '2024-07-02T15:45:00Z',
        imageUrl: 'hero.jpg',
    },
];

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    
    const [blogs, setBlogs] = useState(() => {
        const savedBlogs = localStorage.getItem('blogs');
        return savedBlogs ? JSON.parse(savedBlogs) : initialBlogs;
    });

    
    useEffect(() => {
        localStorage.setItem('blogs', JSON.stringify(blogs));
    }, [blogs]);

    const addBlog = (newBlogData) => {
        const newBlog = {
            id: String(Date.now()), 
            createdAt: new Date().toISOString(),
            imageUrl: 'hero.jpg',
            ...newBlogData,
        };
        setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
    };

   

    return (
        <BlogContext.Provider value={{ blogs, addBlog }}>
            {children}
        </BlogContext.Provider>
    );
};


export const useBlogs = () => {
    return useContext(BlogContext);
};