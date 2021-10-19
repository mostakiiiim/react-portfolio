import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className="container">
                <div className="faq">
                    <h1 className="text-center fw-bold my-5 py-5">Frequently Asked <span className="text-info">
                        Questions</span>
                    </h1>
                    <div className="row py-5">
                        <div className="col-md-6">
                            <img className="img-fluid" src="https://image.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination_52683-57829.jpg" alt="" />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div>
                                <div className="accordion " id="accordionPanelsStayOpenExample">
                                    <div className="accordion-item mb-3  ">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                            <button className="accordion-button fw-bold text-dark bg-transparent "
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                                aria-controls="panelsStayOpen-collapseOne ">

                                                Will staring at a computer all day make me blind?
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne"
                                            className="accordion-collapse collapse show"
                                            labelled="panelsStayOpen-headingOne">
                                            <div className="accordion-body  text-muted">
                                                Focusing on a computer screen—a fixed distance—will leave your eye muscles tired and stiff, he says, plus you tend to blink less. The antidote: Look up from the computer screen every so often and focus on something 20 or more feet away, then blink briskly four or five times.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3 ">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                            <button
                                                className="accordion-button collapsed fw-bold text-dark bg-transparent"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                                aria-controls="panelsStayOpen-collapseTwo">
                                                Can I trust my tap water?
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                            labelled="panelsStayOpen-headingTwo">
                                            <div className="accordion-body  text-muted">
                                                Sure. Unless you're on a private well, tap water comes from municipal treatment plants that are carefully monitored and better regulated than bottled water. (Some popular brands like Aquafina and Dasani are just that: tap water.) Very strict federal rules now require extensive filtering of the water supply, but minuscule amounts of chemicals and pharmaceuticals may still turn up. If you want to ensure you're drinking the purest water possible, consider adding a filter to your tap. For information on filters, go to NRDC.org/waterfilters.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                            <button
                                                className="accordion-button collapsed fw-bold text-dark bg-transparent"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                                aria-controls="panelsStayOpen-collapseThree">
                                                How long am I contagious when I have the flu or a cold?
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                            labelled="panelsStayOpen-headingThree">
                                            <div className="accordion-body  text-muted">
                                                As long as you have symptoms. Your ability to spread these viruses remains until the last sniffle, says Bill Schaffner, MD, a physician and infectious disease expert at Vanderbilt Medical Center in Nashville. And you're contagious 24 hours before you first show symptoms.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-3">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                            <button
                                                className="accordion-button collapsed fw-bold text-dark bg-transparent"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                                aria-controls="panelsStayOpen-collapseFour">
                                                How often do I really need to have my teeth professionally cleaned?
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                                            labelled="panelsStayOpen-headingFour">
                                            <div className="accordion-body  text-muted">
                                                The answer depends on your habits at home, says periodontist Sally Cram, consumer adviser for the American Dental Association. Studies show it takes about three months for bacteria to take hold in the gums. Daily flossers who brush twice a day can get by with twice a year professional cleanings
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    );
};

export default Faq;