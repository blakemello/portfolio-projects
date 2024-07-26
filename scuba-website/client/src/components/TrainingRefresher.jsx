import React from "react";
import OtherCourses from "./OtherCourses";

export default function TrainingRefresher(){
    return(
        <div className='training-page'>
            <h2>REFRESHER COURSE</h2>
            <OtherCourses />
            <p>Are you a certified diver, but it’s been a while since you’ve been in the water?</p>
            <p>Are you a certified diver just looking for a skills tune-up?</p>
            <p>A Refresher Course is just what you’re looking for!</p>
            <img src='../src/assets/rec-Military-Trusted-Business-Badge.png' />
            <OtherCourses />
        </div>
    )
}