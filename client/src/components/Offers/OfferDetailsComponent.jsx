import { useParams } from "react-router-dom"
import { getAnOffer } from "../../service/offersService"
import { useEffect, useState } from "react"

export const OfferDetailsCompnent = () => {

    const {id} = useParams()
    console.log(id)
    const [offer, setOffer] = useState();

    useEffect(() => {
        const offerFetch = async () => {
            const offer = await getAnOffer(id)
            setOffer(offer)
        }
        offerFetch()
    }, [])
    return (
        <div className="container-fluid tm-container-content tm-mt-60">
        <div className="row mb-4">
            <h2 className="col-12 tm-text-primary">{offer.title}</h2>
        </div>
        <div className="row tm-mb-90">            
            <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                <img src="img/img-01-big.jpg" alt="Image" className="img-fluid"/>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                <div className="tm-bg-gray tm-video-details">
                    <p className="mb-4">
                        Please support us by making <a href="https://paypal.me/templatemo" target="_parent" rel="sponsored">a PayPal donation</a>. Nam ex nibh, efficitur eget libero ut, placerat aliquet justo. Cras nec varius leo.
                    </p>
                    <div className="text-center mb-5">
                        <a href="#" className="btn btn-primary tm-btn-big">Download</a>
                    </div>                    
                    <div className="mb-4 d-flex flex-wrap">
                        <div className="mr-4 mb-2">
                            <span className="tm-text-gray-dark">Dimension: </span><span className="tm-text-primary">1920x1080</span>
                        </div>
                        <div className="mr-4 mb-2">
                            <span className="tm-text-gray-dark">Format: </span><span className="tm-text-primary">JPG</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h3 className="tm-text-gray-dark mb-3">License</h3>
                        <p>Free for both personal and commercial use. No need to pay anything. No need to make any attribution.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}