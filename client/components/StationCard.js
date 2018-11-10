import React from 'react';
import {Link} from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

export default function StationCard({station}) {
    const {id, name, description, logoUrl, broadcasts} = station;
    const tags = station.tags.join(', ').trim();
    return (
        <Link key={id} to={`/stations/${id}`}>
            <Card key={id} id="my_station">
                <Image src={logoUrl} />
                <Card.Content>
                    <Card.Header>
                        {name}
                    </Card.Header>
                </Card.Content>
                <Card.Meta>
                    <Card.Content extra>
                    {broadcasts && broadcasts.map(broadcast => {
                         return broadcast.isLive &&
                        <Image key={broadcast.id} floated="right" size="tiny" src="/images/isLive.gif" />;
                    })}
                        Tags: {tags ? tags : "This station has no tags."}
                    </Card.Content>
                </Card.Meta>
                <Card.Content>
                    Description: {description}
                </Card.Content>
            </Card>
        </Link>
    );
}
