import CrossIcon from "./components/Icon/CrossIcon";
import Moon from "./components/Icon/Moon";

const App = () => {
    return (
        <div
            className="min-h-screen
        bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat"
        >
            <header className="container px-4 pt-8 mx-auto">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold uppercase tracking-[0.3rem] text-white">
                        Todo
                    </h1>
                    <button><Moon/></button>
                </div>

                <form className="flex items-center gap-4 px-4 py-3 mt-8 overflow-hidden bg-white rounded-lg">
                    <span className="inline-block w-5 h-5 border-2 rounded-full"></span>
                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        className="w-full text-gray-400 outline-none"
                    />
                </form>
            </header>
            <main className="container px-4 mx-auto mt-8 ">
                <div className="bg-white rounded-md ">
                    <article className="flex gap-4 px-4 py-4 border-b border-b-gray-400">
                        <button className="flex-none inline-block w-5 h-5 border-2 rounded-full"></button>
                        <p className="text-gray-600 grow">Complete online javascript curse</p>
                        <button>
                            <CrossIcon/>
                        </button>
                    </article>

                    <article className="flex gap-4 px-4 py-4 border-b border-b-gray-400">
                        <button className="flex-none inline-block w-5 h-5 border-2 rounded-full"></button>
                        <p className="text-gray-600 grow">Complete online javascript curse</p>
                        <button>
                            <CrossIcon/>
                        </button>
                    </article>

                    <article className="flex gap-4 px-4 py-4 border-b border-b-gray-400">
                        <button className="flex-none inline-block w-5 h-5 border-2 rounded-full"></button>
                        <p className="text-gray-600 grow">Complete online javascript curse</p>
                        <button>
                            <CrossIcon/>
                        </button>
                    </article>
                    
                    <section className="flex justify-between px-4 py-4">
                        <span className="text-gray-500">5 items left</span>
                        <button className="text-gray-500">Clear completed</button>
                    </section>
                   
                </div>
            </main>

            
            <section className="container px-4 mx-auto" >
                <div className="flex justify-center gap-4 p-4 mt-8 bg-white rounded-md">
                <button className="text-blue-600 ">All</button>
                <button className="hover:text-blue-600">Active</button>
                <button className="hover:text-blue-600">Complete</button>   
                </div>
                
            </section>

            <p className="mt-8 text-center">Drag and frop to reorder list</p>
        </div>
    );
};
export default App;
