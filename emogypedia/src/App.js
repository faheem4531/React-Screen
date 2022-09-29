import React from 'react';

import Block from './components/card/Block';
import Emojipedia from './components/Emojipedia';


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {Emojipedia.map(object =>
          <Block
            key={object.id}
            icon={object.emoji}
            naam={object.name}
            mutlab={object.meaning}
          />
        )}
        </dl>

    </div>
  );
}

export default App;
