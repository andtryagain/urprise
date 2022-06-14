import React from 'react';
import { Link } from 'react-router-dom'

const Instruction = () => {
    return <div className="container w-100">
        <div className="row">
            <div className="col">
                <div className="card text-bg-light mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Light card title</h5>
                        <p className="card-text">Some quk content.</p>
                        <Link to='/create' className="btn btn-outline-warning me-5">
                            create list
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-bg-warning mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Light card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="col">
            <div className="col">
                <div className="card text-bg-dark mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Light card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
}

export default Instruction;
