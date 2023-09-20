import type { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Blogs - Thunder',
}

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers()
  const users = await usersData

  const Content = (
    <section>
      <div className='container mx-auto'>
        <div className='rounded-lg overflow-hidden'>
          <table className='table'>
            <thead>
              <tr className='bg-blue-600 px-4 py-2 rounded-lg text-center text-white text-2xl'>
                <th>Name</th>
                <th>Email</th>
                <th>Zipcode</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => {
                return (
                  <tr key={user.id} className='bg-orange-600 hover:bg-blue-600 px-4 py-2 rounded-lg text-center'>
                    <td>
                      <Link href={`/blogs/${user.id}`}>{user.name}</Link>
                    </td>
                    <td>
                      <Link href={`/blogs/${user.id}`}>{user.email}</Link>
                    </td>
                    <td>
                      <Link href={`/blogs/${user.id}`}>{user.address.zipcode}</Link>
                    </td>
                    <td>
                      <Link href={`/blogs/${user.id}`}>{user.phone}</Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )

  return Content
}