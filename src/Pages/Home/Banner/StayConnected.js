import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const StayConnected = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className="flex justify-center items-center ">
            {/* <div className="hero min-h-screen bg-base-200 "> */}

            <div className="hero-content flex-col lg:flex-row-reverse w-3/4">
                {/* <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div> */}
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">

                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">

                            </label>
                            <input type="text" placeholder="subject" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">

                            </label>
                            <textarea className="textarea input-bordered" placeholder="Your message"></textarea>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">submit</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    );
};

export default StayConnected;