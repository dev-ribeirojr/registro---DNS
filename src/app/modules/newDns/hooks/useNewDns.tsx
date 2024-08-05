import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schemeNewDns = z.object({
  hostname: z.string().nonempty('Campo obrigatório!'),
  willDirectTo: z.string().nonempty('Campo obrigatório!'),
  ttlSeconds: z.string().nonempty('Campo obrigatório!'),
})

type NewDnsProps = z.infer<typeof schemeNewDns>

export function useNewDns() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<NewDnsProps>({
    resolver: zodResolver(schemeNewDns),
  })
  const { toast } = useToast()

  const [isLoading, setIsLoading] = useState(false)

  async function registerNewDns(data: NewDnsProps) {
    setIsLoading(true)

    console.log(data)
    // registrar dns
    toast({
      title: 'Falha ou Sucesso ao registrar',
      description: 'Descrição do resultado!',
    })

    setIsLoading(false)
  }

  return { handleSubmit, register, registerNewDns, isLoading, control, errors }
}
