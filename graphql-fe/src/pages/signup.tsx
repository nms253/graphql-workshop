import { useState } from 'react';
import { signup } from '../redux/slices/auth-slice';
import { RootState } from '../redux/store';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function Signup() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { status, user, error } = useAppSelector((s: RootState) => s.auth);
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await dispatch(signup(form));
        if (signup.fulfilled.match(result)) {
            router.push('/');
        }
    };

    if (user) return <p>Already signed in as {user.email}</p>;

    return (
        <form onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
            <button type="submit" disabled={status === 'loading'}>Signup</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}
