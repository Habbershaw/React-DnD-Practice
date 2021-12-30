import React, { useEffect, useState } from "react";
import "./drag-n-drop.scss";

//allows library to see into component in order to provide the logic
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

import pokemonParty from "./dragDropOptions";


interface IPokemonParty {
  pokemon: any;
}

function DragNDrop() {
  //create state of the items of the list - with original state being the const created
  const [pokemonState, setPokemonState] = useState<IPokemonParty>({
    pokemon: pokemonParty,
  });

  useEffect(() => {
    console.log(pokemonState.pokemon);
  }, [pokemonState.pokemon]);

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
      <div className="drag-and-drop-page-background">
        <h1>Pokemon DND Party</h1>
        <div>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            {/* Droppable with a function in order to pass props into the list */}
            <Droppable droppableId="pokemon">
              {provided => (
              <ul className="pokemon" ref={provided.innerRef} {...provided.droppableProps} >
                {pokemonState.pokemon.map((id: number, the_name: string, thumb: string, url_search: string, index: number) => {
                  return (
                    <span key={index} className="fancy-index-flex">
                      <span className="fancy-index">{index + 1}</span>
                      {/* // Draggable with a function to pass props into the item */}
                      <Draggable key={id} draggableId={id.toString()} index={index}>
                        {provided => (
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
      </div>
  );
}

export default DragNDrop;
