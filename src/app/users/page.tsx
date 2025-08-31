import Link from 'next/link'

export default function UsersPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground font-sans p-4">
      <h1 className="text-4xl font-bold mb-6">Usuarios AiniPay</h1>
      <p className="text-lg mb-6 text-center max-w-md">
        Aquí podrás ver la información de los usuarios registrados.
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
          Volver a Inicio
        </button>
      </Link>
    </main>
  )
}
