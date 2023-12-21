

const Organized = () => {
    return (
        <div className="grid lg:grid-cols-2 md:gap-16 mt-8 ml-2 mr-2 border rounded-md p-12"
            style={{ backgroundImage: 'url(https://i.ibb.co/Ln9hZWG/psychedelic-paper-shapes-with-copy-space-23-2149378246.jpg)' }}>
            <div className="lg:ml-24">
                <h2 className="border bg-red-200 glass w-72 p-4 text-center rounded-md"> Today Tommorow Completed</h2>
                <h2 className="border mt-2 bg-yellow-200 glass w-72 p-4 text-center rounded-md">
                    <span>
                        Daily Standup Meeting <br />
                        08:30 am - Website Design</span></h2>
                <h2 className="border mt-2 bg-red-200 glass w-72 p-4 text-center rounded-md">
                    <span>
                        User interviews <br />
                        09:00 am - Mobile Design</span></h2>
                <h2 className="border mt-2 bg-red-200 glass w-72 p-4 text-center rounded-md">
                    <span>
                        Backlog Grooming
                    </span></h2>
            </div>
            <div className="text-white">
                <h2 className="lg:ml-72 text-3xl font-bold md:ml-96">Stay Organized <br />
                    everything in life</h2>
                <p className="lg:ml-80 md:ml-96">
                    1. Develop habits and build a routine.... <br />
                    2. Plan ahead. ... <br />
                    3. Embrace your natural inclinations.... <br />
                </p>
            </div>
        </div>
    );
};

export default Organized;