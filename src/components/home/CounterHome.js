import React from 'react'

const CounterHome = () => {
    return (
        <section className="company-state theme-overlap" style={{background:`url(assets/img/tag-bg.jpg)`}}>
            <div className="container-fluid">
                <div className="col-md-3 col-sm-6">
                    <div className="work-count">
                        <span className="theme-cl icon icon-trophy"></span>
                        <span className="counter">200</span> <span className="counter-incr">+</span>
                        <p>Récompenses Gagnées</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="work-count">
                        <span className="theme-cl icon icon-layers"></span>
                        <span className="counter">307</span> <span className="counter-incr">+</span>
                        <p>Projets Réalisés</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="work-count">
                        <span className="theme-cl icon icon-happy"></span>
                        <span className="counter">700</span> <span className="counter-incr">+</span>
                        <p>Clients Satisfaits</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="work-count">
                        <span className="theme-cl icon icon-dial"></span>
                        <span className="counter">770</span> <span className="counter-incr">+</span>
                        <p>Tasses de Café</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CounterHome
