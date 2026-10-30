import { demoRegistrationKey } from "@/types";

const announcementKey = "je-announcement-dismissed";
const announcementListeners = new Set<() => void>();

export function subscribeAnnouncement(listener: () => void) {
  announcementListeners.add(listener);
  return () => announcementListeners.delete(listener);
}

export function readAnnouncementDismissed() {
  return window.sessionStorage.getItem(announcementKey) === "1";
}

export function dismissAnnouncement() {
  window.sessionStorage.setItem(announcementKey, "1");
  announcementListeners.forEach((listener) => listener());
}

const registrationListeners = new Set<() => void>();

export function subscribeRegistration(listener: () => void) {
  registrationListeners.add(listener);
  return () => registrationListeners.delete(listener);
}

export function readRegistrationRaw() {
  return window.sessionStorage.getItem(demoRegistrationKey);
}

export function clearRegistration() {
  window.sessionStorage.removeItem(demoRegistrationKey);
  registrationListeners.forEach((listener) => listener());
}
