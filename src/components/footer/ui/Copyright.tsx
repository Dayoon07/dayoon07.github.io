import React from "react";

export const Copyright: React.FC = () => {
    return (
        <p className="mt-2 text-gray-400" style={{ fontSize: "12px" }}>
            &copy; 2025 dayoon07. All rights reserved. Inspired by&nbsp;
            <a href="https://github.com/academicpages/academicpages.github.io" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:underline"
            >
                AcademicPages
            </a>, reimplemented <br /> with React for personal use.
        </p>
    );
}