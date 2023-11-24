function Startscreen({length,dispatch}) {
    return (
        <div className="start">
            <h2>welcome to react quiz!</h2>
            <h3>{length} questions test your  react mastery</h3>
            <button onClick={()=>dispatch({type:'start'})} className="btn btn-ui">let's start</button>
        </div>
    )
}

export default Startscreen
