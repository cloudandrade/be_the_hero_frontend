import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

export default function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [city, setCity] = useState('');
	const [uf, setUf] = useState('');

	const history = useHistory();

	async function handleRegister(e) {
		e.preventDefault();
		const data = {
			name,
			email,
			whatsapp,
			city,
			uf,
		};

		try {
			const response = await api.post('ongs', data);

			alert(
				`Cadastro realizado, seu ID de acesso: ${response.data.id}`
			);
			history.push('/');
		} catch (error) {
			console.log(error);
			alert(`Erro ao cadastrar sua ONG`);
		}
	}

	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be the hero" />
					<h1>Cadastro</h1>
					<p>
						Faça seu cadastro, entre na plataforma e ajude
						pessoas a encontrarem os casos da sua ONG
					</p>

					<Link to="/" className="back-link">
						<FiArrowLeft
							size={16}
							color={'#E02041'}
						></FiArrowLeft>
						Já possuo cadastro
					</Link>
				</section>
				<form onSubmit={handleRegister}>
					<input
						placeholder="Nome da ONG"
						onChange={e => setName(e.target.value)}
					/>

					<input
						type="email"
						placeholder="Email"
						onChange={e => setEmail(e.target.value)}
					/>

					<input
						placeholder="WhatsApp"
						onChange={e => setWhatsapp(e.target.value)}
					/>

					<div className="input-group">
						<input
							placeholder="Cidade"
							onChange={e => setCity(e.target.value)}
						/>

						<input
							placeholder="UF"
							onChange={e => setUf(e.target.value)}
							style={{
								width: 80,
							}}
						/>
					</div>
					<button className="button" type="submit">
						Cadastrar
					</button>
				</form>
			</div>
		</div>
	);
}
