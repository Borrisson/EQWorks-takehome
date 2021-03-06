export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const dataReducer = (
  state,
  { type, hourlyEvents, dailyEvents, hourlyStats, dailyStats, poi, loading }
) => {
  switch (type) {
    case SET_APPLICATION_DATA:
      return {
        ...state,
        hourlyEvents,
        dailyEvents,
        hourlyStats,
        dailyStats,
        poi,
        loading,
      };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${type}`);
  }
};

export default dataReducer;
