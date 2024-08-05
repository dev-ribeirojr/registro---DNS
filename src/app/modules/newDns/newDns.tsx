'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useNewDns } from './hooks/useNewDns'

export function NewDns() {
  const { handleSubmit, register, registerNewDns, isLoading } = useNewDns()

  return (
    <div className="flex items-center justify-center gap-2">
      <form
        onSubmit={handleSubmit(registerNewDns)}
        className="flex flex-col items-end justify-between gap-2 w-full max-w-screen-lg lg:flex-row"
      >
        <div className="w-full flex flex-col gap-2 sm:flex-row">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="hostname">HOSTNAME</Label>
            <Input
              id="hostname"
              placeholder="Enter @ or hostname"
              {...register('hostname')}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="will-direct-to">WILL DIRECT TO</Label>
            <Input
              id="will-direct-to"
              placeholder="Select resource or enter custom IP"
              {...register('willDirectTo')}
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 sm:flex-row items-end">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="ttl-seconds">TTL (SECONDS)</Label>
            <Input
              id="ttl-seconds"
              placeholder="3600"
              {...register('ttlSeconds')}
            />
          </div>

          <Button isLoading={isLoading} type="submit" className="w-full">
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  )
}
