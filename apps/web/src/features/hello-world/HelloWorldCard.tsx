import { useQuery } from '@tanstack/react-query'

import { fetchHello } from '../../api/hello'
import { fetchTest } from '../../api/test'
import { SectionCard } from '../../components/SectionCard'
import { useState } from 'react';

export function HelloWorldCard() {
  const helloQuery = useQuery({
    queryKey: ['hello'],
    queryFn: fetchHello,
  })

  const [exampleId, setExampleId] = useState<number>(1);

  const andreQuery = useQuery({
    queryKey: ['test', exampleId],
    queryFn: () => fetchTest(exampleId),
  })

  const [num, setNum] = useState(0);
  const [name, setName] = useState<String>("Jaden");


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
                ? 'errorasdfasdfj'
                : 'success'}
          </span>
        </p>

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
        
        <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700" onClick={() => {
            setExampleId(exampleId + 1);
        }}>next one</button>

        {andreQuery.data ? (
          <div className="rounded-lg bg-sky-50 p-4 text-sky-1500">
            <p className="font-large">{andreQuery.data.id}</p>
            <p className="mt-2">title: {andreQuery.data.title}</p>
            <p>here!!</p>
            
          </div>
        ) : null }
      </div>
    </SectionCard>
  )
}
