

const Banner = () => {
    return (
        <div className="hero h-[300px] md:h-[620px]"
            style={{ backgroundImage: 'url(https://i.ibb.co/1qNgBKv/task-management-software.png)' }}>
            <div className=""></div>
            <div className="text-left">
                <div className="max-w-md text-gray-700">
                    <h1 className="mb-5 text-5xl font-bold">Task Management Platform </h1>
                    <p className="mb-5 font-semibold">A task management tool is used by an individual, team, or organization to complete projects efficiently by organizing and prioritizing related tasks.
                        Task management tools come in many forms, like basic spreadsheets or online project management applications.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;