import { useEffect } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  // We are adding a new functionality that does an auto approval after 3 seconds
  // return expression is the cleanup function of the useEffect. Runs before the component was dismounted.
  // Also, cleanup runs after a dependency has changed. Here might be problem related to this.
  // We must put the used props and states within useEffect body as depdencencies.
  // But on every render, we get a brand new onConfirm method and that might cause an infinite loop.
  // Next time we'll get to see how to prevent this with useCallback hook.
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
