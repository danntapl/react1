import "./widgetSm.css";
import {Visibility} from "@material-ui/icons"


export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://s3.amazonaws.com/freestock-prod/450/freestock_3657817.jpg" alt="" className="widgetSmListItemImg" />
                    <div className="widgetSmUser">

                        <span className="widgetSmUserName">Juan Perez</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">

                        <Visibility/>
                        Display

                    </button>

                </li>
                <li className="widgetSmListItem">
                    <img src="https://s3.amazonaws.com/freestock-prod/450/freestock_3657817.jpg" alt="" className="widgetSmListItemImg" />
                    <div className="widgetSmUser">

                        <span className="widgetSmUserName">Juan Perez</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">

                        <Visibility className="widgetSmIcon"/>
                        Display

                    </button>

                </li>
                <li className="widgetSmListItem">
                    <img src="https://s3.amazonaws.com/freestock-prod/450/freestock_3657817.jpg" alt="" className="widgetSmListItemImg" />
                    <div className="widgetSmUser">

                        <span className="widgetSmUserName">Juan Perez</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">

                        <Visibility/>
                        Display

                    </button>

                </li>
                <li className="widgetSmListItem">
                    <img src="https://s3.amazonaws.com/freestock-prod/450/freestock_3657817.jpg" alt="" className="widgetSmListItemImg" />
                    <div className="widgetSmUser">

                        <span className="widgetSmUserName">Juan Perez</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">

                        <Visibility/>
                        Display

                    </button>

                </li>
                <li className="widgetSmListItem">
                    <img src="https://s3.amazonaws.com/freestock-prod/450/freestock_3657817.jpg" alt="" className="widgetSmListItemImg" />
                    <div className="widgetSmUser">

                        <span className="widgetSmUserName">Juan Perez</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">

                        <Visibility/>
                        Display

                    </button>

                </li>
            </ul>
            
        </div>
    )
}
