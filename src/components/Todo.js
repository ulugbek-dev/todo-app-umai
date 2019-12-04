import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../elements/Card'

export default function Todo({ name, dueDate, deleteHandle }) {
    return (
        <Card>
            <div>
                <h2>{name}</h2>
                <p>Due date: <span>{dueDate}</span></p>
            </div>

            <div>
                <Link to="/">
                    <svg 
                        onClick={deleteHandle}
                        className="edit" 
                        focusable="false" 
                        role="img" 
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                        </path>
                    </svg>
                </Link>
                <Link to="/">
                    <svg 
                        className="trash" 
                        focusable="false" 
                        viewBox="0 0 448 512"
                    >
                        <path
                            d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z">
                        </path>
                    </svg>
                </Link>
            </div>
        </Card>
    )
}