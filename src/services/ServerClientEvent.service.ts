import { SSE_URL } from "../config/api.config";
import { Pets } from "../types";

class SseService {
  eventSource: EventSource | null = null;

  startSse( onMessage: (data: Pets[]) => void, onError: () => void) {
    this.eventSource = new EventSource(SSE_URL);

    this.eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onMessage(data);
    };

    this.eventSource.onerror = () => {
      console.error("EventSource failed.");
      onError();
      this.eventSource?.close();
    };
  }

  stopSse() {
    if (this.eventSource) {
      this.eventSource.close();
    }
  }
}
const sseService = new SseService();
export default sseService;