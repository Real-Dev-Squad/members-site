// import React from 'react'
import MemberCard from "./MemberCard"
import mock from "./Newmembers-mockdata"


export default function MembersSection() {
    return (
        <div className="flex justify-center flex-wrap" >
            {
                mock.map( (user) => (
                    <MemberCard user={user} key={user.id} />
                ))
            }
        </div>
    )
}
