import React, { useState } from 'react';

const sidebarContent = (
    <div>
        <link rel="stylesheet" href="/" />
        <link rel="stylesheet" href="" />
        <link rel="stylesheet" href="" />
    </div>
);

const App = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="app">
            <button onClick={toggleSidebar}>x</button>
            {isSidebarOpen && (
                <div className="sidebar">
                    {sidebarContent}
                </div>
            )}
            {/* Contenuto principale */}
        </div>
    );
};

export default App;
