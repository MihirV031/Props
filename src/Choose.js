import './Choose.css'

function Choose(props) {
    return (
        <>
            <div className="Creat">
                <div className="container">
                    <div>
                        <div class="text-center">
                            <span class="sub_heading">READ OUR DIFFERENCE</span>
                            <h1>WHY CHOOSE CREATIVE</h1>
                        </div>
                    </div>
                    <div className="row">
                        {props.creative.map((vel) => {
                            return (
                                <div className="Banifit">
                                    <div className="box_items">
                                        <div className="icon2" style={{backgroundColor:vel.color}}>
                                            <span>{vel.icon}</span>
                                        </div>
                                        <div className="no">
                                            <h5>{vel.hade}</h5>
                                        </div>
                                        <div className="name">
                                            <p>{vel.pare}</p>
                                        </div>
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

export default Choose;