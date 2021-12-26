import React from 'react'


const MiddleCol = (props) => {
    const DisplayMe = (obj) => {

        props.setDisplayItem(() => { return obj })
        // console.log(props.displayItem)
    }

    return (

        <div>
            {
                props.list.map((obj) => {
                    return (
                        <div className="row">
                            <div className="col-8">
                                {obj.title}

                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary" onClick={() => DisplayMe(obj)}> Expand </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default MiddleCol
