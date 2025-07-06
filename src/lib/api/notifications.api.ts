export async function fetchUserNotification({ pageParam }: { pageParam: number }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/user-notifications?page=${pageParam}`,
  );

  const payload = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }

  return payload;
}
