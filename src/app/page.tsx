import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground font-sans p-4">
      <h1 className="text-4xl font-bold mb-6">Bienvenido a AiniPay</h1>
      <p className="text-lg mb-6 text-center max-w-md">
        Tu plataforma de pagos rápida, segura y moderna.
      </p>
      <Link href="/users">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Ir a Usuarios
        </button>
      </Link>
    </main>
  )
}
