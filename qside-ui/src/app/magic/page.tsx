import Link from "next/link"

const Magic = () => {
    return (
        <div className="h-full w-full rounded-lg animate-in slide-in-from-left-10 fade-in-10 duration-500 flex flex-col justify-center items-center">
            <div className="flex flex-row flex-wrap justify-center items-center ">
                <div className="card w-96 bg-neutral text-neutral-content m-5">
                    <div className="card-body items-center text-center">
                        
                        <p>Create loyalty cards and promotions.
                            Get started by creating an NFT or an NFT collection
                            with name and description of the promo/loyalty,
                            and allow users to find it in the gallery.
                            They can then mint the NFT and redeem the promo
                            with you.</p>
                        <div className="card-actions justify-end">
                            <Link href="/factory">
                                <button className="btn btn-primary">Create</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        
                        <p>View the gallery to browse all of the .
                            available promotions. Mint the NFTs from
                            the collections and redeem/utilize as loyalty cards
                            with the creator. You can view the promo's description
                            and utility before purchasing.</p>
                        <div className="card-actions justify-end">
                            <Link href="/gallery">
                                <button className="btn btn-primary">View</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Magic