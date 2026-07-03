export function trackEvent(
  event: string,
  payload?: unknown,
) {
  console.log(
    `[Analytics] ${event}`,
    payload,
  );
}