import React from 'react';
import Navbar from './Navbar';
import MainArticle from './MainArticle';
import Article from './Article';
import Author from './Author';

function App() {
    return (
        <div className="app">
            <Navbar />
            <MainArticle />
            <Article title="Hybrid vs. Native" content="There is no denying it; hybrid mobile development is booming..." author="John Doe" />
            <Article title="From monolithic to headless" content="How and why you should adapt your WordPress stack..." author="Jane Smith" />
            <Author name="Alice Johnson" role="Senior Writer" />
        </div>
    );
}

export default App;
