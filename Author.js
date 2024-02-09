import React from 'react';

function Author({ name, role }) {
    return (
        <div className="author">
            <p>Written by {name}, {role}</p>
        </div>
    );
}

export default Author;
