export enum EVENT_TYPES {
  RATE_US_REMIND_LATER = 'rate_us_remind_later',
  RATE_US_SKIP_MODAL = 'rate_us_skip_modal',
}

class LogEvent {
  async logEvent(eventName: EVENT_TYPES, params = {}) {
    if (!eventName) {
      return;
    }
    return;
    // params.device_id = DeviceInfo.getUniqueId();
    // params.date = new Date();
    // params.userId = getUserId();// some method to get from store/whathever userId or pass it through params
    /** We can use either firebase or create own realization of events*/
    // return await analytics().logEvent(event_name, params);
    // return await apiCall.eventLog(event_name, params);
  }
}

export default new LogEvent();
