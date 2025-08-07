import React from 'react'
import Card from '../components/Card' // adjust path if needed

function Projects() {
    return (
        <div className="flex flex-wrap justify-center gap-4 p-8">
            <Card
                imageSrc="https://imgs.search.brave.com/as2yAUlIGmNb_GGkQxAwCe0DiEyfukteCwxleNcT72k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20veHhPVGMv/TUFEaEg2eHhPVGMv/My90bC9jYW52YS1j/aGF0LWljb24tTUFE/aEg2eHhPVGMucG5n"
                title="Web Chat App"
                about="A real-time full-stack chat application built with the MERN stack and Socket.IO for live messaging. Features include JWT-based authentication, one-to-one chats, user status indicators, protected routes, and a responsive UI powered by Tailwind CSS."
                link1="https://chatapp-gnr3.onrender.com/"
                link2="https://github.com/itsAbhayRaj/chatApp"
            />
            <Card
                imageSrc="https://imgs.search.brave.com/ca7a9IXgjvCLKFfoh6vA0XSVVS2yuQhttO8nVam1mag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xODAyNS8xODAy/NTYyMy5wbmc_c2Vt/dD1haXNfd2hpdGVf/bGFiZWw"
                title="Blog App"
                about="A full-featured blog platform with rich-text editing, Appwrite backend, JWT auth, and responsive Tailwind UI."
                link1="https://my-blog-one-lyart.vercel.app/"
                link2="https://github.com/itsAbhayRaj/My-blog"
            />
            {/* Add more <Card /> here */}
        </div>
    )
}

export default Projects
