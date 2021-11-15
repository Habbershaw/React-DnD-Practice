
import { useEffect, useState } from "react";
import './App.css';

//allows library to see into component in order to provide the logic
import {DragDropContext} from "react-beautiful-dnd";
//sets up area that the items can move around within
import { Droppable } from "react-beautiful-dnd";
//wrap each item to set it up to be used within the draggable area
import { Draggable } from "react-beautiful-dnd";



const pokemonParty = [
  {
    id: '003',
    the_name: 'Venusaur',
    thumb: '/images/venasaur.png',
    url_search: 'venusaur',
  },
  {
    id: '006',
    the_name: 'Blastoise',
    thumb: '/images/blastoise.png',
    url_search: 'blastoise',
  },
  {
    id: '009',
    the_name: 'Charizard',
    thumb: '/images/charizard.png',
    url_search: 'charizard',
  },
  {
    id: '018',
    the_name: 'Pidgeot',
    thumb: '/images/pidgeot.png',
    url_search: 'pidgeot',
  },
  {
    id: '103',
    the_name: 'Exeggutor',
    thumb: '/images/exeggutor.png',
    url_search: 'exeggutor',
  },
  {
    id: '131',
    the_name: 'Lapras',
    thumb: '/images/lapras.png',
    url_search: 'lapras',
  },
];

interface IPokemonParty {
  pokemon: any;
}

function App() {
  //create state of the items of the list - with original state being the const created
  const [pokemonState, setPokemonState] = useState<IPokemonParty>({
    pokemon: pokemonParty,
  });

  useEffect(() => {
    console.log(pokemonState.pokemon);
  }, [pokemonState.pokemon])

  function handleOnDragEnd(result: any) {
    if(!result.destination) {
      return;
    }
    console.log(result);

    //new array based on created array
    const items = Array.from(pokemonState.pokemon);
    //find original index and remove that item from array
    const [newItemOrder] = items.splice(result.source.index, 1); 
    //put item back into array at new destination value
    items.splice(result.destination.index, 0, newItemOrder);


    setPokemonState(prev => ({
      ...prev,
      pokemon: items,
    }));
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon DND Party</h1>
        <div className="party-container">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            {/* Droppable with a function in order to pass props into the list */}
            <Droppable droppableId="pokemon">
              {(provided) => (
              <ul className="pokemon" ref={provided.innerRef} {...provided.droppableProps} >
                {pokemonState.pokemon.map(({id, the_name, thumb, url_search}: any, index: number) => {
                  return (
                    <span className="fancy-index-flex">
                      <span className="fancy-index">{index + 1}</span>
                      {/* // Draggable with a function to pass props into the item */}
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                        <li ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                          <span className="dynamic-flex">
                            <span className="character-thumb">
                              <img src={thumb} alt={`${the_name} Thumb`} />
                            </span>
                            <p>
                              { the_name }
                            </p>
                          </span>
                          <p>
                            Image from <a href={`https://serebii.net/pokemon/${url_search}`} className="link-anchor">Serebii.Net</a>
                          </p>
                        </li>
                        )}
                      </Draggable>
                    </span>
                  );
                })}
                {/* lets things under the dnd stay in place while moving an item */}
                {provided.placeholder}
              </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </header>
      
    </div>
  );
}

export default App;
