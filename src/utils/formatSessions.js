import getDuration from "./getDuration";

export function formatSession({ session, formatStartedAt = true }) {
  const newSession = { ...session };
  const startedAt = new Date(session?.startedAt);

  if (formatStartedAt) {
    const HH = String(startedAt?.getHours()).padStart(2, "0");
    const MM = String(startedAt?.getMinutes()).padStart(2, "0");
    newSession.formatedStartedAt = `${HH}:${MM}`;
  }
  newSession.duration = getDuration(startedAt);

  return newSession;
}

export function formatSessions({ sessions, formatStartedAt = true }) {
  return sessions?.map((session) =>
    formatSession({ session, formatStartedAt })
  );
}
