import React from 'react'

const ModalSignup = () => {
    return (
        <div class="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="myModalLabel3"
			aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">

					<div class="modal-header">
						{/*<h4 class="modal-title" id="modalLabel3">Creér un compte</h4>
						<button type="button" class="m-close" data-dismiss="modal" aria-label="Close">
							<i class="ti-close"></i>
						</button> */}
					</div>

					<div class="modal-body">

						<div class="wel-back">
							<h2>Hi Mate! <span class="theme-cl">How are you?</span></h2>
						</div>

						<form>

							<div class="form-group">
								<label>Email</label>
								<input type="email" class="form-control" placeholder="Username"/>
							</div>

							<div class="form-group">
								<label>Mot de passe</label>
								<input type="password" class="form-control" placeholder="*******"/>
							</div>

							<div class="form-group">
								<label>Confirmer mot de passe</label>
								<input type="password" class="form-control" placeholder="*******"/>
							</div>

							<div class="form-group">
								<select class="form-control">
									<option data-placeholder="Register as a" class="chosen-select">En tant que
									</option>
									<option value="2">Promoteur</option>

									<option value="1">Investissuer</option>
								</select>
							</div>

							<span class="custom-checkbox d-block">
								<input type="checkbox" id="select1"/>
								<label for="select1"></label>
								Se souvenir de moi
							</span>

							<div class="center">
								<button type="submit" id="login-btn"
									class="btn btn-midium theme-btn btn-radius width-200"> S{"'"}inscrire </button>
							</div>

						</form>

						{
							/*<div class="connect-with">
							<ul>
								<li class="fb-ic"><a href="#"><i class="ti-facebook"></i></a></li>
								<li class="gp-ic"><a href="#"><i class="ti-google"></i></a></li>
								<li class="tw-ic"><a href="#"><i class="ti-twitter"></i></a></li>
							</ul>
						</div> */
						}

						<div class="center mrg-top-5">
							<div class="bottom-login text-center">Si tu as un compte?</div>
							<a href="javascript:void(0)" class="theme-cl" data-toggle="modal" data-dismiss="modal"
								data-target="#signin">se connecter</a>
						</div>

					</div>

				</div>
			</div>
		</div>
    )
}

export default ModalSignup
