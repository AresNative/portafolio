import "./theme/card-spotify.component.css"

function CardSpotify() {
    return (
        <div className="main">
            <div className="currentplaying">
                <p className="heading">Te recomiendo las siguientes canciones:</p>
            </div>
            <div className="songs">
                <div className="loader">
                    <div className="loading">
                        <div className="load"></div>
                        <div className="load"></div>
                        <div className="load"></div>
                        <div className="load"></div>
                    </div>
                    <a className="song" href="https://open.spotify.com/intl-es/album/6zdSIdPEwMh9JecGm3Z8Oh?si=Qie_C4XzQJyd9Y0TWecJOg" target="_blank">
                        <p className="name">Pressure</p>
                        <p className="artist">Divide Music</p>
                    </a>
                    <div className="albumcover">
                        <img src="https://cdns-images.dzcdn.net/images/cover/731ca5987e395b79f19fe2ab07fa733a/264x264.jpg" alt="ONE OK ROCK" width="40px" height="40px" />
                    </div>
                </div>
                <div className="loader">
                    <div className="play"></div>
                    <a className="song" href="https://open.spotify.com/intl-es/album/4OKBuE9F8MTCV7nnsBRcsK?si=NKPbZyojTjeujinfTOhc2A" target="_blank">
                        <p className="name">Nobody's home</p>
                        <p className="artist">ONE OK ROCK</p>
                    </a>
                    <div className="albumcover">
                        <img src="https://i.scdn.co/image/ab67616d0000b273cd4f8cb3784fad56825991b3" alt="ONE OK ROCK" width="40px" height="40px" />
                    </div>
                </div>
                <div className="loader">
                    <div className="play"></div>
                    <a className="song" href="https://open.spotify.com/intl-es/album/6FRkntES0AkBOQu9AOHNeo?si=MQRoZhIXSJenUt5DMiUKAA" target="_blank">
                        <p className="name">Make It Out Alive</p>
                        <p className="artist">ONE OK ROCK</p>
                    </a>
                    <div className="albumcover">
                        <img src="https://i.kfs.io/album/global/261094118,0v1/fit/500x500.jpg" alt="ONE OK ROCK" width="40px" height="40px" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardSpotify