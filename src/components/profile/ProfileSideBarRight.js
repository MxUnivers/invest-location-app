import React from 'react'

const ProfileSideBarRight = () => {


    const images = [
        {
            src: "https://img.freepik.com/free-photo/business-team-steps_1262-20991.jpg?t=st=1732526393~exp=1732529993~hmac=4237d13c39570ba3cf5a578f46379d296f0488f79f2fd0cd80916d9bd0d832ea&w=996",
            alt: "Business Team",
            href: "assets/img/slider-2.jpg"
        },
        {
            src: "https://img.freepik.com/free-photo/serious-afro-american-manager-telling-investors-about-project_1262-20365.jpg?t=st=1732526414~exp=1732530014~hmac=6fdad99c1a263343f84461de3bc0742851cb86d23fdf72a84ffb77905fe769c4&w=996",
            alt: "Manager Presentation",
            href: "assets/img/slider-2.jpg"
        },
        {
            src: "assets/img/slider-2.jpg",
            alt: "Default Slider",
            href: "assets/img/slider-2.jpg"
        },
        {
            src: "https://img.freepik.com/free-photo/group-happy-african-volunteers-with-garbage-bags-cleaning-area-park-africa-volunteering-charity-people-ecology-concept_627829-351.jpg?t=st=1732526467~exp=1732530067~hmac=68b0341974a2bba48326a50a250f4e958ec6dec7b0a78b34a298317dd0c56711&w=996",
            alt: "Volunteers",
            href: "assets/img/slider-2.jpg"
        },
        {
            src: "https://img.freepik.com/free-vector/vacation-holidays-background-with-realistic-globe-suitcase-photo-camera_1284-10476.jpg?t=st=1732526545~exp=1732530145~hmac=4b2ed629171cb65d817a3eb04f6e078c8330e737c3d2823805023df7abf04cd7&w=740",
            alt: "Vacation",
            href: "assets/img/slider-2.jpg"
        },
        {
            src: "https://img.freepik.com/free-photo/airplane-aircraft-travel-trip_53876-30273.jpg?t=st=1732526575~exp=1732530175~hmac=fe0209bf2547bd926686e77285ad65ec9b211ab078f0395a754b8bade0e5c3f9&w=996",
            alt: "Travel",
            href: "assets/img/slider-2.jpg"
        }
    ];
    



    return (
        <div class="col-md-4 col-sm-12">
            <div class="sidebar">

                {/*<div class="widget-boxed">
            <div class="widget-boxed-header">
                <h4><i class="ti-calendar padd-r-10"></i>Contact</h4>
            </div>
            <div class="widget-boxed-body">
                <div class="row">
                    
                </div>
                <div class="row mrg-top-15">
                    
                </div>
                <a href="#" class="btn reservation btn-radius theme-btn full-width mrg-top-10">Entrer en contact</a>
            </div>
        </div> */}
                <div class="widget-boxed">
                    <div class="widget-boxed-header">
                        <h4><i class="ti-time padd-r-10"></i>Heure d{"'"}ouverture</h4>
                    </div>
                    <div class="widget-boxed-body">
                        <div class="side-list">
                            <ul>
                                <li>Lundi <span>9h - 17h</span></li>
                                <li>Mardi <span>9h - 17h</span></li>
                                <li>Mercredi <span>9h - 17h</span></li>
                                <li>Jeudi <span>9h - 17h</span></li>
                                <li>Vendredi <span>9h - 17h</span></li>
                                <li>Samedi <span>9h - 15h</span></li>
                                <li>Dimanche <span>Fermé</span></li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div class="widget-boxed">
                    <div class="widget-boxed-header">
                        <h4><i class="ti-gallery padd-r-10"></i>Photo des activités</h4>
                    </div>
                    <div class="widget-boxed-body">
                        <div class="side-list no-border gallery-box">
                            <ul class="gallery-list">
                            {
                                images.map((item)=>{
                                    return(
                                        <li>
                                    <a data-fancybox="gallery" href={item.src}>
                                        <img src={item.src} class="img-responsive" alt="" />
                                    </a>
                                </li>
                                    )
                                })
                            }
                                
                               
                            </ul>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ProfileSideBarRight