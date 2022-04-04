const REQUEST_HANDLER_MAP: Record<
  string,
  (searchParams: URLSearchParams) => Promise<unknown>
> = {
  '/': async () => {
    const refresh_time = await REFRESH_TIME?.get('timestamp')

    return {
      code: 0,
      data: {
        refresh_time,
      },
    }
  },
  '/add': async (searchParams) => {
    const item = searchParams.get('item') || ''
    const todos = ((await TODOS?.get('list')) ?? '').split(',')

    if (item && !todos.includes(item)) {
      todos.push(item)
      await TODOS.put('list', todos.join(','))
    }

    return {
      code: 0,
      data: todos.filter(Boolean),
    }
  },
  '/delete': async (searchParams) => {
    const item = searchParams.get('item') || ''
    let todos = ((await TODOS?.get('list')) ?? '').split(',')

    if (item) {
      todos = todos.filter((_item) => _item !== item)
      await TODOS?.put('list', todos.join(','))
    }

    return {
      code: 0,
      data: todos.filter(Boolean),
    }
  },
  '/sync': async (searchParams) => {
    const _todos = String(searchParams.get('todos') || '')
    if (_todos) {
      await TODOS?.put('list', _todos)
    }

    const todos = await TODOS?.get('list')

    return {
      code: 0,
      data: (todos?.split(',') ?? []).filter(Boolean),
    }
  },
}

export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url)
  const json = await REQUEST_HANDLER_MAP[url.pathname]?.(url.searchParams)

  return new Response(JSON.stringify(json || {}), {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
  })
}

export async function handleScheduled(event: ScheduledEvent): Promise<void> {
  await REFRESH_TIME?.put('timestamp', '' + event.scheduledTime)
}
