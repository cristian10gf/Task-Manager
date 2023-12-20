import {useForm} from 'react-hook-form';
import {createTask, deleteTask, getTask, updateTask} from '../api/task.api';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {toast} from 'react-hot-toast'

export function TaskFormPage() {

  const {register, handleSubmit, formState: {errors}, setValue} = useForm();
  const params = useParams();
  const navigate = useNavigate();
  
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success('Task updated', 
        {position: 'bottom-right', 
        style: {background: "#101010", color: "#fff"}
        }
      );
    } else {
      await createTask(data);
      toast.success('Task created', 
        {position: 'bottom-right', 
        style: {background: "#101010", color: "#fff"}
        }
      );
    }
    navigate('/task');
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const res = await getTask(params.id);
        setValue('title', res.data.title);
        setValue('description', res.data.description);
      }
    }
    loadTask();
  }, []);


  return (
    <div className='max-w-xl mx-auto'>
      <form onSubmit={onSubmit}>
        <input className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'  type="text" placeholder="Title" {...register("title", {required: true})}/> {errors.title && <span> title is required</span>}
        <textarea className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' rows="3" placeholder="Description" {...register("description", {required: true})}/> {errors.description && <span> description is required</span>}
        <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'type="submit">save</button>
        {params.id && <button className='bg-red-500 p-3 rounded-lg block w-48 mt-3' onClick={async ()=> {
          const acepted = window.confirm("Are you sure?");
          if(acepted){
            await deleteTask(params.id);
            navigate('/task');
          }
        }}>Delete</button>}
      </form>
    </div>
  )
};