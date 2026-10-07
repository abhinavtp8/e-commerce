import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, toggleComplete, editTask, setFilter } from '../features/Task/TaskSlice';

const Task = () => {
  const { tasksList, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // Form input states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  // Edit mode states
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editId) {
      dispatch(editTask({ id: editId, title, description }));
      setEditId(null);
    } else {
      dispatch(addTask({
        id: Date.now(),title: title,description: description,completed: false
      }));
    }
    setTitle('');
    setDescription('');
  };

  const handleEdit = (task) => {
    setEditId(task.id);
    setTitle(task.title);
    setDescription(task.description);
  };

  const filteredTasks = tasksList.filter(task => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Active') return !task.completed;
    return true; 
  });

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Management</h1>

      {/* Task Form */}
      <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-2 p-4 bg-gray-50 rounded-xl border">
        <h3 className="font-semibold text-sm">{editId ? "Edit Task" : "Add New Task"}</h3>
        <input
          type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="p-2 border rounded text-sm" required/>
        <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="p-2 border rounded text-sm" />
        <div className="flex gap-2">
          <button type="submit" className="flex-1 bg-blue-600 text-white py-2 rounded font-bold text-sm cursor-pointer">
            {editId ? "Update Task" : "Add Task"}
          </button>
          {editId && (
            <button 
              type="button"  onClick={() => { setEditId(null); setTitle(''); setDescription(''); }} 
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded text-sm cursor-pointer" >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-4">
        {['All', 'Active', 'Completed'].map((type) => (
          <button
            key={type}  onClick={() => dispatch(setFilter(type))}
            className={`px-3 py-1 text-xs font-bold rounded border cursor-pointer ${
              filter === type ? 'bg-black text-white' : 'bg-white text-gray-700'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Tasks List */}
      <div className="flex flex-col gap-2">
        {filteredTasks.map(task => (
          <div key={task.id} className="p-3 bg-white border rounded-xl flex justify-between items-center shadow-sm">
            <div>
              <h3 className={`font-bold ${task.completed ? 'line-through text-gray-400' : ''}`}>{task.title}</h3>
              <p className="text-sm text-gray-500">{task.description}</p>
              <button onClick={() => dispatch(toggleComplete(task.id))}
                className="text-xs font-bold text-blue-500 mt-1 cursor-pointer"
              >
                {task.completed ? "Mark Pending" : "Mark Completed"}
              </button>
            </div>
            <div className="flex gap-2 text-xs font-bold">
              <button onClick={() => handleEdit(task)} className="text-gray-600 hover:underline cursor-pointer">Edit</button>
              <button onClick={() => dispatch(deleteTask(task.id))} className="text-red-500 hover:underline cursor-pointer">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;





















// import React, { useState, Suspense } from 'react';

// // 1. Importing the Profile component lazily instead of statically
// const Profile = React.lazy(() => import('./components/Profile'));

// function App() {
//   const [showProfile, setShowProfile] = useState(false);

//   return (
//     <div className="p-8 max-w-md mx-auto text-center">
//       <h1 className="text-2xl font-bold mb-4">React Lazy & Suspense Demo</h1>
      
//       <button 
//         onClick={() => setShowProfile(true)}
//         className="bg-blue-500 text-white px-4 py-2 rounded font-bold cursor-pointer hover:bg-blue-600"
//       >
//         View Profile
//       </button>

//       <div className="mt-6 border p-4 rounded-xl min-h-37">
//         {showProfile ? (
//           // 2. Lazy components MUST always be wrapped inside a Suspense component!
//           <Suspense fallback={<div className="font-bold text-gray-500">Loading Profile... Please wait.</div>}>
//             <Profile />
//           </Suspense>
//         ) : (
//           <p className="text-gray-400">Click the button to load Profile dynamically.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;