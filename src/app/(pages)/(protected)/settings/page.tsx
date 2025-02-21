import { auth, signOut } from "@/features/auth/auth"

const SettingsPage = async () => {
  const session = await auth();
    
  return (
    <div className="pt-40">
        {JSON.stringify(session)}

        <form action={async () => {
            "use server"

            await signOut();
        }}>
            <button type="submit">Sign out</button>
        </form>
    </div>
  )
}

export default SettingsPage;