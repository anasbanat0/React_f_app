import {
  ProfileSkills,
  ProfileTitle,
  ProfileSection,
  ProfileList,
  ProfileItem,
  SpanListItem,
  SpanWeb,
  SkillsSection,
  SkillsTitle,
  SkillsDesc,
  Bar,
  BarTitle,
  BarPerc,
  BarParent,
  ParentSpan,
} from "./style.js";
import { useEffect, useState } from "react";
import axios from "axios";
const Profile = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setSkills(res.data.skills);
    });
  }, []);

  const Skills = skills.map((skillItem) => {
    return (
      <Bar key={skillItem.id}>
        <BarTitle>{skillItem.title}</BarTitle>
        <BarPerc>{skillItem.percent}</BarPerc>
        <BarParent>
          <ParentSpan></ParentSpan>
        </BarParent>
      </Bar>
    );
  });
  return (
    <ProfileSkills>
      <div className="container">
        <ProfileSection>
          <ProfileTitle>
            <SpanWeb>My </SpanWeb>Profile
          </ProfileTitle>
          <ProfileList>
            <ProfileItem>
              <SpanListItem>Name</SpanListItem>
              Anas Banat
            </ProfileItem>
            <ProfileItem>
              <SpanListItem>Birthday</SpanListItem>
              31/5/1998
            </ProfileItem>
            <ProfileItem>
              <SpanListItem>Address</SpanListItem>
              Gaza
            </ProfileItem>
            <ProfileItem>
              <SpanListItem>Phone</SpanListItem>
              00972 59510 9753
            </ProfileItem>
            <ProfileItem>
              <SpanListItem>Email</SpanListItem>
              anasba315@gmail.com
            </ProfileItem>
            <ProfileItem>
              <SpanListItem>Website</SpanListItem>
              <SpanWeb>www.linkedin.com/in/anasali0</SpanWeb>
            </ProfileItem>
          </ProfileList>
        </ProfileSection>
        <SkillsSection>
          <SkillsTitle>
            Some <SpanWeb>skills</SpanWeb>
          </SkillsTitle>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
          {Skills}
        </SkillsSection>
      </div>
    </ProfileSkills>
  );
};
export default Profile;
