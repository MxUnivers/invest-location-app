import React from 'react'

const ModalSignin = () => {
    return (
        <div class="modal fade" id="signin" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2"
			aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">

					<div class="modal-header">
						<h4 class="modal-title" id="modalLabel2">Se connecter à votre compte</h4>
						<button type="button" class="m-close" data-dismiss="modal" aria-label="Close">
							<i class="ti-close"></i>
						</button>
					</div>

					<div class="modal-body">

						<div class="wel-back">
							<h2>Bienvenue <span class="theme-cl"></span></h2>
						</div>

						<form>

							<div class="form-group">
								<label>Email</label>
								<input type="email" class="form-control" placeholder="email"/>
							</div>

							<div class="form-group">
								<label>Mot de passe</label>
								<input type="password" class="form-control" placeholder="*******"/>
							</div>

							<span class="custom-checkbox d-block">
								<input type="checkbox" id="select1"/>
								<label for="select1"></label>
								se souvenir de moi
							</span>

							<div class="center">
								<button type="submit" id="login-btn"
									class="btn btn-midium theme-btn btn-radius width-200"> Se connecter </button>
							</div>

						</form>

						<div class="center mrg-top-5">
							<div class="bottom-login text-center">Si vous n{"'"}avez pas de compte</div>
							<a href="javascript:void(0)" class="theme-cl" data-toggle="modal" data-dismiss="modal"
								data-target="#register">Inscription</a>
						</div>

					</div>

				</div>
			</div>
		</div>
    )
}

export default ModalSignin
