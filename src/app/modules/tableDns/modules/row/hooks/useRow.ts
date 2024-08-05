import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { DnsProps } from '../row'
import { useToast } from '@/components/ui/use-toast'

const schemeEditDns = z.object({
  id: z.string().nonempty(),
  hostname: z.string().nonempty('Campo obrigatório!'),
  willDirectTo: z.string().nonempty('Campo obrigatório!'),
  ttlSeconds: z.string().nonempty('Campo obrigatório!'),
})

type EditDnsProps = z.infer<typeof schemeEditDns>

export function useRow() {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
    control,
  } = useForm<EditDnsProps>({
    resolver: zodResolver(schemeEditDns),
  })
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  function editDns(data: EditDnsProps) {
    setIsLoading(true)
    const idDns = watch('id')
    // editar DNS
    console.log({ ...data, id: idDns })

    toast({
      title: 'Falha ou Sucesso ao editar',
      description: 'Descrição do resultado!',
    })

    setIsEditing(false)
    setIsLoading(false)
  }

  function deleteDns(id: string) {
    setIsLoading(true)

    // remover dns
    console.log(id)
    toast({
      title: 'Falha ou Sucesso ao remover',
      description: 'Descrição do resultado!',
    })
    setIsLoading(false)
  }

  function handleEdit(dns: DnsProps) {
    setValue('id', dns.id)
    setValue('hostname', dns.hostname)
    setValue('willDirectTo', dns.willDirectTo)
    setValue('ttlSeconds', dns.ttlSeconds)

    setIsEditing(true)
  }

  return {
    isEditing,
    control,
    errors,
    isLoading,
    setIsEditing,
    handleSubmit,
    register,
    editDns,
    handleEdit,
    deleteDns,
  }
}
