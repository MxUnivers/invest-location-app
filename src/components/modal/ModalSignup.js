import React, { useEffect, useState } from "react";
import { fetchCodePostalsAll } from "../../actions/request/CodePostalRequest";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { UserCreate } from "../../actions/request/UserRequest";

const ModalSignup = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// Récupération des codes postaux et état de chargement
	const codepostals = useSelector((state) => state.codepostals.codepostals);
	const loadingUser = useSelector((state) => state.users.loadingUser);

	const [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		codePostal: "",
		password: "",
		confirmpassword: "",
	});

	const [selectedCountry, setSelectedCountry] = useState("");
	const [showPassword, setShowPassword] = useState(false); // Contrôle de l'affichage du mot de passe


	// Charger les codes postaux au montage du composant
	useEffect(() => {
		dispatch(fetchCodePostalsAll());
	}, [dispatch]);

	// Gestion des changements dans les champs du formulaire
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });

		// Mise à jour du pays correspondant au code postal sélectionné
		if (name === "codePostal") {
			const selectedCode = codepostals.find(
				(postal) => postal._id === value
			);
			setSelectedCountry(selectedCode ? selectedCode.country : "");
		}
	};

	// Gestion de la soumission du formulaire
	const handleSubmit = (e) => {
		e.preventDefault();

		// Vérification si tous les champs sont renseignés
		const missingFields = Object.entries(formData).filter(
			([key, value]) => value.trim() === ""
		);

		if (missingFields.length > 0) {
			toast.error("Veuillez remplir tous les champs obligatoires !",{position:"bottom-right"});
			return;
		}

		// Vérification des mots de passe
		if (formData.password !== formData.confirmpassword) {
			toast.error("Les mots de passe ne correspondent pas !",{position:"bottom-right"});
			return;
		}
		dispatch(UserCreate(formData,toast))

		// Logique pour soumettre les données à votre backend
		console.log("Form Data Submitted:", formData);
	};


	return (
		<div
			className="modal fade"
			id="register"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="myModalLabel3"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title" id="modalLabel3">
							Créer un compte
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
								Bonjour ! <span className="theme-cl">Bienvenue</span>
							</h2>
						</div>

						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<label>Nom</label>
								<input
									type="text"
									className="form-control"
									placeholder="Nom"
									name="firstname"
									value={formData.firstname}
									onChange={handleChange}
								/>
							</div>

							<div className="form-group">
								<label>Prénoms</label>
								<input
									type="text"
									className="form-control"
									placeholder="Prénoms"
									name="lastname"
									value={formData.lastname}
									onChange={handleChange}
								/>
							</div>

							<div className="form-group">
								<label>Email</label>
								<input
									type="email"
									className="form-control"
									placeholder="Email"
									name="email"
									value={formData.email}
									onChange={handleChange}
								/>
							</div>

							<div className="form-group">
								<label>Indicatif téléhpone</label>
								<select
									className="form-control"
									name="codePostal"
									value={formData.codePostal}
									onChange={handleChange}
								>
									<option value="">-- Sélectionnez --</option>
									{codepostals.map((postal) => (
										<option key={postal._id} value={postal._id}>
											+{postal.indicatif} - {postal.country}
										</option>
									))}
								</select>
							</div>
							<div className="form-group">
								<label>Téléphone</label>
								<input
									type="text"
									className="form-control"
									placeholder="Téléphone"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
								/>
							</div>



							{selectedCountry && (
								<div className="form-group">
									<label>Pays</label>
									<input
										type="text"
										className="form-control"
										value={selectedCountry}
										readOnly
									/>
								</div>
							)}

							<div className="form-group">
								<label>Mot de passe</label>
								<input
									type={showPassword ? "text" : "password"}
									className="form-control"
									placeholder="Mot de passe"
									name="password"
									value={formData.password}
									onChange={handleChange}
								/>
							</div>

							<div className="form-group">
								<label>Confirmez le mot de passe</label>
								<input
									type={showPassword ? "text" : "password"}
									className="form-control"
									placeholder="Confirmez le mot de passe"
									name="confirmpassword"
									value={formData.confirmpassword}
									onChange={handleChange}
								/>
							</div>

							<div className="form-group">
							<div className="input-group-append">
										<button
											type="button"
											className="btn btn-outline-secondary"
											onClick={() => setShowPassword(!showPassword)}
										>
											{showPassword ? "Cacher" : "Afficher"}
										</button>
									</div>

									</div>

							<button
								type="submit"
								className="btn btn-primary btn-block"
								disabled={loadingUser}
							>
								{loadingUser ? "Chargement..." : "S'inscrire"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalSignup;
