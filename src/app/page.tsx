import { NewDns, TableDns } from './modules'

export default function Home() {
  // buscar lista pelo lado do servidor e passar para o componente table
  const listDns = [
    {
      id: '1',
      hostname: 'webmail.test',
      willDirectTo: 'mail1.cloundserver8.com',
      ttlSeconds: '3600',
    },
    {
      id: '2',
      hostname: 'nome host',
      willDirectTo: 'will direct to',
      ttlSeconds: '3600',
    },
    {
      id: '3',
      hostname: 'nome host',
      willDirectTo: 'will direct to',
      ttlSeconds: '3600',
    },
    {
      id: '4',
      hostname: 'webmail.test',
      willDirectTo: 'mail1.cloundserver8.com',
      ttlSeconds: '3600',
    },
  ]

  return (
    <main className="max-w-screen-lg mx-auto">
      <p className="mb-6 text-zinc-600">
        USe @ to create the record at the root of the domain or enter a hostname
        to create it elsewhere. A records are fot IPv4 addresses only and tell a
        request where your domain shold direct to.
      </p>
      <NewDns />
      <TableDns listDns={listDns} />
    </main>
  )
}
