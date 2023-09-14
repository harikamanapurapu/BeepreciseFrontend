import { useState, useEffect } from 'react';
import axios from 'axios';

function useTaskApi() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get('https://beeprecisetodoapi.onrender.com/tasks') // Update the URL as needed
      .then((response) => setTasks(response.data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  const addTask = (task) => {
    setIsLoading(true);
    axios
      .post('https://beeprecisetodoapi.onrender.com/tasks', task, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setTasks([...tasks, response.data]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error adding task:', error);
        setIsLoading(false);
      });
  };

  const deleteTask = (taskId) => {
    setIsLoading(true);
    axios
      .delete(`https://beeprecisetodoapi.onrender.com/tasks/${taskId}`)
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== taskId));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error deleting task:', error);
        setIsLoading(false);
      });
  };

  return { tasks, isLoading, addTask, deleteTask };
}

export default useTaskApi;


