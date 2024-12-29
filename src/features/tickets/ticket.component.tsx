import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface TicketCardProps {
    title: string;
    text: string;
    image?: string;
    locationUrl?: string;
    useTicketUrl?: string;
    alreadyUsed?: boolean;
}

export default function TicketCard({ text, title, image, locationUrl, useTicketUrl, alreadyUsed }: TicketCardProps) {
    const navigate = useNavigate();
    locationUrl ||= '/';
    useTicketUrl ||= '/';

    return <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={image}
            title={title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {text}
            </Typography>
        </CardContent>
        <CardActions>
            {alreadyUsed
                ? <Button size="small" disabled>Cupom já utlilizado!</Button>
                : <>
                    <Button size="small" onClick={() => navigate(useTicketUrl!)}>Usar cupom</Button>
                    <Button size="small" onClick={() => window.open(locationUrl, "_blank")}>Localização</Button>
                </>}

        </CardActions>
    </Card>
}