import {EventEmitter} from 'events';

export type RateUsEventName =
  | 'rateUsModal:open'
  | 'rateUsModal:close'
  | 'createPublicGame'
  | 'joinSomeElseGame'
  | 'inviteOthers'
  | 'acceptInvite';

class RateUsEventBus {
  private eventEmitter = new EventEmitter();

  trigger(eventName: RateUsEventName, data?: any) {
    this.eventEmitter.emit(eventName, data);
  }

  subscribe(
    eventName: RateUsEventName,
    eventListener: {(...args: any[]): void; (...args: any[]): void},
  ) {
    this.eventEmitter
      .setMaxListeners(Number.POSITIVE_INFINITY)
      .on(eventName, eventListener);

    return () => {
      this.eventEmitter.off(eventName, eventListener);
    };
  }

  subscribeMultiEvents(
    eventNames: RateUsEventName[],
    eventListener: {(...args: any[]): void; (...args: any[]): void},
  ) {
    eventNames.forEach(eventName => {
      this.eventEmitter.on(eventName, eventListener);
    });
    return () => {
      eventNames.forEach(eventName => {
        this.eventEmitter.off(eventName, eventListener);
      });
    };
  }
}

export default new RateUsEventBus();
