import { useEffect, useReducer } from "react";
import dataReducer, { SET_APPLICATION_DATA } from "../reducer/data_reducer";
import axios from "axios";
import { toTimestamp } from "../helpers/parser";

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    hourlyEvents: [],
    dailyEvents: [],
    hourlyStats: [],
    dailyStats: [],
    poi: [],
    loading: true,
  });

  useEffect(() => {
    Promise.all([
      axios.get("/events/hourly", { withCredentials: true }),
      axios.get("/events/daily", {
        withCredentials: true,
      }),
      axios.get("/stats/hourly", {
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
        const hourlyEvents = EvHourRes.data.map((el) => {
          return {
            ...el,
            date: toTimestamp(el),
          };
        });
        const dailyEvents = EvDayRes.data.map((el) => {
          return {
            ...el,
            date: toTimestamp(el),
          };
        });
        const hourlyStats = StatHourRes.data.map((el) => {
          return {
            ...el,
            date: toTimestamp(el),
          };
        });
        const dailyStats = StatDayRes.data.map((el) => {
          return {
            ...el,
            date: toTimestamp(el),
          };
        });
        const poi = poiRes.data;

        handleAppData({
          hourlyEvents,
          dailyEvents,
          hourlyStats,
          dailyStats,
          poi,
          loading: false,
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
    loading,
  }) {
    dispatch({
      type: SET_APPLICATION_DATA,
      hourlyEvents: [...hourlyEvents],
      dailyEvents: [...dailyEvents],
      hourlyStats: [...hourlyStats],
      dailyStats: [...dailyStats],
      poi: [...poi],
      loading: loading,
    });
  }

  return {
    state,
    dispatch,
    handleAppData,
  };
};

export default useApplicationData;
