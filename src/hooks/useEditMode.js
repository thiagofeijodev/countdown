import { useState, useCallback } from 'react';

export const useEditMode = (updateDate) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleCancelEdit = useCallback(() => {
    setIsEditing(false);
  }, []);

  const handleUpdateDate = useCallback(
    (newDate) => {
      updateDate(newDate);
      setIsEditing(false);
    },
    [updateDate],
  );

  return {
    isEditing,
    handleEdit,
    handleCancelEdit,
    handleUpdateDate,
  };
};
