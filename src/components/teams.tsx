import { User } from 'src/models/user.model'
import DataTeam from '../data/team.mock.json'

export default function TeamsPage() {
    return (
        <div className="waxon_tm_portoflio">
            <div className="container">
                <div className="waxon_tm_main_title">
                    <div className="title">
                        <h3>Team</h3>
                    </div>

                </div>

                <div className="portfolio_inner" style={{paddingTop: 70}}>
                    <div className="row">
                        {DataTeam.map((item: User, index: number) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-5">
                                <div className="list_inner">
                                    <div className="image-custom d-flex justify-content-center">
                                        <div className="avatar"
                                            style={{
                                                backgroundImage: `url(${item.avatar || "https://www.i-music.com.hk/assets/images/no-avatar.png"})`,
                                                height: 300,
                                                width: '100%',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                maxWidth: 300
                                            }}
                                        ></div>
                                    </div>
                                    <div className="title" >
                                        <h3>{item.name}</h3>
                                        <span>{item.title}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>

            <style jsx global>{`
                .title{
                    margin-top: 15px;
                }

                .title h3{
                    font-size: 1.2rem;
                }
                @media only screen and (max-width: 576px){
                    .title{
                        text-align: center;
                    }
                }
                                            
            `}</style>
        </div>
    )
}