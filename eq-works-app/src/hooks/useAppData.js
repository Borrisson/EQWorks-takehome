import { useEffect, useReducer } from "react";
import dataReducer, { SET_APPLICATION_DATA } from "../reducer/data_reducer";
import axios from "axios";

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    hourlyEvents: [],
    dailyEvents: [],
    hourlyStats: [],
    dailyStats: [],
    poi: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get("/events/hourly", { withCredentials: true }),
      axios.get("/events/daily", {
        withCredentials: true,
      }),
      axios.get("/stats/daily", {
        withCredentials: true,
      }),
      axios.get("/stats/daily", {
        withCredentials: true,
      }),
      axios.get("/poi", {
        withCredentials: true,
      }),
    ])
      .then(([EvHourRes, EvDayRes, StatHourRes, StatDayRes, poiRes]) => {
        const hourlyEvents = EvHourRes.data;
        const dailyEvents = EvDayRes.data;
        const hourlyStats = StatHourRes.data;
        const dailyStats = StatDayRes.data;
        const poi = poiRes.data;

        handleAppData({
          hourlyEvents,
          dailyEvents,
          hourlyStats,
          dailyStats,
          poi,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  function handleAppData({
    hourlyEvents,
    dailyEvents,
    hourlyStats,
    dailyStats,
    poi,
  }) {
    dispatch({
      type: SET_APPLICATION_DATA,
      hourlyEvents: [...hourlyEvents],
      dailyEvents: [...dailyEvents],
      hourlyStats: [...hourlyStats],
      dailyStats: [...dailyStats],
      poi: [...poi],
    });
  }

  return {
    state,
    dispatch,
    handleAppData,
  };
};

export default useApplicationData;
