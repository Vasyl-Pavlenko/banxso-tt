import { Team } from '../../types';

import './TeamMember.scss';

interface Props {
  staff: Team;
}

export default function TeamMemberCard({ staff }: Props) {
  return (
    <div className="team-member">
      <img
        className="team-member__photo"
        src={staff.photo}
        alt={`${staff}'s photo`}
      />

      <div className="team-member__text">
        <div className="team-member__position">
          {staff.position}
        </div>

        <div className="team-member__name">
          {staff.name}
        </div>
      </div>
    </div>
  );
}
