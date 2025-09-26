import { useBoard } from "../BoardContext";
import { useState } from "react";

export default function TrashBin(){
    const { dispatch } = useBoard();
    const [isDragOver, setIsDragOver] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        
        const task = e.dataTransfer.getData("task");
        const sourceCol = e.dataTransfer.getData("sourceCol");
        
        if(task && sourceCol) {
            dispatch({ type: "DELETE_TASK", payload: { sourceCol, task } });
            setDeleteSuccess(true);
            setTimeout(() => setDeleteSuccess(false), 1000);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    return(
        <div className="trash-bin-column">
            <div className="trash-bin-header">
                Delete Task
            </div>
            <div 
                className={`trash-bin-content ${isDragOver ? 'drag-over' : ''} ${deleteSuccess ? 'delete-success' : ''}`}
                onDrop={handleDrop} 
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            >
                <p>
                    <span>Drop here to delete</span>
                </p>
            </div>
        </div>
    )
}