import MemberCard from "./MemberCard"


export default function MembersSection(data: any) {
    return (
        <div className="flex justify-center flex-wrap" >
            {
                data.map((user: any) => (
                    <MemberCard user={user} key={user.id} />
                ))
            }
        </div>
    )
}