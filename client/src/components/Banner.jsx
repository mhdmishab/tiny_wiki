import { Link } from "react-router-dom"


const Banner = () => {
    return (
        <div>
            <div>
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1 md:w-1/2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/Wikipedia-logo-transparent.png" alt="tinywiki" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 p-10 flex flex-col justify-center items-center md:items-start md:w-1/2">
                        <div className="mb-8 text-center md:text-left">
                            <h1 className="text-4xl font-semibold font-serif mb-4">
                                Tiny Wiki: Effortlessly Perform wiki Search.
                            </h1>
                            <p className="text-gray-600">
                                Sometimes it is difficult to find information for something you want quickly. If you are someone who
                                likes Wikipedia but dislikes manually searching for information you need then TinyWiki is for you!
                                TinyWiki allows you to search for a topic you need some information about and searches for information
                                on that topic in Wikipedia for you.
                            </p>
                        </div>
                        <div className="mb-4 md:mb-0 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
                            <Link to="/search" >  <button
                            type="button"
                            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition w-full md:w-auto"
                        >
                            Explore
                        </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner