'use client'

import { useRow } from './hooks/useRow'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { IoIosArrowDown } from 'react-icons/io'
import { TableCell, TableRow } from '@/components/ui/table'

export interface DnsProps {
  readonly id: string
  hostname: string
  willDirectTo: string
  ttlSeconds: string
}

interface RowProps {
  dns: DnsProps
}

export function Row({ dns }: RowProps) {
  const {
    isEditing,
    isLoading,
    handleEdit,
    register,
    handleSubmit,
    editDns,
    deleteDns,
  } = useRow()

  if (isEditing) {
    return (
      <TableRow>
        <TableCell className="font-medium">
          <Input placeholder="Enter @ or hostname" {...register('hostname')} />
        </TableCell>
        <TableCell>
          <Input
            placeholder="Select resource or enter custom IP"
            {...register('willDirectTo')}
          />
        </TableCell>
        <TableCell>
          <Input placeholder="3600" {...register('ttlSeconds')} />
        </TableCell>
        <TableCell className="text-right">
          <Button onClick={handleSubmit(editDns)} isLoading={isLoading}>
            Save
          </Button>
        </TableCell>
      </TableRow>
    )
  }

  return (
    <TableRow key={dns.id}>
      <TableCell className="font-medium">{dns.hostname}</TableCell>
      <TableCell>{dns.willDirectTo}</TableCell>
      <TableCell>{dns.ttlSeconds}</TableCell>
      <TableCell className="text-right">
        <Popover>
          <PopoverTrigger>
            <p className="flex items-center gap-1 text-blue-600 font-semibold">
              More
              <span>
                <IoIosArrowDown size={16} />
              </span>{' '}
            </p>
          </PopoverTrigger>
          <PopoverContent className="bg-zinc-50 border-2 p-2 rounded-md flex flex-col gap-2 w-32">
            <Button
              variant={'destructive'}
              onClick={() => deleteDns(dns.id)}
              isLoading={isLoading}
            >
              Delete
            </Button>
            <Button onClick={() => handleEdit(dns)}>Edit</Button>
          </PopoverContent>
        </Popover>
      </TableCell>
    </TableRow>
  )
}
