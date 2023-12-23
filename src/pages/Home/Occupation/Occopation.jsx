
const Occopation = () => {

    const occupation = ["student", "developer", "teacher", "manager"]
    return (
        <div className="grid ml-4 mr-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 my-16">
            {occupation.map(value => (
                <div key={value} className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{value}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Occopation;