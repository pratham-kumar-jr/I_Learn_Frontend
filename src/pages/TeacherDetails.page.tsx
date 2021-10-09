/** @format */

import { FC, memo } from "react";
import Profile from "../components/Profile";

interface Props {}

const TeacherDetails: FC<Props> = (props) => {
     return (
          <>
               <Profile
                    first_name="Tushar"
                    last_name="Agarwal"
                    phone_number="9876796897"
                    email="tudiman@gmail.com"
                    profile_pic_url="https://pbs.twimg.com/profile_images/1366466342354751491/JyhZpbtu_400x400.jpg"
                    about="I am karkaintaaa"
                    no_of_students_enrolled={[1, 2, 3, 4, 5]}
                    current_industry="Devslane"
               />
          </>
     );
};

TeacherDetails.defaultProps = {};

export default memo(TeacherDetails);
