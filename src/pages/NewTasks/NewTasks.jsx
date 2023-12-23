import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const NewTasks = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to
        const tasksItem = {
            title: data.title,
            description: data.description,
            deadlines: parseFloat(data.deadlines),
            priority: data.priority,
        }
        // 
        const taskRes = await axiosPublic.post('/tasks', tasksItem);
        console.log(taskRes.data)
        if (taskRes.data.insertedId) {
            // show success popup
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the menu.`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div
            style={{
                backgroundSize: "cover",
                backgroundImage: 'url(https://i.ibb.co/cbcMVjN/line-background-abstract-background-beautiful-background-bg-pattern-background-design-slide-bg-63486.jpg)'
            }}>

            <div>
                <h2 className="text-3xl pt-4 text-black mt-4 mb-8 text-center font-bold">
                    Create new task
                </h2>
            </div>
            <div className="border pb-10 rounded-md p-8 max-w-screen-md mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-black">Title</span>
                        </label>
                        <input {...register('title', { required: 'true' })}
                            className="h-11 p-2 rounded-lg"
                            placeholder="title"></input>
                    </div>
                    <div className="flex gap-6">
                        {/* description */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-semibold text-xl text-black">description*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Description"
                                {...register('description', { required: 'true' })}
                                className="input input-bordered w-full" />
                        </div>

                        {/* deadlines */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text font-semibold text-xl text-black">deadlines*</span>
                            </label>
                            <input
                                type="date"
                                placeholder="deadlines"
                                {...register('deadlines', { required: 'true' })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* Priority */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-black">Priority</span>
                        </label>
                        <textarea {...register('priority', { required: 'true' })} className="h-11 p-2 rounded-lg"
                            placeholder="Priority"></textarea>
                    </div>
                    {/* <div className="form-control w-full my-6">
                        <input {...register('image', { required: 'true' })} type="file" className="file-input w-full max-w-xs" />
                    </div> */}
                    <button className="btn mt-8">
                        Add New Task
                    </button>
                </form>
            </div>
        </div >
    );
};

export default NewTasks;