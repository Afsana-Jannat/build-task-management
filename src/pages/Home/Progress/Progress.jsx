

const Progress = () => {
    return (
        <div className="grid lg:grid-cols-2 border p-20 bg-yellow-100">
            <div>
                <h2 className="text-4xl text-orange-400 font-bold mt-8 mb-8 ml-14">Track your Task <br />
                    progress</h2>
            </div>
            <div className="text-3xl text-red-300 font-bold mt-8 mb-8 ml-14">
                <div className="radial-progress" style={{ "--value": 0 }} role="progressbar">0%</div>
                <div className="radial-progress" style={{ "--value": 20 }} role="progressbar">20%</div>
                <div className="radial-progress" style={{ "--value": 60 }} role="progressbar">60%</div>
                <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">80%</div>

            </div>
        </div>
    );
};

export default Progress;