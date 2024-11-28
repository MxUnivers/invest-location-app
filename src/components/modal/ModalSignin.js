import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { UserConnexion } from "../../actions/request/UserRequest";

const ModalSignin = () => {

	const  dispatch  =  useDispatch();

	const loadingUser = useSelector((state) => state.users.loadingUser);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [showPassword, setShowPassword] = useState(false); // Contrôle de l'affichage du mot de passe

	// Gestion des changements dans les champs
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	// Gestion de la soumission du formulaire
	const handleSubmit = (e) => {
		e.preventDefault();

		const { email, password } = formData;

		// Vérification des champs obligatoires
		if (!email.trim() || !password.trim()) {
			toast.error("Veuillez remplir tous les champs obligatoires !", { position: "bottom-right" });
			return;
		}

		// Logique de connexion (remplacez par votre backend/API)
		console.log("Connexion en cours :", formData);
		dispatch(UserConnexion(email,password,toast));

		// Redirection ou autre logique après la connexion
	};

	return (
		<div
			className="modal fade"
			id="signin"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="myModalLabel2"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title" id="modalLabel2">
							Se connecter à votre compte
						</h4>
						<button
							type="button"
							className="m-close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<i className="ti-close"></i>
						</button>
					</div>

					<div className="modal-body">
						<div className="wel-back">
							<h2>
								Bienvenue <span className="theme-cl"></span>
							</h2>
						</div>

						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<label>Email</label>
								<input
									type="email"
									name="email"
									className="form-control"
									placeholder="email"
									value={formData.email}
									onChange={handleChange}
								/>
							</div>

							<div className="form-group">
								<label>Mot de passe</label>
									<input
										type={showPassword ? "text" : "password"}
										name="password"
										className="form-control"
										placeholder="*******"
										value={formData.password}
										onChange={handleChange}
									/>
							</div>

							<div class="form-group">
								<div className="input-group-append">
									<button
										type="button"
										className="btn btn-light"
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? "Cacher" : "Afficher"}
									</button>
								</div>
							</div>


							<div className="center">
								{
									loadingUser ?
									<button
											type="submit"
											id="login-btn"
											className="btn btn-midium theme-btn btn-radius width-200"
										>
											<Spinner variant="light" />
										</button>
										:
										<button
											type="submit"
											id="login-btn"
											className="btn btn-midium theme-btn btn-radius width-200"
										>
											Se connecter
										</button>
								}

							</div>
						</form>

						<div className="center mrg-top-5">
							<div className="bottom-login text-center">
								Si vous n{"'"}avez pas de compte
							</div>
							<a
								href="javascript:void(0)"
								className="theme-cl"
								data-toggle="modal"
								data-dismiss="modal"
								data-target="#register"
							>
								Inscription
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalSignin;
