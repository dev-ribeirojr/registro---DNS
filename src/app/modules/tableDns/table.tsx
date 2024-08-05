import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { DnsProps, Row } from './modules/row/row'

interface TableDnsProps {
  listDns: DnsProps[]
}

export function TableDns({ listDns }: TableDnsProps) {
  return (
    <div>
      <h2 className="my-4 font-semibold text-2xl text-zinc-700">DNS records</h2>
      <Table className="max-w-screen-lg mx-auto border-2">
        <TableHeader className="bg-zinc-50">
          <TableRow>
            <TableHead>Hostname</TableHead>
            <TableHead>Will Direct To</TableHead>
            <TableHead>TTL (seconds)</TableHead>
            <TableHead className="text-right w-[100px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listDns.map((dns) => (
            <Row dns={dns} key={dns.id} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
