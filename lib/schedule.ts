import { events } from "@/lib/events";
import { speakers } from "@/lib/speakers";
import type { ScheduleSession, Session } from "@/types";

export const sessions: Session[] = [
  session("ff-reg", "future-forward-technology-summit", "2026-11-18T08:30:00.000Z", "2026-11-18T09:15:00.000Z", "Registration and welcome", "Doors, badges, and a hosted hello. Sample arrival block.", [], "Arrival", "Foyer", "Registration"),
  session("ff-open", "future-forward-technology-summit", "2026-11-18T09:30:00.000Z", "2026-11-18T10:15:00.000Z", "Opening keynote: Build What Comes Next", "A sample keynote that sets the theme for the two days.", ["amara"], "Vision", "Main Hall", "Keynote"),
  session("ff-product", "future-forward-technology-summit", "2026-11-18T10:30:00.000Z", "2026-11-18T11:15:00.000Z", "Product stories that travel", "How a product narrative can survive the trip from slide to stage.", ["julian"], "Product", "Studio A", "Talk"),
  session("ff-break-1", "future-forward-technology-summit", "2026-11-18T11:15:00.000Z", "2026-11-18T11:30:00.000Z", "Morning pause", "A short break between rooms.", [], "Arrival", "Atrium", "Break"),
  session("ff-lead", "future-forward-technology-summit", "2026-11-18T11:30:00.000Z", "2026-11-18T12:15:00.000Z", "Leadership in the room", "A sample talk about hosting people, not only presenting to them.", ["marcus"], "Leadership", "Forum Room", "Talk"),
  session("ff-lunch", "future-forward-technology-summit", "2026-11-18T12:15:00.000Z", "2026-11-18T13:15:00.000Z", "Lunch", "A scheduled pause. Catering is not confirmed.", [], "Arrival", "Dining Hall", "Break"),
  session("ff-workshop", "future-forward-technology-summit", "2026-11-18T13:30:00.000Z", "2026-11-18T15:00:00.000Z", "Designing the guest journey", "A hands-on sample workshop on arrival, seating, and the last impression.", ["noah"], "Experience", "Workshop Loft", "Workshop"),
  session("ff-network", "future-forward-technology-summit", "2026-11-18T15:15:00.000Z", "2026-11-18T16:15:00.000Z", "Connections hour", "Hosted introductions, then open conversation.", ["julian"], "Community", "Atrium", "Networking"),
  session("ff-ai", "future-forward-technology-summit", "2026-11-19T09:30:00.000Z", "2026-11-19T10:20:00.000Z", "Practical intelligence", "A sample keynote on using new tools without losing the point of the gathering.", ["priya"], "Technology", "Main Hall", "Keynote"),
  session("ff-brand", "future-forward-technology-summit", "2026-11-19T10:40:00.000Z", "2026-11-19T11:25:00.000Z", "Brand systems for live events", "How a room, a program, and a name can feel like one brand.", ["elena"], "Brand", "Studio A", "Talk"),
  session("ff-close", "future-forward-technology-summit", "2026-11-19T11:40:00.000Z", "2026-11-19T12:30:00.000Z", "Closing conversation", "Two sample speakers look back at the theme and take questions.", ["amara", "julian"], "Vision", "Main Hall", "Panel"),
  session("ff-leave", "future-forward-technology-summit", "2026-11-19T12:30:00.000Z", "2026-11-19T13:00:00.000Z", "Departures", "A calm close and a way out of the building.", [], "Arrival", "Foyer", "Registration"),

  session("cb-open", "creative-business-innovation-conference", "2026-12-09T09:30:00.000Z", "2026-12-09T10:15:00.000Z", "Welcome: ideas worth gathering for", "Opening remarks for the sample creative conference.", ["elena"], "Brand", "North Studio", "Keynote"),
  session("cb-talk", "creative-business-innovation-conference", "2026-12-09T10:30:00.000Z", "2026-12-09T11:20:00.000Z", "From brief to room", "A sample talk on turning a creative brief into a live program.", ["julian"], "Product", "North Studio", "Talk"),
  session("cb-panel", "creative-business-innovation-conference", "2026-12-09T13:00:00.000Z", "2026-12-09T14:00:00.000Z", "What guests remember", "A sample conversation about the details people retell.", ["elena", "julian"], "Brand", "North Studio", "Panel"),
  session("cb-close", "creative-business-innovation-conference", "2026-12-09T15:30:00.000Z", "2026-12-09T16:30:00.000Z", "Hosted networking", "Structured introductions to close the day.", ["julian"], "Community", "Atrium", "Networking"),

  session("le-open", "leadership-excellence-forum", "2027-01-21T09:00:00.000Z", "2027-01-21T09:40:00.000Z", "Forum welcome", "A short welcome that sets a quieter pace.", ["marcus"], "Leadership", "The Forum House", "Registration"),
  session("le-talk", "leadership-excellence-forum", "2027-01-21T10:00:00.000Z", "2027-01-21T11:00:00.000Z", "Clarity under attention", "A sample session on leading when people are watching.", ["amara"], "Vision", "The Forum House", "Talk"),
  session("le-workshop", "leadership-excellence-forum", "2027-01-21T11:30:00.000Z", "2027-01-21T13:00:00.000Z", "The questions you keep", "A facilitated sample workshop in small groups.", ["marcus"], "Leadership", "Library Room", "Workshop"),
  session("le-close", "leadership-excellence-forum", "2027-01-21T14:15:00.000Z", "2027-01-21T15:30:00.000Z", "Closing circle", "A sample close with time for one honest takeaway.", ["marcus", "amara"], "Leadership", "The Forum House", "Panel"),

  session("dm-open", "digital-marketing-masterclass", "2027-02-05T10:00:00.000Z", "2027-02-05T11:00:00.000Z", "Attention with a point", "The sample masterclass opens on message and restraint.", ["elena"], "Brand", "Atelier Room", "Keynote"),
  session("dm-work", "digital-marketing-masterclass", "2027-02-05T11:15:00.000Z", "2027-02-05T13:00:00.000Z", "Proof, not noise", "A working block on evidence, examples, and what to leave out.", ["elena"], "Brand", "Atelier Room", "Workshop"),
  session("dm-close", "digital-marketing-masterclass", "2027-02-05T14:00:00.000Z", "2027-02-05T16:00:00.000Z", "Campaign meets the room", "How a digital story can continue on site without shouting.", ["elena"], "Brand", "Atelier Room", "Talk"),

  session("en-welcome", "entrepreneurs-networking-experience", "2027-02-26T17:30:00.000Z", "2027-02-26T18:00:00.000Z", "Evening welcome", "A short host welcome before introductions.", ["noah"], "Community", "Harbor Rooms", "Registration"),
  session("en-intro", "entrepreneurs-networking-experience", "2027-02-26T18:00:00.000Z", "2027-02-26T18:45:00.000Z", "Hosted introductions", "Small groups, a prompt, and enough time to actually answer.", ["julian"], "Product", "Harbor Rooms", "Networking"),
  session("en-open", "entrepreneurs-networking-experience", "2027-02-26T18:45:00.000Z", "2027-02-26T20:30:00.000Z", "Open floor", "Unstructured time after the room already knows how to begin.", ["julian", "noah"], "Community", "Harbor Rooms", "Networking"),

  session("ai-open", "ai-emerging-technologies-conference", "2027-03-17T09:00:00.000Z", "2027-03-17T09:50:00.000Z", "What practical intelligence means", "Opening sample keynote for the technology conference.", ["priya"], "Technology", "Signal Hall", "Keynote"),
  session("ai-talk", "ai-emerging-technologies-conference", "2027-03-17T10:15:00.000Z", "2027-03-17T11:00:00.000Z", "Tools in the room", "A sample talk about adopting tools without handing them the agenda.", ["amara"], "Vision", "Signal Hall", "Talk"),
  session("ai-panel", "ai-emerging-technologies-conference", "2027-03-18T10:00:00.000Z", "2027-03-18T11:00:00.000Z", "Keep the human part", "A sample panel on judgment, hospitality, and automation.", ["priya", "amara"], "Technology", "Signal Hall", "Panel"),
  session("ai-close", "ai-emerging-technologies-conference", "2027-03-18T13:30:00.000Z", "2027-03-18T15:00:00.000Z", "Working session", "A sample workshop to close the conference.", ["priya"], "Technology", "Studio B", "Workshop"),

  session("pd-open", "program-design-workshop", "2026-03-12T09:30:00.000Z", "2026-03-12T10:15:00.000Z", "What an agenda is for", "A sample opening on rhythm, rest, and attention.", ["noah"], "Experience", "Workshop Loft", "Talk"),
  session("pd-work", "program-design-workshop", "2026-03-12T10:30:00.000Z", "2026-03-12T12:30:00.000Z", "Build a run of show", "Guests draft a sample day from welcome to close.", ["noah"], "Experience", "Workshop Loft", "Workshop"),
  session("pd-close", "program-design-workshop", "2026-03-12T13:30:00.000Z", "2026-03-12T15:30:00.000Z", "Read it aloud", "The group pressure-tests the draft agenda.", ["noah"], "Experience", "Workshop Loft", "Workshop"),

  session("ap-open", "annual-partners-gathering", "2026-06-04T10:00:00.000Z", "2026-06-04T10:40:00.000Z", "Welcome to the archive sample", "An opening that marks this as demonstration archive content.", ["marcus"], "Leadership", "Garden Court", "Registration"),
  session("ap-talk", "annual-partners-gathering", "2026-06-04T11:00:00.000Z", "2026-06-04T12:00:00.000Z", "Shared work, clearly told", "A sample talk. No partnership is claimed.", ["elena"], "Brand", "Garden Court", "Talk"),
  session("ap-close", "annual-partners-gathering", "2026-06-04T14:00:00.000Z", "2026-06-04T16:00:00.000Z", "Table conversations", "Hosted tables to show a finished forum format.", ["marcus", "elena"], "Community", "Garden Court", "Networking"),
];

function session(
  id: string,
  eventSlug: string,
  startsAt: string,
  endsAt: string,
  title: string,
  description: string,
  speakerIds: string[],
  track: string,
  room: string,
  type: Session["type"],
): Session {
  return {
    id,
    eventSlug,
    startsAt,
    endsAt,
    title,
    description,
    speakerIds,
    track,
    room,
    type,
    sample: true,
  };
}

const speakerNames = new Map(speakers.map((speaker) => [speaker.id, speaker.name]));
const eventTitles = new Map(events.map((event) => [event.slug, event.title]));

export function getSchedule(): ScheduleSession[] {
  return sessions
    .map((item) => ({
      ...item,
      speakerNames: item.speakerIds.map((id) => speakerNames.get(id) ?? "Speaker to be confirmed"),
      eventTitle: eventTitles.get(item.eventSlug) ?? "Sample event",
    }))
    .sort((a, b) => a.startsAt.localeCompare(b.startsAt));
}

export function getScheduleForEvent(slug: string) {
  return getSchedule().filter((item) => item.eventSlug === slug);
}
