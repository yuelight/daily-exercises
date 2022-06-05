import React, { useEffect, useState } from 'react';

const BASE_URL = 'https://cra-app-server.xiaoshiyi.workers.dev';

type Params = {
	path: string;
	params?: Record<string, string>;
	interval?: number;
};

async function request<T = unknown>({ path = '', params = {}, interval = 0 }: Params) {
	try {
		const url = new URL(BASE_URL);
		url.pathname = path;

		Object.keys(params).forEach((key) => {
			url.searchParams.append(key, params[key]);
		});
		const res = await fetch(url.toString());
		return (await res.json()) as Promise<{
			code: number;
			data: T;
		}>;
	} catch {
		return null;
	}
}

const Header = () => {
	const [refreshTime, setRefreshTime] = useState(0);

	useEffect(() => {
		request<{ refresh_time: number }>({ path: '/', interval: 1000 * 60 * 3 }).then((res) => {
			setRefreshTime(res?.data?.refresh_time ?? 0);
		});
	}, []);

	return (
		<div className='section'>
			<div>
				<p>status: </p>
				{refreshTime > 0 ? 'online' : 'offline'}
			</div>

			<div>
				<p>refreshTime: </p>
				{refreshTime}
			</div>
		</div>
	);
};

const Todos = () => {
	const [addItem, setAddItem] = useState('');
	const [todos, setTodos] = useState<string[]>([]);

	const handleValueChange = (ev: React.ChangeEvent) => {
		setAddItem((ev.target as HTMLInputElement).value);
	};

	const handleAddItem = async (ev: React.KeyboardEvent) => {
		if (ev.key !== 'Enter') {
			return;
		}

		let _todos = todos.slice();
		try {
			const res = await request<string[]>({
				path: '/add',
				params: {
					item: addItem,
				},
			});

			_todos = res?.data ?? [];
		} catch {
			_todos.push(addItem);
		}

		setTodos(_todos);
		setAddItem('');
	};

	const handleDelItem = async (ev: React.MouseEvent) => {
		const { item } = (ev.target as HTMLInputElement).dataset;
		if (!item) {
			return;
		}

		let _todos = todos.slice();
		try {
			const res = await request<string[]>({
				path: '/delete',
				params: {
					item,
				},
			});
			_todos = res?.data ?? [];
		} catch {
			_todos.splice(_todos.indexOf(item), 1);
		}

		setTodos(_todos);
		setAddItem('');
	};

	useEffect(() => {
		request<string[]>({ path: '/sync' }).then((res) => {
			setTodos(res?.data ?? []);
		});
	}, []);

	return (
		<div className='section'>
			<p>todos: </p>

			<ul>
				{todos.map((item) => (
					<li key={item}>
						{item}
						<span className='icon-del' data-item={item} onClick={handleDelItem}>
							x
						</span>
					</li>
				))}
				<li>
					<input type='text' value={addItem} onChange={handleValueChange} onKeyUp={handleAddItem} />
				</li>
			</ul>
		</div>
	);
};

const App = () => {
	return (
		<div className='app'>
			<Header />

			<Todos />
		</div>
	);
};

export default App;
