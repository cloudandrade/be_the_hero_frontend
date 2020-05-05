import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
	const [id, setId] = useState('');
	const history = useHistory();

	async function handleLogin(e) {
		e.preventDefault();

		try {
			const response = await api.post('sessions', { id });

			localStorage.setItem('ongId', id);
			localStorage.setItem('ongName', response.data.name);

			history.push('/profile');
		} catch (error) {
			console.log(error);
			alert('Falha no login');
		}
	}

	return (
		<div className="logon-container">
			<section className="form">
				<img src={logoImg} alt="Be the hero" />
				<form>
					<h1>Faça seu logon</h1>
					<input
						placeholder="Sua ID"
						onChange={e => setId(e.target.value)}
					/>
					<button
						type="button"
						className="button"
						onClick={e => handleLogin(e)}
					>
						Entrar
					</button>

					<Link to="/register" className="back-link">
						<FiLogIn
							size={16}
							color={'#E02041'}
						></FiLogIn>
						Não tenho cadastro
					</Link>
				</form>
			</section>
			<img src={heroesImg} alt="Heroes" />
		</div>
	);
}
