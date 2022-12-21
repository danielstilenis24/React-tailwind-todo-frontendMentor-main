const TodoFilter = () => { 
    return (
        <section className="container mx-auto my-8">
        <div className="mt-8 flex justify-center gap-4 rounded-md bg-white p-4">
            <button className="text-blue-600 ">All</button>
            <button className="hover:text-blue-600">Active</button>
            <button className="hover:text-blue-600">
                Complete
            </button>
        </div>
    </section>
    )
 }

 export default TodoFilter;