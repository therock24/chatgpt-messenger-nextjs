import Sidebar from '@/components/Sidebar'
import '../styles/globals.css'
import { SessionProvider } from '@/components/SessionProvider'
import { getServerSession } from 'next-auth'
import Login from '@/components/Login'
import { authOptions } from '@/lib/auth'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
              <Login/>
          ) : (
            <div className="flex">
              { /* Sidebar */}
              <div className='bg-[#202123] max-w-xs h-screen
              overflow-y-auto md:min-w-[20rem]'>
                <Sidebar />
              </div>
              

              {/* ClientProvider - Notifications */}
            
              <div className='bg-[#343541] flex-1'>
              {children}
              </div>
            </div>
          )
          }
        </SessionProvider>
      </body>
    </html>
  )
}
