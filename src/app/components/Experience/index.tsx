const Experience = ({activeTab} : {activeTab: string})=>{
    return (
        <div className={
            activeTab === "experience" ? "tab-pane fade show active" : "tab-pane"
            }>
            <ul className="list text-center">
                <li>
                    <span></span>
                    <div className="media">
                        <div className="d-flex">
                            <p>December 2021 to present</p>
                        </div>
                        <div className="media-body">
                            <h4>Eritheia Labs</h4>
                            <p>Senior Software Engineer</p>
                        </div>
                    </div>
                </li>
                <li>
                    <span></span>
                    <div className="media">
                        <div className="d-flex">
                            <p>Sep 2020 to Nov 20021</p>
                        </div>
                        <div className="media-body">
                            <h4>Techologic</h4>
                            <p>Senior Engineer</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Experience;