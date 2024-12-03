import { useEffect } from 'react';
import { useAppDispatch } from '../store';
import { eventsActions } from '../store/events/slice';
import { crudAPI } from '../services/crud-api';
import { extractJsonValues } from '../services/utils';

const useLoadEvents = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const eventResponse = (await crudAPI.getEvents()).data;
        const events = extractJsonValues(eventResponse);
        dispatch(eventsActions.addEvents(events));
      } catch (error) {
        console.error('Failed to load events:', error);
      }
    };

    loadEvents();
  }, [dispatch]);
};

export default useLoadEvents;
