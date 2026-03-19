import { useQuery, type UseQueryResult } from '@tanstack/react-query'

import { fetchHello } from '../../api/hello'
import { SectionCard } from '../../components/SectionCard'
import { useState } from 'react';

export function HelloWorldCard() {
  const helloQuery = useQuery({
    queryKey: ['hello'],
    queryFn: fetchHello,
  })

  const [num, setNum] = useState(0);

  return (
    <SectionCard
      title="frontend to backend demo"
      subtitle="this is the smallest useful example of tanstack query in the app."
    >
      <div className="space-y-3 text-sm text-slate-700">
        <p>
          status:{' '}
          <span className="font-medium text-slate-950">
            {helloQuery.isPending
              ? 'loading'
              : helloQuery.isError
                ? 'error'
                : 'success'}
          </span>
        </p>

        {num}

        {helloQuery.isError ? (
          <p className="rounded-lg bg-rose-50 p-3 text-rose-700">
            the frontend could not reach the backend. start the fastapi server and
            refresh this page.
          </p>
        ) : null}

        {helloQuery.data ? (
          <div className="rounded-lg bg-sky-50 p-4 text-sky-950">
            <p className="font-medium">{helloQuery.data.message}</p>
            <p className="mt-2">project: {helloQuery.data.project}</p>
            <p className="mt-1">{helloQuery.data.frontend_hint}</p>
          </div>
        ) : null}
      </div>
    </SectionCard>
  )
}
