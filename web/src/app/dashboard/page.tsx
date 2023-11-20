import { getCurrentUser, getToken } from "@/lib/session"
export default async function Page() {
  const user = await getCurrentUser();
  const token = await getToken();
  return <>
    <h1>Dashboard</h1>
    <h1>{user?.email}</h1>
    <h1>{user?.name}</h1>
    <h1>{token}</h1>
  </>
}
