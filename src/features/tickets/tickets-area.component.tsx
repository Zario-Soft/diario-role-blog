import { useState } from "react";
import TicketCard from "./ticket.component";
import { UserInfo } from "./tickets.page";

interface TicketsAreaProps {
    userInfo: UserInfo;

}

export default function TicketsArea(props: TicketsAreaProps) {
    const [userInfo, _] = useState<UserInfo>(props.userInfo);
    return <>
        <h3>{`Seus cupons`}</h3>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
        }}>
            {(userInfo.tickets ?? []).map((ticket, index) => <TicketCard
                key={index}
                title={ticket.title}
                text={ticket.description}
                alreadyUsed={ticket.alreadyUsed}
            />
            )}
        </div>
    </>
}