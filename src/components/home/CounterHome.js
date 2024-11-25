import React from 'react'

const CounterHome = () => {
    return (
        <section class="company-state theme-overlap" style={{background:`url(assets/img/tag-bg.jpg)`}}>
			<div class="container-fluid">
				<div class="col-md-3 col-sm-6">
					<div class="work-count">
						<span class="theme-cl icon icon-trophy"></span>
						<span class="counter">200</span> <span class="counter-incr">+</span>
						<p>Awards Winning</p>
					</div>
				</div>
				<div class="col-md-3 col-sm-6">
					<div class="work-count">
						<span class="theme-cl icon icon-layers"></span>
						<span class="counter">307</span> <span class="counter-incr">+</span>
						<p>Done Projects</p>
					</div>
				</div>
				<div class="col-md-3 col-sm-6">
					<div class="work-count">
						<span class="theme-cl icon icon-happy"></span>
						<span class="counter">700</span> <span class="counter-incr">+</span>
						<p>Happy Clients</p>
					</div>
				</div>
				<div class="col-md-3 col-sm-6">
					<div class="work-count">
						<span class="theme-cl icon icon-dial"></span>
						<span class="counter">770</span> <span class="counter-incr">+</span>
						<p>Cups Of Cofee</p>
					</div>
				</div>
			</div>
		</section>
    )
}

export default CounterHome
