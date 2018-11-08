import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { Card, Image } from 'semantic-ui-react';

// class StationCard extends Component {
//     render() {
//         const { station } = props;
//         const tags = station.tags.join(', ').trim();
//         return (
//             <Link key={station.id} to={`/stations/${station.id}`}>
//                 <Card key={station.id} id="my_station">
//                     <Image src={station.logoUrl} />
//                     <Card.Content>
//                         <Card.Header>
//                             {station.name}
//                         </Card.Header>
//                     </Card.Content>
//                     <Card.Meta>
//                         <Card.Content extra>
//                             {tags && tags}
//                         </Card.Content>
//                     </Card.Meta>
//                     <Card.Content>
//                         {station.description}
//                     </Card.Content>
//                 </Card>
//             </Link>
//         );
//     }
// }

// const mapState = state => ({
//     station: state.station
// });

// export default connect(mapState)(StationCard);

export default function StationCard(props) {
    const {id, tags, name, description, logoUrl} = props.props;
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
                        Tags:{tags && tags}
                    </Card.Content>
                </Card.Meta>
                <Card.Content>
                    Description: {description}
                </Card.Content>
            </Card>
        </Link>
    );
}
