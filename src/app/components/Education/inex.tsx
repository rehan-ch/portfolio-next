const Education = ({activeTab} : {activeTab: string})=>{
    return (
        <div className={
            activeTab === "education" ? "tab-pane fade show active" : "tab-pane fade"
            }>
            <ul className="list">
                <li>
                    <span></span>
                    <div className="media">
                        <div className="d-flex">
                            <p>December 2016 to 2020</p>
                        </div>
                        <div className="media-body">
                            <h4>Bachelors of Science in Computer Science</h4>
                            <p>National Textile University, Faisalabad, Pakistan</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Education;