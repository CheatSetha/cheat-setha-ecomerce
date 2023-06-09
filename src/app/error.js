'use client'; // Error components must be Client Components
 
import { useEffect } from 'react';
 const session = null;
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div>
      <h2>Something went wrong!</h2>
      <button className='btn btn-outline'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      </div>
    </div>
  );
}