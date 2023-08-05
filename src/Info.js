import './Info.css'
function Info(props) {
    return (
        <>
            <div className="friend">
                <div className="container">
                    <div className="row">
                        {props.info.map((vel) => {
                            return (
                                <div className="information">
                                    <div className="icon">
                                        <span>{vel.icon}</span>
                                    </div>
                                    <div className="no">
                                        <h3>{vel.no}</h3>
                                    </div>
                                    <div className="name">
                                        <span>{vel.name}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info;