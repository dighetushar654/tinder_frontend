import React, {useState} from 'react'
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name:"Tushar Dighe",
            url:"https://i.imgur.com/qGaSzXh.jpeg"
        },
        {
            name:"Elon Musk",
            url:"https://pyxis.nymag.com/v1/imgs/15a/a77/b92f3a2d6de4ac79f869b4ab5300da4c8c-elon-musk.rhorizontal.w700.jpg"
        }
    ]);
    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        // setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!') 
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard 
                    className='swipe'
                    key={person.name} 
                    onSwipe={(dir) => swiped(dir, person.name)} 
                    onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div style={{ backgroundImage: 'url(' + person.url + ')' }}
                        className='card'>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
            
            
            
        </div>
    )
}

export default TinderCards
