import { useEffect, useRef, useState } from 'react'

function Card({ imageSrc, title, about, link1, link2 }) {

    const [isClamped, setIsClamped] = useState(true);
    const paraRef = useRef(null);

    useEffect(() => {
        if (paraRef.current) {
            setIsClamped(paraRef.current.scrollHeight > paraRef.current.clientHeight);
        }
    }, [paraRef]);

    return (
        <div className="w-[350px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href={link1} target="_blank" rel="noopener noreferrer">
                <img className="rounded-t-lg w-full h-48 object-cover" src={imageSrc} alt={title} />
            </a>
            <div className="p-5">
                <a href={link1} target="_blank" rel="noopener noreferrer">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <div className="relative">
                    <p
                        ref={paraRef}
                        className={`mb-3 font-normal text-gray-700 dark:text-gray-400 ${isClamped ? 'line-clamp-3' : ''}`}
                    >
                        {about}
                    </p>
                    {isClamped && (
                        <button
                            type="button"
                            className="absolute right-0 bottom-0 bg-white dark:bg-gray-800 px-1 text-blue-600 hover:underline"
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                setIsClamped(false);
                                setTimeout(() => {
                                    if (paraRef.current) {
                                        paraRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }, 0);
                            }}
                        >
                            ...more
                        </button>
                    )}
                </div>
                <div className='flex space-x-3'>
                    <a
                        href={link1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Live Demo
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                    <a
                        href={link2}
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-700 border border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:text-blue-500 dark:border-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Card
