import { connection } from "next/server";
import { EventExplorer } from "@/components/events/EventExplorer";
import { events } from "@/lib/events";

export async function EventExplorerGate({ mode }: { mode: "home" | "directory" }) {
  await connection();
  // Visitor clock decides upcoming versus past. connection() opts this into request time.
  // eslint-disable-next-line react-hooks/purity
  const now = Date.now();
  return <EventExplorer events={events} now={now} mode={mode} />;
}
