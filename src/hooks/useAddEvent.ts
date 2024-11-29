import { useAppDispatch } from '../store';
import { eventsActions } from '../store/events/slice';
import { crudAPI } from '../services/crud-api';
import { Event } from '../store/events/types';

const useAddEvent = () => {
  const dispatch = useAppDispatch();

  const addEvent = async (newEvent: Event) => {
    try {
      await crudAPI.putEvent(newEvent);
      dispatch(eventsActions.addEvents([newEvent]));
    } catch (error) {
      console.error('Failed to add event:', error);
    }
  };

  return { addEvent };
};

export default useAddEvent;
